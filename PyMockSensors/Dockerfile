# Copyright 2024 NaN1fy
# Dockerfile for building a Python application container

# Use the Python 3.11.9 Alpine image as the base image
FROM python:3.11.9-alpine

# Set the working directory inside the container to /app
WORKDIR /app

COPY requirements.txt requirements.txt

# Install the Python dependencies listed in requirements.txt using pip
RUN pip install -r requirements.txt

# Copy the local directory (excluding Dockerfile) into the container's /app directory
COPY . .

# Specify the command to run when the container starts:
# Execute the main.py script using the python3 interpreter
CMD ["python3", "main.py"]
