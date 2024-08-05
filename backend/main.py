# import and create an app
from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)


# items = []

# define path in fastapi
# @app.get("/")
# def root():
#     return {"Hello":"World"}

@app.get("/")
async def hello():
    return {"msg": "Hello"}

# @app.post("/items")
# def create_item(item:str):
#     items.append(item)
#     return items

