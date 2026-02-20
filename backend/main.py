from fastapi import FastAPI, Response
from pydantic import BaseModel #BaseModel used to set JSON Schema

class Details(BaseModel):
    equations: list[str]
    diagrams: str
    tables: str

class AnalyzeSchema(BaseModel):
    title: str
    summary: str
    key_points: list[str]
    details: Details

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

@app.put("/analyze/")
def analyze():
    return AnalyzeSchema(
        title= "Mock title",
        summary= "Mock summary",
        key_points= ["Mock key point1", "Mock key point2"],
        details= Details()
    )

@app.get("/health")
def health_check(response: Response):
    return {"status": f"Ok"}
