import express from 'express';
import fetch from 'node-fetch';
const solarSystem = (await import('npm-solarsystem')).default;


const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', async (req, res) => {
   let url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=solar system";
   let response = await fetch(url)
   let data = await response.json();
   console.log(data);
   let rendomImage = data.hits[0].webformatURL;
   res.render('home.ejs', {"data": data} );
});

// //mercury
// app.get('/mercury', (req, res) => {
//    let planetInfo = solarSystem.getMercury();
//    console.log(planetInfo);
//    res.render('mercury.ejs', {"planetInfo": planetInfo} );
// });

app.get('/planet', (req, res) => {
   let planet_Name = req.query.planetName;

   let planetInfo = solarSystem[`get${planet_Name}`]();

   console.log(planetInfo);
   res.render('planetInfo.ejs', {planetInfo: planetInfo} );
});

app.listen(3000, () => {
   console.log('server started');
});

