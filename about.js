const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// contact me----------------------------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzlCiozWJ7rYNHPoz-vilieQw-ddtHNGBrkVc9Tw_RYg1IUZk7rMWKuPDEdw_5c5YZTWQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
console.log(msg);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
