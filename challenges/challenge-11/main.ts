export function getIndexsForPalindrome(word: string): number[] | null {
  //

  function isPalindrome(s: string): boolean {
    return s === s.split('').reverse().join('')
  }
  //

  function swapChars(str: string, firstIndex: number, secondIndex: number): string {
    const strArray = str.split('')
    const temp = strArray[firstIndex]
    strArray[firstIndex] = strArray[secondIndex]
    strArray[secondIndex] = temp
    return strArray.join('')
  }
  //

  // Validación para evitar cadenas vacias
  // if (word.length === 0) return null
  // PD: Esta validación no es requerida por el reto y resta ops/s

  // Si ya es palíndromo, retornamos un array vacio tal cual lo indica el reto
  if (isPalindrome(word)) return []

  // Validación
  // Si no es palíndromo y solo es de dos caracteres, no será hacerla palíndromo
  // if (word.length === 2) return null
  // PD: Esta validación no es requerida por el reto y resta ops/s

  // Vamos a contar cuantas ocurrencias hay de cada caracter y lo guardamos en un Map
  const charOccurrencesMap = new Map()
  const originalWordCharArray = word.split('')
  for (const [_, char] of originalWordCharArray.entries()) {
    if (charOccurrencesMap.has(char)) {
      const currentValue = charOccurrencesMap.get(char)
      charOccurrencesMap.set(char, currentValue + 1)
    } else {
      charOccurrencesMap.set(char, 1)
    }
  }

  // Hasta aqui ya tenemos algo como esto:
  // input: aabbcccc
  // charOccurrencesMap = Map(5) {size: 3, a => 2, b => 2, c => 4}

  // Para que una palabra sea palíndromo:
  // Sus caracteres deben tener un número de ocurrencias par
  // Como máximo uno de sus caracteres puede tener un conteo impar de ocurrencias

  // Para que la condición del reto se cumpla. La que especifica es que debemos devolver
  // el cambio requerido para convertir la palabra en palíndromo.

  // Por lo tanto podemos deducir que si hay más de un caracter con conteo impar
  // es imposible hacer que la palabra sea palíndromo.
  let oddCount = 0
  charOccurrencesMap.forEach((value, key) => {
    if (value % 2 !== 0) {
      oddCount++
    }
  })

  // Si hay más de un caracter con conteo de ocurrencias impar, retornamos null
  if (oddCount > 1) return null

  // Si llegamos aqui es porque hay posibilidad de hacer que la palabra se haga palíndromo
  // ahora el detalle es obtener la permutación necesaria para ello
  // Comenzamos con un ciclo anidado que ira llamando la función para permutar y para verificar si es palíndromo
  for (let start = 0; start < word.length; start++) {
    for (let end = 0; end < word.length; end++) {
      // Evitamos hacer comprobaciones cuando start === end
      if (start === end) continue
      if (isPalindrome(swapChars(word, start, end))) return [start, end]
    }
  }

  return null
}
// Esta solución da 25 puntos
// NOTA: Se recomienda eliminar los comentarios antes de subir las soluciones
