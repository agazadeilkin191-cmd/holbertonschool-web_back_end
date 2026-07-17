#!/usr/bin/env python3
"""Provides stats about Nginx logs stored in MongoDB."""

from pymongo import MongoClient

client = MongoClient("mongodb://127.0.0.1:27017")
collection = client.logs.nginx

# Total number of logs
total_logs = collection.count_documents({})
print(f"{total_logs} logs")

print("Methods:")

# Count each HTTP method
methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

for method in methods:
    count = collection.count_documents({"method": method})
    print(f"\tmethod {method}: {count}")

# Count GET requests to /status
status_checks = collection.count_documents({
    "method": "GET",
    "path": "/status"
})

print(f"{status_checks} status check")
