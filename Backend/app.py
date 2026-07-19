from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.prediction import router

app = FastAPI(
    title="Student Performance Prediction API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def home():
    return {
        "message": "Student Performance Prediction API is Running!"
    }