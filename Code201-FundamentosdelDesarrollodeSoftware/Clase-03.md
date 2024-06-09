#  Listas en HTML, Control de flujo en JS, y CSS: Box Model

## Aprende HTML

### Listas Ordenada y No ordenada 

**1.¿Cuándo se puede utilizar una lista no ordenada en tu documento HTML?**

Cuando necesites agrupar elementos que no tienen un orden numérico y su orden en la lista no tiene sentido y se muestran con viñetas.

**2.¿Cómo cambias el estilo bullet de la lista de elementos no ordenados?**

Para cambiar el estilo bullet se utiliza la propiedad de estilos de css list-style-type.

**3.¿Cuándo debes usar una lista ordenada o lista no ordenada en tu documento HTML?**

+ Lista ordenada: cuando tienes una lista de elementos que se deben colocar en un orden concreto.
  
Ejemplo: Pasos de una receta.

+ lista no ordenada: cuando quieres agrupar elementos relacionados sin ningún orden en concreto.

Ejemplo: Los alumnos del aula de 3B son : Ana, Juan, Luz, Pedro, etc.

**4.Describe dos formas en las que puedes cambiar los números en los elementos de la lista proporcionados por una lista ordenada.**

+ Usando el tipo de número romano

  `<ol type="i">`
  
  `<li>Introducción</li>`
  
  `<li>Lista de personal</li>`
  
  `<li>Conclusion</li>`
  
  `</ol>`
  
  Se mostraría de esta manera:
  
  <ol type="i">
  <li>Introducción </li>
  <li>Lista de personal</li>
  <li>Conclusion</li>
  </ol>

+ Usando el atributo de inicio

  `<p>`Lugares de finalización de las concursantes que no están en el círculo de ganadores:`</p>`

  `<ol start="4">`
  
  `<li>Santiago Perez</li>`
  
  `<li>Luana Martinez</li>`
  
  `<li>Alejandro Flores</li>`
  
  `</ol>`

  4. Santiago Perez
  5. Luana Martinez
  6. Alejandro Flores

### Aprende CSS

**1.Describe las propiedades de margin y padding en CSS como si fueran los personajes de una historia. ¿Cuál es su rol en la historia: “El Box Model”?**

Había un cuarto llamado "El box model" dónde era el mundo de las cajas, había un jefe, el que protegía a todos, el aclamado "Margin", siempre estaba al pediente de que todo marchara muy bien, que nadie este fuera de su espacio establecido. El cuarto se divida en tres partes. Negra era la primera hija de margin y se encargaba del content box, la segunda azul, se encargaba del padding box y la última Rosada se encargaba del  border box, ellas eran su mano derecha para que todo funcionara muy bien. Un día azul se salió de su lugar establecido y todo se desordenó, su función era de mantener el espacio dentro de cada caja  para separar el contenido de cada caja de los bordes de su marco, su padre se molestó mucho con ella porque tuvieron que volver a ordenar todas cajas y eso les tomo mucho tiempo y le dejo bien claro que no puede salir de su lugar porque todos perderían la vida, asi que margin tuvo que controlar el espacio entre las diferentes cajas y establecer un nuevo diseño estucturado y personalizado para que nadie se vuelva a salir control.

**2.Enumera y describe las cuatro partes de un box del elementos HTML según el box model.**

1. El contenido de la caja o Content box:
El área donde se muestra el contenido y se cambia de tamaño con width y height.
2. El relleno de la caja o Padding box:
Es el espacio en blanco alrededor del contenido; se puede cambiar de tamaño usando la propiedad padding y otras propiedades relacionadas.
3. El borde de la caja o Border box:
Envuelve el contenido y el de relleno, se puede cambiar su tamaño y estilo utilizando la propiedad border y otras propiedades relacionadas.
4. El margen de la caja o Margin box:
Es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos, se puede cambiar su tamaño usando la propiedad margin y otras propiedades relacionadas.

### Aprende JS

**1.¿Qué tipos de datos puedes almacenar en un Array?**

Se puede almacenar varios tipos de datos como: cadenas, números, objetos e incluso otras matrices. También se puede mezclar tipos de datos en una sola matriz.

**2.¿El array people es un array de JavaScript válido? De ser así, ¿cómo puedo acceder a los valores almacenados? Y si no, ¿por qué?**


**3.Enumera cinco opreadores abreviados de asignación en javascript y describe lo que hacen.**
**4.Lee el código a continuación, evalúa la últimaexpresión y explica cuál sería el resultado y por qué.**
**5.Describe un ejemplo cotidiano de por qué una declaración condicional se debería usar en un programa en JavaScript.**
**6.Da un ejempo de por qué un Bucle es últil en JavaScript.**

## Fuentes de lectura
+ [ No ordenada ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
+ [Ordenada](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
+ [The Box Model.](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model)
