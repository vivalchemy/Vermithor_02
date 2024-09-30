import json
from channels.generic.websocket import WebsocketConsumer

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()  # Accepts the WebSocket connection

    def disconnect(self, close_code):
        pass  # Handles disconnection

    def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']

        self.send(text_data=json.dumps({
            'message': message
        }))
