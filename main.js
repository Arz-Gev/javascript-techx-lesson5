import { Ui } from "./Ui.js";
const api_url = "https://reqres.in/api/users?delay=1";
let rows = document.querySelectorAll(".display-row");
let fetchTrue = document.getElementById("fetch-with-header");
let fetchFalse = document.getElementById("fetch-without-header");
let reset = document.getElementById("reset");
let arrayOfPersons;
let fetching = false;
let header = { "x-api-key": "reqres-free-v1" };

fetchTrue.addEventListener("click", (e) => {
  LogsWhenRequest();
  ApiRequest(header);
});

fetchFalse.addEventListener("click", (e) => {
  LogsWhenRequest();
  ApiRequest(header);
});

reset.addEventListener("click", (e) => {
  Ui.Status(Ui.empty);
  console.clear();
  rows.forEach((row) => {
    row.textContent = "";
  });
});

function LogsWhenRequest() {
  Ui.Status(Ui.loading);
  console.log("Fetching users...");
}

function ApiRequest(headers) {
  setTimeout(() => {
    fetch(api_url, {
      headers,
    })
      .then((response) => response.json())
      .then((obj) => {
        console.table(obj.data);
        arrayOfPersons = obj.data.map((user) => {
          return `${user.first_name}, ${user.last_name}`;
        });
        let i = 0;
        rows.forEach((row) => {
          row.textContent = `${arrayOfPersons[i++]}`;
        });
        Ui.Status(Ui.loaded);
        console.log("fetching succeed");
      })
      .catch((error) => console.error(error));
  }, 1000);
}

function ApiRequestNoHeader() {
  fetch(api_url)
    .then((response) => (dataFromServer = response))
    .catch((error) => {
      throw error;
    });
}

function failed(error) {
  console.error(error);
  Ui.Status(Ui.failed);
  console.log("ABOBA");
}
