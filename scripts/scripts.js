function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function showimg0() {
    let img0 = getProfileImage()
    if (!img0.src.match("/media/profile_photo.jpg")){
        img0.src = "/media/profile_photo.jpg"
    }
}
        
function showimg1() {
    let img1 = getProfileImage()
    if (!img1.src.match("/media/profile_photo1.jpg")){
        img1.src = "/media/profile_photo1.jpg"
    }
}

function showimg2() {
    let img2 = getProfileImage()
    if (!img2.src.match("/media/profile_photo2.jpg")){
        img2.src = "/media/profile_photo2.jpg"
    }
}

function showimg3() {
    let img3 = getProfileImage()
    if (!img3.src.match("/media/profile_photo3.jpg")){
        img3.src = "/media/profile_photo3.jpg"
    }
}

function showimg4() {
    let img4 = getProfileImage()
    if (!img4.src.match("/media/profile_photo4.jpg")){
        img4.src = "/media/profile_photo4.jpg"
    }
}  

function getProfileImage() {
   return document.getElementById("profile_image0")
}

// Look into switch statements