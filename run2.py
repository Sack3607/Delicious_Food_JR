from flask import Flask, request, jsonify, send_from_directory
import requests
from lector import cargar_conocimiento

# Inicializar Flask y servir frontend
app = Flask(
    __name__,
    static_folder="frontend",  # Carpeta frontend al mismo nivel que run.py
    static_url_path=""
)

# Cargar conocimiento del archivo
conocimiento = cargar_conocimiento()

# Tu API Key de Groq
API_KEY = "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"

# Rutas del frontend
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(app.static_folder, path)

# Endpoint del chatbot
@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    pregunta_usuario = data.get("mensaje", "")

    prompt = f"""
Responde solo usando la siguiente información.

Información:
{conocimiento}

Pregunta:
{pregunta_usuario}
"""

    respuesta = requests.post(
        "https://api.groq.com/openai/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "llama-3.1-8b-instant",
            "messages": [
                {"role": "system", "content": "Responde solo con la información dada."},
                {"role": "user", "content": prompt}
            ]
        }
    )

    try:
        data_api = respuesta.json()
        contenido = data_api["choices"][0]["message"]["content"]
    except Exception as e:
        contenido = f"Error al obtener respuesta: {e}"

    return jsonify({"respuesta": contenido})

# Levantar la app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)