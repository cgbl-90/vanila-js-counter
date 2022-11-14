let count = 0;
let counter = document.getElementById("count");
let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let styles = e.currentTarget.classList;
    if (styles.contains("decrease")) count--;
    if (styles.contains("increase")) count++;
    if (styles.contains("reset")) count = 0;
    counter.innerHTML = count;
  });
});
