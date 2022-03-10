SENAI Su��o-Brasileira

Prof: Julio Favero;
Mat�ria: PWBE;

>>> API_temperatura


-Como funciona:

	Este projeto tem como objetivo a pr�tica de uso de API's por meio de tr�s exerc�cios, sendo este o segundo 	deles (CEP, Temperatura e Livre). A proposta � apresentar a temperatura atual de qualquer cidade do Brasil. Ap�s o primeiro exerc�cio(CEP) houve uma melhor compreens�o de como utilizar a API, ent�o um melhor planejamento de como executar este trabalho.
	Ao acessar o site da API do OpenWeather, h� disponibilizada a API, por�m com alguns detalhes a serem considerados: a API precisa de Latitude e Longitude e de uma Chave(API Key). A chave pode ser obtida ao se cadastrar no site. J� Latitude e Longitude precisam da API Geocoding. Com a Geocoding, digita-se um nome de qualquer cidade(em Ingl�s, Portugu�s, etc.) e ent�o esse nome � "transformado"  em uma vari�vel e ent�o lido na API. O retorno das informa��es d� acesso �s LAT e LON, que em seguida s�o tamb�m transformadas em vari�veis e ent�o lidas no pr�ximo fetch, este com a API que buscar� as informa��es da cidade buscada.
	As informa��es ent�o s�o mostrada como Temperatura, Sensa��o T�rmica, T. M�x e T. Min., Situa��o e Descri��o.

	
 
-API utilizada:

	OpenWeather API (Geocoding): http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

	OpenWeather API: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


-Refer�ncias:

	#1: https://openweathermap.org/current

	#2: https://openweathermap.org/api/geocoding-api
