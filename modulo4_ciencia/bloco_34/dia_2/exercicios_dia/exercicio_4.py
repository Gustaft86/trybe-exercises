# Exercício 4
# Implemente um sistemas de logs por nível de severidade,
# seguindo o diagrama abaixo.


# Classe Log
# Atributos:
# manipuladores - Será inicializado com um conjunto de subclasses de
# ManipuladorDeLog ;
# Métodos:
# adicionar_manipulador - adiciona um manipulador ao conjunto de manipuladores
# do gerenciamento de logs ( Log );
# info - dispara logs com nível de severidade "INFO" ;
# alerta - dispara logs com nível de severidade "ALERTA" ;
# erro - dispara logs com nível de severidade "ERRO" ;
# debug - dispara logs com nível de severidade "DEBUG" ;
# __log - dispara os logs formatados para todos os manipuladores
# (invocado para cada nível de severidade, para evitar duplicação de código);
# __formatar - formata os logs de acordo com o padrão
# "[ERRO - 01/01/2020 13:00:00]: ZeroDivisionError: division by zero";
# A interface de manipulação de logs deve utilizar métodos de classe.
# 🐦 Dica: Você pode utilizar a função print em tela ou em arquivo
# (que pode ter um nome padrão).

from abc import ABC, abstractmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open('log.txt', 'a') as arquivo:
            print(msg, file=arquivo)


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log:
    def __init__(self, manipuladores):
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, msg):
        self.__log('INFO', msg)

    def alerta(self, msg):
        self.__log('ALERTA', msg)

    def erro(self, msg):
        self.__log('ERRO', msg)

    def debug(self, msg):
        self.__log('DEBUG', msg)

    def __log(self, nivel, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, msg))

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f"[{nivel} - {data}]: {msg}"
