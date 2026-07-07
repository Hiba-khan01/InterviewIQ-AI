from fastapi import APIRouter, Depends
from app.schemas.common import APIResponse, PaginatedResponse
from app.schemas.interview import InterviewCreate, InterviewCreated, InterviewSchema, QuestionList, SessionCreateResponse, SessionSchema
from app.core.security import get_current_user_id
from app.services.mock_ai_service import MockAIService

router = APIRouter()

@router.post("", response_model=APIResponse[InterviewCreated])
async def create_interview(data: InterviewCreate, user_id: str = Depends(get_current_user_id)):
    return APIResponse(
        message="Interview session prepared", 
        data=InterviewCreated(interviewId="int_12345")
    )

@router.get("/{id}", response_model=APIResponse[InterviewSchema])
async def get_interview(id: str, user_id: str = Depends(get_current_user_id)):
    return APIResponse(
        data=InterviewSchema(
            id=id, jobRole="Backend Developer", company="MockCorp", difficulty="Hard",
            interviewType="Technical", duration=30, status="Created"
        )
    )

@router.post("/{id}/questions/generate", response_model=APIResponse[QuestionList])
async def generate_questions(id: str, user_id: str = Depends(get_current_user_id)):
    mocked_qs = await MockAIService.generate_questions("Backend Developer", "Hard", "Technical")
    return APIResponse(data=QuestionList(questions=mocked_qs))
    
# Mock Live Session Sub-routes as requested by spec
@router.post("/{id}/sessions", response_model=APIResponse[SessionCreateResponse])
async def create_session(id: str, user_id: str = Depends(get_current_user_id)):
    return APIResponse(
        message="Session instantiated",
        data=SessionCreateResponse(roomId="livekit_room_abcdef", token="livekit_mock_token_jwt")
    )
