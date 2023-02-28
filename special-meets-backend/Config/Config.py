from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_mail import Mail

if __name__ == "Config":
    from Constants import constants
else:
    from Config.Constants import constants

app = Flask(__name__,  template_folder='../templates')
uri = "mysql+pymysql://"+constants["mysql"]["user"]+":"+constants["mysql"]["password"]+"@"+constants["mysql"]["host"]+"/"+constants["mysql"]["db_name"]+"?&autocommit=false"
app.config["SQLALCHEMY_DATABASE_URI"] = uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["JWT_SECRET_KEY"] = "video-calls-api-secret-key-123-!@#-45-$%"

mail_settings = {
    "MAIL_SERVER": 'smtp.office365.com',
    "MAIL_PORT": 587,
    "MAIL_USE_TLS": True,
    "MAIL_USE_SSL": False,
    "MAIL_USERNAME": constants["email"]["login"],
    "MAIL_PASSWORD": constants["email"]["password"]
}
app.config.update(mail_settings)
mail = Mail(app)

db = SQLAlchemy(app)
cors = CORS(app)
jwt = JWTManager(app)