

function onInit(){
    const savedMemes = loadFromStorage(SAVED_MEMES_KEY)

    if (savedMemes) {
        gSavedMemes = savedMemes
    }
    renderGallery()
    renderMeme()
    initInput()
    initCanvas()
    onShowGallery()
}

function onShowGallery(){
    const elGallery = document.querySelector('.gallery')
    const elEditor = document.querySelector('.editor')
    const elSavedMemes = document.querySelector('.saved-memes')

    elGallery.style.display = 'block'
    elEditor.style.display = 'none'
    elSavedMemes.style.display = 'none'
}


function onShowEditor(){
    const elGallery = document.querySelector('.gallery')
    const elEditor = document.querySelector('.editor')
    const elSavedMemes = document.querySelector('.saved-memes')

    elGallery.style.display = 'none'
    elEditor.style.display = 'block'
    elSavedMemes.style.display = 'none'
}

function onShowSavedMemes(){
    const elGallery = document.querySelector('.gallery')
    const elEditor = document.querySelector('.editor')
    const elSavedMemes = document.querySelector('.saved-memes')

    elGallery.style.display = 'none'
    elEditor.style.display = 'none'
    elSavedMemes.style.display = 'block'

    renderSavedMemes()
}