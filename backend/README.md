# NoteVision - backend

**steps to get backend server working**

In backend:

*create python environment*
```
python -m venv .venv
```
*activate environment*
```
source .venv/bin/activate
```
*install fastapi*
```
pip install "fastapi[standard]"
```
**command to run server:** 
```
fastapi dev main.py
```

**if file upload doesn't work, make sure multipart is istalled**
```
pip install python-multipart
```

**make sure to read the requirements.txt for extra packages that need downloading**
**for gemini api, use the GEMINI_API_KEY macro in .env file and should work fine**
