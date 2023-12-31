# Reto 10

¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un **árbol de Navidad 🎄 personalizado** en cuestión de segundos.

Para crearlo nos pasan una **cadena de caracteres para formar el árbol** y un **número que indica la altura del mismo**.

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos **de forma cíclica** hasta llegar a la altura indicada. Como **mínimo siempre nos pasarán uno**.

Debemos devolver un **string** multilínea con el árbol de Navidad formado con los adornos, la altura indicada **más una última línea con el tronco formado por el carácter |** en el centro y, finalmente, un salto de línea \n.

Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

```
   1
  2 3
 1 2 3
1 2 3 1
   |
```

Si recibimos la cadena \*@o y el número 3, el árbol que debemos devolver es:

```
  *
 @ o
* @ o
  |
```

Nota:

- El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.
- Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
- Los adornos tienen un espacio en blanco entre ellos de separación.

# Solución

[SPOILER](https://github.com/CarlosUlisesOchoa/advent-js-2023/blob/main/challenges/challenge-10/main.ts)

## Creditos

[@midudev](https://github.com/midudev): Autor de [AdventJS](https://adventjs.dev). Gracias por compartir e incentivar a resolver estos excelentes retos de programación.

[@CarlosUlisesOchoa](https://carlos8a.com): Desarrollador que resolvió el reto y transcribió los tests con la información públicamente disponible en [AdventJS](https://adventjs.dev).

[@Achalogy](https://github.com/Achalogy): Desarrollador que transcribió la descripción del reto con la información públicamente disponible en [AdventJS](https://adventjs.dev)
