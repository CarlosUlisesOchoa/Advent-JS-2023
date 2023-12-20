export function findNaughtyStep(original: string, modified: string): string {
  if (original === modified) {
    return ''
  }

  const maxLength = Math.max(original.length, modified.length)

  const modifiedIsLarger = modified.length > original.length

  for (let i = 0; i < maxLength; i++) {
    if (original[i] !== modified[i]) {
      // Si 'modified' es más largo, entonces un paso ha sido añadido.
      // En caso contrario si 'original' es más largo, entonces un paso ha sido eliminado.
      return modifiedIsLarger ? modified[i] : original[i]
    }
  }

  // Si llegamos aquí, significa que el último carácter de la cadena más larga es el añadido o eliminado.
  return modifiedIsLarger ? modified[maxLength - 1] : original[maxLength - 1]
}
// Esta solución da: 340 puntos
// NOTA: Se recomienda eliminar los comentarios antes de subir las soluciones
