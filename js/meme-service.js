

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
            {
                txt: 'Make iran great agein',
                size: 35,
                color: 'red'
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