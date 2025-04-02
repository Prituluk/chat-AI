# 🚀 Chat-AI  

> Aplicación que permite probar modelos de IA **localmente** usando **Ollama, Gemma 3 y DeepSeek-R1**.  

---

## 📌 Características  
✅ Funciona localmente sin depender de la nube.  
✅ Soporta modelos ligeros como **Gemma 3 (4B)**.  
✅ Fácil de instalar y usar.  

---

## 🛠️ Instalación y primeros pasos  

### 1️⃣ **Clona este repositorio**  
```sh
git clone https://github.com/tu-usuario/chat-ai.git
cd chat-ai
```
### 2️⃣ **Instala Ollama**  
🔗Descárgalo desde su web oficial: [Ollama](https://ollama.com/download)

### 3️⃣ **Descarga un modelo de IA**  
🔗Busca y descarga un modelo compatible desde: [Modelos AI](https://ollama.com/search)
En este caso, instalamos Gemma 3 (4B):
```sh
ollama pull gemma3:4b
```
⚠️ **IMPORTANTE**: Instala un modelo acorde a tu hardware para evitar sobrecargas o bloqueos en tu PC.

### 4️⃣ **Inicia Ollama**  
Ejecuta el siguiente comando para levantar el servidor de IA:
```sh
ollama serve
```
### 5️⃣ **Ejecuta la app**  
Puedes usar Live Server (VS Code) o cualquier servidor local para abrir el proyecto.

### 6️⃣ **Consulta la IA**  
Haz preguntas y experimenta con la IA en la interfaz de la app.

### 7️⃣ **Finaliza la ejecución**  
Cuando termines, detén Ollama con:
```sh
  Ctrl + C
```


## ⚡ Recomendaciones
✔ Cierra otras aplicaciones para liberar recursos.

✔ Monitorea el uso de RAM y CPU con el Administrador de tareas.

✔ Usa modelos pequeños si tu PC tiene poca RAM (Ej: 4B en lugar de 7B o más). 


## 📜 Licencias de los Modelos
Cada modelo de IA tiene su propia licencia de uso, lo que significa que algunos pueden tener restricciones para aplicaciones comerciales o modificaciones.

🔹 Antes de usar un modelo, revisa su licencia en la web oficial de Ollama:
🔗 [Lista de modelos y sus licencias](https://ollama.com/search)

Ejemplo:

⏺️ Gemma 3 → Licencia de Google, con restricciones de uso comercial.

⏺️ DeepSeek-R1 → Puede tener términos distintos según su proveedor.


## 🤝 Contribuciones
Si tienes mejoras o ideas, ¡haz un fork y envía un pull request! 🚀