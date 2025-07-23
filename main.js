import { Ui } from "./Ui.js";

setTimeout(() => {
  fetch("https://reqres.in/api/users?delay=1", {
    headers: { "x-api-key": "reqres-free-v1" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}, 1000);

let fetchTrue = document.getElementById("fetch-with-header");
let fetchFalse = document.getElementById("fetch-without-header");

fetchTrue.addEventListener("click", (e) => {
  LogsWhenRequest();
  //ApiRequestHeader();
});

fetchFalse.addEventListener("click", (e) => {
  LogsWhenRequest();
  //ApiRequestNoHeader();
});

function LogsWhenRequest() {
  Ui.Status(Ui.loading);
  console.log("Fetching users...");
}
