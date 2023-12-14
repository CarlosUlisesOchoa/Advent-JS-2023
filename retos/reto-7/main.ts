export function drawGift(size: number, symbol: string): string {
  //
  // Primero sería interesante validar los parametros recibidos (aunque el reto no lo pide y si lo descomentas te restará puntos OJO)
  // if (size < 1 || symbol.length !== 1) return '\n'

  const maxIteractions = size * 2
  const maxLengthPerLine = size * 2 - 1
  const maxLinesAsResult = size * 2 - 1
  const linesArray: string[] = []
  for (let i = 1; i < maxIteractions; i++) {
    let currentLine = ''
    if (i <= size) {
      currentLine += ' '.repeat(size - i)
      if (i === 1) {
        currentLine += '#'.repeat(size - 1)
      } else if (i === size) {
        currentLine += '#'.repeat(size)
        currentLine += symbol.repeat(size - 2)
      } else if (i >= 2 && i < size) {
        currentLine += '#'
        let tempCounter = 0
        while (currentLine.length < maxLengthPerLine - 1) {
          currentLine += symbol
          tempCounter++
          if (tempCounter % (size - 2) === 0) {
            // Recordemos que como máximo puede haber (size - 2) simbolos en fila. Cuando esto sucede deben separarse con '#'
            currentLine += '#'
          }
        }
      }
      currentLine += '#\n'
    } else {
      const linesLeftBeforeFinish = maxLinesAsResult - linesArray.length
      currentLine = linesArray[linesLeftBeforeFinish - 1].trimStart()
    }
    linesArray.push(currentLine)
  }
  return linesArray.join('')
}

const asd1 = drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

// ////////////////////////////////////////////////////////////////////////////////

const asd2 = drawGift(5, 'x')

/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

// ////////////////////////////////////////////////////////////////////////////////

const asd3 = drawGift(1, '^')
/*
#
*/

console.log() // tetemp
