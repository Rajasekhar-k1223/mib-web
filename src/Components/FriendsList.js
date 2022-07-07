import { Card, CardContent } from "@mui/material";
import React, { useState, useEffect } from "react";
import image from "../assets/images/avatar.png";
import emoji from "../assets/images/emojiIcon.jpg";
import { FiSettings } from "react-icons/fi";
import Picker from "emoji-picker-react";
export default function FriendsList() {
  const [userVisible, setuserVisible] = useState(false);
  const [listIndex, setListIndex] = useState(undefined);
  const [friendsList, setfriendsList] = useState([]);
  const [friendslistChat, setfriendslistChat] = useState([]);
  const [messageList, setmessageList] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState([]);
  const [showpicker, setshowpicker] = useState(false);
  const [pickerView, setpickerView] = useState(false);
  const [showEmojiContainers, setshowEmojiContainers] = useState(false);
  const [friendsCount, setfriendsCount] = useState([]);
  const [ChatcontentView, setChatcontentView] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji((chosenEmoji) => {
      return ChatcontentView + chosenEmoji + emojiObject.emoji;
    });
    // setTimeout(() => {});
    console.log(chosenEmoji);
  };
  const friends = [
    { userName: "Rajasekhar", userId: 2, pickerView: false },
    { userName: "Raja1", userId: 4, pickerView: false },
    { userName: "Raja2", userId: 8, pickerView: false },
    { userName: "Raja3", userId: 10, pickerView: false },
    { userName: "Raja4", userId: 20, pickerView: false },
  ];
  // const resp_with_like = friendsCount.map((el) => {
  //   const y = { ...el, pickerView: false };
  //   return y;
  // });
  // setfriendsList((friendsList) => [...friendsList, ...resp_with_like]);
  useEffect(() => {
    setfriendsCount(friends);
    // showEmojiContainer(0);
    //document.addEventListener("click", showEmojiContainer(0));
    //  document.addEventListener("click", checkingemojiClose, true);
    // return () => {
    //   document.removeEventListener("click", showEmojiContainer(0), true);
    // };
  }, []);
  const checkingemojiClose = () => {
    console.log("first");
  };
  const messages = [
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
    { message: "Rajasekhar", messageType: "sender" },
    { message: "Rajasekhar", messageType: "received" },
  ];

  const showFriendData = (userId) => {
    return (
      <div
        className="hello"
        style={{ width: 100, height: 100, background: "red" }}
      >
        {userId}
      </div>
    );
  };
  const showChatBox = (name) => {
    // const y = { name: name, pickerView: false };
    // console.log(y);
    // return false;
    // const resp_with_like = friendslistChat.map((el) => {
    //   const y = { ...el, pickerView: false };
    //   return y;
    // });
    // //  setfriendsList((friendsList) => [...friendsList, ...resp_with_like]);
    // if (friendslistChat.length == 0) {
    //console.log(AllFeeds.length);
    //   setfriendslistChat((friendslistChat) => [...friendslistChat, name]);
    //fetchImages();
    // } else {
    //   setfriendslistChat((friendslistChat) => [
    //     ...friendslistChat,
    //     ...resp_with_like,
    //   ]);
    // }
    setfriendslistChat([...friendslistChat, name]);
    //console.log(friendslistChat);
    setmessageList([...messageList, messages]);
    // setTimeout(() => {
    //   console.log(friendslistChat);
    // }, 3000);

    //return false;
  };
  const checkingClose = (item) => {
    var array = [...friendslistChat]; // make a separate copy of the array
    var index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
      setfriendslistChat(array);
    }
  };
  const showEmojiContainer = (id) => {
    console.log(id);
    // return false;
    // setshowEmojiContainers(true);
    const resp_with_like = friendsCount.map((item, key) => {
      //console.log("user Id ", item.userId);
      // console.log("Id  ", id);
      if (item.userId === id) {
        console.log(item.pickerView);
        const y = item.pickerView
          ? { ...item, pickerView: false }
          : { ...item, pickerView: true };
        console.log(y);
        return y;
      } else {
        //  console.log(item);
        if (item.pickerView === true) {
          const itemcheck = item.pickerView
            ? { ...item, pickerView: false }
            : { ...item, pickerView: true };
          return itemcheck;
        } else {
          return item;
        }
      }
    });
    console.log(resp_with_like);
    setfriendsCount(resp_with_like);
    console.log(friendsCount);
    //setpickerView(true);
  };
  return (
    <div
      onMouseOut={() => {
        setListIndex(undefined);
      }}
    >
      {friendsCount.map((item, index) => {
        return (
          <div
            style={{ position: "relative" }}
            key={index}
            onMouseOut={() => {
              setListIndex(undefined);
            }}
          >
            <Card
              className="feedCard"
              style={{ marginBottom: 2 }}
              key={index}
              onMouseOver={() =>
                listIndex === index
                  ? setListIndex(undefined)
                  : setListIndex(index)
              }
              onMouseOut={() => {
                setListIndex(undefined);
              }}
              onClick={() => {
                showChatBox(item.userName);
              }}
            >
              <CardContent style={{ padding: 10 }}>{item.userName}</CardContent>
            </Card>
            {index === listIndex ? (
              // {userVisible ? (
              <div
                style={{
                  position: "absolute",
                  width: "300px",
                  height: "100px",
                  right: "210px",
                  background: "#fff",
                  borderRadius: 15,
                  padding: "1rem",
                  boxShadow: "0px 0px 5px #000",
                  top: 0,
                }}
                onMouseOver={() => {
                  setListIndex(index);
                }}
              >
                {item.userName}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <div>
        {friendslistChat.map((item, index) => {
          return (
            <div
              className="chatbox"
              style={{
                right: 13 * (index + 1) + index + index + "rem",
              }}
              key={index}
            >
              <div className="chat-Header">
                <div className="chat-Header-title">{item}</div>
                <div
                  className="close"
                  onClick={() => {
                    checkingClose(item);
                  }}
                >
                  X
                </div>
              </div>
              <div className="chat-body">
                {/* {JSON.stringify(messageList)} */}
                {messageList[index].map((messeite) => (
                  <div>
                    <div
                      className={
                        messeite.messageType === "sender"
                          ? "sender"
                          : "receiver"
                      }
                    >
                      <img
                        src={image}
                        style={{
                          width: "15px",

                          float:
                            messeite.messageType === "sender"
                              ? "right"
                              : "left",
                        }}
                      />
                      <div
                        style={{ float: "left", marginLeft: 2, marginRight: 2 }}
                      >
                        {messeite.message}
                      </div>
                    </div>
                    <div className="clear"></div>
                  </div>
                ))}
              </div>
              <div className="chat-text">
                {/* {chosenEmoji ? (
                  <span>You chose: {chosenEmoji.emoji}</span>
                ) : (
                  <span>No emoji Chosen</span>
                )} */}
                <div
                  contentEditable
                  placeholder="Type something..."
                  onKeyDown={(e) => {
                    // setChosenEmoji((chosenEmoji) => {
                    //   return chosenEmoji + emojiObject.emoji;
                    // });
                    setChatcontentView(e.target.textContent);
                  }}
                  style={{
                    height: "35px",
                    overflowY: "auto",
                    width: "83%",
                    float: "left",
                    padding: "6px",
                  }}
                >
                  {chosenEmoji ? <>{chosenEmoji}</> : null}
                </div>
                {friendsCount.map((eachitem, indexEmoji) => {
                  return (
                    <>
                      {index === indexEmoji ? (
                        <img
                          src={emoji}
                          style={{ width: 25 }}
                          onClick={() => {
                            // index === indexEmoji ? eachitem.userId : null;

                            showEmojiContainer(eachitem.userId);
                          }}
                        />
                      ) : null}
                      <div>
                        {index === indexEmoji ? (
                          eachitem.pickerView === true ? (
                            <Picker
                              onEmojiClick={onEmojiClick}
                              pickerStyle={{ bottom: "23rem" }}
                            />
                          ) : null
                        ) : null}
                      </div>
                    </>
                  );
                })}
                {/* {pickerView ? (
                    <Picker
                      onEmojiClick={onEmojiClick}
                      pickerStyle={{ bottom: "23rem" }}
                    />
                  ) : null} */}
              </div>
            </div>
          );
        })}
        {/* {friendslistChat.length > 0 ? (
          <div
            className="chatbox"
            style={{ right: 13 * friendslistChat.length + "rem" }}
          ></div>
        ) : null} */}
      </div>
      {/* <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card>
      <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card>
      <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card>
      <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card>
      <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card>
      <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card> */}
      <div style={{ position: "fixed", bottom: 5 }}>
        <FiSettings
          size={13}
          style={{ margin: "0 5" }}
          onClick={() => {
            alert("hello");
          }}
        />
        Chat Settings
      </div>
    </div>
  );
}
