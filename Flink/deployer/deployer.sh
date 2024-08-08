#!/bin/sh









python deployer.py --flink_url=http://jobmanager:8081 --jars=/flink-job.jar --class=org.nan1fy.synccity.ParkingEfficiencyJob,org.nan1fy.synccity.HeatIndexJob

