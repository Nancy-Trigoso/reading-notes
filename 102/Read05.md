# Diseño de paginas web con CSS
**1. ¿Cuál es el propósito de CSS?**  
      Ordenar las instrucciones referentes a la apariencia de un sitio y presentar los contenidos de una página de forma                  atractiva. 
      Se puede usar para estilos de texto muy básicos como, por ejemplo, cambiar el color y el tamaño de los                             encabezados y los enlaces.  
      
**2. ¿Cuáles son las tres formas de insertar CSS en tu proyecto?**  

* CSS externo:
                  Puedes cambiar el aspecto de un sitio web completo cambiando solo un archivo. Cada página HTML debe incluir una                       referencia al archivo de hoja de estilo externo dentro del elemento <link>, dentro de la sección head.  
                  
* CSS interno:
                  Se puede utilizar una hoja de estilo interna si una sola página HTML tiene un estilo único. El estilo interno se                      define dentro del elemento style  dentro de la sección principal.  
                  
* CSS en línea:
                  Se puede utilizar un estilo en línea para aplicar un estilo único a un solo elemento. Para usar estilos en línea,                     agregue el atributo de estilo al elemento relevante. El atributo de estilo puede contener cualquier propiedad CSS.    
                  
**3. Escribe un ejemplo de una regla CSS que daría texto rojo a todos los elementos "< p >."**    

<!DOCTYPE html>
<html>
<head>
<style>
body {
  color: red;
}

h1 {
  color: #00ff00;
}

p.ex {
  color: rgb(0,0,255);
}
</style>
</head>
<body>
<h1>This is heading 1</h1
                           
<p>This is an ordinary paragraph. Notice that this text is red. The default text-color for a page is defined in the body selector.</p>

<p class="ex">This is a paragraph with class="ex". This text is blue.</p>

</body>
</html>

