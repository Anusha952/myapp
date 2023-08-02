import React, { useState, useEffect } from 'react';

const WebSocketComponent = () => {
  const [words, setWords] = useState('');
  const [socket, setSocket] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [progress, setProgress] = useState(0);

  const connectToWebSocket = () => {
    const ws = new WebSocket('ws://localhost:8000/ws');
    setSocket(ws);
  };

  useEffect(() => {
    if (socket) {
      socket.onopen = () => {
        console.log('WebSocket connection established');
      };

      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        const newWord = message['word'];
        const newProgress = parseInt(message['count'] * 100);
        console.log(message['word']);
        console.log(newProgress);
        setWords(newWord); // Set the new word received from WebSocket
        setProgress(newProgress);
        if (newProgress === 100) {
          setTimeout(() => {
            setShowDialog(false); // Close the dialog when the progress is 100%
          }, 1000);
        }
      };

      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      socket.onclose = () => {
        console.log('WebSocket connection closed');
        setShowDialog(false);
      };
    }
  }, [socket]);

  const handleButtonClick = () => {
    setShowDialog(true);
    connectToWebSocket();
    setWords(''); // Reset the word to an empty string when the button is clicked again
    setProgress(0); // Reset progress to 0 when the button is clicked again
  };

  const handleCloseDialog = () => {
    setShowDialog(false); // Close the dialog when the close button is clicked
    if (socket) {
      socket.close(); // Close the WebSocket connection
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleButtonClick}>Connect to WebSocket</button>
      {showDialog && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Progress from Backend</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseDialog}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Progress: {progress}%</p>
                {words && <p>{words}</p>}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseDialog}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebSocketComponent;
