document.querySelector('.search-form').addEventListener('submit', function(event){
  event.preventDefault();
  let query = document.querySelector('.search').value;
})
const url = `https://api.unsplash.com/search/photos?query=${EncodeURIComponent(query)}&per_page=30&orientation=landscape&client_id=9VldmherwXTroIkkSXkUQg4cm8VOtcSAnD3nrvQ1Ga8`;


//fetch ('https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515')
//.then( function(resp) {return resp.json()}) //convert data to json
//.then( function(data) {
    //console.log(data);
    //document.querySelector('.city-name').textContent = data.name;
    //document.querySelector('.temperature').textContent = Math.round(data.main.temp - 273) + '\u00B0C';
    //document.querySelector('.disclaimer').textContent = data.weather[0]['description']; 
    //document.querySelector('.feature li').innerHTML = '<img src="https://openweathermap.org/img/wn' + data.weather[0]['icon'] + '@2x.png">';
//})
//.catch(function() {
    //catch any errors
//})
