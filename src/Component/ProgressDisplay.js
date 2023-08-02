import React, { useEffect, useState } from 'react';



export default function ProgressDisplay(){
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws'); 

    // socket.on('message', (progress) => {
    //   setProgress(parseInt(progress));
    // });

   socket.onmessage=function(event){
    // setProgress(parseInt(event.data));
    console.log("Received",event)
    console.log(event)
   }

  
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1>Progress: {progress}%</h1>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

;

// 'ws://localhost:8000/ws'