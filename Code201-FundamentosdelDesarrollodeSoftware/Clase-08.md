# CSS: Layout

Estos lecturas, nos ayudaran a comprender mejor la próxima clase y participar activamente y poder avanzar en el tiempo de clase.

## Learn CSS - Flexbox

**1.Flexbox está diseñado para contenido unidensional. Explica lo que significa esto.**

Flexbox está diseñado para manejar la distribución y alineación de elementos en una sola dimensión, ya sea en fila (horizontal) o en columna (vertical). Flexbox no solo ayuda a colocar la barra lateral y el contenido en línea, sino que, donde no queda suficiente espacio, la barra lateral se dividirá en una nueva línea. En lugar de establecer dimensiones rígidas para que las siga el navegador, con flexbox, puede ofrecer límites flexibles para indicar cómo podría mostrarse el contenido.

**2.Explica la diferencia entre main axis y cross axis.**

+ Main axis: Es el eje principal el que establece su propiedad flex-direction. Si esa es row, su eje principal está a lo largo de la fila,si es column su eje principal está a lo largo de la columna.
+ Cross axis: Es el eje transversal que corre en la otra dirección al eje principal, por lo que si flex-direction es row el eje transversal corre a lo largo de la columna. Puede mover los elementos individualmente o en grupo para que se alineen entre sí y con el contenedor flex. si ha envuelto líneas flex, puede tratar esas líneas como un grupo para controlar cómo se asigna el espacio a ellas.

**3.¿Cómo es que utilizar ciertas propiedades de flexbox impacta negativamente en la accesibilidad?**

Tenemos que tener cuidado al usar cualquier propiedad que reordene la presentación visual de forma diferente a cómo se ordenan las cosas en el documento HTML, ya que eso puede afectar la accesibilidad. Los valores row-reverse y column-reverse son un buen ejemplo. El reordenamiento solo ocurre para el orden visual, no para el orden lógico, ya que el orden lógico es en el que un lector de pantalla leerá el contenido y cualquiera que navegue usando el teclado lo seguirá.

## CSS Layout - Flexbox

**1.¿Cuáles son algunas de las ventajas de utilizar flexbox sobre float?**

+ Alineación más sencilla
+ 

**2.¿Cómo es que este tema se conecta con tus metas a largo plazo?**

## Marcadores y Repaso

**Learn CSS - Layout**

## Cosas de las que quiero saber más

Por el momento ninguna, seguir aprendiendo en el proceso.

## Fuentes

* [Learn CSS - Flexbox](https://web.dev/learn/css/flexbox?hl=es)
* [CSS Layout - Flexbox](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox)
* [Learn CSS - Layout](https://web.dev/learn/css/layout?hl=es)
