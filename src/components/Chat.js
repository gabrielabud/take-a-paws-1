import React from "react";
import io from "socket.io-client";

class Chat extends React.Component{

  constructor(props){
       super(props);

       this.state = {
           username: '',
           message: '',
           messages: []
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
           sender: this.state.username,
           message: this.state.message
         });
         this.setState({message: ''})
       }
   }

   componentDidMount() {
     let self=this;
     const id = sessionStorage.getItem('id');

     fetch(`http://localhost:3001/api/messages?senderId=1&receiverId=2`)
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
   }

  render(){
        return (
          <div>
            <div className="messages">
              {this.state.messages.map(message => {
                return (
                  <div>{message.sender}: {message.message}</div>
                )
              })}
            </div>
            <div className="card-footer">
              <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
              <br/>
              <input type="text" placeholder="Message" value={this.state.message} onChange={ev=>this.setState({message: ev.target.value})} className="form-control"/>
              <br/>
              <button onClick={this.sendMessage} className="submit-btn">Send</button>
            </div>
          </div>
        );
    }
}
export default Chat;
