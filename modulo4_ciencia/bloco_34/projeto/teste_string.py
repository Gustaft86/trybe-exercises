stock = {
    "id": 1,
    "nome_do_produto": "CALENDULA OFFICINALIS FLOWERING TOP, GERANIUM"
    + "MACULATUM ROOT, SODIUM CHLORIDE, THUJA OCCIDENTALIS LEAFY TWIG, ZINC,"
    + "and ECHINACEA ANGUSTIFOLIA",
    "nome_da_empresa": "Forces of Nature",
    "data_de_fabricacao": "2020-07-04",
    "data_de_validade": "2023-02-09",
    "numero_de_serie": "FR48 2002 7680 97V4 W6FO LEBT 081",
    "instrucoes_de_armazenamento": "in blandit ultrices enim lorem ipsum"
    + "dolor sit amet consectetuer adipiscing elit proin interdum mauris non"
    + "ligula pellentesque ultrices phasellus",
}

print(stock["data_de_fabricacao"])

print(
    "Data de fabricação mais antiga: %s\n" % (stock["data_de_fabricacao"])
    + "Data de validade mais próxima: %s\n" % (stock["data_de_validade"])
    + "Empresa com maior quantidade de produtos estocados: %s"
    % (stock["nome_da_empresa"])
)
