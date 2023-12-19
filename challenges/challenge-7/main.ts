export function drawGift(size: number, symbol: string): string {
  //
  // Definimos algunas constantes para controlar las iteraciones y la longitud de las líneas
  const maxIteractions = size * 2
  const maxLengthPerLine = maxIteractions - 1
  const maxLinesAsResult = maxIteractions - 1
  const linesArray: string[] = []

  // Bucle principal en donde con cada iteración se construirá cada línea del regalo 3D
  for (let i = 1; i < maxIteractions; i++) {
    let currentLine = ''

    // Construcción de la primera mitad del regalo
    if (i <= size) {
      // Esto agrega los espacios iniciales para la inclinación 3D
      currentLine += ' '.repeat(size - i)

      // Primera línea: solo borde superior del regalo
      if (i === 1) {
        currentLine += '#'.repeat(size - 1) // i = 1
      }
      // Línea central: toda la anchura del regalo
      else if (i === size) {
        currentLine += '#'.repeat(size)
        currentLine += symbol.repeat(size - 2)
      }
      // Líneas intermedias: combinación de borde y símbolo
      else if (i >= 2 && i < size) {
        currentLine += '#'
        let symbolInSerieCounter = 0
        while (currentLine.length < maxLengthPerLine - 1) {
          currentLine += symbol
          symbolInSerieCounter++
          // Insertamos un '#' después de cada (size - 2) símbolos
          if (symbolInSerieCounter === size - 2) {
            currentLine += '#'
            symbolInSerieCounter = 0
          }
        }
      }
      // Añadimos borde derecho y salto de línea
      currentLine += '#\n'
    }
    // Construcción de la segunda mitad del regalo
    else {
      // Reutilizando líneas previas pero no sin antes quitarles los espacios iniciales
      const linesLeftBeforeFinish = maxLinesAsResult - linesArray.length
      currentLine = linesArray[linesLeftBeforeFinish - 1].trimStart()
    }
    // Añadimos la línea construida al array
    linesArray.push(currentLine)
  }
  // Unimos todas las líneas en una sola cadena y la devolvemos
  return linesArray.join('')
}
