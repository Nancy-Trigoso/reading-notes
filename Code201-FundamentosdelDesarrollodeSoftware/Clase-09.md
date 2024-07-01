# Formularios y Events en JS

Estos lecturas, nos ayudaran a comprender mejor la próxima clase y participar activamente y poder avanzar con los temas asignados. 

## Formularios en HTML

**1.¿Por qué los formularios son tan importantes en el desarrollo web?**

Porque permite la interacción entre un usuario y un sitio web o aplicación. Los formularios permiten a los usuarios la introducción de datos, que se envían a un servidor web para su procesamiento y almacenamiento o se usan en el lado del cliente para provocar una actualización inmediata de la interfaz.

**2.Al diseñar un formulario, ¿cuáles son algunas de las cosas más importantes a tener en cuenta sobre la experiencia de usuario?**

+ Diseñar una maqueta rápida
+ Tiene que ser simple y conciso

**3.Enumera 5 elementos de los formularios y explica su importancia.**

1. `<form>`: define formalmente un formulario, es un elemento contenedor.
2. `<label>`: representa una etiqueta para un elemento en una interfaz de usuario.
3. `<input>`: se usa para crear controles interactivos para formularios basados ​​en la web con el fin de recibir datos del usuario.
4. `<textarea>`: representa un control para la edición mutilínea de texto sin formato.
5.  `<button>`: permite que el usuario envíe sus datos una vez que haya completado el formulario.

## Aprende JS

**1.¿Cómo describirías los event a un amigo sin conocimiento técnico?**

 Un "evento" es algo que sucede en la página web, como una página web terminó de cargarse, el envío de un formulario, etc. Cuando ocurre un evento, puedes decirle a la página web que haga algo en respuesta, como mostrar un mensaje, cambiar un color, o enviar datos a un servidor.

**2.Al utilizar el método addEventListener(), ¿cuáles son los 2 arguments que debes proporcionar?**

1. Se usa para registrar manejadores de eventos.
2. Este es un string que especifica el tipo de evento que deseas escuchar. 

**3.Describe el objeto event. ¿Por qué el target dentro del objeto event es útil?**

Porque siempre hace referencia al elemento sobre el cual ocurrió el evento. 

**4.¿Cuál es la diferencia entre event bubbling y event capturing?**

+ Event bubbling: describe como el navegador maneja eventos dirigidos a elementos anidados, lanza primero el elemento objetivo más anidado y sucesivamente.
  
+ Event capturing:  el evento se lanza primero en el elemento menos anidado, y luego en los elementos más anidados, hasta que el objetivo es alcanzado.

## Marcadores y Repaso

**Tipos de input de HTML5**

+ Email address field
+ Search field
+ Phone number field
+ URL field
+ Numeric field
+ Slider controls
+ Date and time pickers
+ Color picker control

**Referencia de Eventos**

Los eventos se envían para notificar al código de cosas interesantes que han ocurrido. Cada evento está representado por un objeto que se basa en la interfaz Event, y puede tener campos y/o funciones personalizadas adicionales para obtener más información acerca de lo sucedido.
Lista de eventos que se pueden enviar: 
+ Eventos estándar se definen en las especificaciones Web oficiales.
+ Eventos no estándar: son aquellos que son específicos de un navegador en particular o que no están formalmente definidos en las especificaciones del W3C. 
+ Eventos usados internamente por los navegadores específicos como los eventos específicos de Mozilla se enumeran de manera que los complementos pueden usarlos para interactuar con el navegador.

## Cosas de las que quiero saber más

+ Por el momento no.

## Fuentes:

+ [Formularios en HTML](https://developer.mozilla.org/es/docs/Learn/Forms)

+ [Mi primer formulario HTML.](https://developer.mozilla.org/es/docs/Learn/Forms/Your_first_form)

+ [Cómo estructurar un formulario HTML.](https://developer.mozilla.org/es/docs/Learn/Forms/How_to_structure_a_web_form)

+ [Introducción a los Eventos.](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)

+ [Tipos de input de HTML5](https://developer.mozilla.org/es/docs/Learn/Forms/HTML5_input_types)

+ [Referencia de Eventos](https://developer.mozilla.org/es/docs/Web/Events)
