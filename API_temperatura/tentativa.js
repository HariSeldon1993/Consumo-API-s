const cidade = document.querySelector("#cidade")

var lat = 0;
var lon = 0;

var temp_max = document.getElementById('temp_max').value;
var temp_min = document.getElementById('temp_min').value;

// class city{
//     lat = '';
//     lon = '';
// }


//fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=2de0dd57f1caaf4c1f947baf8166c6fb`)
//const cep = document.querySelector("#cep")

// const showData = (result) => {
//     for(const campo in result){
//         if(document.querySelector('#'+campo))
//         document.querySelector('#'+campo).value = result[campo]
//     }
// }

cidade.addEventListener("blur",(e)=>{
    //fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=2de0dd57f1caaf4c1f947baf8166c6fb`)
    
    let search = cidade.value //replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=2de0dd57f1caaf4c1f947baf8166c6fb`, options)
     //.then(response => console.log(response.json()))
    
    .then(response=>{response.json()
    .then(data => {
        //console.log(data[0]['lat'])
        lat = data[0]['lat'];
        lon = data[0]['lon'];

        //console.log(lat)
        //console.log(lon)

                                                                    //>>> CONTINUAR DAQUI!! O Fetch seguinte não é acessado!!!

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=2de0dd57f1caaf4c1f947baf8166c6fb`)
        .then(resposta => {resposta.json()
        .then(dados => 
            //console.log(dados.weather)
            {
                document.getElementById('temperatura').value = dados.main.temp;
                document.getElementById('feels_like').value = dados.main.feels_like;
                document.getElementById('temp_max').value = dados.main.temp_max;
                document.getElementById('temp_min').value = dados.main.temp_min;
                
                document.getElementById('situ').value = dados.weather[0]['main'];
                document.getElementById('desc').value = dados.weather[0]['description'];
                
             }
            
        
        )})
        // .catch(e => console.log('Deu erro: ' + e,message))
        // console.log(cidade.value)
    })}) //   CONTINUAR DAQUI!!! Não consigo acessar LAT e LON!!!
        
    //     // for(let x in data){
    //     //     this.lat = data.lat;
    //     //     this.lon = data.lon;
    //     //     console.log(city)
    //     // }
       
    // })
    //.catch(e => console.log('Deu erro: ' + e,message))

    // const lat = data.lon;
    // console.log(lat);
    // const lon = data.lon;

    // fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2de0dd57f1caaf4c1f947baf8166c6fb`, options)
    //     .then(resposta => {resposta.json()
    //         .then(dados => console.log(dados))})
    //     .catch(e => console.log('Deu erro: ' + e,message))
    // console.log(cidade.value)

    
})   

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>






