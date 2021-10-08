# Exercício 7 : No conteúdo vimos o que são os protocolos SSL e TLS, vamos
#  subir nosso próprio servidor HTTPS, utilizando nosso próprio certificado.
# 1. Vamos utilizar a ferramenta OpenSSL para gerar nossos certificados. Ela já
#  vem instalada na maioria das distros Linux. No Docker, no entanto, você vai
#  precisar executar:

# $ apt-get update && apt-get install python3 openssl

# Pra conferir se está instalado:

# $ openssl -v

# 2. Para gerar nosso próprio certificado auto-assinado, utilize os comandos
#  abaixo. Lembrando que como nós estamos gerando o certificado, ele não será
#  reconhecido por nenhuma entidade certificadora, de modo que ele só nos
#  servirá para utilizar o protocolo TLS com o HTTPS, não sendo capaz de ser
#  aceito pelo navegador, por exemplo, que não irá aceitá-lo, por não ter sido
#  aprovado por nenhuma entidade reconhecida por ele.

# $ openssl genrsa -out key.pem
# $ openssl req -new -key key.pem -out csr.pem
# $ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
# $ rm csr.pem

# 3. Acabamos de gerar dois arquivos, o cert.pem (o certificado) e o key.pem
#  (chave privada). Copie os dois arquivos para um diretório onde iremos criar
#  nosso servidor HTTPS.

# $ mkdir /some-dir/https-server
# $ mv key.pem /some-dir/https-server
# $ mv cert.pem /some-dir/https-server
# $ cd /some-dir/https-server

# 4. Agora vamos escrever um servidor https usando os módulos nativos do python
#  ssl e http.server . Embora esses módulos tenham muitos muitos recursos
#  (muitos mesmo), nós vamos usar apenas alguns. Tente seguir as instruções a
#  seguir:
# 4.1 Crie um contexto SSL com a classe SSLContext , usando o protocolo de
#  versão mais alta disponível para servidores. (dica: as opções estão listadas
#  na documentação). 4.2 Carregue no contexto SSL a cadeia de certificação,
#  passando tanto a o arquivo de certificação quanto a sua chave. (dica: existe
#  um método para isso). 4.3 Crie uma instância de HTTPServer . O endereço deve
#  ser uma tupla ('localhost', 8000) e para responder as requisições, use
#  SimpleHTTPRequestHandler . (dica: apesar do exemplo na documentação, não
#  use with .) 4.4 Crie um socket server-side usando o método wrap_socket do
#  seu contexto SSL. Passe como parâmetro o socket do servidor
#  ( server.socket ). 4.5 Substitua o socket do servidor pelo socket que vc
#  acabou de criar. 4.6 Execute o servidor com o método serve_forever .

# https.py

import ssl
from http.server import HTTPServer, SimpleHTTPRequestHandler

ssl_context = ssl.SSLContext()
ssl_context.load_cert_chain("cert.pem", keyfile="key.pem")

server_address = ("0.0.0.0", 8000)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)

httpd.serve_forever()

# 5. Acesse o servidor utilizando o navegador. Perceba que ele irá informar que
#  o certificado não é reconhecido por ele, pois não foi assinado por nenhuma
#  entidade da confiança dele.

# 6. Acesse o servidor novamente, porém, desta vez utilizando cURL (de fora do
#  Docker, se vc estiver usando).

# $ curl https://localhost:8000

# 7. Por último, vamos utilizar um recurso do cURL, somente para testes
#  (somente utilize, caso realmente você esteja esperando por aquilo), que é o
#  parâmetro -k ou --insecure . Com ele, falamos para o nosso cURL prosseguir a
#  request mesmo sabendo que a conexão não é "confiável".

# $ curl --insecure https://localhost:8000
