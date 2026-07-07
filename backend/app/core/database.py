from motor.motor_asyncio import AsyncIOMotorClient
import pymongo
from app.core.config import settings

class Database:
    client: AsyncIOMotorClient = None
    
    @classmethod
    def get_db(cls):
        if cls.client is None:
            # Connect to MongoDB
            cls.client = AsyncIOMotorClient(settings.MONGODB_URI)
        return cls.client[settings.DATABASE_NAME]

    @classmethod
    def close(cls):
        if cls.client:
            cls.client.close()

    @classmethod
    async def init_indexes(cls):
        """Creates standard indexes mapped to DATABASE_SCHEMA.md"""
        db = cls.get_db()
        
        # User Indexes
        await db.users.create_index([("email", pymongo.ASCENDING)], unique=True)
        await db.users.create_index([("clerkId", pymongo.ASCENDING)], unique=True)
        
        # Resume Indexes
        await db.resumes.create_index([("userId", pymongo.ASCENDING)])
        
        # Interview Indexes
        await db.interviews.create_index([("userId", pymongo.ASCENDING)])
        await db.interviews.create_index([("createdAt", pymongo.DESCENDING)])
        
        # Questions Indexes
        await db.interview_questions.create_index([("interviewId", pymongo.ASCENDING)])
        
        # Session Indexes
        await db.interview_sessions.create_index([("interviewId", pymongo.ASCENDING)])
        
        # Feedback & Analytics Indexes
        await db.feedback_reports.create_index([("sessionId", pymongo.ASCENDING)])
        await db.analytics.create_index([("userId", pymongo.ASCENDING)])
        
        # Notification Indexes
        await db.notifications.create_index([("userId", pymongo.ASCENDING), ("read", pymongo.ASCENDING)])

db = Database()
