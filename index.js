import { webcrypto } from 'crypto';
// Importa la función 'envio' desde el archivo 'envio.js'
import { envio } from './envio.js';

// Asigna el objeto webcrypto a la constante 'crypto'
const crypto = webcrypto;

// Función para generar el hash usando SHA-256 en Hexadecimal
async function generarHash(mensaje) {
    // Crea una instancia de TextEncoder para codificar el mensaje
    const encoder = new TextEncoder();
    const datos = encoder.encode(mensaje);
    // Genera el hash usando SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', datos);
    // Convierte el ArrayBuffer a un array de bytes
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // Convierte cada byte a su representación hexadecimal y une los resultados con un separador vacío
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    // Imprime el mensaje original y el hash en hexadecimal
    console.log("Mensaje original:", mensaje);
    console.log("Hash SHA-256:", hashHex + "\n");
    return hashHex;
}

const mensaje = "Hola que hace";
// Llama a la función generarHash con el mensaje
generarHash(mensaje);
await envio();