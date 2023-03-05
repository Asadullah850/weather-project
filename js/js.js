const APIKEY = `caa0d99e80861c1d77f9cf31f747a303`
const loadData =async city_name => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${APIKEY}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    showData(data)
}

const showData = data =>{
    const setTemp = document.getElementById('setTemp');
    setTemp.innerText = data.main.temp;
    const setName = document.getElementById('set-city-Name');
    setName.innerText = data.name;
    const setCondition = document.getElementById('condition');
    setCondition.innerText = data.weather[0].main
    console.log(data);
}
function enter() {
    const searchField = document.getElementById('sarch-Filed').value;
    loadData(searchField)
}
document.getElementById('search-button').addEventListener('click',function(){
    enter()
})
document.getElementById('sarch-Filed').addEventListener('keypress',function(){
    enter()
})
loadData('dhaka')
