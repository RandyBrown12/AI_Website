# Notes

## How it works

You will need both projects to simulate a front-end service & a back-end service.

[AI_Server](https://github.com/RandyBrown12/AI_Website)\
[AI_Client](https://github.com/RandyBrown12/AI_Server_Python)

## Running AI_Server

Before running AI_Server, create a .env file in the project with the following key-value pairs.
* model_id = ""
* local_model_path = ""
* system_content = ""

Run the command for development: 
``` uvicorn app:app --reload ```

## Running AI_Client

Run the command for development:
```npm run dev ```

## Important Notes
* Data is stored in clientside in localstorage.
