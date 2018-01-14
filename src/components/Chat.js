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
   }
  render(){
        return (
          <div>
            <div className="messages">
              {this.state.messages.map(message => {
                return (
                  <div>{message.author}: {message.message}</div>
                )
              })}
            </div>
            <div className="card-footer">
              <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
              <br/>
              <input type="text" placeholder="Message" value={this.state.message} onChange={ev=>this.setState({message: ev.target.value})} className="form-control"/>
              <br/>
              <button className="submit-btn">Send</button>
            </div>
          </div>
        );
    }
}
export default Chat;
