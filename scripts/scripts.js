function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

const img0 = document.getElementById("profile_image0")
const img1 = document.getElementById("profile_image1")
const img2 = document.getElementById("profile_image2")
const img3 = document.getElementById("profile_image3")
const img4 = document.getElementById("profile_image4")

function showimg0() {
    img0.style.display = "block";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
}

function showimg1() {
    img0.style.display = "none";
    img1.style.display = "block";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
}

function showimg2() {
    img0.style.display = "none";
    img1.style.display = "none";
    img2.style.display = "block";
    img3.style.display = "none";
    img4.style.display = "none";
}

function showimg3() {
    img0.style.display = "none";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
    img4.style.display = "none";
}

function showimg4() {
    img0.style.display = "none";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "block";
}

const img0button = document.getElementById("img0")
const img1button = document.getElementById("img1")
const img2button = document.getElementById("img2")
const img3button = document.getElementById("img3")
const img4button = document.getElementById("img4")

img0button.addEventListener("click", showimg0());
img1button.addEventListener("click", showimg1());
img2button.addEventListener("click", showimg2());
img3button.addEventListener("click", showimg3());
img4button.addEventListener("click", showimg4());