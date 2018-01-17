import React from "react";
import axios from 'axios';
import io from "socket.io-client";
import '../css/Chat.css'

class Chat extends React.Component{

  constructor(props){
       super(props);

       this.state = {
         senderId: sessionStorage.getItem('id'),
         message: '',
         receiverId: sessionStorage.getItem('ownerId'),
         messages: [],
         userImage: '',
         ownerImage: ''
       };

       this.socket = io('localhost:3001');

       this.socket.on('RECEIVE_MESSAGE', function(data){
         addMessage(data);
       })

       const addMessage = data => {
        this.setState({messages: [...this.state.messages, data]});
       }

       this.sendMessage = ev => {
         ev.preventDefault();
         this.socket.emit('SEND_MESSAGE',{
           senderName: sessionStorage.getItem('name'),
           message: this.state.message
         });
         const {message, senderId, receiverId} =this.state
         axios.post('http://localhost:3001/api/messages', {message, senderId, receiverId})
         this.setState({message: ''})
       }
   }

   componentDidMount() {
     let self=this;
     const userId = sessionStorage.getItem('id');
     const ownerId = sessionStorage.getItem('ownerId');

     fetch(`http://localhost:3001/api/messages?senderId=${userId}&receiverId=${ownerId}`)
       .then(function(results) {
         return results.json();
       })
       .then(function(data){
           self.setState({
             messages: data
           })
       })
       .catch(function(error) {
         console.log(error)
       });

       fetch(`http://localhost:3001/api/images/${userId}`)
         .then(function(results) {
           return results.json();
         })
         .then(function(data){
             self.setState({
               userImage: data.image
             })
         })
         .catch(function(error) {
           console.log(error)
         });

         fetch(`http://localhost:3001/api/images/${ownerId}`)
           .then(function(results) {
             return results.json();
           })
           .then(function(data){
               self.setState({
                 ownerImage: data.image
               })
           })
           .catch(function(error) {
             console.log(error)
           });
   }

  render(){

        return (
          <div className="mainBox">
            <img className="userImage" src={this.state.userImage}/>
            <img className="ownerImage" src={this.state.ownerImage}/>
            <div className="helloworld">
            <div className="messageBox">
              {this.state.messages.map(message => {
                if(message.senderName == sessionStorage.getItem('name')) {
                  return (
                    <p className="newMessageSender">{message.senderName}: {message.message}</p>
                  )
                } else {
                  return <p className="newMessageReceiver">{message.senderName}: {message.message}</p>
                }
              })}
            </div>
            <div className="card-footer">
              <br/>
              <input type="text" className="chatEntry" value={this.state.message} onChange={ev=>this.setState({message: ev.target.value})}/>
              <br/>
              <button className="sendButton" onClick={this.sendMessage}>Send</button>
            </div>
          </div>
          </div>
        );
    }
}
export default Chat;
