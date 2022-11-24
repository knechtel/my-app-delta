import axios from "axios";
import { LOGIN } from "../util/urls";

async function login(email, password) {
  var token;
  await axios({
    method: "post",
    url: LOGIN,
    headers: {
      "Content-type": "application/json",
    },
    data: {
      email: email,
      password: password,
    },
  }).then((response) => {
    //console.log(response.data);
    token = response.data;
  });
  return token["access_token"];
}

export { login };
