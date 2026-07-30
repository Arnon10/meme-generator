

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
                y: null,
                width: null,
                height: null
            }
    ]
}

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
                y: null,
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

function DeleteLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)

    if(gMeme.lines.length === 0) return

    if (gMeme.selectedLineIdx > 0) {
        gMeme.selectedLineIdx--
    }
}