const DOMAIN = 'http://ws.audioscrobbler.com/2.0/?';
const API_KEY = '1c016c221b041952182fccd590cdaeda'
const METHOD1 = 'artist.gettoptracks'
const METHOD2 = 'artist.gettopalbums'
//const ARTIST = 'IDK'
//const BASE_URL = `${DOMAIN}method=${METHOD1}&artist=${ARTIST}&api_key=${API_KEY}&format=json`;

const trackInfo = document.querySelector('#artist-info')
const button = document.querySelector('#search')

function renderArtist(music) {
  //Will be able to loop through the information array and create the neccessary elements 
  for (let i = 0; i < 26; i++) {
    let artistElements = `
    <h1 class="track-name">${music[i].name}</h1>
    <h2 class="track-rank">Rank ${i + 1}</h2>
    <img id="music-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgnJfzMZ4d_suM4FMnoRnhHjgbyY0vmRnxQfgPZ-PbiZkAGYozqNSzTrXkd9rQjsiKe4&usqp=CAU" >
    <h3 class="track-playcount">Playcount: ${music[i].playcount}</h3>
    `
    //<img src="${music[i].image[1].#text}">
    document.querySelector('#artist-info').insertAdjacentHTML('beforeend', artistElements)

  }
  //return artistElements

}

function rednerAlbum(albums) {

  for (let i = 0; i < 26; i++) {
    let artistElements = `
    <h1 class="album-name">${albums[i].name}</h1>
    <h2 class="album-rank">Rank ${i + 1}</h2>
    <img id="album-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCJi_YvsFmZVu_-ZvbIXMU9PH1162Q3ISng&usqp=CAU" >
    <h3 class="album-playcount">Playcount: ${albums[i].playcount}</h3>
    `
    //<img src="${music[i].image[1].#text}">
    document.querySelector('#ablum-info').insertAdjacentHTML('beforeend', artistElements)

  }




}

const getArtist = async () => {
  removeArtistTracks()

  try {
    //Will be able to retrieve the necessary data from the music api
    const inputArtist = document.querySelector('input').value
    const artist = await axios.get(`${DOMAIN}method=${METHOD1}&artist=${inputArtist}&api_key=${API_KEY}&format=json`)
    const artistAlbum = await axios.get(`${DOMAIN}method=${METHOD2}&artist=${inputArtist}&api_key=${API_KEY}&format=json`)
    //console.log(artistAlbum.data.topalbums.album)
    //console.log(artist.data.toptracks.track)
    const artistTracks = artist.data.toptracks.track
    const artistAlbums = artistAlbum.data.topalbums.album
    renderArtist(artistTracks)
    rednerAlbum(artistAlbums)
    // console.log(artistTracks[0].name)


  }
  catch (err) {
    console.error(err)
  }

}

function removeArtistTracks() {
  const removeElement = trackInfo
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}


button.addEventListener('click', getArtist)
