import pandas as pd

from fastapi import APIRouter

from schemas.student_schema import StudentInput

from services.predictor import predict_student

router = APIRouter()

@router.post("/predict")
def predict(student: StudentInput):

    data = pd.DataFrame([student.model_dump()])

    prediction = predict_student(data)

    return {
        "Predicted Grade": prediction
    }