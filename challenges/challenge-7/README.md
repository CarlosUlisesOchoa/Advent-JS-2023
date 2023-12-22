# Reto 7

Santa está experimentando con nuevos diseños de regalos y **necesita tu ayuda para visualizarlos en 3D**.

Tu tarea es escribir una función que, dado un tamaño n (entero), **genere un dibujo de un regalo en 3D** utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con `#` y las caras con el símbolo que nos pasan como parámetro:

```js
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
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

drawGift(1, '^')
/*
#
*/
```

Importante: Nos han dicho que **siempre hay que dejar un salto de línea al final del dibujo**.

**Nota**: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

# Solución

[SPOILER](https://github.com/CarlosUlisesOchoa/advent-js-2023/blob/main/challenges/challenge-7/main.ts)

## Creditos

[@midudev](https://github.com/midudev): Autor de [AdventJS](https://adventjs.dev). Gracias por compartir e incentivar a resolver estos excelentes retos de programación.

[@CarlosUlisesOchoa](https://carlos8a.com): Desarrollador que resolvió el reto y transcribió los tests con la información públicamente disponible en [AdventJS](https://adventjs.dev).

[@Achalogy](https://github.com/Achalogy): Desarrollador que transcribió la descripción del reto con la información públicamente disponible en [AdventJS](https://adventjs.dev)
