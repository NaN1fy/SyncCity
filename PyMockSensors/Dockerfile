# Copyright 2024 NaN1fy
# Dockerfile for building a Python application container

FROM python:3.11-bookworm as dev

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

CMD ["python3", "main.py"]

FROM python:3.11-bookworm as test

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

RUN pip install pytest 

RUN pip install clickhouse-connect
COPY . .

CMD ["pytest"]
