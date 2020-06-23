from flask import Flask, g, request, escape, render_template
from services.Backgroundjobs import Backgroundjobs

## Module Initizalizations
app = Flask(__name__)
#### BluePrints
app.register_blueprint(Backgroundjobs)



@app.route('/')
def hello_world():
    return 'What is going to happen with world'

@app.route('/auth')
def store_credentials():
    name = request.args.get("name", "World")
    if 'cred' not in g:
        g.cred = escape(name)
    return g.cred

@app.route("/app")
def getApp():
    return render_template('index.html')



if __name__ == '__main__':
    app.run(host='127.0.0.1', port='5000', debug=True)
