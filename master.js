let progressValue = 0;
const progressBar = document.querySelector(".current-progress");
const pbg = document.querySelector(".progress")
const ag = document.querySelector(".ag");

progressBar.style.width = `${progressValue}%`;

const timer = setInterval(() => {
  if (progressValue < 100) {
    progressValue += 10;
    progressBar.style.width = `${progressValue}%`;
  }
  if (progressValue === 100) {
    clearInterval(timer);
    document.querySelector(".coming--soon").classList.remove("hide");
    document.querySelector(".pg").classList.remove("hide");
    ag.classList.add("animate__animated");
    ag.classList.add("animate__fadeOut");
    progressBar.classList.add("hide");
    pbg.classList.add("hide");
    ag.classList.add("hide");
  }
}, 1000);
