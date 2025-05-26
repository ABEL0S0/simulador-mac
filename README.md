# 📦 Simulador de Mensajes con Hash y HMAC

Este proyecto en Node.js simula el proceso de **generar, enviar y verificar** un mensaje utilizando:

- `SHA-256` para hashing.
- `HMAC` para asegurar la autenticidad del mensaje con una clave secreta.

---

## 📂 Estructura del Proyecto

```
.
├── index.js        # Punto de entrada principal
├── envio.js        # Simula el envío de un mensaje con HMAC
├── recibo.js       # Verifica la autenticidad del mensaje
└── mensajes/
    └── mensaje.txt # Archivo generado con el mensaje y su HMAC
```

---

## ⚙️ Requisitos

- Node.js **v18 o superior**
- No se necesita navegador ni servidor web

> ⚠️ Este proyecto usa `import`/`export` y la Web Crypto API (`webcrypto`), por lo que requiere ejecutar Node en modo ES Modules.

---

## 🚀 Instalación y Uso

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/simulador-mac.git
cd simulador-mac
```

2. Asegúrate de tener una carpeta llamada `mensajes/` en la raíz del proyecto:

```bash
mkdir mensajes
```

3. Ejecuta el script principal:

```bash
node index.js
```

---

## 📌 ¿Qué hace?

1. En `index.js`:
   - Genera el hash SHA-256 del mensaje `"Hola que hace"`.
   - Llama a `envio()` para simular el envío.

2. En `envio.js`:
   - Crea un mensaje fijo y calcula su HMAC con una clave secreta.
   - Guarda el mensaje y el HMAC en `mensajes/mensaje.txt`.
   - Llama a `recibo()` para verificarlo.

3. En `recibo.js`:
   - Lee el archivo generado.
   - Calcula el HMAC del mensaje leído y lo compara con el HMAC recibido.
   - Informa si el mensaje es auténtico o ha sido modificado.

---

## 🔐 Seguridad

- ✅ Hash con **SHA-256**
- ✅ Autenticación con **HMAC + clave secreta compartida**

---

## 💡 Ejemplo de salida esperada

```
Mensaje original: Hola que hace
Hash SHA-256: <hash>

Mensaje cifrado: <hmac>
Mensaje: Hola, este es un mensaje cifrado
HMAC: <hmac>
Archivo escrito correctamente

Mensaje recibido: Hola, este es un mensaje cifrado
HMAC recibido : <hmac>
HMAC calculado: <hmac>
El mensaje es igual.
```

---

## 🖼️ Ejemplo de Ejecución

<img src="https://media.discordapp.net/attachments/1235713578556985506/1376387543100162068/image.png?ex=6835244a&is=6833d2ca&hm=e243a8c70d1468a35041b06ca2557ac29e3dc234806a2422c295aa7e3204d66e&=&format=webp&quality=lossless" alt="Ejemplo de ejecución" width="500"/>

---

## 📄 Licencia

Este proyecto está bajo la licencia PUCESE.
