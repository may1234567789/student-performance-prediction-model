from pydantic import BaseModel

class StudentInput(BaseModel):
    Attendance: int
    Study_Hours: float
    Assignments_Completed: int
    Previous_Exam_Marks: int
    Sleep_Hours: float
    Internet_Hours: float
    Extra_Curricular: str
    Parental_Education: str
    Family_Income: str
    Daily_Screen_Time: float
    Mock_Test_Score: int
    Class_Participation: str
    Library_Visits_Per_Week: int
    Semester: int