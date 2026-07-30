

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
            ctx.font = `${line.size}px ${line.font}`
            ctx.fillStyle = line.color
            ctx.textAlign = 'center'

            const x = canvas.width / 2
            const y = line.y

            const textWidth = ctx.measureText(line.txt).width
            const textHeight = line.size

            const rectX = x - textWidth / 2
            const rectY = y - textHeight

            line.x = rectX
            line.width = textWidth
            line.height = textHeight

            ctx.fillText(line.txt, x, y)


            if(idx === meme.selectedLineIdx){

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
        const elFontFamSelect = document.querySelector('.font-family-select')

        setLineTxt(elTxtInput.value) 
        setLineColor(elColorInput.value)
        changeFont(elFontFamSelect.value)

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

        elFontFamSelect.addEventListener('change', function () {
            changeFont(elFontFamSelect.value)
            renderMeme()
        })
}

function onDownloadMeme() {
    const canvas = document.querySelector('.meme-canvas')
    const elDownload = document.querySelector('.download-link')

    elDownload.href = canvas.toDataURL('image/jpeg')
}

function onAddLine(){
    const elColorInput = document.querySelector('.color-input')
    const elFontFamSelect = document.querySelector('.font-family-select')

    addLine(elColorInput.value, elFontFamSelect.value)
    switchLine()
    updateEditor()
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
    const elFontFamSelect = document.querySelector('.font-family-select')

    elTxtInput.value = meme.lines[meme.selectedLineIdx].txt
    elColorInput.value = meme.lines[meme.selectedLineIdx].color
    elFontFamSelect.value = meme.lines[meme.selectedLineIdx].font
}

function initCanvas(){
    const elCanvas = document.querySelector('.meme-canvas')
    elCanvas.addEventListener('click', onCanvasClick)
}

function onCanvasClick(ev){
    const meme = getMeme()

    const clickX = ev.offsetX
    const clickY = ev.offsetY

    meme.lines.forEach((line, idx) => {
        if(
            clickX >= line.x &&
            clickX <= line.x + line.width &&
            clickY >= line.y &&
            clickY <= line.y + line.height
        ) {
            meme.selectedLineIdx = idx
            updateEditor()
            renderMeme()
        }
    })
}

function onDeleteLine(){
    deleteLine()

    const meme = getMeme()
    if(meme.lines.length > 0){
        updateEditor()       
    }
    renderMeme()
}

function onSaveMeme(){
    saveMeme()
}

function onSavedMemeClick(idx) {
    const savedMeme = gSavedMemes[idx]

    gMeme = savedMeme.meme

    updateEditor()
    onShowEditor()
    renderMeme()
}

function onMoveLineUp() {
    moveLineUp()
    renderMeme()
}

function onMoveLineDown() {
    moveLineDown()
    renderMeme()
}