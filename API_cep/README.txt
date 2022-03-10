SENAI Suíço-Brasileira

Prof: Julio Favero;
Matéria: PWBE;

>>> API_cep


-Como funciona:

	Este projeto tem como objetivo a prática de uso de API's por meio de três exercícios, sendo este o primeiro 	deles (CEP, Temperatura e Livre). A proposta é apresentar as informações de qualquer cep do Brasil. 	Por ser o primeiro exercício utilizando API com Javascript houve bastante dificuldade na compreensão de como 	se obter os resultados previstos. Para isso recorri a dois vídeos no YouTube(links em Referências). O 	primeiro vídeo foi utilizado mais para a compreensão de como utilizar a API no geral. O segundo foi o guia 	desse trabalho.
	De início foi criado um arquivo HTML, utilizando-se de 'form' com cinco 'div'. A ideia é de que no primeiro 	input, da primeira 'div', seja digitado um número de CEP(com 8 dígitos). A partir disso, ao "sair" da caixa 	'input' com TAB ou clicando fora da mesma, uma função seja chamada transformando o valor da caixa em uma 	variável "search". Um 'fetch' é executado com o endereço da API, sendo que nela há a leitura da variável 	para a obtenção dos dados do CEP. EX: (`https://viacep.com.br/ws/${search}/json/`) . Em seguida, usando o 	'.then', há o acesso aos dados e a extração das informações bem como sua exibição no documento HTML, 	usando-se o 'querySelector'.

	
 
-API utilizada:

	ViaCEP: https://viacep.com.br/ws/01001000/json/


-Referências:

	#1: https://www.youtube.com/watch?v=imk6Y0viabg

	#2: https://www.youtube.com/watch?v=Pi6wkdU2vR4
