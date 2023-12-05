export function findFirstRepeated(gifts: number[]): number {
  // TODO: Corregir este código para que pase todos los tests
  const uniqueGifts = new Set(gifts);
  if (uniqueGifts.size === gifts.length) {
    return -1;
  }
  return 0;
}
