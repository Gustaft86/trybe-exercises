# Temos uma plataforma onde a pessoa jogadora (Player) possui jogos
# (PlayerGame) e participa de torneios (Tournaments). Nesta plataforma temos
# um cliente que precisa consultar os torneios de poker de uma pessoa jogadora.
# Para fins desse exemplo utilizaremos a pessoa jogadora com id 1 e o jogo de
# poker que ela comprou também com id 1.

class Player:
    # ...

    def game(self, game_id):
        '''Busca um jogo da pessoa através do seu id'''
        return PlayerGame.query.filter(game_id=game_id, user_id=self.id).first()

    def tournaments(self, game_id):
        '''Aqui estamos buscando pelos jogos de uma pessoa para encontrar
        seus torneios.

        Ou seja, usamos o middle man PlayerGame para encontrar o torneio.
        O que além de adicionar complexidade de código, adiciona uma consulta
        extra ao banco de dados.
        '''
        return self.game(game_id).tournaments()


class PlayerGame:

    def tournaments(self):
        return Tournament.query.filter(game_id=self.game_id).all()


class Tournament:
    ...


# Código cliente
player = Player(id=1)
print(player.tournaments(1))


# SOLUÇÃO


class Player:

    # ...

    def tournaments(self, game_id):
        '''Aqui removemos o middle man PlayerGame da consulta,
        fazendo-a diretamente em Tournament.

        Com isso simplificamos o nosso código e removemos uma consulta.
        '''
        return Tournament.query.filter(game_id=game_id, user_id=self.id).all()


class Tournament:
    ...


# Código cliente
player = Player(id=1)
print(player.tournaments(1))
