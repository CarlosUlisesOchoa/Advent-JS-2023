export function maxDistance(movements: string): number {
  //
  // Podriamos revisar si 'movements' está bien formateado, aunque el reto no pide realizar esta verificación
  // const validMovementsPattern = /^[><\*]+$/
  // const isMovementsGoodFormatted = validMovementsPattern.test(movements)
  let leftArrows = 0
  let rightArrows = 0
  let wildcards = 0

  // Empecemos recorriendo el array para contar las flechas y los comodines
  for (let i = 0; i < movements.length; i++) {
    const currentElement = movements[i]
    switch (currentElement) {
      case '<':
        leftArrows++
        break

      case '>':
        rightArrows++
        break

      case '*':
        wildcards++
        break

      default:
        break
    }
  }
  // En este punto ya se tiene un conteo de las flechas y su dirección así como de los comodines
  // Para efectos prácticos vamos a asumir que el conteo de flechas a la derecha es mayor
  // Recordemos que se deberan restar los pasos del lado contrario, en este caso se asume que el lado contrario es el izquierdo
  let maxMovements = rightArrows
  let oppositeSideMovements = leftArrows
  if (leftArrows > maxMovements) {
    // Si resulta ser que el conteo de las flechas a la izquierda es mayor, simplemente asignamos valores al contrario
    maxMovements = leftArrows
    oppositeSideMovements = rightArrows
  }

  // Ahora simplemente le agregamos la cantidad de comodines (*) para averiguar la distancia máxima
  maxMovements = maxMovements + wildcards - oppositeSideMovements

  //
  return maxMovements
}
