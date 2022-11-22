import axios from "axios";
async function login(email, password) {
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
    console.log(response.data);
  });
}

export { login };
