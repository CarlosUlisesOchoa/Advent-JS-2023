export function findFirstRepeated(gifts: number[]): number {
  // Objeto para rastrear la aparición de cada número de regalo.
  const giftAppearanceTracker: Record<number, boolean> = {}
  // Variable para almacenar el primer número de regalo repetido encontrado.
  let firstDuplicate: number = -1

  // Recorremos cada número de regalo en la lista.
  gifts.find((giftNumber: number) => {
    // Verificamos si el número actual ya ha aparecido.
    if (giftAppearanceTracker[giftNumber]) {
      // Si ya ha aparecido, establecemos el primer duplicado con el número actual
      // y retornamos true para detener la búsqueda.
      firstDuplicate = giftNumber
      return true
    }
    // Marcamos el número de regalo como visto, estableciendo su valor en true.
    giftAppearanceTracker[giftNumber] = true
    // Retornamos false para continuar la búsqueda.
    // (El método `find` ignora este false y solo detiene la búsqueda cuando retorna true).
    return false
  })

  // Retornamos el primer duplicado encontrado o -1 si no se encontró ninguno.
  return firstDuplicate
}
// Esta solución da: 190 puntos
// NOTA: Se recomienda eliminar los comentarios antes de subir las soluciones
