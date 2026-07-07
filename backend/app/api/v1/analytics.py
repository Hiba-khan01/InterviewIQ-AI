from fastapi import APIRouter, Depends
from app.schemas.common import APIResponse
from app.schemas.analytics import DashboardAnalytics
from app.core.security import get_current_user_id

router = APIRouter()

@router.get("/dashboard", response_model=APIResponse[DashboardAnalytics])
async def get_dashboard(user_id: str = Depends(get_current_user_id)):
    return APIResponse(
        data=DashboardAnalytics(averageScore=88, resumeScore=91, totalInterviews=18)
    )
