# Você poderia pensar que basta, então, mudar o método .compress() para que
# compacte em .zip ao invés de .gz mas não! O compactamento do gzip é mais
# eficiente que o zip . Se mudarmos isso, teremos impacto de custos na nossa
# infraestrutura e não precisamos disso! Precisamos garantir que todos os
# relatórios sejam compactados em .zip e em .gz .
# Exercício de Fixação
# Invista cinco minutos tentando resolver esse problema!
# Spoiler: você encontrará problemas! Quais?


# O problema que você terá aqui é o mesmo que o problema descrito na seção.
# Como estender o meu código? , mas dessa vez herança também não ajuda!
# A seção seguinte explica no detalhe, mas a idéia é que você teria que criar
# uma infinidade de classes herdeiras com código replicado para resolver
# o problema, ou mudar nomes e assinaturas, e nada disso a gente pode fazer!
# A idéia é ilustrar a vantagem de se usar composição !
