const DOMAIN = 'http://ws.audioscrobbler.com/2.0/?';
const API_KEY = '1c016c221b041952182fccd590cdaeda'
const METHOD1 = 'artist.gettoptracks'
const METHOD2 = 'artist.gettopalbums'
const METHOD3 = 'artist.getinfo'
const METHOD4 = 'artist.getsimilar'


const bioInfo = document.querySelector('#artist-bio')
const trackInfo = document.querySelector('#artist-info')
const albumInfo = document.querySelector('#ablum-info')
const recomInfo = document.querySelector('#recomm-Artist')
const button = document.querySelector('#search')

function renderArtistBio(music) {
  let bioElements = `
  <div class = "bio-elements">
  <p>${music}</p>
  </div>
  `
  document.querySelector('#artist-bio').insertAdjacentHTML('beforeend', bioElements)

}




function renderArtist(music) {
  //Will be able to loop through the information array and create the neccessary elements 
  for (let i = 0; i < 10; i++) {
    let artistElements = `
    <div class = 'artist-Elements'>
    <h2 class="track-name">${music[i].name}</h2>
    <h2 class="track-rank">Rank ${i + 1}</h2>
    <img id="music-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgnJfzMZ4d_suM4FMnoRnhHjgbyY0vmRnxQfgPZ-PbiZkAGYozqNSzTrXkd9rQjsiKe4&usqp=CAU" >
    <h3 class="track-playcount">Playcount: ${music[i].playcount}</h3>
    <a class="url" href="${music[i].url}">URL:${music[i].name}</a>
    </div>
    `
    //<img src="${music[i].image[1].#text}">
    // Attach all the created elements and attaches it to artist info 
    document.querySelector('#artist-info').insertAdjacentHTML('beforeend', artistElements)

  }
  //return artistElements

}

function rednerAlbum(albums) {

  for (let i = 0; i < 10; i++) {
    let artistElements = `
    <div class ='album-elements'>
    <h2 class="album-name">${albums[i].name}</h2>
    <h2 class="album-rank">Rank ${i + 1}</h2>
    <img id="album-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCJi_YvsFmZVu_-ZvbIXMU9PH1162Q3ISng&usqp=CAU" >
    <h3 class="album-playcount">Playcount: ${albums[i].playcount}</h3>
    <a class="url" href="${albums[i].url}">URL:${albums[i].name} </a>
    </div>
    `
    //<img src="${music[i].image[1].#text}">
    document.querySelector('#ablum-info').insertAdjacentHTML('beforeend', artistElements)

  }

}


function recommendArtist(artistData) {

  for (let i = 0; i < 5; i++) {
    let recomElements = `
    <div class ='recomm-elements'>
    
    <a href="${artistData[i].url}">URL:${artistData[i].name} </a>
    </div>
    `
    // <h3 class="recomm-name">${artistData[i].name}</h1>
    //<img src="${music[i].image[1].#text}">
    document.querySelector('#recomm-Artist').insertAdjacentHTML('beforeend', recomElements)

  }


}





const getArtist = async () => {
  removeArtistTracks()
  removeArtistAlbum()
  removeArtistBio()
  removeRecommended()
  try {
    //Will be able to retrieve the necessary data from the music api
    const inputArtist = document.querySelector('input').value
    const artist = await axios.get(`${DOMAIN}method=${METHOD1}&artist=${inputArtist}&api_key=${API_KEY}&format=json`)
    const artistAlbum = await axios.get(`${DOMAIN}method=${METHOD2}&artist=${inputArtist}&api_key=${API_KEY}&format=json`)
    const artistBios = await axios.get(`${DOMAIN}method=${METHOD3}&artist=${inputArtist}&api_key=${API_KEY}&format=json`)
    const artistRecom = await axios.get(`${DOMAIN}method=${METHOD4}&artist=${inputArtist}&api_key=${API_KEY}&format=json`)

    //console.log(artistAlbum.data.topalbums.album)
    //console.log(artist.data.toptracks)
    //console.log(artistBios.data.artist.bio.summary)
    // console.log(artistRecom.data.similarartists.artist)
    //neccessary pathway to get to the track information
    const artistTracks = artist.data.toptracks.track
    //neccessary pathway to get to the artist top albums
    const artistAlbums = artistAlbum.data.topalbums.album
    //neccessary way to get to the artist bio summary
    const bio = artistBios.data.artist.bio.summary
    //neccessary pathway to get to the recommended artist data
    const recommend = artistRecom.data.similarartists.artist

    renderArtist(artistTracks)
    rednerAlbum(artistAlbums)
    renderArtistBio(bio)
    recommendArtist(recommend)
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

function removeArtistAlbum() {
  const removeElement = albumInfo
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}

function removeArtistBio() {
  const removeElement = bioInfo
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}

function removeRecommended() {
  const removeElement = recomInfo
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }

}


button.addEventListener('click', getArtist)
