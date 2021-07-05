import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Logan"
        message="Yo what's up"
        timestamp="Three days ago"
        profilePic="https://yt3.ggpht.com/ytc/AKedOLQTOrbuh25vkoon4ROhjjbJXX3jVrEaAYK6BDUB=s900-c-k-c0x00ffffff-no-rj"
      />
      <Chat
        name="Sarah"
        message="How are you?"
        timestamp="55 seconds ago"
        profilePic="https://2atstartup.com.au/wp-content/uploads/2019/05/girl-avatar.png"
      />
      <Chat
        name="Natasha"
        message="What happened?"
        timestamp="35 seconds ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAAmCydelK13JvrhwxVGOb5o6ftLhLRRy0YCc1xLy6wb3S8OdJ8hOQ2tZBBKgBaemWWQ&usqp=CAU"
      />
    </div>
  );
}

export default Chats;
