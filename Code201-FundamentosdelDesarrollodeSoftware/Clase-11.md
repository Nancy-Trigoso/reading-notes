# Audio, video, imágenes

Estos temas nos ayuda a recodar algunos temas tocados en clases anteriores y a tener conocimiento previo para la clase 11 y poder participar activamente en clase.

## Contenido de audio y video

**1. Explica cómo la capacidad de utilizar video y audio en la web ha ido evolucionando desde el comienzo de los 2000.**

Desde el comienzo de los 2000, la capacidad de utilizar video y audio en la web ha experimentado una evolución significativa, aunque tenía ciertos problemas, incluídos el no trabajar bien con las características de HTML/CSS, problemas de seguridad y problemas de accesibilidad. El video y audio en la web ha permitido una mayor interactividad, accesibilidad y calidad en los contenidos multimedia, transformando la forma en que consumimos y compartimos información en línea.

**2. Describe el uso de los atributos src y controls en el elemento `<video>`.**

+ Src: Contiene una ruta al video que deseas incrustar. Funciona de la misma manera.

+ Controls: Se utiliza para incluir la interfaz de control del browser, permitiendo que el usuario controle la reproducción de video, incluyendo volumen, búsqueda y pausar/reanudar reproducción.

**3. ¿Por qué es importante tener contenido de respaldo en el elemento `<video>`?**

Porque ayuda a tener mayor compatibilidad del navegador y se pueda reproducir en una mayor variedad de navegadores y dispositivos. También ayuda a las personas con discapacidad a tener mayor accesibilidad, y  el texto de respaldo ofrece un enlace directo al archivo de video, asegurando que los usuarios aún puedan acceder al contenido de alguna manera.

**4. Escribe una historia corta en donde `<audio>` y `<video>` son personajes.**

En un rincón mágico de Internet, vivían dos amigos inseparables llamados `<audio>` y `<video>`. Juntos, hacían maravillas para alegrar a los usuarios que navegaban por el vasto océano digital.

`<audio>` era una joven melodiosa con una voz encantadora que podía narrar historias, reproducir música y hasta los sonidos de la naturaleza. 

Por otro lado, `<video>` era un personaje vibrante y colorido. Podía mostrar imágenes en movimiento, desde películas épicas hasta videos caseros. Con su carisma visual, traía a la vida escenas de amor, aventuras y comedias, etc. 

Un día, se encontraron con un problema en el pueblo de Codeworld. Los habitantes estaban tristes porque muchos de ellos no podían disfrutar de las maravillosas historias y películas que `<audio>` y `<video>` ofrecían. Los antiguos dispositivos y navegadores de los habitantes no podían reproducir los formatos modernos que usaban sus amigos.

Así que `<audio>` y `<video>` consultaron con el sabio anciano `<html>`. Él les contó sobre los hechizos mágicos llamados fallbacks que podrían ayudar. Estos hechizos permitían ofrecer alternativas para asegurar que todos pudieran disfrutar de su contenido.

**5. ¿En qué se diferencia el layout Grid del Flex?**

 Layout Grid está diseñado para crear diseños de página bidimensionales, puede controlar tanto las filas como las columnas al mismo tiempo, y Layout Flex está diseñado para crear diseños de página unidimensionales, se enfoca en distribuir elementos dentro de un contenedor en una sola dirección a la vez (fila o columna).
 

**6.Grid container, grid item, y grid line son algunos de los términos importantes que se deben entender al utilizar Grid. Por favor describe estos términos en unas pocas frases.**

+ Grid container: elemento que tiene aplicada la propiedad display: grid;. Este contenedor define un contexto de cuadrícula en el cual se organizan sus elementos hijos. Dentro de un grid container, se pueden establecer filas y columnas para posicionar los elementos de manera precisa.
  
+ Grid item: Son los elementos hijos directos de un grid container. Estos elementos se colocan en la cuadrícula según las reglas definidas en el contenedor y pueden ocupar una o varias celdas dentro de la cuadrícula.
  
+ Grid line: Son las líneas divisorias que forman las filas y columnas en un grid container. Se numeran desde el inicio hasta el final de la cuadrícula, y los grid items se pueden colocar y dimensionar en referencia a estas líneas. Las líneas horizontales forman las filas y las líneas verticales forman las columnas.

## Imágenes Responsivas

**1. Además de hacer que un sitio se vea atractivo visualmente en diferentes tamaños de pantalla, ¿por qué los desarrolladores deberían hacer imágenes responsivas?**

Porque mejora la apariencia visual de un sitio web en diferentes dispositivos, también contribuye al rendimiento general del sitio y a la experiencia del usuario en la interacción con la página web.

**2. Define los siguientes atributos de `<img>`: `srcset` y `sizes`. Escribe un ejemplo de cómo se usan**

+ `<srcset>`: define el conjunto de imágenes que el navegador podrá elegir, y el tamaño de cada imagen. Cada conjunto de información de la imagen está separado del anterior por una coma.
  
+ `<sizes>`: define un conjunto de condiciones de medios (por ejemplo, anchos de pantalla) e indica qué tamaño de imagen sería mejor elegir cuando se cumplen ciertas condiciones de medios.

**3. ¿Cómo es que `srcset` es más útil para las imágenes responsivas que CSS o JavaScript?**

CSS y JavaScript pueden ofrecer flexibilidad adicional en términos de manipulación visual y comportamiento dinámico, pero no están diseñados específicamente para la optimización de imágenes responsivas y pueden ser menos eficientes en términos de rendimiento y carga de recursos.

## Marcadores y Repaso

**Imágenes en HTML**

Un ejemplo de como insertar una imagen en HTML:

 `<img src="https://www.example.com/images/dinosaur.jpg" />`
 
Dos formas de comentar una imagen:

+ Primera forma:

      <div class="figure">
       <img
          src="images/dinosaur.jpg"
          alt="La cabeza y el torso de un esqueleto de dinosaurio;
          tiene una cabeza grande con dientes largos y afilados"
          width="400"
          height="341" />

       <p>Exposición de un T-Rex en el museo de la Universidad de Manchester.</p>
     </div>

+ Segunda forma:

      <figure>
           <img
              src="images/dinosaur.jpg"
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
              tiene una cabeza grande con dientes largos y afilados"
              width="400"
              height="341" />

           <figcaption>
                     Exposición de un T-Rex en el museo de la Universidad de Manchester.
           </figcaption>
      </figure>

**Otras Tecnologías de Incrustación**

Los elementos que te permitan integrar una amplia variedad de tipos de contenido en tus páginas web son: los elementos `<iframe>`, `<embed>` y `<object>`. Los `<iframe>` son para incrustar otras páginas web, y los otros dos te permiten incrustar PDFs, SVG e incluso Flash.

## Cosas de las que quiero saber más

Por el momento no.

## Fuentes:

+ [Contenido de audio y video](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
+ [Imágenes Responsivas](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
+ [Imágenes en HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
+ [Otras Tecnologías de Incrustación](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
