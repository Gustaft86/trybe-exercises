# Exercício 2 : Ainda utilizando o cURL, vamos explorar mais alguns conceitos
#  do HTTP, relembre que falamos que o HTTP organiza e dá significado aos dados
#  encapsulados nessa camada, por exemplo, ao vermos um 200 tanto nós como um
#  client HTTP sabe que aquela request foi realizada com sucesso, vamos
#  explorar isso com o cURL.

# 1. Faça uma chamada GET, utilizando o cURL, para "google.com".

# $ curl google.com

# 2. Perceba que foi retornado um 301 , isso quer dizer que existem diversos
#  redirecionamentos que nos encaminha para o lugar certo, no caso, o caminho
#  certo para a página do google é www.google.com . Ao acessarmos pelo
#  navegador, não percebemos isso porquê ele faz o redirecionamento para a
#  página certa para nós ao encontrar o 301 , porém, se você inspecionar a
#  network você irá identificar esse redirecionamento. Faça uma nova chamada
#  a "google.com", porém agora utilizando o parâmetro -L que serve para
#  "seguir redirecionamentos".

# $ curl -L google.com
