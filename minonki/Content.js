let MinionsImages = [
    "https://eplakaty.pl/img/towary/1/2016_10/mpp50581-minionki-rozrabiaja-plakat.jpg",
    "https://static.wirtualnemedia.pl/media/top/minionki655.jpg",
    "https://www.gandalf.com.pl/blog/wp-content/uploads/2015/06/MINIONKIlove.jpg",
    "https://media.multikino.pl/thumbnails/50/rc/RTA0OTE1/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIxMTA0IiwiMTAwMDAiXSwibW9kZSI6Imluc2V0In19/uploads/images/films_and_events/zdjecietlo_64539dbf1f.jpg",
    "https://fwcdn.pl/webv/28/85/52885/a1.52885.4.jpg",
    "https://ipicasso.pl/image/cache/data/goods/00000003462-800x800.jpg",
    "https://interaktywnie.com/public/upload/img/272x200/07/03/70381_minionki.jpg",
    "https://ocdn.eu/pulscms-transforms/1/9zsk9kqTURBXy8wYTFhZmU5NWRkNDljYjZlZWIxYjc3YzYyNTExN2ZiMi5qcGVnk5UDAAHNDXjNB5STBc0DFM0BvJMJpjYxZTY3ZQaBoTAB/minionki-w-lipcu-zawitaja-do-opola.jpg",
    "https://ocdn.eu/pulscms-transforms/1/P4Qk9kuTURBXy8wMDdmODI3ZC00NjA4LTQ0NGMtOWY3My1mMGMyZmZjMTQ4OTkuanBlZ5KVAwAAzQ3SzQfIkwXNA0jNAfqCoTABoTEB",
    "https://imagazine.pl/wp-content/uploads/2017/07/Image-03-07-2017-17-51.jpeg",
    "https://icdn.2cda.pl/vid/thumbs/ac720005bba220ad90c6014aab1d4813-12841.jpg_ooooxooxox_1280x720.jpg"
];

const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = MinionsImages[Math.floor(Math.random() * MinionsImages.length)];
}