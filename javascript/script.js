
function setImageSrcAndTitle(imageId, imageSrc, titleId, titleText) {
    const img = document.getElementById(imageId);
    img.src = imageSrc;
    const title = document.getElementById(titleId);
    title.innerHTML = titleText;
}