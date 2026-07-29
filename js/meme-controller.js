

function renderMeme(){
    const canvas = document.querySelector('.meme-canvas')
    const ctx = canvas.getContext('2d')

    const img = new Image()
    img.src = 'img/1.jpg'

    img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height

        ctx.drawImage(img, 0, 0)

        ctx.font = '30px Ariel'
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'

        ctx.fillText('My first meme!', canvas.width / 2, 50)
    }
}

renderMeme()