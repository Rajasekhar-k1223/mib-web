import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Avatar from "../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";
import { config } from "../Config";
import { AiTwotoneAlert } from "react-icons/ai";
const axios = require("axios").default;

export default function Login() {
  const navigation = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [passwordShow, setpasswordShow] = useState("password");
  console.log("login");
  const LoginAccount = () => {
    const userInfo = {
      email: username,
      password: password,
    };
    axios
      .post("http://" + config.ip + ":" + config.port + "/api/login", userInfo)
      .then((response) => {
        // this.setState({ articleId: response.data.id })
        // console.log(response);
        // return false;
        {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.userId);
          if (response.status === 200) {
            navigation("/userpage");
          } else {
            alert(response.data.error);
          }
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="loginForm">
          <div>
            <img src={Avatar} style={{ widthg: 65, height: 65 }} />
          </div>
          <div>
            <TextField
              id="outlined-username"
              type="text"
              label="User name"
              style={{ width: "80%" }}
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              type={passwordShow}
              autoComplete="current-password"
              style={{ width: "80%", marginBottom: "1rem" }}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <div
              onClick={() => {
                setpasswordShow("text");
              }}
            >
              Show
            </div>
          </div>
          {/* <Link to="/userpage" style={{ textDecoratrion: "none" }}> */}
          <Stack
            direction="row"
            spacing={1}
            style={{ width: 115, margin: "auto" }}
          >
            <Button
              variant="contained"
              style={{ width: 115 }}
              endIcon={<SendIcon />}
              onClick={() => {
                LoginAccount();
              }}
            >
              Submit
            </Button>
          </Stack>
          {/* </Link> */}
        </div>
      </Box>
    </div>
  );
}
