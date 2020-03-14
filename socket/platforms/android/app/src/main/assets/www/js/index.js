require(["config"], function(){
    

    document.getElementById("btn").addEventListener('click', function(){
        const socket = new WebSocket('ws://192.168.20.3:8080');
        
        socket.addEventListener('open', function (event) {
            socket.send('Hello Server!');
        });      
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
        });  
    })
    
        
});

let app = {
    initialize: function() {
        document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        //this.receivedEvent("deviceready");
    },
};

app.initialize();