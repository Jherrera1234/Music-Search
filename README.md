# Music-Search
Still in the works

## Project Description

This project will be able to have a user search up an artist and see their top tracks and albums. It will have the approiate images to accompany the album and tracks as well.

## API and Data Sample
```
{
toptracks: {
track: [
{
name: "ONCE UPON A TIME (FREESTYLE)",
playcount: "509081",
listeners: "66545",
url: "https://www.last.fm/music/IDK/_/ONCE+UPON+A+TIME+(FREESTYLE)",
streamable: "0",
artist: {
name: "IDK",
url: "https://www.last.fm/music/IDK"
},
image: [
{
#text: "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
size: "small"
},
{
#text: "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
size: "medium"
},
{
#text: "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
size: "large"
},
{
#text: "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
size: "extralarge"
}
],
@attr: {
rank: "1"
}
},
{

```
## Wireframes

![image](https://user-images.githubusercontent.com/56912648/127868415-6877b2ea-b125-4b37-916a-12841b49cd55.png)




#### MVP 
-Ceate a search button and make it interactable 
- Create a title for the webpage
- Have the artist pop up with a picture, their top 5 albums and songs 
- center it all and make it look neat
- put numbers to the albums and tracks according to their ranks
- add some photos for the background of the website 


#### PostMVP  
- Add second API that connects to the link for the songs or plays a sample
- Add some animations for when it loads the tracks or make a slideshow for the user to go through
- give an option for recommended artist based upon their selection

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 3| Pseudocode / render data and attach to the button | Incomplete
|August 4| MVP  | Incomplete
|August 5| Post-MVP/Advanced CSS touch ups | Incomplete
|August 6| Presentations | Incomplete

## Priority Matrix

![image](https://user-images.githubusercontent.com/56912648/127872315-58255f09-1f2f-4810-a247-ce88940fc17d.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3.5hrs| 3.5hrs | 3.5hrs |
| Connecting the api to my laptop | H | 1.5hrs| 1.5hrs | 1.5hrs |
| Retrieve data and test to see the data connects | H | 3hrs| 2.5hrs | 2.5hrs |
| Make button and search of the user | H | 1.5hrs| 1.5hrs | 1.5hrs |
| Render data into an array | H | 4hrs| 4hrs | 4hrs |
| Push data to search and button| H | 5hrs| 5hrs | 2.5hrs |
| Testing | M | 3hrs| 3hrs | 3hrs |
| Add css to the data | H | 3hrs| 2.5hrs | 2.5hrs |
| delete data when a new search is made| H | 3hrs| 2.5hrs | 2.5hrs |
| Add css styling to website | M| 4.5hrs| 4.5hrs | 4.5hrs |
| deploy website | H | 1hrs| 1hrs | 1hrs |
| Add extra css styling | L | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 37hrs| 32hrs | 5hrs |

## Code Snippet


```
function removeTracks() {
  const removeElement = TrackInfo
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}
```

## Change Log
To be updated 
