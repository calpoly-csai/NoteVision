from fastapi import FastAPI, Response, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
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

app.add_middleware(
    CORSMiddleware,
    allow_origins=["localhost", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def AI_call(file: File):
    pass #TODO

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

@app.put("/analyze/")
async def analyze(upload_file: UploadFile | None = None):
    if not upload_file:
            return{"Error": "No upload file sent"}
    
    result = await AI_call(upload_file.file) #TODO: setup AI call

    #mocked response for now
    return AnalyzeSchema(
        title= upload_file.filename,
        summary= "Mock summary",
        key_points= ["Mock key point1", "Mock key point2"],
        details= Details(
            equations= ["y=mx+b"],
            diagrams= "Mock diagram",
            tables= "Mock table"
        )
    )

@app.get("/health")
async def health_check(response: Response):
    return {"status": f"Ok"}
