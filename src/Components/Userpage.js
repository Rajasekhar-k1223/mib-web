import React, { useState } from "react";
import Feeds from "./Feeds";
import FriendsList from "./FriendsList";
import Header from "./Header";

export default function Userpage() {
  const [Dragable, setDragable] = useState("pointer");
  const changingHeaderDragble = () => {
    setDragable("all-scroll");
  };
  console.log("userpage");
  return (
    <div>
      <Header
        changingHeaderDragble={changingHeaderDragble}
        style={{ cursor: Dragable }}
      />
      <div className="MainSection">
        <div className="FeedsSections">
          <Feeds />
        </div>
        <div className="friendsListSection">
          <FriendsList />
        </div>
      </div>
    </div>
  );
}
