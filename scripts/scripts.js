function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function getProfileImage() {
   return document.getElementById("profile_image0")
}

function showimg0() {
    let img0 = getProfileImage()
    if (!img0.src.match("/media/profile_photo1.jpg")){
        img0.src = "/media/profile_photo1.jpg";
    }
    else if (!img0.src.match("/media/profile_photo2.jpg")){
        img0.src = "/media/profile_photo2.jpg";
    }
    else if (!img0.src.match("/media/profile_photo3.jpg")){
        img0.src = "/media/profile_photo3.jpg";
    }
    else if (!img0.src.match("/media/profile_photo4.jpg")){
        img0.src = "/media/profile_photo4.jpg";
    }
    else {
        img0.src = "/media/profile_photo.jpg";
    }
}