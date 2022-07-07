import { ListItem } from "@mui/material";
import Interweave from "interweave";
import UrlMatcher from "interweave/lib/matchers/Url";
import HashtagMatcher from "interweave/lib/matchers/Hashtag";
import React, { useState } from "react";
import FriendsList from "./FriendsList";
import Header from "./Header";

export default function EmailSystem() {
  const [EmailContent, setEmailContent] = useState([]);
  const [mailContentShow, setmailContentShow] = useState(false);
  const [mailListShow, setmailListShow] = useState(true);
  const OpenViewEmail = () => {
    const mailData = [
      {
        subject: "hello",
        from: "rajasekhar",
        to: "raj",
        body: "Solovis Integration for VFMC Mapping exercise from old State Street AIS to Solovis We will want to use the Snowflake model. Eagle Target is not supplied. @Jon please ask. GoaL: SOW out ASAP Thks <h1>My First Heading</h1> <p>My first paragraph.</p>",
      },
    ];
    // alert(mailData);
    setEmailContent(mailData);
    setmailContentShow(true);
    setmailListShow(false);
    console.log(mailData);
  };
  const backToList = () => {
    setmailContentShow(false);
    setmailListShow(true);
  };
  return (
    <div>
      <Header
      // changingHeaderDragble={changingHeaderDragble}
      //       style={{ cursor: Dragable }}
      />
      <div className="MainSection">
        <div
          className="FeedsSections"
          style={{ paddingLeft: "0rem", top: "3.9rem" }}
        >
          <div
            style={{
              width: "15%",
              border: "1px solid rgb(0 0 0 / 7%)",
              height: "89.5vh",
              float: "left",
              overflowY: "auto",
              boxShadow: "0px 0px 2px #000",
            }}
            className="EmailsideMenu"
          >
            <ul>
              <li>Inbox</li>
              <li>Inbox</li>
              <li>Inbox</li>
              <li>Inbox</li>
              <li>Inbox</li>
              <li>Inbox</li>
              <li>Inbox</li>
              <li>Inbox</li>
              <li>Inbox</li>
            </ul>
          </div>
          <div
            style={{
              width: "84%",
              border: "1px solid rgb(0 0 0 / 7%)",
              height: "89.5vh",
              float: "left",
              overflowY: "auto",
              boxShadow: "0px 0px 5px #000",
            }}
            className="EmailListBody"
          >
            {mailListShow ? (
              <ul>
                <li
                  onClick={() => {
                    OpenViewEmail();
                  }}
                >
                  Inbox
                </li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
                <li>Inbox</li>
              </ul>
            ) : null}
            {mailContentShow ? (
              <div>
                <button
                  onClick={() => {
                    backToList();
                  }}
                >
                  Back
                </button>
                {EmailContent.map((item) => {
                  return (
                    <div className="emailbodyView">
                      <div className="emailbodyTitle">{item.subject}</div>
                      <div className="emailbodyContent">
                        <Interweave
                          content={item.body}
                          matchers={[
                            new UrlMatcher("url"),
                            new HashtagMatcher("hashtag"),
                          ]}
                        />
                        <Interweave
                          content="This contains a URL, https://github.com/milesj/interweave, and a hashtag, #interweave, that will be converted to an anchor link!"
                          matchers={[
                            new UrlMatcher("url"),
                            new HashtagMatcher("hashtag"),
                          ]}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
        <div className="friendsListSection">
          <FriendsList />
        </div>
      </div>
    </div>
  );
}
