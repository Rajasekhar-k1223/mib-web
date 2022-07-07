import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React, { useEffect, useState, useLayoutEffect } from "react";
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
export default function About() {
  const [AllFeeds, setAllFeeds] = useState([]);
  const [pageNum, setpageNum] = useState(0);
  const [limitRecords, setlimitRecords] = useState(10);
  const [isVisible, setisVisible] = useState(false);
  const [getallFeeds, setgetallFeeds] = useState([]);
  const [scrollPosition, setPosition] = useState(0);
  const [scrollvalue, setscrollvalue] = useState(0);
  const screenArray = [0];
  const updatePosition = (e) => {
    // console.log(
    //   "hee1 " + window.innerHeight + e.target.documentElement.scrollTop + 1
    // );
    // console.log("hee2 " + e.target.documentElement.offsetHeight);

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >
      e.target.documentElement.scrollHeight
    ) {
      // if (
      //   e.target.documentElement.scrollHeight >
      //   e.target.documentElement.scrollHeight
      // )
      const element = document.getElementById("content");
      let y = element.scrollHeight;
      screenArray.push(y);
      console.log(screenArray);
      var length = screenArray.length;
      // screenArray.map((item, index) => {

      if (screenArray[length - 1] >= screenArray[length - 2]) {
        setpageNum(pageNum + 10);
        loadiuhiprurthMore();
        console.log(pageNum);
      }

      // });
      var getnumbers = screenArray.every(function (value, index) {
        var nextIndex = index + 1;
        console.log(value);
        return nextIndex < length ? value <= screenArray[nextIndex] : true;
      });
      console.log(getnumbers);
      // loadiuhiprurthMore();
    }
  };

  const userToken = localStorage.getItem("token");

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
    // console.log(AllFeeds.length);
    // console.log("first");
    getAllFeeds();
    //   console.log(page);
  }, [pageNum]);

  // setTimeout(() => {
  //   getAllFeeds();
  // }, 2000);
  const getAllFeeds = () => {
    const AccessDetails = {
      page: pageNum,
      SetLimit: limitRecords,
    };
    fetchFeedsList(AccessDetails, "first");
  };
  const fetchFeedsList = async (AccessDetails, name) => {
    //  console.log(AccessDetails);
    await axios
      .post(`http://${config.ip}:${config.port}/api/feeds`, AccessDetails, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      })
      .then((response) => {
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
        setAllFeeds([...AllFeeds, ...resp_with_like]);
        // AllFeeds.length > 0
        //   ? setAllFeeds([...AllFeeds, ...resp_with_like])
        //   : setAllFeeds(resp_with_like);
        // AllFeeds.length === 0
        //   ? console.log("first " + AllFeeds.length)
        //   : console.log("Second " + AllFeeds.length);
        // AllFeeds.push(resp_with_like);
        //const FeedsListNEw = AllFeeds.concat(resp_with_like);
        //setAllFeeds(FeedsListNEw);
        setisVisible(true);
        //setAllFeeds(getallFeeds);
        console.log(AllFeeds);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const loadiuhiprurthMore = () => {
    // setpageNum(pageNum + 1);
    const AccessDetails = {
      page: pageNum,
      SetLimit: limitRecords,
    };
    fetchFeedsList(AccessDetails, "second");
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
  const loadingView = () => {
    const loadingview = Array(10)
      .fill(1)
      .map((card, index) => {
        return (
          <Stack spacing={1} style={{ float: "left", margin: "1rem" }}>
            <Skeleton variant="text" width={210} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={218} />
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
        style={{ width: "250px", margin: 5, float: "left" }}
        className="feedCard"
      >
        <CardMedia style={{ height: 150 }}>
          <img
            src={image}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </CardMedia>
        <CardContent
          style={{ maxHeight: 200, overflow: "auto", fontFamily: "inherit" }}
        >
          {item.feedId}
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
    <div
      style={{ width: "100%", height: "95vh", paddingBottom: "5rem" }}
      id="content"
    >
      {feedslist.length > 0 ? feedslist : loadingView()}
      {isVisible ? (
        <div></div>
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
