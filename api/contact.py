from flask import Flask , jsonify , request 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres+psycopg2://postgres:7898994162k@localhost:5432/JulyWS'
db = SQLAlchemy(app)


class Conatct(db.Model):
    __tablename__ = "Contact"
    id = db.Column(db.Integer, primary_key = True)
    Firstname = db.Column(db.String)
    Email = db.Column(db.String)
    Phone = db.Column(db.Integer)

    def __init__(self, Firstname , Email , Phone):
        self.Firstname = Firstname 
        self.Email = Email 
        self.Phone = Phone 


       
@app.route('/Contact', methods = ['POST'])
def send_data():
    data =  request.get_json()
    Firstname = data['Firstname']
    Email    = data['Email']
    Phone = data['Phone']
    cs = Conatct(Firstname,Email,Phone)
    db.session.add(cs)
    db.session.commit()
    return jsonify(message = " contact is created") ,201



@app.route('/contact')  
def get_Contact():  
      ConatctList = Conatct.query.all()
      Con_lists_list =[] 
      for con in ConatctList:
        c={}
        c["Firstname"] = con.Firstname
        c["Email"] = con.Email  
        c['Phone'] = con.Phone  
        Con_lists_list.append(c)
      return jsonify(ContactList=Con_lists_list) 

@app.route('/')
def hello_world2():
   return 'Hello Alein'

@app.route('/test')
def hello_world():
   return 'Hello World'
if __name__ == '__main__':
   db.create_all()
   app.run( debug= True)