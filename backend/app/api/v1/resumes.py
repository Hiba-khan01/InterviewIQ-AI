from fastapi import APIRouter, Depends, UploadFile, File
from app.schemas.common import APIResponse
from app.schemas.resume import ResumeUploadResponse, ResumeAnalysis, ResumeSchema
from app.core.security import get_current_user_id
from app.services.resume_service import ResumeService
from typing import List

router = APIRouter()

@router.post("/upload", response_model=APIResponse[ResumeUploadResponse])
async def upload_resume(
    file: UploadFile = File(...), 
    user_id: str = Depends(get_current_user_id)
):
    result = await ResumeService.upload_resume(file, user_id)
    return APIResponse(
        message="Resume uploaded successfully",
        data=ResumeUploadResponse(resumeId=result["resumeId"], resumeScore=result["resumeScore"])
    )

@router.get("", response_model=APIResponse[List[ResumeSchema]])
async def get_resumes(user_id: str = Depends(get_current_user_id)):
    history = await ResumeService.get_history(user_id)
    # Convert DB Models to Pydantic Schemas mapping the exact frontend requirement
    schema_list = [
        ResumeSchema(
            id=str(r.id),
            fileName=r.fileName,
            fileUrl=r.fileUrl,
            fileType=r.fileType,
            isActive=r.isActive
        ) for r in history
    ]
    return APIResponse(data=schema_list)

@router.delete("/{resumeId}", response_model=APIResponse)
async def delete_resume(resumeId: str, user_id: str = Depends(get_current_user_id)):
    await ResumeService.delete_resume(resumeId, user_id)
    return APIResponse(message="Resume deleted successfully")

@router.get("/{resumeId}/analysis", response_model=APIResponse[ResumeAnalysis])
async def get_resume_analysis(resumeId: str, user_id: str = Depends(get_current_user_id)):
    analysis = await ResumeService.get_analysis(resumeId, user_id)
    return APIResponse(data=analysis)
