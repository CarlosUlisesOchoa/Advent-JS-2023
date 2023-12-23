# Reto 4

En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: **las letras dentro de los paréntesis deben ser leídas al revés**.

**Santa necesita que estos mensajes estén correctamente formateados**. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que **pueden existir paréntesis anidados**, por lo que debes invertir los caracteres en el orden correcto.

```js
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
// sa(ualcatn)s
// sa(ualcatn)s
// santaclaus
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
```

Notas:

- Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
- En el mensaje final no deben quedar paréntesis.
- El nivel máximo de anidamiento es 2.

# Solución

[SPOILER](https://github.com/CarlosUlisesOchoa/advent-js-2023/blob/main/challenges/challenge-4/main.ts)

## Creditos

[@midudev](https://github.com/midudev): Autor de [AdventJS](https://adventjs.dev). Gracias por compartir e incentivar a resolver estos excelentes retos de programación.

[@CarlosUlisesOchoa](https://carlos8a.com): Desarrollador que resolvió y compartió la solución del reto actual.

[@Achalogy](https://github.com/Achalogy): Desarrollador que transcribió la descripción y los tests del reto con la información públicamente disponible en [AdventJS](https://adventjs.dev)
