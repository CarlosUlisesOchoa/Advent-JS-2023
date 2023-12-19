export function cyberReindeer(road: string, time: number): string[] {
  //
  const result: string[] = []

  // Podriamos revisar si 'road' está bien formateado, aunque el reto no pide realizar esta verificación
  // const validRoadPattern = /^S[\.\*\|]*$/
  // const isRoadGoodFormatted = validRoadPattern.test(road)

  if (time < 1 || road.length === 0) return result

  let modifiedRoad = road
  let freezeSleigh = false
  let currentSleightPos = 0

  // modifiedRoad: Decidí no modificar la variable recibida 'road' directamente con el fin de mantener buenas prácticas
  // freezeSleigh: Indica si hay algo que nos impida el paso. Mantiene el trineo en la misma posición
  // currentSleightPos: Almacena la posición actual del trineo

  for (let i = 0; i < time; i++) {
    const currentElement = modifiedRoad[i]
    let currentRoadStatus = modifiedRoad
    if (freezeSleigh || currentElement === '|') {
      currentRoadStatus = result[result.length - 1]
      freezeSleigh = true
    } else {
      let partBefore = modifiedRoad.substring(0, currentSleightPos)
      let partAfter = modifiedRoad.substring(currentSleightPos + 1)
      currentRoadStatus = `${partBefore}S${partAfter}`
      currentSleightPos++
    }
    // Agregamos el estado actual de la carretera en el array que devolveremos
    result.push(currentRoadStatus)
    if (i === 0) {
      // Esto es porque en cuanto el trineo avance de la posición inicial se colocará un '.' donde inició la 'S'
      modifiedRoad = `.${road.substring(1)}`
    }
    if (i === 4) {
      // Cuando llegue a la iteracion #5 (ya que se cuenta la iteracion #0)
      // Es hora de abrir las barreras
      modifiedRoad = modifiedRoad.replaceAll('|', '*')
      freezeSleigh = false
    }
  }

  return result
}
