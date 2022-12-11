import axios from "axios";
import { LOGIN, REFRESH } from "../util/urls";

const login = async (email, password) => {
  var token;
  // fetch(LOGIN, {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     email: email,
  //     password: password,
  //   }),
  // }).then((response) => {
  //   token = response.data;
  //   console.log(token)
  // });

  try {
    console.log("Inside function login");
    await axios({
      method: "POST",
      url: LOGIN,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Content-Type": "application/json",
        Pragma: "no-cache",
      },
      data: JSON.stringify({ email: email, password: password }),
    }).then((response) => {
      console.log("mais um teste! ");
      console.log(response.data);
      token = response.data;
    });
  } catch (err) {
    console.log(err);
    if (err.response.status == 405) {
      console.log("entrou aqui ...");
      await axios({
        method: "GET",
        url: REFRESH,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Content-Type": "application/json",
          Pragma: "no-cache",
        },
        data: JSON.stringify({ email: email, password: password }),
      }).then((response) => {
        console.log("mais um teste! ");
        console.log(response.data);
        token = response.data;
      });
    }
    throw new Error("Unable to get a token.");
  }

  return token["access_token"];
};

export { login };
