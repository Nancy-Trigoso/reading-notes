# **Configuración de Herramientas para Desarrolladores**

Estos temas que vamos a tratar son muy importantes para nuestro camino como desarrolladores, HTML, CSS Y JS son fundamentales para crear nuestra página web, ya que nos ayuda estar preparados y tener conocimiento previo a nuestra clase y laboratorios.

## **Fundamentos de JavaScript**
**1.Crea un poema corto describiendo cómo HTTP envía datos entre computadoras.**

El cliente envía una petición, se transmite por internet.
El servidor recibe la petición y genera una respuesta, la envía.
El cliente recibe la respuesta (y si estamos en el navegador, interpreta lo recibido).

**2.Describe como los archivos HTML, CSS y JS son “analizados” en el navegador.**

Una vez que hayas terminado de escribir el código y organizado los archivos, el navegador analiza primero la estructura del contenido(HTML), luego analiza la presentación visual (css) y por último analiza la interactividad y funcionalidad esten correctamente escritos (javascript).
Trabajan juntos para dar vida a un sitio web.

**3.¿Cómo puedes encontrar imágenes para agregar a una página web?**

Puedes encontrar de imágenes gratuitas en varias páginas de google lo descargar y lo guardas en la carpeta que desees para luego agregarla a tu página web.
No todas las imágenes que descargas son gratis.
Algunas fotos que se pueden descargar gratis requieren acreditación del autor.
Aquí te dejo algunas páginas para que puedas buscar imagenes que desees.
+ Freepik
+ Pixabay
+ Pexels
+ FreeImages
+ Magdeleine.co

**4.¿Cómo creas una String en comparación con un Number en Javascript?**

Un string se crea entre comillas('Nancy') y un number solo se coloca un número(10).

**5.¿Qué es una Variable y por qué son importantes en JavaScript?**

Las variable son contenedores en los que puedes almacenar valores.
Las variables son importantes para hacer cualquier cosa interesante en programación. Si los valores no pudieran cambiar, entonces no podrías hacer nada dinámico, como personalizar un mensaje de bienvenida de un usuario que visita tu página, cambiar la imagen que se muestra en una galería de imágenes, etc.

# **Introducción a HTML**
**1.¿Qué es un atributo en HTML?**

Son valores adicionales que configuran un elemento que no aparecerá en nuestra página web. 
Ejemplo, el atributo class es un nombre de identificación utilizado para identificar el elemento con información de estilo.

**2.Describe la anatomía de un elemento en HTML.**
La anatomía de un elemeto HTML esta conformado de una etiquetas <html>, que indica el comienzo de la página; <head>, que contiene información más descriptiva sobre el sitio; y <body>, que conforma todos los elementos visibles de la página.

**3.¿Cuál es la diferencia entre las etiquetas < article > y < section >?**

+ La etiqueta < article >: encuadra un bloque de contenido que tiene un contenido independiente aparte del resto de la página.
+ La etiqueta < section >: define la sección en un documento.

**4.¿Qué elementos se incluyen en una página web “típica”?**

Una página web típica tendría estos elementos:
+ Header
+ Main content
+ 1 o 2 barras laterales dependiendo de las páginas
+ Footer

**5.¿Cómo influyen los metadatos en el Posicionamiento en buscadores (SEO)?**

Los metados ayudan son muy influyentes en los SEO ya que los motores de búsqueda los usan para obtener información de tu página web. Si tienes una estructuración correcta de los metadatos es más fácil para los  motores clasificarte para mejor así tu posicionamiento.

**6.¿Cómo se utliza la etiqueta <meta> en HTML cuando se quiere especificar metadatos?**

Se puede utilizar en el encabezado de la página, por lo que sólo son visibles para los motores de búsqueda.
Ejemplo: 

    <head>
          <meta charset="utf-8" />
          <title>Mi página de prueba</title>
    </head>

# **Miscelánea**
## **¿Cómo empiezo a diseñar mi sitio web?.**
1.¿Cuál es el primer paso para diseñar una página web?

El primer para diseñar una página web es hacerte estas preguntas:

+ ¿Qué es exactamente lo que quiero lograr?
+ ¿Cómo un sitio web me ayudará a alcanzar mis metas?
+ ¿Qué es necesario hacer, y en qué orden, para alcanzar mis metas?

Tenemos que  idealizar nuestro proyecto y es un primer paso necesario para alcanzar nuestras metas, sin importar si eres un desarrollador principiante o experimentado.

2.¿Cuál es la pregunta más importante que se debe responder al diseñar una página web?

La  pregunta más importante que se debe responder al diseñar una página web es:
+ ¿Qué es exactamente lo que quiero lograr?
Esta pregunta nos impulsa a lograr nuestras metas.

## **Semántica.**
1.¿Por qué se debe utilizar un elemento `<h1>` en vez de un < span > para mostrar un título de primer nivel?

El elemento h1 es un elemento semántico, que le da al texto que envuelve la función (o significado) de "un encabezado de nivel superior en su página".
En cambio el elemento span hará que parezca un título de nivel superior, pero no tiene valor semántico, por lo que no obtendrá ningún beneficio adicional como se describe anteriormente.

2.¿Cuáles son los beneficios de utilizar etiquetas semánticas en nuestro HTML?

Algunos beneficios sería:
+ Los motores de búsqueda considerarán su contenido como palabras clave importantes para influir en el ranking de búsqueda de la página (ver SEO ).
+ Los lectores de pantalla pueden utilizarlo como señal para ayudar a los usuarios con discapacidad visual a navegar por una página.
+ Encontrar bloques de código significativo es significativamente más fácil que buscar en interminables div mensajes de correo electrónico con o sin clases semánticas o con espacios de nombres.
+ Sugiere al desarrollador el tipo de datos que se completarán.
+ La denominación semántica refleja la denominación personalizada adecuada de elementos/componentes.

## **¿Qué es JavaScript?**
1. Describe 2 cosas que requieran de JavaScript en el navegador.

+ Almacenar valores útiles dentro de variables. Por ejemplo, pedimos que ingreses un nuevo nombre y luego almacenamos ese nombre en 
una variable llamada name.
+ Operaciones sobre fragmentos de texto.  Por ejemplo, tomamos la cadena "Player1:" y la unimos a la variable name para crear la etiqueta de texto completa, p. ej. ''Player1: Chris".
  
2. ¿Cómo se puede añadir JavaScript a un documento en HTML?

+ Primero:haz una copia local de Un archivo y guárdalo en un directorio en algún lugar accesible.
+ Abre el archivo en tu navegador web y en tu editor de texto.
+ A continuación, ve a tu editor de texto y agrega lo siguiente en tu head, justo antes de tu etiqueta de cierre </ head>:

          <script>
                  // JavaScript va aquí
          </script>
  
+ Ahora agregaremos algo de JavaScript dentro de nuestro elemento < script >.
+ Guarda tu archivo y actualiza el navegador .

## Cosas de las que quiero saber más
+ Estilos de css
+ Más temas a profundidad de JS.

## Fuentes de lectura

+ [Fundamentos de Java Script](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
+ [Estructura web y documentación?](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
+ [Metados en HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
+ [¿Cómo empiezo a diseñar mi sitio web?](https://developer.mozilla.org/es/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding)
+ [Semantica](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
+ [¿Qué es JavaScript?](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript)


