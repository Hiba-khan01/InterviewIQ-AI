from fastapi import APIRouter, Depends
from app.schemas.common import APIResponse
from app.schemas.user import UserSchema, UserProfileUpdate
from app.core.security import get_current_user_id

router = APIRouter()

@router.get("/me", response_model=APIResponse[UserSchema])
async def get_current_user(user_id: str = Depends(get_current_user_id)):
    # Mock Database Fetch
    mock_user = UserSchema(
        id=user_id,
        clerkId="clerk_mock_id",
        name="Mock User",
        email="mock@example.com",
        skills=["Python", "FastAPI"],
        experience="Intermediate"
    )
    return APIResponse(data=mock_user)

@router.put("/profile", response_model=APIResponse[UserSchema])
async def update_profile(updates: UserProfileUpdate, user_id: str = Depends(get_current_user_id)):
    # Mock update operation
    updated_user = UserSchema(
        id=user_id,
        clerkId="clerk_mock_id",
        name=updates.name or "Mock User",
        email="mock@example.com",
        bio=updates.bio,
        github=updates.github,
        linkedin=updates.linkedin,
        portfolio=updates.portfolio
    )
    return APIResponse(message="Profile updated successfully", data=updated_user)

@router.delete("/account", response_model=APIResponse)
async def delete_account(user_id: str = Depends(get_current_user_id)):
    return APIResponse(message="Account successfully wiped")
