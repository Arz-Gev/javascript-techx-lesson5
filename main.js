setTimeout(() => {
  fetch("https://reqres.in/api/users?delay=1", {
    headers: { "x-api-key": "reqres-free-v1" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}, 1000);
