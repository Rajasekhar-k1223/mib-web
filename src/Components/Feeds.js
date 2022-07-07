import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import image from "../assets/images/avatar.png";
import { AiOutlineLike } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { FaSlideshare } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { ImEnlarge2 } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { config } from "../Config";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
var encode = require("encode-uri");
export default function Feeds() {
  const navigation = useNavigate();
  const [AllFeeds, setAllFeeds] = useState([]);
  const [pageNum, setpageNum] = useState([0]);
  const [uniqueChars, setuniqueChars] = useState([0]);
  const [limitRecords, setlimitRecords] = useState(10);
  const [isVisible, setisVisible] = useState(false);
  const [ConentLastText, setConentLastText] = useState("");
  const [getallFeeds, setgetallFeeds] = useState([]);
  const [scrollPosition, setPosition] = useState(0);
  const [scrollvalue, setscrollvalue] = useState(0);
  const screenArray = [0];
  const titleRef = useRef();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    fetchImages();
    //document.body.scrollTop = 0;
    window.addEventListener("scroll", handleScroll); // attaching scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageNum]);
  // setTimeout(() => {
  //   fetchImages();
  // }, 2000);
  var countoffeedsLenghth = "";
  const userToken = localStorage.getItem("token");
  const setStatePageNumber = () => {
    //  console.log(document.getElementById("content").ariaCurrent.offsetHeight);
    //  console.log(pageNum + limitRecords);
    //setpageNum(pageNum + limitRecords);
    pageNum.push(parseInt(uniqueChars[uniqueChars.length - 1] + limitRecords));
    //let uniqueChars = [];
    pageNum.forEach((c) => {
      if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
      }
    });
    //console.log(uniqueChars);
  };
  const fetchImages = async () => {
    // fetch images from Unsplash API and append them to imageObjects state
    //  console.log(uniqueChars[uniqueChars.length - 1]);
    setisVisible(false);
    const AccessDetails = {
      page: uniqueChars[uniqueChars.length - 1],
      SetLimit: limitRecords,
    };
    await axios
      .post(`http://${config.ip}:${config.port}/api/feeds`, AccessDetails, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      })
      .then((response) => {
        //  console.log(response);
        if (response.data.data.length > 0) {
          // console.log(response);
          const resp = JSON.parse(JSON.stringify(response.data.data));
          const resp_with_like = resp.map((el) => {
            const y = { ...el, like: false };
            return y;
          });
          // var getallFeeds = (AllFeeds) => {
          //   AllFeeds, resp_with_like;
          // };
          // resp_with_like.map((item) => {
          //   getallFeeds.push(item);
          // });
          // console.log(getallFeeds);

          //console.log(resp_with_like);

          if (AllFeeds.length == 0) {
            //console.log(AllFeeds.length);
            setAllFeeds((AllFeeds) => [...AllFeeds, ...resp_with_like]);
            //fetchImages();
          } else {
            setAllFeeds((AllFeeds) => [...AllFeeds, ...resp_with_like]);
          }

          // AllFeeds.length > 0
          //   ? setAllFeeds([...AllFeeds, ...resp_with_like])
          //   : setAllFeeds(resp_with_like);
          // AllFeeds.length === 0
          //   ? console.log("first " + AllFeeds.length)
          //   : console.log("Second " + AllFeeds.length);
          // AllFeeds.push(resp_with_like);
          //const FeedsListNEw = AllFeeds.concat(resp_with_like);
          //setAllFeeds(FeedsListNEw);
          // setisVisible(true);
          if (response.data.code === 200) {
            setStatePageNumber(); // Your function call
          }

          //setAllFeeds(getallFeeds);
          //console.log(AllFeeds);
          //setStatePageNumber();
        } else {
          countoffeedsLenghth = response.data.data.length;
        }
      })
      // .then(() => {
      //   // const pagenumber = pageNum + 10;
      //   //  console.log(pagenumber);
      //   setStatePageNumber();
      //   //setpageNum(pagenumber);
      // })
      .catch((error) => {
        if (error.response.status === 401) {
          alert(error.response.data.message + " Access");
          navigation("/");
        }
      });
  };

  const loadiuhiprurthMore = () => {
    // setpageNum(pageNum + 1);
    const AccessDetails = {
      page: pageNum,
      SetLimit: limitRecords,
    };
    //   fetchFeedsList(AccessDetails, "second");
  };
  const likenewFeed = (id) => {
    const resp_with_like = AllFeeds.map((item, key) => {
      if (item.feedId === id) {
        const y = item.like
          ? { ...item, like: false }
          : { ...item, like: true };
        return y;
      } else {
        return item;
      }
    });

    setAllFeeds(resp_with_like);
  };
  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (
      userScrollHeight - 152 ===
      document.getElementById("content").scrollHeight
    ) {
      if (countoffeedsLenghth !== 0) {
        fetchImages();
      } else {
        setisVisible(true);
        setConentLastText("You don't have Feeds");
      }
    }
  };
  const loadingView = () => {
    const loadingview = Array(10)
      .fill(1)
      .map((card, index) => {
        return (
          <Stack spacing={1} style={{ float: "left", margin: "1rem" }}>
            <Skeleton variant="text" width={250} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={250} height={218} />
          </Stack>
        );
      });
    return loadingview;
  };
  const feedslist = AllFeeds.map((item, key) => {
    // console.log(AllFeeds.length);
    return (
      <Card
        key={key}
        style={{ width: "270px", margin: 5, float: "left" }}
        className="feedCard"
      >
        {item.uploadImage.length > 0 ? (
          <CardMedia style={{ height: 150, position: "relative" }}>
            {item.uploadImage.map((imgItem, index) => {
              // return <div>{imgItem.uri}</div>;
              var filetype;
              var type = imgItem.type.split("/")[1];
              if (type === "jpeg") {
                var filetype = "jpg";
              }
              return (
                <div>
                  {/* {index < 6 ? (
                  { */}
                  {index < 6 ? (
                    <img
                      src={
                        "http://" +
                        config.ip +
                        ":" +
                        config.port +
                        "/storage/images/" +
                        imgItem.uri +
                        "." +
                        filetype
                      }
                      style={{
                        width: "31.55%",
                        height: "50%",
                        float: "left",
                        margin: 1,
                        padding: 1,
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <div></div>
                  )}

                  {/* }
                  :""} */}
                </div>
              );
            })}
            {item.uploadImage.length > 6 ? (
              <div
                style={{
                  width: "29%",
                  height: "105px",
                  float: "left",
                  margin: "6px",
                  padding: "1px",
                  objectFit: "contain",
                  backgroundColor: "rgb(255, 255, 255)",
                  position: "absolute",
                  right: 0,
                  borderRadius: "5px",
                  opacity: 0.5,
                  top: "7.4rem",
                  textAlign: "center",
                  lineHeight: "105px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {item.uploadImage.length - 6}+
              </div>
            ) : (
              ""
            )}{" "}
            {/* <img
            src={image}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          /> */}
          </CardMedia>
        ) : (
          ""
        )}
        <CardContent style={{ paddingBottom: 5 }}>
          <img
            src={image}
            style={{ width: 20, height: 20, borderRadius: 15, float: "left" }}
          />
          <div style={{ float: "left", paddingLeft: 5 }}>Rajsekhar posted </div>
          <div style={{ clear: "both" }}></div>
        </CardContent>
        <CardContent
          style={{
            maxHeight: 200,
            overflow: "auto",
            fontFamily: "inherit",
            fontSize: 14,
            textAlign: "justify",
            textIndent: 30,
          }}
        >
          {item.description}
        </CardContent>
        <CardActions>
          <AiFillHeart
            size={20}
            style={{ marginLeft: 5 }}
            className={item.like ? "heart" : "unlikeheart"}
            onClick={() => {
              likenewFeed(item.feedId);
            }}
          />
          {item.likes}
          <BsEmojiSmile size={20} style={{ marginLeft: 30 }} />
          <BiComment size={20} style={{ marginLeft: 30 }} />
          <FaSlideshare size={20} style={{ marginLeft: 30 }} />
          <BsInfoCircle size={13} style={{ marginLeft: 35 }} />
          <ImEnlarge2 size={13} style={{ marginLeft: 35 }} />
        </CardActions>
      </Card>
    );
  });
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <div
        style={{
          width: "100%",

          paddingBottom: "5rem",
          float: "left",
        }}
        id="content"
      >
        {feedslist.length > 0 ? feedslist : loadingView()}
      </div>
      {isVisible ? (
        <div style={{ fontSize: "16px", textAlign: "center" }}>
          {ConentLastText}
        </div>
      ) : (
        <Stack
          sx={{ color: "grey.500" }}
          spacing={2}
          direction="row"
          style={{ margin: "auto", width: "100px", marginTop: "40vh" }}
        >
          <CircularProgress color="inherit" />
        </Stack>
      )}
    </div>
  );
}
