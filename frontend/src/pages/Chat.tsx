// import React, { useEffect, useState } from 'react';

// const WebSocketComponent: React.FC = () => {
//     const [socket, setSocket] = useState<WebSocket | null>(null);
//     const [message, setMessage] = useState<string>('');

//     useEffect(() => {
//         const ws = new WebSocket('ws://localhost:8000/ws/some_path/');

//         ws.onopen = () => {
//             console.log('WebSocket is open now.');
//             // Now it's safe to send messages
//             ws.send(JSON.stringify({ message: 'Hello Server!' }));
//         };

//         ws.onclose = (event) => {
//             console.log('WebSocket is closed now: ', event);
//         };

//         ws.onerror = (error) => {
//             console.error('WebSocket error: ', error);
//         };


//         setSocket(ws);

//         // Cleanup on unmount
//         return () => {
//             ws.close();
//         };
//     }, []);

//     const sendMessage = () => {
//         if (socket) {
//             socket.send(JSON.stringify({ message: 'Hello, Django!' }));
//         }
//     };

//     return (
//         <div>
//             <h1>WebSocket Demo</h1>
//             <button onClick={sendMessage}>Send Message</button>
//             <p>Received Message: {message}</p>
//         </div>
//     );
// };

// export default WebSocketComponent;
