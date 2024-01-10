export function checkIsValidCopy(original: string, copy: string): boolean | null {
  // Verificar si las longitudes de las cadenas son iguales.
  if (original.length !== copy.length) return false

  // Definir la secuencia de símbolos permitidos para degradación.
  const symbolSequence = '#+:. '

  // Inicializar la variable para mantener si la copia es válida.
  let isValidCopy = true

  // Iterar sobre cada carácter de la cadena original.
  for (let i = 0; i < original.length; i++) {
    const originalChar = original[i]
    const copyChar = copy[i]

    // Encontrar el índice del carácter original en la secuencia de símbolos.
    const symbolIndex = symbolSequence.indexOf(originalChar.toLowerCase())

    // Determinar los símbolos permitidos para degradación del carácter actual.
    let allowedSymbols = symbolIndex !== -1 ? symbolSequence.slice(symbolIndex) : symbolSequence

    // Crear una cadena que incluye el carácter original (en ambas mayúsculas y minúsculas) y los símbolos permitidos.
    const validChars = originalChar + originalChar.toLowerCase() + allowedSymbols

    // Verificar si el carácter de la copia es válido.
    const isCharValid = validChars.includes(copyChar)

    // Si el carácter original es un espacio, el carácter de la copia también debe serlo.
    const isSpaceCheckValid = originalChar === ' ' ? copyChar === ' ' : true

    // Actualizar el estado de la validez de la copia.
    isValidCopy = isValidCopy && isCharValid && isSpaceCheckValid
  }

  return isValidCopy
}
