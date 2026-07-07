import joblib
from config import MODEL_PATH

model = joblib.load(MODEL_PATH)

def predict_student(student_data):
    prediction = model.predict(student_data)[0]

    grade = model.named_steps[
        "classifier"
    ].classes_[prediction]

    return grade