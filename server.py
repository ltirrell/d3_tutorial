from flask import Flask, send_from_directory, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

@app.route('/data')
def data():
    x = [{'x': 0, 'y': 50},
         {'x': 1, 'y': 150},
         {'x': 0, 'y': 75}]
    return jsonify(x)
    
@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username

if __name__ == '__main__':
    app.run()
