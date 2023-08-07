import MEDALS from "./data.js"


//select the DOM
const select = document.querySelector('#country')


//medals[i].name
function main() {
    createOptions()

    displayData("cambodia")
    select.addEventListener("change", (e) => {
        console.log(e.target.value)
        displayData(e.target.value)
    })

    //Display data in the table
    displayTable()

    //Display percentage
    displayBargraph()
}

function createOptions() {

    select.innerHTML = ''
    for (let i = 0; i < MEDALS.length; i++) {
       // console.log(MEDALS[i].name)
        select.innerHTML += `
            <option value="${MEDALS[i].name}">${MEDALS[i].name}</option>
        `
    }
}

function displayData(countryName) {
   // console.log('you are trying to search', countryName)
    select.value = countryName
    let searchCountry = MEDALS.find((item) => item.name == countryName)
    
   const medalContainer = document.querySelector('.medal-container')

   medalContainer.innerHTML = `
   <img src="./images/${searchCountry.name}.gif" alt="">
        <div class="medal-wrapper">
          <ion-icon name="medal" class="gold"></ion-icon>
          <h3 class="gold">${searchCountry.gold}</h3>
          <ion-icon name="medal" class="silver"></ion-icon>
          <h3 class="silver">${searchCountry.silver}</h3>
          <ion-icon name="medal" class="bronze"></ion-icon>
          <h3 class="bronze">${searchCountry.bronze}</h3>
        </div>
   `
}

function displayTable() {

    const currentDate = document.querySelector('#currentDate')

    let date = new Date()
    currentDate.textContent = `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`

    MEDALS.sort((country_a, country_b) => country_b.gold - country_a.gold)
    const tbody = document.querySelector('tbody')

    console.log(tbody)
    tbody.innerHTML = ``
    for (let i = 0; i < MEDALS.length; i++) {
        let country = MEDALS[i]

        // console.log(country.name, country.gold, country.silver, country.bronze)
        tbody.innerHTML += `
        
        <tr>
        <td>${i + 1}</td>
        <td>
          <div class="row">
            <img src="./images/${country.name}.gif" alt="">
            <p>${country.name}</p>
          </div>
        </td>
        <td>${country.gold}</td>
        <td>${country.silver}</td>
        <td>${country.bronze}</td>
        <td>${country.gold + country.silver + country.bronze}</td>
      </tr>
      `
    }

}

function displayBargraph() {

    const graphWrapper = document.querySelector('.graph-wrapper')

    graphWrapper.innerHTML = ``

    for (let i = 0; i < MEDALS.length; i++) {
        let country = MEDALS[i]
        let percentage = (country.gold *100 / 584).toFixed(0)

        console.log(country.name, percentage)

        graphWrapper.innerHTML += `
        <div class="country">
            <h4>${country.name}</h4>
            <div class="bargraph">
             <div class="bargraph-value" style="width:${percentage}%;">${percentage}%</div>
            </div>
        </div>
        `
    }
}










main()
