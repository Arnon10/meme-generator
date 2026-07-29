

function renderMeme(){
    const canvas = document.querySelector('.meme-canvas')
    const ctx = canvas.getContext('2d')
    const meme = getMeme()

    const img = new Image()
    img.src = `img/${meme.selectedImgId}.jpg`

    img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height

        ctx.drawImage(img, 0, 0)

        ctx.font = `${meme.lines[0].size}px Ariel`
        ctx.fillStyle = `${meme.lines[0].color}`
        ctx.textAlign = 'center'

        ctx.fillText(meme.lines[0].txt, canvas.width / 2, 50)
    }
}

renderMeme()