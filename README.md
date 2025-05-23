# 📦 Simulador de Mensajes con Hash y HMAC

Este proyecto en Node.js simula el proceso de enviar y verificar un mensaje utilizando **SHA-256** para hashing y **HMAC** para asegurar la autenticidad del mensaje con una clave secreta.

## 📂 Estructura del proyecto

```
.
├── index.js        # Punto de entrada principal
├── envio.js        # Simula el envío de un mensaje con HMAC
├── recibo.js       # Verifica la autenticidad del mensaje
└── mensajes/
    └── mensaje.txt # Archivo generado con el mensaje y su HMAC
```

## ⚙️ Requisitos

- Node.js v18 o superior  
- No se necesita navegador ni servidor web

> ⚠️ Usa `import` y WebCrypto API, por lo que debe ejecutarse como módulo ES y con soporte moderno de Node.js.

## 🚀 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/simulador-mac.git
cd simulador-mac
```

2. Ejecuta el script principal:

```bash
node index.js
```

> Asegúrate de que tienes una carpeta llamada `mensajes/` en el mismo directorio.

## 📌 ¿Qué hace?

1. En `index.js`:
   - Genera un hash SHA-256 del mensaje `"Hola que hace"` usando la Web Crypto API.
   - Llama a `envio()`.

2. En `envio.js`:
   - Crea un mensaje y genera un HMAC con una clave secreta.
   - Guarda ambos en un archivo `mensajes/mensaje.txt`.
   - Llama a `recibo()` para verificar.

3. En `recibo.js`:
   - Lee el archivo, recalcula el HMAC y compara ambos.
   - Informa si el mensaje ha sido modificado.

## 🔐 Seguridad

- Usa **SHA-256** para hashing.
- Usa **HMAC con SHA-256** y una clave secreta para asegurar la integridad del mensaje.

## 📄 Ejemplo de salida

```
Mensaje original: Hola que hace
Hash SHA-256: <...>

Mensaje cifrado: <hmac>
Mensaje: Hola, este es un mensaje cifrado
HMAC: <hmac>
Archivo escrito correctamente

Mensaje recibido: Hola, este es un mensaje cifrado
HMAC recibido : <hmac>
HMAC calculado: <hmac>
El mensaje es igual.
```