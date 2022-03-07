const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
const displayQuotes = quote => {
    const quoteelement = document.getElementById('quote');
    quoteelement.innerText = quote.quote;
}

// country

const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountry();

const displayCountry = counties => {
    const countryDiv = document.getElementById('div');
    counties.forEach(country => {
        const h3 = document.createElement('h3');
        h3.innerText = country.capital;
        countryDiv.appendChild(h3);
    });
}

