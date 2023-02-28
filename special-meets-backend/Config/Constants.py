constants = {
    "countries_api_key" : "JcucYnNw2Tl50z6xaOGVN61TWZkof2NqbCsGNQ0g",
    "local" : {
        "mysql": {
            "db_name": "VideoCalls",
            "host": "134.122.16.188",
            "user": "vc",
            "password": "VideoCalls123!",
        },
        "static_root": "C:/Users/ralev/video-calls-backend/static/",
        "email": {
            "login" : "special_meet@outlook.com",
            "password" : "SpecialMeet123!@#"
        },
    },
    "selector" : "local"
}

constants = constants[constants["selector"]]

