SENAI Suíço-Brasileira

Prof: Julio Favero;
Matéria: PWBE;

>>> API_temperatura


-Como funciona:

	Este projeto tem como objetivo a prática de uso de API's por meio de três exercícios, sendo este o segundo 	deles (CEP, Temperatura e Livre). A proposta é apresentar a temperatura atual de qualquer cidade do Brasil. Após o primeiro exercício(CEP) houve uma melhor compreensão de como utilizar a API, então um melhor planejamento de como executar este trabalho.
	Ao acessar o site da API do OpenWeather, há disponibilizada a API, porém com alguns detalhes a serem considerados: a API precisa de Latitude e Longitude e de uma Chave(API Key). A chave pode ser obtida ao se cadastrar no site. Já Latitude e Longitude precisam da API Geocoding. Com a Geocoding, digita-se um nome de qualquer cidade(em Inglês, Português, etc.) e então esse nome é "transformado"  em uma variável e então lido na API. O retorno das informações dá acesso às LAT e LON, que em seguida são também transformadas em variáveis e então lidas no próximo fetch, este com a API que buscará as informações da cidade buscada.
	As informações então são mostrada como Temperatura, Sensação Térmica, T. Máx e T. Min., Situação e Descrição.

	
 
-API utilizada:

	OpenWeather API (Geocoding): http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

	OpenWeather API: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


-Referências:

	#1: https://openweathermap.org/current

	#2: https://openweathermap.org/api/geocoding-api
