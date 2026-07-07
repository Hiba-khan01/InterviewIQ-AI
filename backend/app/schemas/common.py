from pydantic import BaseModel
from typing import Any, Optional, Generic, TypeVar

T = TypeVar("T")

class APIResponse(BaseModel, Generic[T]):
    success: bool = True
    message: str = ""
    data: Optional[T] = None

class APIErrorResponse(BaseModel):
    success: bool = False
    message: str
    errors: list = []

class PaginatedResponse(BaseModel, Generic[T]):
    page: int
    limit: int
    total: int
    pages: int
    items: list[T]
