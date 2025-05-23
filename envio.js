import fs from 'fs';
import crypto from 'crypto';
// Importa la función 'recibo' desde el archivo 'recibo.js'
import { recibo } from './recibo.js';

export async function envio() {
    const path = './mensajes/mensaje.txt';
    //Mensaje a cifrar con clave secreta
    const mensaje = 'Hola, este es un mensaje cifrado';
    const clave = 'clave-ultra-super-mega-secreta';
    //crea un HMAC con SHA-256 con la clave secreta
    const hmac = crypto.createHmac('sha256', clave);
    //cifra el mensaje
    hmac.update(mensaje);
    //convierte el HMAC a hexadecimal
    const hmacHex = hmac.digest('hex');
    //escribe el mensaje y el HMAC en un archivo
    const salida = `Mensaje: ${mensaje}\nHMAC: ${hmacHex}`;
    //Crea el archivo si no existe y lo escribe
    fs.writeFile(path, salida, (err) => {
            if (err) {
                console.error('Error al escribir el archivo:', err);
            } else {
                console.log('Mensaje cifrado:', hmacHex);
                console.log(salida);
                console.log('Archivo escrito correctamente');
                //Llamar a la función recibo después de escribir el archivo
                recibo();
            }
        });
}
