import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import * as axios from "axios";
import ENV from "./config";

function App() {
  const [url, setURL] = useState(null);
  const [oAuth2Client, setOAuth2Client] = useState(null);
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState("");
  const email = "abc@gmail.com";

  function authorize() {
    axios
      .post(ENV.API + `/authorize`, { email: email })
      .then(async (response) => {
        // await response.data.map((item) => {
        // 	console.log(item);
        // });
        setOAuth2Client(response.data.oAuth2Client);
        setURL(response.data.authURL);

        // setVar2(JSON.stringify(response.data.client));
        console.log(response);
        console.log(oAuth2Client);
        console.log(url);
      });
  }

  function verifyCode() {
    axios
      .post(ENV.API + `/verify`, {
        code: code,
      })
      .then(async (response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setSuccess(response.data.success);
        }
        // console.log("sukses", response.data.client);
        // console.log("gagal", response.data.kode);
        console.log(response);
      });
  }

  function test1() {
    axios.post(ENV.API + `/test1`, { email: email }).then(async (response) => {
      console.log(response.data.message);
    });
  }

  console.log(code);

  return (
    <>
      {/* <button onClick={authorize}>authorize</button>
      {url && (
        <>
          <a href={url} target="_blank" rel="noreferrer">
            Get Access token
          </a>
          <div>{url}</div>
        </>
      )}

      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={verifyCode}>send</button>
      {success && (
        <>
          <div>{success}</div>{" "}
        </>
      )} */}
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
