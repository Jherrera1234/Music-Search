const DOMAIN = 'http://ws.audioscrobbler.com/2.0/?';
const API_KEY = '1c016c221b041952182fccd590cdaeda'
const METHOD1 = 'artist.gettoptracks'
//const ARTIST = 'IDK'
//const BASE_URL = `${DOMAIN}method=${METHOD1}&artist=${ARTIST}&api_key=${API_KEY}&format=json`;

const button = document.querySelector('#search')

function renderArtist(music) {
  //Will be able to loop through the information array and create the neccessary elements 
  for (let i = 0; i < 26; i++) {
    let artistElements = `
    <h1>${music[i].name}</h1>
    <h2>Rank ${i + 1}</h2>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgnJfzMZ4d_suM4FMnoRnhHjgbyY0vmRnxQfgPZ-PbiZkAGYozqNSzTrXkd9rQjsiKe4&usqp=CAU" style="width: 700px;">
    <h3>Playcount: ${music[i].playcount}</h3>
    `
    //<img src="${music[i].image[1].#text}">
    document.querySelector('#artist-info').insertAdjacentHTML('beforeend', artistElements)

  }
  //return artistElements

}

const getArtist = async () => {
  try {
    //Will be able to retrieve the necessary data from the music api
    const inputArtist = document.querySelector('input').value
    const artist = await axios.get(`${DOMAIN}method=${METHOD1}&artist=${inputArtist}&api_key=${API_KEY}&format=json`)
    //console.log(artist.data.toptracks.track)
    const artistTracks = artist.data.toptracks.track
    renderArtist(artistTracks)
    // console.log(artistTracks[0].name)


  }
  catch (err) {
    console.error(err)
  }

}




button.addEventListener('click', getArtist)
