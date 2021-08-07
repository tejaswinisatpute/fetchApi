let data = document.getElementById("data");
let result = document.getElementById("result");
let spineer = document.getElementById("spineer");
let submitdata = document.getElementById("submitData");
// hi am new
data.addEventListener("click", getData);
submitdata.addEventListener("click", postData);

function toggleSpinner() {
  spineer.classList.toggle("show");
}

function getData() {
  toggleSpinner();
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let output = "User Data";
      data.forEach(function (elem) {
        // return elem;
        output += `
            <ul>
            <li>user id:${elem.userId}</li>
            <li>id:${elem.id}</li>
            <li>title:${elem.title}</li>
            </ul>
            `;
      });
      result.innerHTML = output;
      toggleSpinner();
    });
}

function postData(e) {
  e.preventDefault();
  let text = document.getElementById("input").value;
  let textarea = document.getElementById("textarea").value;
  console.log(text);
//   console.log(textarea);

  // POST request using fetch()
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      title: text,
      body: textarea,
      userId: 1,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => {
      console.log("Output:");
      console.log(json);
    });
}
