

function onInit(){
    renderGallery()
    renderMeme()
    initInput()
    initCanvas()
    onShowGallery()
}

function onShowGallery(){
    const elGallery = document.querySelector('.gallery')
    const elEditor = document.querySelector('.editor')

    elGallery.style.display = 'block'
    elEditor.style.display = 'none'
}


function onShowEditor(){
    const elGallery = document.querySelector('.gallery')
    const elEditor = document.querySelector('.editor')

    elGallery.style.display = 'none'
    elEditor.style.display = 'block'
}