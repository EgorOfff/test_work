const popupToggle = () => {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('active');
    const body = document.body;
    body.style.overflow = "hidden";
}

const popupClose = () => {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active')
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('active');
    const body = document.body;
    body.style.overflow = "";
}

