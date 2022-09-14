import numpy as np
import pickle
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def home():
  return 'HOME'

@app.route('/predict',methods=['POST'])
def predict():
  resp = request.get_json()
  passengerid=resp['passengerid']
  pclass=resp['pclass']
  name=resp['name']
  sex=resp['sex']
  age=resp['age']
  sibsp=resp['sibsp']
  parch=resp['parch']
  ticket=resp['ticket']
  fare=resp['fare']
  cabin=resp['cabin']
  embarked=resp['embarked']
  features=[pclass, sex, age, sibsp, parch, fare, embarked]
  final_features = np.array(features).reshape(1,-1)
  prediction=model.predict(final_features)
  print(prediction)
  return str(prediction)

if __name__ == "__main__":
  app.run('10.48.229.5')