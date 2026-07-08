from fastapi import FastAPI

from routes.prediction import router

app = FastAPI(
    title="Student Performance Prediction API",
    version="1.0.0"
)

app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "Student Performance Prediction API is Running!"
    }