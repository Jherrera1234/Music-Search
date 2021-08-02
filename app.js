const DOMAIN = 'http://ws.audioscrobbler.com/2.0/?';
const API_KEY = '1c016c221b041952182fccd590cdaeda'
const METHOD1 = 'artist.gettoptracks'
//const ARTIST = 'IDK'
//const BASE_URL = `${DOMAIN}method=${METHOD1}&artist=${ARTIST}&api_key=${API_KEY}&format=json`;

const button = document.querySelector('#search')



const getArtist = async () => {
  try {
    const inputArtist = document.querySelector('input').value
    const artist = await axios.get(`${DOMAIN}method=${METHOD1}&artist=${inputArtist}&api_key=${API_KEY}&format=json`)
    console.log(artist)

  }
  catch (err) {
    console.error(err)
  }

}




button.addEventListener('click', getArtist)
