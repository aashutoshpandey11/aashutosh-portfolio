from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from email.message import EmailMessage
import aiosmtplib
import os

app = FastAPI()

# Allow React frontend to call this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Change this while deploy
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load email credentials from environment variables
EMAIL = os.getenv("EMAIL")
APP_PASSWORD = os.getenv("APP_PASSWORD")

if not EMAIL or not APP_PASSWORD:
    raise RuntimeError("Email credentials are not set in environment variables!")

@app.post("/contact")
async def contact(
    name: str = Form(...),
    email: str = Form(...),
    message: str = Form(...)
):
    msg = EmailMessage()
    msg["From"] = EMAIL
    msg["To"] = EMAIL
    msg["Subject"] = "Portfolio Contact"
    msg.set_content(f"""
Name: {name}
Email: {email}

Message:
{message}
""")

    try:
        await aiosmtplib.send(
            msg,
            hostname="smtp.gmail.com",
            port=587,
            start_tls=True,
            username=EMAIL,
            password=APP_PASSWORD,
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

    return {"success": True}
