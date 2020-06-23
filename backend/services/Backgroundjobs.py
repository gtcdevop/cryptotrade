import time
import atexit

from flask import Blueprint
from apscheduler.schedulers.background import BackgroundScheduler

Backgroundjobs = Blueprint('Backgroundjobs', __name__)

def print_date_time():
    print("Eita nois" + time.strftime("%A, %d. %B %Y %I:%M:%S %p"))

scheduler = BackgroundScheduler()
scheduler.add_job(func=print_date_time, trigger="interval", seconds=5)
scheduler.start() 

# Shut down the scheduler when exiting the app
atexit.register(lambda: scheduler.shutdown())