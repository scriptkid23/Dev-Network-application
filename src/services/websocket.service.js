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

    }
    getStatusUser(payload){

    }
    getNotification(payload){

    }
    leaveRoom(payload){

    }
    joinRoom(payload){

    }

}
export default new WebSocketService();