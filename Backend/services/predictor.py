from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / "Model" / "best_model.pkl"
LABEL_ENCODER_PATH = BASE_DIR / "Model" / "label_encoder.pkl"

model = joblib.load(MODEL_PATH)
label_encoder = joblib.load(LABEL_ENCODER_PATH)


def predict_student(df):
    prediction = model.predict(df)
    predicted_grade = label_encoder.inverse_transform(prediction)[0]
    return predicted_grade