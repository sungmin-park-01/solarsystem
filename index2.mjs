import express from 'express';
import fetch from 'node-fetch';
const solarSystem = (await import("npm-solarsystem")).default;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));


//root route
app.get('/', async (req, res) => {  //also works as app.get('/', async function(req, res) {
   //  let url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=solar_system"
   //  let response = await fetch(url);
   //  let data = await response.json();
   //  console.log(data);
   //  let random0to9 = Math.floor(Math.random() * 50);
   //  let randomImage = data.hits[random0to9].webformatURL;
   //  res.render('home.ejs', {randomImage})
   res.render('home.ejs')
});


app.get('/planet', (req, res) => { 
    let planet_name =req.query.planetName;
    let planetInfo = solarSystem[`get${planet_name}`]();
    //console.log(planetInfo);
    res.render('planetInfo.ejs', {planetInfo, planet_name}) 
});

app.get('/nasaPOD', (req, res) => {
    res.render('nasaPod.ejs')
});

//mercury route
// app.get('/mercury', (req, res) => { 
//     let planetInfo = solarSystem.getMercury();
//     console.log(planetInfo);
//     res.render('mercury.ejs', {planetInfo}) //can do {"planetInfo" : planetInfo} if you want to save it as someting else
// });

app.listen(3000, () => {
    console.log('server started');
});

