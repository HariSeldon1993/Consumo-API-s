//const diginome = document.getElementById('diginome').value;
//let button = document.getElementById('button');

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

button.addEventListener('click', function(){
    const diginome = document.getElementById('diginome').value;
    //fetch(`https://digimon-api.herokuapp.com/api/digimon/name/${diginome}`)
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${diginome}`)
    //fetch(`https://pokeapi.co/api/v2/pokemon/${diginome}`)
       //.then(console.log(diginome))
         .then(response => response.json())
         .then(data =>    
            //console.log(data['data'][0])
            {
                console.log(data['data'][0]);

                document.getElementById('id').value = data['data'][0]['id'];
                document.getElementById('desc').value = data['data'][0]['desc'];
                document.getElementById('atk').value = data['data'][0]['atk'];
                document.getElementById('def').value = data['data'][0]['def'];
                document.getElementById('level').value = data['data'][0]['level'];
                document.getElementById('attribute').value = data['data'][0]['attribute'];
                document.getElementById('race').value = data['data'][0]['race'];
                document.getElementById('type').value = data['data'][0]['type'];

                document.getElementById('myimage').src = data.data[0].card_images[0].image_url;


            }
         
         )
        // .catch(erro => console.log(erro))
})  

//fetch(`https://digimon-api.vercel.app/api/digimon/name/${diginome}`)