FROM python:3.11.9-alpine
WORKDIR /deployer
COPY . .
RUN pip install -r requirements.txt
RUN chmod +x deployer.sh
CMD ["./deployer.sh"]

