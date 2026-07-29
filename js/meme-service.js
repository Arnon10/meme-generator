

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