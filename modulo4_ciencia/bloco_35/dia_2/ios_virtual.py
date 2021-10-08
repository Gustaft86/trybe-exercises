# Como você irá configurar uma máquina Linux no seu computador através do
#  docker . Para começar, você precisa de instalar o docker no seu computador.
#  Para isso, utilize o comando brew para auxiliar:

# $ brew install --cask docker

# Em seguida, execute o aplicativo do docker , que foi instalado na sua máquina
#  através do brew , dê privilegio para o docker passando a sua senha e pronto!
#  O docker já está rodando! Para testar, execute o comando abaixo:

# $ docker ps

# Tudo certo até então? Agora rode o comando abaixo para subir uma máquina
#  Linux com a distro ubuntu 20.4 . Estamos passando a tag --privileged para
#  que você consiga executar os comandos dos exercícios sem problemas de
#  permissão de host :

# $ docker run --privileged -p 8000:8000 -it ubuntu:20.04 bash

# Beleza, com a máquina Linux rodando, execute os comandos abaixo para instalar
#  o iptables , o ping e o traceroute:

# $ apt-get update && apt-get install iputils-ping
# $ apt-get update && apt-get install traceroute
# $ apt-get update && apt-get install iptables

# Agora rode os comandos abaixo para testar se está tudo certo:

# $ ping google.com
# $ traceroute google.com
# $ iptables -L

# Se algum deles não funcionar, reinicie o docker através do ícone na barra de
#  tarefas, próximo à data e hora do computador. Em seguida, teste novamente.
# Feito tudo isso, você já tem uma máquina linux sendo executada no seu
#  computador e já está apta ou apto a fazer os exercícios abaixo!
