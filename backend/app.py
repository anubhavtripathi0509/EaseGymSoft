from flask import Flask, request, jsonify
from flask_cors import CORS
from controller.database import create_client, get_all_clients, get_client_by_id, update_client, delete_client

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Endpoint to create a new client
@app.route('/add-client', methods=['POST'])
def add_client():
    client_data = request.json
    create_client(client_data)
    return jsonify({'message': 'Client added successfully!'}), 201

# Endpoint to get all clients
@app.route('/clients', methods=['GET'])
def clients():
    clients = get_all_clients()
    return jsonify(clients), 200

# Endpoint to get a client by ID
@app.route('/client/<int:id>', methods=['GET'])
def client(id):
    client = get_client_by_id(id)
    if client:
        return jsonify(client), 200
    return jsonify({'error': 'Client not found'}), 404

# Endpoint to update a client's information (optional)
@app.route('/client/<int:id>', methods=['PUT'])
def update(id):
    updated_data = request.json
    update_client(id, updated_data)
    return jsonify({'message': 'Client updated successfully!'}), 200

# Endpoint to delete a client (optional)
@app.route('/client/<int:id>', methods=['DELETE'])
def delete(id):
    delete_client(id)
    return jsonify({'message': 'Client deleted successfully!'}), 200

if __name__ == '__main__':
    app.run(debug=True)