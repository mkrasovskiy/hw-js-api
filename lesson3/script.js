const photoEl = document.querySelector('.photo');
const nameEl = document.querySelector('.name');
const likeEl = document.querySelector('.like');
const btnEl = document.querySelector('.btn');

const url = 'https://api.unsplash.com/photos/random?client_id=NNVq-ZmKb7_n8XJjF6zr2m33dHljb1clyxRcwmKdSFg';

async function photoApi () {
    try {
        const response = await fetch(url);
        const photo = await response.json();
        return photo;
    } catch (error) {
        console.log(error);
    }
}

async function show () {
    photoApi().then(elem => {
            console.log(elem);
            photoEl.innerHTML = `<img src="${elem.urls.full}" alt="${elem.alt_description}">`
            nameEl.textContent = `Имя фотографа: ${elem.user.name}`
            likeEl.textContent = `${elem.likes}`
            let likecount = elem.likes;
            btnEl.addEventListener('click', function () {
                likeEl.textContent = ++likecount; 
            });
    })

}
setTimeout(function tick() {
    show();
    setTimeout(tick, 1000 * 60 * 60 * 24);
}, 1000);