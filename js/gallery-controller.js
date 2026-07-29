

function renderGallery(){
    const elGallery = document.querySelector('.gallery-contant')
    const imgs = getImgs()

    const galleryImgs = imgs.map(img => {
        return `<img class="gallery-img gallery-img${img.id}" src="${img.url}">`
    })
    elGallery.innerHTML = galleryImgs.join('')
}