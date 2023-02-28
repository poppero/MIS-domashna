from flask import jsonify
from Config.Config import db, uri
from Config.Models import User
from sqlalchemy.orm import sessionmaker, scoped_session
import sqlalchemy, random, datetime

def get_user_from_jwt(jwt_content):
    user = User.query.filter_by(id = int(jwt_content["id"])).first()
    return user

def str_to_date(str, format="%Y-%m-%d %H:%M:%S"):
    example = datetime.datetime(2021, 6, 2, 9, 39)
    if str == None: 
        return False
    
    if type(str) == type(example):
        return str
    
    return datetime.datetime.strptime(str, format)

def dict_is_xor(_dict, keys):
    exists = False
    for key in keys:
        if key in _dict and exists == False:
            exists = key
            continue
        if key in _dict and exists != False:
            return False
    
    return exists

def crud_routes(request, instance):
    method = request.method
    if method == "POST":
        return instance.create(request)
    elif method == "GET":
        return instance.read(request)
    elif method == "PUT":
        return instance.update(request)
    elif method == "DELETE":
        return instance.delete(request)

def custom_abort(code, message):
    return jsonify({
        "msg": message,
        "code" : code
    }), code

def convertor(instance, exclude=[]):
    if instance is None:
        return instance
    if type(instance) != list:
        instance = [instance]
        
    ret = []
    for i in instance:
        obj = dict()
        for key in i.__dict__:
            if key not in exclude and key != "_sa_instance_state":
                obj[key] = i.__dict__[key]
        ret.append(obj)
        
    if len(ret) == 1:
        return ret[0]
    return ret

def hash_query_results(array, col_key, cbh=True):
    if type(array) != list:
        array = [array]
    if len(array) == 0:
        return []
    ret = [None for _ in range(max(array,key=lambda x: x[col_key])[col_key]+1)]
    
    for item in array:
        if cbh:
            ret[item[col_key]] = item
        else:
            if ret[item[col_key]] is None:
                ret[item[col_key]] = [item]
            else:    
                ret[item[col_key]].append(item)
    return ret
    
def get_random_alphanumerical(_len = 16):
    asciiCodes = []
    alphanumerical = ""
    asciiCodes += random.sample(range(97, 122), int(round(0.375 * _len)))
    asciiCodes += random.sample(range(65, 90), int(round(0.375 * _len)))
    asciiCodes += random.sample(range(48, 57), int(round(0.25 * _len)))
    random.shuffle(asciiCodes)
    for char in asciiCodes:
        alphanumerical += chr(char)
    return alphanumerical

def generate_secret_key(length):
    key = ""
    for x in range(length):
        rand = random.randint(97, 122)
        key += chr(rand)
    return key

def get_extension(_f):
    ext = str(_f.filename.split(".")[len(_f.filename.split(".")) - 1])
    return ext

def conv_arg(arg):
    if arg == "null":
        return None
    else:
        return arg

class ConstantsRoutes:
    def __init__(self, model_type, name, fields = None):
        self.Table = model_type
        self.ret_key = name
        if fields == None:
            self.all_fields = ["id", "name"]
            self.create_required = ["name"]
            self.update_required = ["id", "name"]
        else:
            self.all_fields = fields["all_fields"]
            self.create_required  = fields["create_required"]
            self.update_required = fields["update_required"]
        pass
    
    def create(self, request):
        data = request.form
        
        for key in self.create_required:
            if key not in data:
                return custom_abort(400, "Missing required key (" + key + ")")
        
        item = self.Table()
        for key in self.all_fields:
            if key in data:
                setattr(item, key, data[key])
        try:
            db.session.add(item)
            db.session.commit()
            item = self.Table.query.filter_by(id = item.id).first()
            ret = convertor(item)
            return jsonify({ self.ret_key : ret })
        except Exception as e:
            print(e)
            return custom_abort(500, "Internal server error occured. Are you sure this request is formatted correctly?")
    
    def read(self, request):
        if "id" in request.args:
            item = self.Table.query.filter_by(id = int(request.args["id"])).first()
            if item is None:
                return custom_abort(404, "This item does not exits.")
            ret = convertor(item)
            
            return jsonify({ self.ret_key : ret })
        elif "hashed" in request.args and request.args["hashed"] == "true":
            items = self.Table.query.all()
            ret = convertor(items)
            hashed = hash_query_results(ret, "id")
            return jsonify({ self.ret_key+"s" : hashed })
        else:
            items = self.Table.query.all()
            ret = convertor(items)
            if type(ret) == type({}):
                ret = [ret]
            
            return jsonify({ self.ret_key+"s" : ret })
    
    def update(self, request):
        data = request.form
        for key in self.update_required:
            if key not in data:
                return custom_abort(400, "One or more key(s) is missing from the request.")
            
        item = self.Table.query.filter_by(id = int(data["id"])).first()
        
        for key in self.all_fields:
            if key in data:
                setattr(item, key, data[key])
                
        db.session.commit()
        
        item = self.Table.query.filter_by(id = int(data["id"])).first()
        ret = convertor(item)
        
        return jsonify({ self.ret_key : ret })
    
    def delete(self, request):
        if "id" in request.form:
            try:
                item = self.Table.query.filter_by(id = int(request.form["id"])).first()
                db.session.delete(item)
                db.session.commit()
                return jsonify({ self.ret_key+"_id" : request.form["id"] })
            except Exception as e:
                return custom_abort(500, "Error occurred while deleting this entry.")
        else:
            return custom_abort(400, "Item not specified")


class SQL:
    def __init__(self):
        self.engine = sqlalchemy.create_engine(uri)
        self.Session = scoped_session(sessionmaker(bind=self.engine))
        pass

    def query(self, query, params):
        session = self.Session()
        result = session.execute(query, params).fetchall()
        ret = []
        for row in result:
            ret.append(dict(row))

        return ret
