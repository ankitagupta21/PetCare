import React from "react";

import "./Chats.css";
import user1 from "../../assets/img/user1.png";
import user2 from "../../assets/img/user2.png";
import user3 from "../../assets/img/user3.png";
import user4 from "../../assets/img/user4.png";

const Chats = () => {
  const [chatsData, setChatsData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log(process.env.PUBLIC_URL);
    const fetchData = async () => {
      setTimeout(() => {
        fetch("/chatsData.json")
          .then((response) => response.json())
          .then((data) => {
            setChatsData(data);
            setLoading(false);
          })
          .catch((error) => console.log(error));
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <div className="Chats-Container">
      {loading ? (
        <div className="Loading">Loading...</div>
      ) : (
        <div>
          <div className="Chart-header">
            <p>VACCINATION SCHEDULE</p>
          </div>
          <div className="Chats">
            {chatsData &&
              chatsData.map((item, index) => {
                return (
                  <div className="Chat-Item">
                    <div className="Chat-Item-Image">
                      <img
                        src={
                          index === 0
                            ? user1
                            : index === 1
                            ? user2
                            : index === 2
                            ? user3
                            : user4
                        }
                        alt="User"
                      />
                    </div>
                    <div className="Chat-Item-Right">
                      <div className="Chat-Item-Content">
                        <p>{item.name}</p>
                        <p>{item.time}</p>
                      </div>
                      <div className="Chat-Item-Content">
                        <p>
                          {item.lastMessage.substring(0, 30).length < 30
                            ? item.lastMessage
                            : item.lastMessage.substring(0, 30) + "..."}
                        </p>
                        <div className="Unread-Messages">
                          <div>{item.unread}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
