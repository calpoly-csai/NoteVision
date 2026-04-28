from fastapi import FastAPI, Response, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel #BaseModel used to set JSON Schema
import os 
from pathlib import Path
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image 
from io import BytesIO



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

async def AI_call(image: Image):
    load_dotenv()
    api_key = os.getenv("GEMINI_API_KEY")

    client = genai.Client(api_key=api_key)

    response = client.models.generate_content(
         model = 'gemini-2.5-flash',
         contents=['Analyze this students notes in depth. '
         'If something is not clear/illegible, use context of other parts of the notes to make an educated guess ', image],
         config=types.GenerateContentConfig(
              response_mime_type='application/json',
              response_schema=AnalyzeSchema
              )
         )
    return AnalyzeSchema.model_validate_json(response.candidates[0].content.parts[0].text)


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
    #this reads the bytes of the upload file 
    contents = await upload_file.read()

    #this will convert those bytes into an image which we can now pass to our ai call
    image = Image.open(BytesIO(contents))
    
    result = await AI_call(image) 
    
    return result

@app.get("/health")
async def health_check(response: Response):
    return {"status": f"Ok"}
