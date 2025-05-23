import fs from 'fs';
import crypto from 'crypto';

export async function recibo() {
    const path = './mensajes/mensaje.txt';
    //Comprueba si el archivo existe
    if (!fs.existsSync(path)) {
        console.error('El archivo no existe.');
        return;
    }
    //Lee el contenido del archivo
    const contenido = fs.readFileSync(path, 'utf8');
    //Separa el mensaje y el HMAC
    const [mensaje, hmacHex] = contenido.split('\n');
    //obtiene el mensaje y el HMAC y elimina el prefijo
    // 'Mensaje: ' y 'HMAC: '
    const mensajeReal = mensaje.replace('Mensaje: ', '');
    const hmacReal = hmacHex.replace('HMAC: ', '');
    //clave secreta para verificar el HMAC que debe ser la misma que se usó para cifrar
    const clave = 'clave-ultra-super-mega-secreta';
    //Crea un HMAC con SHA-256 con la clave secreta
    const hmac = crypto.createHmac('sha256', clave);
    //Cifra el mensaje
    hmac.update(mensajeReal);
    //Convierte el HMAC a hexadecimal
    const hmacCalculado = hmac.digest('hex');
    //Imprime el mensaje y el HMAC
    console.log('\nMensaje recibido:', mensajeReal);
    console.log('HMAC recibido :', hmacReal);
    console.log('HMAC calculado:', hmacCalculado);
    //Compara el HMAC calculado con el HMAC recibido
    if (hmacCalculado === hmacReal) {
        console.log('El mensaje es igual.');
    } else {
        console.log('El mensaje no es igual.');
    }
}