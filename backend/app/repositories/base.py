from typing import TypeVar, Generic, Optional, List, Dict, Any
from bson import ObjectId
from app.core.database import db

T = TypeVar("T")

class BaseRepository(Generic[T]):
    collection_name: str
    model_class: type[T]

    @property
    def collection(self):
        return db.get_db()[self.collection_name]

    async def get_by_id(self, id: str) -> Optional[T]:
        if not ObjectId.is_valid(id):
            return None
        doc = await self.collection.find_one({"_id": ObjectId(id)})
        if doc:
            return self.model_class(**doc)
        return None

    async def create(self, data: T) -> T:
        doc = data.model_dump(by_alias=True, exclude={"id"})
        result = await self.collection.insert_one(doc)
        doc["_id"] = result.inserted_id
        return self.model_class(**doc)

    async def update(self, id: str, updates: Dict[str, Any]) -> Optional[T]:
        if not ObjectId.is_valid(id):
            return None
        new_doc = await self.collection.find_one_and_update(
            {"_id": ObjectId(id)},
            {"$set": updates},
            return_document=True
        )
        if new_doc:
            return self.model_class(**new_doc)
        return None

    async def delete(self, id: str) -> bool:
        if not ObjectId.is_valid(id):
            return False
        result = await self.collection.delete_one({"_id": ObjectId(id)})
        return result.deleted_count > 0

    async def find(self, query: Dict[str, Any] = None, limit: int = 0, skip: int = 0) -> List[T]:
        query = query or {}
        cursor = self.collection.find(query).skip(skip)
        if limit:
            cursor = cursor.limit(limit)
        docs = await cursor.to_list(length=limit if limit else None)
        return [self.model_class(**doc) for doc in docs]
