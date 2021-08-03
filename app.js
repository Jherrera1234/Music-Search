const DOMAIN = 'http://ws.audioscrobbler.com/2.0/?';
const API_KEY = '1c016c221b041952182fccd590cdaeda'
const METHOD1 = 'artist.gettoptracks'
//const ARTIST = 'IDK'
//const BASE_URL = `${DOMAIN}method=${METHOD1}&artist=${ARTIST}&api_key=${API_KEY}&format=json`;

const button = document.querySelector('#search')

function renderArtist(music) {

  for (let i = 0; i < 26; i++) {
    let artistElements = `
    <h1>${music.Title}</h1>
    <img src="${music.Poster}">
    <h2>Year-Released: ${music.Year}</h2>
    <h3>Type: ${music.Type}</h3>

    `
  }


}

const getArtist = async () => {
  try {
    //Will be able to retrieve the necessary data from the music api
    const inputArtist = document.querySelector('input').value
    const artist = await axios.get(`${DOMAIN}method=${METHOD1}&artist=${inputArtist}&api_key=${API_KEY}&format=json`)
    //console.log(artist.data.toptracks.track)

  }
  catch (err) {
    console.error(err)
  }

}




button.addEventListener('click', getArtist)
