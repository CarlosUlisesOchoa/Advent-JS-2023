export function findNaughtyStep(original: string, modified: string): string {
  if (original === modified) {
    return ''
  }

  const maxLength = Math.max(original.length, modified.length)

  const modifiedIsLarger = modified.length > original.length

  for (let i = 0; i < maxLength; i++) {
    if (original[i] !== modified[i]) {
      // Si 'modified' es más largo, entonces un paso ha sido añadido.
      if (modifiedIsLarger) {
        return modified[i]
      }
      // Si 'original' es más largo, entonces un paso ha sido eliminado.
      else {
        return original[i]
      }
    }
  }

  // Si llegamos aquí, significa que el último carácter de la cadena más larga es el añadido o eliminado.
  return modifiedIsLarger ? modified[maxLength - 1] : original[maxLength - 1]
}