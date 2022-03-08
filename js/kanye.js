const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
const displayQuotes = quote => {
    const quoteelement = document.getElementById('quote');
    quoteelement.innerText = quote.quote;
}

// showing country

const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountry();

const displayCountry = counties => {
    const countryDiv = document.getElementById('div');
    countryDiv.classList.add('country');
    counties.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('diva');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadName('${country.capital}')" >Details</button>
        `;
        countryDiv.appendChild(div);
    });
}

// showing details
const loadName = capital=> {
    const url = `https://restcountries.com/v3.1/capital/${capital}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0]))
}
const displayDetails = country => {
    const countryDiv = document.getElementById('dit');
    countryDiv.classList.add('country');
        const div = document.createElement('div');
        div.classList.add('diva');
        div.innerHTML = `
            <h3>${country.capital}</h3>
            <p>${country.region}</p>
            <p>${country.population}</p>
            <img width="200px" src="${country.flags.png}">
            <p>${country.continents}</p>
        `;
        countryDiv.appendChild(div);
}