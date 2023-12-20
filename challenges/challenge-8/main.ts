export function organizeGifts(gifts: string): string {
  //
  // El reto no lo pide y puede que nos cueste puntos. Pero podriamos verificar. Si el parámetro de entrada gifts es inválido hacemos un early return.
  // const inputPattern = /^[0-9]+[a-z]([0-9]+[a-z])*$/
  // if(!inputPattern.test(gifts)) {
  //   return 'Invalid input'
  // }

  // Patrón regex que será de utilidad para sacar el tipo de regalo y la cantidad solicitada
  const pattern = /([0-9]+[a-z])/g

  // Si gifts = '76a11b';
  const matches = gifts.match(pattern) || []
  // matches = ['76a', '11b']

  let result = ''

  for (const giftOrder of matches) {
    // Usando regex para separar la parte numérica de la textual
    const [_, giftQuantityString, giftType] = giftOrder.match(/(\d+)([a-zA-Z]+)/) || []
    const giftQuantity = parseInt(giftQuantityString)
    const maxTotalBoxesWithResidual = giftQuantity / 10
    let palletsWeCanStack = 0 // Necesitamos saber cuantos pallets se pueden hacer
    if (maxTotalBoxesWithResidual >= 5) {
      palletsWeCanStack = Math.floor(giftQuantity / 50)
      result += `[${giftType}]`.repeat(palletsWeCanStack)
    }
    let boxesWeCanPack = Math.floor((giftQuantity - palletsWeCanStack * 50) / 10) // Necesitamos saber cuantas cajas podemos empacar
    if (boxesWeCanPack >= 1) {
      result += `{${giftType}}`.repeat(boxesWeCanPack)
    }
    const residual = giftQuantity - (palletsWeCanStack * 50 + boxesWeCanPack * 10)
    if (residual >= 1) {
      result += '(' + giftType.repeat(residual) + ')'
    }
  }

  return result
}
// Esta solución da: 170 puntos
// NOTA: Se recomienda eliminar los comentarios antes de subir las soluciones
