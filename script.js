function showinfo(region) {
const section = document.querySelector(`.${region}-info`);
if (section) {
section.classList.add("active");
section.style.display = "block";
}
}

function hideinfo(region) {
const section = document.querySelector(`.${region}-info`);
if (section) {
section.classList.remove("active");
section.style.display = "none";
}
}
