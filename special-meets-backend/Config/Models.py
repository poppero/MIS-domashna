if __name__ == "Config.Models":
    from Config.Config import db
else:
    from Config import db


class UserTypes(db.Model):
    __tablename__ = "UserTypes"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)

class Countries(db.Model):
    __tablename__ = "Countries"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    short_name = db.Column(db.String(8), nullable=False)
    phone_code = db.Column(db.String(8), nullable=False)


class User(db.Model):
    __tablename__ = "User"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(64), nullable=False, unique=True)
    first_name = db.Column(db.String(64), nullable=False)
    last_name = db.Column(db.String(64), nullable=False)
    password = db.Column(db.String(64), nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('Countries.id'), nullable=False)
    phone_number = db.Column(db.Integer, nullable=False)
    create_date = db.Column(db.DateTime, nullable=False)
    confirmation_number = db.Column(db.Integer, nullable=False)
    confirmed = db.Column(db.Integer, nullable=False)
    verified = db.Column(db.Integer, nullable=False)
    bio = db.Column(db.String(1024), nullable=False)
    profile_picture = db.Column(db.String(512), nullable=False)
    balance = db.Column(db.Integer, nullable=False, default=0)
    charge_per_minute = db.Column(db.Integer, nullable=False)
    user_type_id = db.Column(db.Integer, db.ForeignKey('UserTypes.id'), nullable=False)

    Countries = db.relationship('Countries', backref=db.backref('User'), lazy=True)
    UserTypes = db.relationship('UserTypes', backref=db.backref('User'), lazy=True)


class RoseTransactions(db.Model):
    __tablename__ = "RoseTransactions"

    id = db.Column(db.Integer, primary_key=True)
    from_id = db.Column(db.Integer, nullable=False)
    to_id = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    amount = db.Column(db.Integer, nullable=False)

class Purchases(db.Model):
    __tablename__ = "Purchases"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    secret_code = db.Column(db.String(64), nullable=False, unique=True)
    confirmed = db.Column(db.Integer, nullable=False, default=0)

    User = db.relationship('User', backref=db.backref('Purchases'), lazy=True)


class Posts(db.Model):
    __tablename__ = "Posts"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    text = db.Column(db.String(512), nullable=False)
    image = db.Column(db.String(128), nullable=False)

    User = db.relationship('User', backref=db.backref('Posts'), lazy=True)


class LikedPosts(db.Model):
    __tablename__ = "LikedPosts"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('Posts.id'), nullable=False)

    User = db.relationship('User', backref=db.backref('LikedPosts'), lazy=True)
    Posts = db.relationship('Posts', backref=db.backref('LikedPosts'), lazy=True)


class UserLanguages(db.Model):
    __tablename__ = "UserLanguages"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'),  nullable=False)
    language_id = db.Column(db.Integer, nullable=False)

    User = db.relationship('User', backref=db.backref('UserLanguages', lazy=True))


class ScheduledMeetings(db.Model):
    __tablename__ = "ScheduledMeetings"

    id = db.Column(db.Integer, primary_key=True)
    participant_one_id = db.Column(db.Integer, nullable=False)
    participant_two_id = db.Column(db.Integer, nullable=False)
    date_start = db.Column(db.DateTime, nullable=False)
    date_end = db.Column(db.DateTime, nullable=False)


class Comments(db.Model):
    __tablename__ = "Comments"

    id = db.Column(db.Integer , primary_key=True)
    date = db.Column(db.DateTime , nullable=False)
    user_id = db.Column(db.Integer , db.ForeignKey('User.id') , nullable=False)
    post_id = db.Column(db.Integer , db.ForeignKey('Posts.id') , nullable=False)
    comment_text = db.Column(db.String(512) , nullable=False) 

    User = db.relationship('User', backref=db.backref('Comments', lazy=True))
    Posts = db.relationship('Posts' , backref=db.backref('Comments', lazy=True))