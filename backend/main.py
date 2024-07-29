# import and create an app
from fastapi import FastAPI

app = FastAPI()


# items = []

# define path in fastapi
@app.get("/")
def root():
    return {"Hello":"World"}

# @app.post("/items")
# def create_item(item:str):
#     items.append(item)
#     return items

