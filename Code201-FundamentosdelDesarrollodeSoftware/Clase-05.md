# Imágenes, Color, Texto.

Estos temas que vamos a tratar son muy importantes por que es la base para poder estructurar bien nuestra página web y poder darle los estilos correctos.
A medida que vamos avanzando vamos utilizando estos temos que nos ayudarán a entender y poder hacer bien nuestra página.

## Medios en HTML

**1. ¿Cuál es un caso práctico del atributo alt en una página web?**

Cuando colocamos mal el nombre del archivo o su ruta, el navegador nos mostrará el texto alternativo que escribimos y asi nos daremos cuenta del error. 

**2. ¿Cómo puedes mejorar la accesibilidad de las imágenes en un documento HTML?**


Podemos mejorarla añadiendo:
+ Texto alternativo `<alt>`
+ Anchura y altura
+ Título de imágenes.


**3. Da un ejemplo en el que el elemento figure sería útil en un documento HTML.**

```<figure>
  <img
      src="images/flores.jpg"
      alt="Rosas amarillas"
      width="400"
      height="341" />
    <figcaption>
      Flores amarillas se entregan l 21 de marzo a la persona que te gusta.
    </figcaption>
  </figure>
```

El elemento figure proporciona un contenedor semántico para las figuras y vincular claramente la figura con el pie.
Esta encapsulando el contenido independiente de la imágen que es referenciado en el contenido principal del documento.
El elemento <figcaption> dice al navegador, que el texto que contiene describe la imagen que está contenida en el elemento <figure>.


**4. Describe la diferencia entre una imágen gif y una imágen svg, imagina que se lo estás explicando a una persona mayor de tu comunidad.**

Una imagen git  tiene buenas animaciones cortas y gráficos simples, pero limitadas en calidad y pueden ser grandes en tamaño.
A diferencia de una imagen svg son claros y nítidos a cualquier tamaño, generalmente no son animados pero son muy versátiles y ligeros y son archivos pequeños en tamaño.

* Imagén gif.
  
  
  ![Esta es una imagen de animación](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXl5dnJ3OWNyaDh2MjhkczljbWVzaWNoZzMzejZmaXRpajZjMmU1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TZ2oBnEvY9iMgJWuRS/giphy.webp)

  

* Imagén svg.
  
  ![Esta es una imagen de svg](https://viavector.eu/wp-content/uploads/2022/02/que-es-un-archivo-svg.jpg)


**5. ¿Qué tipo de imagen usarías para mostrar una captura de pantalla en tu página web y por qué?**

Utilizaría un PNG, por que utiliza compresión sin pérdidas, admite altas profundidades de color y admite transparencia alfa total.


## Aprende CSS.

**1. Describe la diferencia entre un color de primer plano y un color de fondo de un elemento HTML, imagina que estás hablando con una personas sin conocimientos técnicos.**

+ **Color de Primer Plano:** El color del contenido principal de un elemento HTML, se usa la propiedad `color`.
+ **Color de Fondo:**  El color detrás del contenido principal, se usa la propiedad `background-color`.

  **Ejemplo:**
  
  ```<div style="color: rojo; background-color: amarillo;">
          Este mensaje es de color rojo sobre fondo amarillo.
    </div>
  ```

![Imagen de color y backgroung](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF1Vnwr4XkoioirM26dZ_BOR0SUuOYuUTTQ&s)

**2. Tu amigo te pide que le des un retoque a su blog. ¿Cómo utilizarías color para darle carácter a su blog?**


**3. ¿Qué debes tener en cuenta al escoger tipos de letra para un documento HTML?**


**4. ¿Cuál es la relación entre font-size, font-weight, y font-style con los elementos de texto en HTML?**



**5. Describe dos formas de añadir espaciado alrededor de los caracteres mostrados en un elemento h1.**


## Cosas de las que quiero saber más.



## Fuentes:

+ [Utilizar Imágenes In HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
+ [Common Image Types](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types)
+ [Choosing Image Formats.](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#choosing_an_image_format)
+ [Using Color in CSS.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Applying_color)
+ [Styling HTML Text Elements](https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text/Fundamentals)
