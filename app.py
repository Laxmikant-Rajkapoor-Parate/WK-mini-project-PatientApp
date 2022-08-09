import sqlite3, json
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def set_connection():
    try:
        con = sqlite3.connect(r'database\patient_db.db')
        return con
    except Exception as e:
        print(e)

def get_data(con):
    patient_data = con.execute('Select * from PatientData')
    return patient_data

def update_patient_data(con, pid, age):
    con.execute(f'Update PatientData set pAge={age} where pID={pid}')
    con.commit()

def delete_patient(con, pid):
    status = 'Inactive'
    con.execute(f"Update PatientData set pStatus='{status}' where pID={pid}")
    con.commit()
    
@app.route('/')
def giveData():
    con = set_connection()
    cursor = get_data(con)
    patient_data = []
    for point in cursor:
        patient_data.append(point)
    patient_data = json.dumps(patient_data)
    return patient_data

if __name__ == '__main__':
   app.run()
