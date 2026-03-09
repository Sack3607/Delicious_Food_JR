def cargar_conocimiento():

    with open("datos.txt", "r", encoding="utf-8") as archivo:
        texto = archivo.read()

    return texto