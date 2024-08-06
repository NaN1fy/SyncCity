FROM python:3.11.9-alpine
WORKDIR /deployer
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "deployer.py", "--flink_url=http://jobmanager:8081", "--jars=/flink-job.jar","--class=org.nan1fy.synccity.HeatIndexJob,org.nan1fy.synccity.ParkingEfficiencyJob"]

