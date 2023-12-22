# Reto 9

Están encendiendo las **luces de Navidad** 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, **siempre deben estar alternadas**. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz, devuelva el **número mínimo** de luces que hay que cambiar para que estén los colores alternos.

```js
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)
```

# Solución

[SPOILER](https://github.com/CarlosUlisesOchoa/advent-js-2023/blob/main/challenges/challenge-9/main.ts)

## Creditos

[@midudev](https://github.com/midudev): Autor de [AdventJS](https://adventjs.dev). Gracias por compartir e incentivar a resolver estos excelentes retos de programación.

[@CarlosUlisesOchoa](https://carlos8a.com): Desarrollador que resolvió el reto y transcribió los tests con la información públicamente disponible en [AdventJS](https://adventjs.dev).

[@Achalogy](https://github.com/Achalogy): Desarrollador que transcribió la descripción del reto con la información públicamente disponible en [AdventJS](https://adventjs.dev)
