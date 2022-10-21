let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".number");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => statsCount(num));
    }
    started = true;
  }
};

function statsCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10 / goal);
}
