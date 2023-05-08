

const song1 = new Audio ('audio/01.mp3.mp3')

function playSongOne() {
    console.log('playing song 1 ...')
    song1.play()
    song2.pause()
    song3.pause()
}


function pauseSongOne() {
    console.log('pausing song 1 ...')
    song1.pause()
}

function restartSongOne() {
    console.log('restarting song 1...')
    song1.play()
    song2.pause()
    song3.pause()
}

// Song2 

const song2 = new Audio ('audio/02.mp3.mp3')

function playSongTwo() {
    console.log('playing song 2...')
    song2.play()
    song1.pause()
    song3.pause()
}

function pauseSongTwo() {
    console.log('pausing song 2 ...')
    song2.pause()
}

function restartSongTwo() {
    console.log('restarting song 2...')
    song2.play()
    song1.pause()
    song3.pause()
}

// Song 3 

const song3 = new Audio ('audio/03.mp3..mp3')

function playSongThree() {
     console.log('playing song 3 ...')
     song3.play()
     song1.pause()
     song2.pause()
}

function pauseSongThree() {
    console.log('pausing song 3...')
    song3.pause()
}

function restartSongThree() {
    console.log('restarting song 3...')
    song3.play()
    song1.pause()
    song2.pause()
}