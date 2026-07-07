from pydantic import BaseModel
from typing import List

class DashboardAnalytics(BaseModel):
    averageScore: int
    resumeScore: int
    totalInterviews: int
