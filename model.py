import pickle
import pandas as pd
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

data_train = pd.read_csv('train.csv')
data_test = pd.read_csv('test.csv')

#Limpiamos los datos
def clean(data):
  data = data.drop(["Ticket", "Cabin", "Name", "PassengerId"], axis = 1)

  cols = ["SibSp", "Parch", "Fare", "Age"]
  for col in cols:
    data[col].fillna(data[col].median(), inplace = True)
  
  data.Embarked.fillna("U", inplace = True)
  return data

data_train = clean(data_train)
data_test = clean(data_test)

#Cambiamos valores de columnas categóricas
le = preprocessing.LabelEncoder()

cols = ["Sex", "Embarked"]

for col in cols:
  data_train[col] = le.fit_transform(data_train[col])
  data_test[col] = le.transform(data_test[col])
  print(le.classes_)

#Elegimos las variables a utilizar
X = data_train.drop(['Survived'], axis=1)
y = data_train['Survived']
num_test = 0.20
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=num_test, random_state=42)

#Hacemos el classifier
clf = RandomForestClassifier(random_state=42, n_estimators = 100).fit(X_train, y_train)
rfc_predictions = clf.predict(X_test)

pickle.dump(clf, open('model.pkl', 'wb'))
model = pickle.load(open('model.pkl', 'rb'))