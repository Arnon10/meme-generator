

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

        meme.lines.forEach((line, idx) => {
            ctx.font = `${line.size}px Arial`
            ctx.fillStyle = line.color
            ctx.textAlign = 'center'
            ctx.fillText(line.txt, canvas.width / 2, 50 * (idx + 1))
            if(idx === meme.selectedLineIdx){
                const textWidth = ctx.measureText(line.txt).width
                const textHeight = line.size

                const rectX = canvas.width / 2 - textWidth / 2
                const rectY = 50 * (idx + 1) - textHeight

                ctx.lineWidth = 3 
                ctx.strokeRect(rectX , rectY, textWidth + 5, textHeight + 5)
            }
        })
    }
}

function initInput(){
        const elTxtInput = document.querySelector('.text-input')
        const elColorInput = document.querySelector('.color-input')
        const elIncreaseFontBtn = document.querySelector('.increase-font-btn')
        const elDecreaseFontBtn = document.querySelector('.decrease-font-btn')

        setLineTxt(elTxtInput.value)
        setLineColor(elColorInput.value)

        elTxtInput.addEventListener('input', function () {
            setLineTxt(elTxtInput.value)
            renderMeme()
        })

        elColorInput.addEventListener('input', function () {
            setLineColor(elColorInput.value)
            renderMeme()
        })

        elIncreaseFontBtn.addEventListener('click', function () {
            increaseFont()
            renderMeme()
        })

        elDecreaseFontBtn.addEventListener('click', function () {
            decreaseFont()
            renderMeme()
        })
}

function onDownloadMeme() {
    const canvas = document.querySelector('.meme-canvas')
    const elDownload = document.querySelector('.download-link')

    elDownload.href = canvas.toDataURL('image/jpeg')
}

function onAddLine(){
    addLine()
    renderMeme()
}

function onSwitchLine(){
    switchLine()
    updateEditor()
    renderMeme()
}

function updateEditor(){
    const meme = getMeme()
    const elTxtInput = document.querySelector('.text-input')
    const elColorInput = document.querySelector('.color-input')

    elTxtInput.value = meme.lines[meme.selectedLineIdx].txt
    elColorInput.value = meme.lines[meme.selectedLineIdx].color
}