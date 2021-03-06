// without id querySelector target the first element eg: first form/input/paragrap/headings etc
const weatherForm = document.querySelector('form') 
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const location = search.value

    //console.log(location)
    const url = '/weather?address=' + location
    fetch(url).then((response) => {
    response.json().then((data) => {
        if(data.error)
        {
            //console.log('Error: ',data.error)
            messageOne.textContent = data.error
        }else{
            //console.log('Forecast: ',data.forecast)
            const weatherMsg = "It's " + data.forecast.temperature + " temperature and its " + data.forecast.weather + ". Wind speed is " + data.forecast.windSpeed + " and wind degree is " + data.forecast.windDegree + "."  
            //console.log('Location: ',data.location)
            messageTwo.textContent = data.location
            messageOne.textContent = weatherMsg
        }
        
    })
})
})