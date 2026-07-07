import uuid
import cloudinary.uploader
from fastapi import UploadFile, HTTPException
from app.core.config import settings
from app.repositories.db_repositories import ResumeRepository
from app.models.db_models import ResumeModel
from app.services.mock_ai_service import MockAIService
from bson import ObjectId

# Initialize Cloudinary config natively if URL exists
if settings.CLOUDINARY_URL:
    import cloudinary
    # Cloudinary automatically configures itself via the CLOUDINARY_URL env var if imported
    cloudinary.config()

class ResumeService:
    @staticmethod
    async def upload_resume(file: UploadFile, user_id: str) -> dict:
        repo = ResumeRepository()
        
        # 1. Archive previously active resumes
        active_resume = await repo.get_active_for_user(user_id)
        if active_resume:
            await repo.update(str(active_resume.id), {"isActive": False})
            
        # 2. Upload to Cloudinary (wrapped gracefully for testing environment)
        file_url = f"https://mock-cloudinary-url.com/{uuid.uuid4()}.pdf"
        cloudinary_id = f"mock_resume_{uuid.uuid4()}"
        
        if settings.CLOUDINARY_URL:
            try:
                # Synchronous Cloudinary upload wrapped, since it's a blocking IO 
                # (In a real production environment, you would use a threadpool or async worker)
                contents = await file.read()
                result = cloudinary.uploader.upload(
                    contents, 
                    resource_type="raw", 
                    folder=f"interviewiq/resumes/{user_id}"
                )
                file_url = result.get("secure_url")
                cloudinary_id = result.get("public_id")
            except Exception as e:
                # Fallback to mock for local dev if cloudinary URL is bad
                print(f"Cloudinary Upload Failed, falling back to mock: {e}")

        # 3. Save to MongoDB
        new_resume = ResumeModel(
            userId=ObjectId(user_id),
            fileName=file.filename,
            fileUrl=file_url,
            fileType=file.filename.split('.')[-1] if '.' in file.filename else "pdf",
            cloudinaryId=cloudinary_id,
            isActive=True
        )
        saved_resume = await repo.create(new_resume)

        # 4. Trigger Mock AI Analysis
        analysis_result = await MockAIService.analyze_resume(file_url)

        return {
            "resumeId": str(saved_resume.id),
            "resumeScore": analysis_result.resumeScore
        }

    @staticmethod
    async def get_history(user_id: str) -> list[ResumeModel]:
        repo = ResumeRepository()
        return await repo.find({"userId": ObjectId(user_id)}, limit=50)

    @staticmethod
    async def get_analysis(resume_id: str, user_id: str):
        # We would fetch from resume_analysis repository, but for now we'll mock it
        # dynamically to ensure frontend wiring works robustly.
        return await MockAIService.analyze_resume("mock")

    @staticmethod
    async def delete_resume(resume_id: str, user_id: str) -> bool:
        repo = ResumeRepository()
        resume = await repo.get_by_id(resume_id)
        if not resume or str(resume.userId) != str(user_id):
            raise HTTPException(status_code=403, detail="Unauthorized")
        
        # Delete from Cloudinary if real
        if settings.CLOUDINARY_URL and resume.cloudinaryId and not resume.cloudinaryId.startswith("mock_"):
            try:
                cloudinary.uploader.destroy(resume.cloudinaryId, resource_type="raw")
            except Exception:
                pass
                
        # Delete from DB
        return await repo.delete(resume_id)
