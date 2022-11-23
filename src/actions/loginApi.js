import axios from "axios";

export var TOKEN;
async function login(email, password) {
  var test;
  await axios({
    method: "post",
    url: "http://10.0.10.199:5000/login",
    headers: {
      "Content-type": "application/json",
    },
    data: {
      email: email,
      password: password,
    },
  }).then((response) => {
    //console.log(response.data);
    test = response.data;
  });
  return test["access_token"];
}

export { login };
