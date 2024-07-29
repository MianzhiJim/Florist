from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, Field

import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

def get_db() :
    try:
        db = SessionLocal()
        yield db 
    finally:
        db.close ()
 

class Product(BaseModel):
    name: str = Field(min_length=1)
    price: int = Field(gt=-1, lt=10001)
    description: str = Field(min_length=1, max_length=100)


PRODUCTS = []

@app.get("/")
def read_api(db: Session= Depends(get_db)):
    return db.query(models.Products).all()