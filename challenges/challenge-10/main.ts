export function createChristmasTree(ornaments: string, height: number): string {
  if (ornaments.length === 0 || height === 0) return '|\n'

  let result: string[] = []
  let currentIndex = 0

  for (let i = 0; i < height; i++) {
    let line = ' '.repeat(height - i - 1)
    // Se agregan los espacios correspondientes a la linea
    for (let j = 0; j < i * 2 + 1; j++) {
      // Número correcto de adornos
      if (j % 2 === 0) {
        line += ornaments[currentIndex]
        // Se agrega el adorno
        currentIndex = (currentIndex + 1) % ornaments.length
        // Se actualiza currentIndex para usar el adorno siguiente
      } else {
        line += ' '
        // Cuando no se agrega adorno, se agrega un espacio
      }
    }
    result.push(line)
    // Se agrega la linea recien creada al Array
  }

  result.push(' '.repeat(height - 1) + '|')
  // Se agrega el tronco del árbol
  // El tronco se posiciona al centro, para lograr esto:
  // Se agregan (height - 1) espacios y luego '|'

  return result.join('\n') + '\n'
}
//
// Esta solución da 240 puntos
// NOTA: Se recomienda eliminar los comentarios antes de subir las soluciones
