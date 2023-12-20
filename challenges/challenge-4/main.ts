export function decode(message: string): string {
  // Inicializamos newMessage con el mensaje original
  let newMessage = message

  // Continuamos el proceso mientras haya paréntesis en el mensaje
  while (newMessage.includes('(')) {
    // Encuentra el índice del primer paréntesis de cierre
    let closeIndex = newMessage.indexOf(')')
    // Encuentra el índice del último paréntesis de apertura antes del paréntesis de cierre
    let openIndex = newMessage.lastIndexOf('(', closeIndex)

    // Extrae la cadena que está entre los paréntesis
    let toReverse = newMessage.substring(openIndex + 1, closeIndex)
    // Invierte la cadena extraída
    let reversed = toReverse.split('').reverse().join('')

    // Construye el nuevo mensaje reemplazando la cadena original entre los paréntesis
    // con la cadena invertida y eliminando los paréntesis
    newMessage = newMessage.substring(0, openIndex) + reversed + newMessage.substring(closeIndex + 1)
  }

  // Devuelve el mensaje decodificado
  return newMessage
}
// Esta solución da: 210 puntos
// NOTA: Se recomienda eliminar los comentarios antes de subir las soluciones
