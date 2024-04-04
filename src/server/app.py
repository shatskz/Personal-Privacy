from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

# Create the Flask app instance and connect it to SQLAlchemy DB
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db/locations.db'
db = SQLAlchemy(app)

# Class for Location objects to be stored in the DB
class Location(db.model):
    id = db.Column(db.Integer, primary_key = True)
    latitude = db.Column(db.Float, nullable = False)
    longitude = db.Column(db.Float, nullable = False)
    distance = db.Column(db.Integer, nullable = False)

    def __init__(self, latitude, longitude, distance):
        self.latitude = latitude
        self.longitude = longitude
        self.distance = distance


@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/submit_location', methods = ['POST'])
def submit_location():
    data = request.json
    # The latitude of the central point
    latitude = data['latitude']
    # The longitude of the central point
    longitude = data['longitude']
    # The distance/range around the central point for the privacy settings to be applied
    distance = data['distance']

    # Create new Location object and insert it into the DB
    location = Location(latitude, longitude, distance)
    db.session.add(location)
    db.session.commit()

    return jsonify({'message': "Location saved successfully"})

@app.route('/get_locations', methods = ['GET'])
def get_locations():
    # Get all the location data from the DB
    locations = Location.query.all()

    # Put all the location data into a list of Location objects in a serialized JSON format
    location_list = []
    for location in locations:
        location_data = {
            'id': location.id,
            'latitude': location.latitude,
            'longitude': location.longitude,
            'distance': location.distance
        }
        location_list.append(location_data)

    # Return the list as a JSON object
    return jsonify({'locations': location_list})


if __name__ == '__main__':
    # Create the table in the DB
    db.create_all()
    app.run(debug=True)

### Keep backend in Node.js and use an npm package to run Python (child_process in Stack Overflow)