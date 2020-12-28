import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
class WebSocketService{
    stompClient = null;
    createRoom(payload){

    }
    getLogMessage(payload){

    }
    connect(token_message,username){
        var socket = new SockJS("http://localhost:8000/ws");
        this.stompClient = Stomp.over(socket);
        var headers = {
            Authorization: token_message,
            Username: username,
        }
        this.stompClient.connect(headers,function(frame){
            console.log("Connected!")
            console.log(frame)
        })

    }
    disconnect(){
        this.stompClient.disconnect();
    }
    sendMessage(payload){
        console.log(payload)
        this.stompClient.send("/app/chat", {},JSON.stringify(payload));
    }
    getStatusUser(payload){

    }
    getNotification(payload){

    }
    leaveRoom(channelId){
        this.stompClient.unsubscribe("/topic/"+channelId+"/queue/messages");
    }
    joinRoom(channelId){
        this.stompClient.subscribe(
            "/topic/"+channelId+"/queue/messages",
            (message) => {
                    console.log(message)
            }
        )
    }

}
export default new WebSocketService();