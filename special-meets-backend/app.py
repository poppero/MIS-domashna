from Config.Config import app, mail

from Routes.Users.UsersApi import users_api
from Routes.Posts.PostsApi import posts_api
from Routes.ScheduledMeetings.ScheduledMeetingsApi import scheduled_meetings_api
from Routes.Comments.CommentsApi import comments_api
from Routes.UserTypes.UserTypesApi import usertypes_api
from Routes.LikedPosts.LikedPostsApi import likedposts_api
from Routes.Currency.CurrencyApi import currency_api

from flask_mail import Message
from flask import render_template, url_for
# import socketio, eventlet, eventlet.wsgi, datetime
# sio = socketio.Server()
app.register_blueprint(users_api, url_prefix="/user/")
app.register_blueprint(posts_api, url_prefix="/posts")
app.register_blueprint(currency_api, url_prefix="/currency/")
app.register_blueprint(usertypes_api , url_prefix="/user_types")
app.register_blueprint(likedposts_api , url_prefix="/liked_posts")
app.register_blueprint(scheduled_meetings_api , url_prefix="/scheduled_meetings/")
app.register_blueprint(comments_api , url_prefix="/comments/")

@app.route("/test_mail")
def send_mail():
    msg = Message(
        subject="Hello World", 
        sender="special_meet@outlook.com", 
        recipients=["veljanovski.dimitar20@uklo.edu.mk"], 
        body="This is a test."
    )
    msg.msgId = msg.msgId.split('@')[0] + "@specialmeet"
    mail.send(msg)

    return "Success"

if __name__ == "__main__":
    app.run()
