

function renderGallery(){
    const elGallery = document.querySelector('.gallery-contant')
    const imgs = getImgs()

    const galleryImgs = imgs.map(img => {
        return `<img  onclick="onImgSelect(${img.id})" class="gallery-img gallery-img${img.id}" src="${img.url}">`
    })
    elGallery.innerHTML = galleryImgs.join('')
}

function onImgSelect(imgId){
    setImg(imgId)
    onShowEditor()
    renderMeme()
}