import pandas as pd

from fastapi import APIRouter

from Backend.schemas.student_schema import StudentInput

from Backend.services.predictor import predict_student

router = APIRouter()

@router.post("/predict")
def predict(student: StudentInput):

    df = pd.DataFrame([student.dict()])

    result = predict_student(df)

    return {
        "Predicted Grade": result
    }