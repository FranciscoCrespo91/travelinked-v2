let router = require("express").Router();
let Country = require("../models/Countries.model");
let axios = require("axios");




//Get all Countries in the world

router.get("/countries", async (req, res) => {


try {
  let createdCountries = await Country.find();
  if (!createdCountries.length) {
  let apiCall = await axios.get("https://restcountries.com/v3.1/all");
  let countryData = apiCall.data;
  console.log(apiCall.data.length)
  // Save the country instance to the database
  for (let countryInfo of countryData) {
    let country = new Country({
      flag: countryInfo.flags.png,
      name: countryInfo.name.common,
    });

    await country.save();
  }
  res.render("countries/all-countries", { countries: countryData });
} else {
  let apiCall = await axios.get("https://restcountries.com/v3.1/all");
  let countryData = apiCall.data;
  res.render("countries/all-countries", { countries: countryData });
}

} catch (error) {
  console.log(error)
}
});

//Get all Countries in Europe
router.get("/europe", async (req, res) => {
  let apiCall = await axios.get("https://restcountries.com/v3.1/all");
  let allCountries = apiCall.data;

  let europe = [];

  for (let i = 0; i < allCountries.length; i++) {
    if (allCountries[i].continents[0] === "Europe") {europe.push(allCountries[i]);}
  }
  
  res.render("countries/europe", { europe });
});

//Get all Countries in Asia
router.get("/asia", async (req, res) => {
  let apiCall = await axios.get("https://restcountries.com/v3.1/all");
  let allCountries = apiCall.data;
  let asia = [];

  for (let i = 0; i < allCountries.length; i++) {
    if (allCountries[i].continents[0] === "Asia") {asia.push(allCountries[i]);}
  }

  res.render("countries/asia", { asia });
});

//Get all Countries in America
router.get("/america", async (req, res) => {
  let apiCall = await axios.get("https://restcountries.com/v3.1/all");
  let allCountries = apiCall.data;
  let america = [];

  for (let i = 0; i < allCountries.length; i++) {
    if (allCountries[i].continents[0] === "North America"||allCountries[i].continents[0] === "South America") {
      america.push(allCountries[i]);}
  }

  res.render("countries/america", { america });
});

//Get all Countries in Africa
router.get("/africa", async (req, res) => {
  let apiCall = await axios.get("https://restcountries.com/v3.1/all");
  let allCountries = apiCall.data;

  let africa = [];

  for (let i = 0; i < allCountries.length; i++) {
    if (allCountries[i].continents[0] === "Africa") {africa.push(allCountries[i]);}
  }
  res.render("countries/africa", { africa });
});

//Get all Countries in Oceania
router.get("/oceania", async (req, res) => {
  let apiCall = await axios.get("https://restcountries.com/v3.1/all");
  let allCountries = apiCall.data;

  let oceania = [];

  for (let i = 0; i < allCountries.length; i++) {
    if (allCountries[i].continents[0] === "Oceania") {oceania.push(allCountries[i]);}
  }
  res.render("countries/oceania", { oceania });
});

// Ainda não está a ser usado
router.get("/countries/create", async (req, res) => {
  res.render("countries/add-country");
});


module.exports = router;
