# Exercício 3 : Agora vamos criar uma regra para bloquear o tráfego HTTPS. Para
#  isso iremos bloquear a saída de pacotes ( out ou OUTPUT ). Lembre-se, a
#  porta padrão para esse protocolo é a 443 , para especificá-la utilize o
#  parâmetro --sport (Linux), ele utiliza também o protocolo tcp . Para testar
#  sua regra, tente acessar um site pelo navegador que use o protocolo, como o
#  Youtube, o Google ou o Facebook (via curl, se estiver rodando no docker).

# $ iptables -A OUTPUT -p tcp --sport 443 -j REJECT
