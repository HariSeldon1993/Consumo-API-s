SENAI Su��o-Brasileira

Prof: Julio Favero;
Mat�ria: PWBE;

>>> API_cep


-Como funciona:

	Este projeto tem como objetivo a pr�tica de uso de API's por meio de tr�s exerc�cios, sendo este o primeiro 	deles (CEP, Temperatura e Livre). A proposta � apresentar as informa��es de qualquer cep do Brasil. 	Por ser o primeiro exerc�cio utilizando API com Javascript houve bastante dificuldade na compreens�o de como 	se obter os resultados previstos. Para isso recorri a dois v�deos no YouTube(links em Refer�ncias). O 	primeiro v�deo foi utilizado mais para a compreens�o de como utilizar a API no geral. O segundo foi o guia 	desse trabalho.
	De in�cio foi criado um arquivo HTML, utilizando-se de 'form' com cinco 'div'. A ideia � de que no primeiro 	input, da primeira 'div', seja digitado um n�mero de CEP(com 8 d�gitos). A partir disso, ao "sair" da caixa 	'input' com TAB ou clicando fora da mesma, uma fun��o seja chamada transformando o valor da caixa em uma 	vari�vel "search". Um 'fetch' � executado com o endere�o da API, sendo que nela h� a leitura da vari�vel 	para a obten��o dos dados do CEP. EX: (`https://viacep.com.br/ws/${search}/json/`) . Em seguida, usando o 	'.then', h� o acesso aos dados e a extra��o das informa��es bem como sua exibi��o no documento HTML, 	usando-se o 'querySelector'.

	
 
-API utilizada:

	ViaCEP: https://viacep.com.br/ws/01001000/json/


-Refer�ncias:

	#1: https://www.youtube.com/watch?v=imk6Y0viabg

	#2: https://www.youtube.com/watch?v=Pi6wkdU2vR4
