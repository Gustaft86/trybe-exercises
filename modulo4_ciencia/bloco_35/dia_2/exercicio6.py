# Exercício 6 : Agora, vamos utilizar um tipo de proxy bem legal que pode ser
#  bastante útil no nosso dia como pessoas desenvolvedoras o NGROK
#  (https://ngrok.com/), com ele conseguimos criar um túnel para o nosso
#  localhost .
# 1. Crie um servidor HTTP em sua máquina executando na porta 80 , pode ser um
#  frontend ou um backend criado em aulas anteriores.
# Python é um brinquedo que vem com todos os acessórios, lembra? Claro que ele
#  vem com um servidor http pronto pra usar! Vamos criar um diretório novo e
#  rodar o servidor lá dentro!

# $ mkdir diretorio && cd diretorio
# $ python3 -m http.server 80

# 2. Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência,
#  conforme instruções no site oficial .

# $ unzip /path/to/ngrok.zip

# 3. Conforme instruções do site, crie um túnel para a porta 80 de sua máquina.

# $ ./ngrok http 80

# 4. Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar
#  de outros dispositivos, como seu smartphone ou outro computador 😎.

# $ ./ngrok http 80
