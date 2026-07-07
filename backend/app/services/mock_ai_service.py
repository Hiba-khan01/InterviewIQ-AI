from typing import List
from app.schemas.user import UserSchema
from app.schemas.resume import ResumeAnalysis
from app.schemas.interview import QuestionSchema

class MockAIService:
    @staticmethod
    async def analyze_resume(file_url: str) -> ResumeAnalysis:
        # Mock Gemini Resume Analysis Output
        return ResumeAnalysis(
            resumeScore=92,
            atsScore=88,
            skills=["Python", "FastAPI", "React", "Next.js"],
            missingSkills=["Docker", "Kubernetes"],
            strengths=["Strong backend system architecture", "Modern framework exposure"],
            weaknesses=["Lacking cloud deployment experience"],
            suggestions=["Add more metrics to your experience section", "Build a containerized project"]
        )
        
    @staticmethod
    async def generate_questions(role: str, diff: str, int_type: str) -> List[QuestionSchema]:
        # Mock Gemini Interview Generation Output
        return [
            QuestionSchema(id="mock_q_1", question=f"Explain how you would optimize a slow query for a {role} application.", type=int_type, difficulty=diff),
            QuestionSchema(id="mock_q_2", question="Can you describe a challenging bug you fixed recently?", type="Behavioral", difficulty=diff),
            QuestionSchema(id="mock_q_3", question="How does the event loop work under the hood?", type="Technical", difficulty="Hard")
        ]
