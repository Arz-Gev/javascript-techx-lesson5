import { Ui } from "./Ui.js";

let rows = document.querySelectorAll(".display-row");
let fetchTrue = document.getElementById("fetch-with-header");
let fetchFalse = document.getElementById("fetch-without-header");
let reset = document.getElementById("reset");
const api_url = "https://reqres.in/api/users?delay=1";
let arrayOfPersons;

fetchTrue.addEventListener("click", (e) => {
  LogsWhenRequest();
  ApiRequestHeader();
});

fetchFalse.addEventListener("click", (e) => {
  LogsWhenRequest();
  try {
    ApiRequestNoHeader();
  } catch (error) {
    console.log("ABOBA");
  }
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

function ApiRequestHeader() {
  setTimeout(() => {
    fetch(api_url, {
      headers: { "x-api-key": "reqres-free-v1" },
    })
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj.data);

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
  }, 1500);
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

// (async () => {

//   const API_URL = "https://jsonplaceholder.typicode.com/users/1";
//   let outsideData;

//   fetch(API_URL)
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       outsideData = data;
//       console.log("fetch().then()", data);
//     });

//   console.log("outsideData", outsideData);
//   console.log("\n");

//   let outsideDataAsyncAwait;
//   async function fetchData() {
//     try {
//       const res = await fetch(API_URL);
//       const data = await res.json();
//       outsideDataAsyncAwait = data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   await fetchData();
//   console.log("outsideDataAsyncAwait", outsideDataAsyncAwait);
// })();
