function showImage(imageIndex) {
    const imagePath = `./media/profile/profile_photo${imageIndex === 0 ? '1' : imageIndex}.jpg`;
    const img = document.getElementById("profile_image0");

    if (!img.src.match(imagePath)) {
        img.src = imagePath;
    }
}
