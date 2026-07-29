

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
            {
                txt: null,
                size: 35,
                color: null,
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

function addLine(){
    gMeme.lines.push(
                {
                txt: 'this is another line',
                size: 35,
                color: '#ffffff'
                }
        )
}

function switchLine(){
    gMeme.selectedLineIdx += 1
    if(gMeme.selectedLineIdx === gMeme.lines.length){
        gMeme.selectedLineIdx = 0
    }
}