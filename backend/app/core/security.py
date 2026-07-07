from fastapi import Depends, Header, HTTPException
from typing import Optional
import json

# Mock Clerk Validation for Scaffolding Phase
# In a real environment, this would use PyJWT or the python-jose lib to decode the Clerk token via JWKS.

async def get_current_user_id(authorization: Optional[str] = Header(None)) -> str:
    """
    Dependency to extract Clerk User ID from the Authorization header.
    Currently mocked to return a static ID if the token is present to skip live auth setup.
    """
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid authentication token")
    
    token = authorization.split(" ")[1]
    
    # Simulate failed token
    if token == "invalid":
        raise HTTPException(status_code=401, detail="Invalid token")
        
    # Return a deterministic mock user ID to map to database entries
    return "mock_user_12345"
