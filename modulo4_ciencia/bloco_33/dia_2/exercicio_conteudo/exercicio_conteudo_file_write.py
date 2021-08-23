characters_file = open("meus-personagens-favoritos.txt", mode="w")


characters_file.write("Tio Patinhas \n")
characters_file.write("Neo \n")
characters_file.write("Homem Aranha \n")


print("Batman", file=characters_file)

more_characters = ["Sonho \n", "Ash Ketchum \n"]

characters_file.writelines(more_characters)
characters_file.close()
