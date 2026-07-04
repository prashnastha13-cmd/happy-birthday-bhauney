function openHeart() {
    const gallery = document.getElementById("gallery");

    gallery.style.display = "block";

    gallery.scrollIntoView({
        behavior: "smooth"
    });
}
