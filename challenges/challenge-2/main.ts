export function manufacture(gifts: Array<string>, materials: string): Array<string> {
  return gifts.filter((gift) => {
    for (let i = 0; i < gift.length; i++) {
      if (!materials.includes(gift[i])) {
        // Si algún carácter no está en los materiales,
        // el regalo no se puede fabricar.
        return false
      }
    }
    // Si todos los caracteres están presentes, el regalo se puede fabricar.
    return true
  })
}
