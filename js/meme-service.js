

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
            {
                txt: null,
                size: 35,
                color: null,
                font: null,
                x: null,
                y: 50,
                width: null,
                height: null
            }
    ]
}

var gSavedMemes = []
const SAVED_MEMES_KEY = 'savedMemes'

function getMeme(){
    return gMeme
}

function setLineTxt(txt){
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setLineColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function increaseFont(){
    gMeme.lines[gMeme.selectedLineIdx].size += 2
}

function decreaseFont(){
    gMeme.lines[gMeme.selectedLineIdx].size -= 2
}

function changeFont(font){
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function addLine(color, font){
    gMeme.lines.push(
                {
                txt: 'this is another line',
                size: 35,
                color: color,
                font: font,
                x: null,
                y: 50 * (gMeme.lines.length + 1),
                width: null,
                height: null
                }
        )
}

function switchLine(){
    gMeme.selectedLineIdx += 1
    if(gMeme.selectedLineIdx === gMeme.lines.length){
        gMeme.selectedLineIdx = 0
    }
}

function deleteLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)

    if(gMeme.lines.length === 0) return

    if (gMeme.selectedLineIdx > 0) {
        gMeme.selectedLineIdx--
    }
}


function saveMeme(){
    const elCanvas = document.querySelector('.meme-canvas')
    const canvasData = elCanvas.toDataURL()
    gSavedMemes.push({
        img: {
            id: gMeme.selectedImgId,
            url: `img/${gMeme.selectedImgId}.jpg`,
            keywords: ['funny', 'cat']
        },

        meme: {
            selectedImgId: gMeme.selectedImgId,
            selectedLineIdx: gMeme.selectedLineIdx,

            lines: gMeme.lines.map(line => ({
                txt: line.txt,
                size: line.size,
                color: line.color,
                font: line.font,
                x: line.x,
                y: line.y,
                width: line.width,
                height: line.height
            }))
        },

        canvasData
    })

    saveToStorage(SAVED_MEMES_KEY, gSavedMemes)
}

function renderSavedMemes() {
    const elSavedMemesContent = document.querySelector('.saved-memes-content')

    elSavedMemesContent.innerHTML = ''

    gSavedMemes.forEach((savedMeme, idx) => {
        const elImg = document.createElement('img')

        elImg.src = savedMeme.canvasData

        elImg.onclick = () => onSavedMemeClick(idx)

        elSavedMemesContent.appendChild(elImg)
    })
}

function moveLineUp() {
    gMeme.lines[gMeme.selectedLineIdx].y -= 5
}

function moveLineDown() {
    gMeme.lines[gMeme.selectedLineIdx].y += 5
}