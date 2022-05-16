import React from 'react';
//import '../../assets/css/chatwindow.css';


const ChatWindow = () => {
  return (
    <div className="slide-container">
      <div className="page">
        <div className="marvel-device nexus5">
          <div className="screen">
            <div className="screen-container">
              <div className="chat">
                <div className="chat-container">
                  <div className="user-bar">
                    <div className="conversation">
                      <div className="conversation-container">
                        <div className="message sent">
                          What happened last night?
                          <span className="metadata">
                            <span className="time">10:00 am</span>
                            </span>
                        </div>
                        <div className="message received">
                          You were drunk.
                          <span className="metadata"><span className="time">10:00 am</span></span>
                        </div>
                        <div className="message sent">
                          No I wasn't.
                          <span className="metadata">
                            <span className="time">11:00 am</span>
                          </span>
                        </div>
                        <div className="message sent">
                          What happened last night?
                          <span className="metadata">
                            <span className="time">10:00 am</span>
                            </span>
                        </div>
                        <div className="message received">
                          You were drunk.
                          <span className="metadata"><span className="time">10:00 am</span></span>
                        </div>
                        <div className="message sent">
                          No I wasn't.
                          <span className="metadata">
                            <span className="time">11:00 am</span>
                          </span>
                        </div>
                        
                      </div>
                      <form className="conversation-compose">

                        <input className="input-msg" name="input" placeholder="Type a message" autocomplete="off" autofocus></input>

                        <button className="send">
                          <div className="circle">
                            Send
                          </div>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ChatWindow;