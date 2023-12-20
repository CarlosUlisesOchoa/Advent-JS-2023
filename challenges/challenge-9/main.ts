export function adjustLights(lights: string[]): number {
  //
  function calculatePattern(lights: string[], firstColor: string, secondColor: string): number {
    let count = 0
    // Contador para el número de cambios necesarios
    let expectedColor = firstColor
    // El color esperado en la posición actual

    for (const light of lights) {
      if (light !== expectedColor) {
        // Incrementa el contador si el color actual no es el esperado
        count++
      }
      // Alterna el color esperado para la siguiente luz
      expectedColor = expectedColor === firstColor ? secondColor : firstColor
    }
    return count
  }
  //
  // Calcula el número de cambios requeridos para cada patrón
  const pattern1 = calculatePattern(lights, '🔴', '🟢')
  const pattern2 = calculatePattern(lights, '🟢', '🔴')

  // Devuelve el menor número de cambios entre los dos patrones
  return Math.min(pattern1, pattern2)
}
// Esta solución da: 300 puntos
// NOTA: Se recomienda eliminar los comentarios antes de subir las soluciones
