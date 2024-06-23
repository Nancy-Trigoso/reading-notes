# Programación orientada a objetos, Tablas en HTML
 Estos temas son importantes para tener conocimiento previo para la clase 07 y nos ayuda a poder participar activamente en clase.
## Domain Modeling.

**1. Explica por qué necesitamos los modelos de dominio.**

Porque nos ayuda a crear un modelo conceptual en código para un problema específico, describiendo las entidades, sus atributos y comportamientos, así como las restricciones que gobiernan el dominio del problema. 

## Conceptos básicos de las tablas HTML.

**1. ¿Por qué no se debe utilizar tablas para los layout de página?**

Porque  reducen la accesibilidad para los usuarios con discapacidad visual, generan estructuras incorrectas, no tienen respuesta adaptativa automática, y no siguen las mejores prácticas y estándares modernos de desarrollo web.

**2. Enumera y describe 3 diferentes elementos semánticos HTML utilizados en un `<table>`.**

**1. `<td>`:** Es una celda, es el contenedor más pequeño dentro de una tabla que contiene los datos de la table en filas.

**2. `<tr>`:** Cada elemento `<td>` tiene que estar delimitada por un elemento `<tr>` para que se pueda crear una fila.

**3.`<th>`:** Representa una celda de encabezado en una tabla. Contiene encabezados de columna o fila, y generalmente se muestra en negrita y centrado. Se coloca dentro de una fila (`<tr>`).

## Introducción a los Constructores.

**1. Qué es un constructor y cuáles son las ventajas de utilizarlo?**

Es un metodo especial para crear e inicializar un objeto creado a partir de una clase. 

**Ventajas:**

+  Se inicialice automáticamente
+  Tiene toda la compatibilidad con muchas aplicaciones
+  Permite la creación de objetos de diferentes maneras, proporcionando flexibilidad para inicializar objetos
+  Permiten ocultar los detalles de la creación e inicialización de objetos.

**2. ¿Cómo es que el término this se diferencia cuando se utiliza en un objeto literal y cuando se utiliza en un constructor?**

El término `<this>` se refiere al propio objeto literal en el que se encuentra definido el método y dentro de un constructor se refiere al propio objeto literal en el que se encuentra definido el método.

**3. Explica los prototipos y las herencias por medio de una analogía sobre tu experiencia laboral previa**

Trabajaba en el hospital del sis de Chosica en el área de Estadística e Informática, cada trabajador tenía diferentes roles, como asistentes, inginieros, programadores, etc. Cada rol tiene sus propias responsabilidades, pero también comparten algunas características comunes.

**Prototipos:** son las descripciones de roles en un manual de empleados. Este manual define qué habilidades y responsabilidades tiene cada rol, como nombre, salario, rol de trabajo, etc.

**Herencia:**  permite crear roles específicos (como Desarrollador) que heredan las propiedades y métodos del prototipo básico (Empleado) y pueden añadir o modificar características específicas.

## Marcadores y Repaso

**Funciones avanzadas de las tablas HTML y accesibilidad**

Se utilizan características adicionales para mejorar su funcionalidad y accesibilidad para todos.
* Añadir un subtítulo a tu tabla con `<caption>`: Puedes dar un título a tu tabla colocándolo dentro de un elemento `<caption>` y anidándolo dentro del elemento `<table>`.
* Añadir estructura con `<thead>`, `<tfoot>` y `<tbody>`: Estos elementos agrupan las secciones de la tabla como columnas y filas.
* Anidar tablas: anidar una tabla dentro de otra, siempre que incluyas la estructura completa, incluido el elemento `<table>`. 
* Tablas para usuarios con discapacidad visual: Las personas con discapacidad visual a menudo usan un lector de pantalla que les lee la información de las páginas web. Esto no resulta un problema cuando lees un texto sin formato, pero interpretar una tabla puede ser un gran desafío para una persona ciega. Sin embargo, con el marcado adecuado podemos reemplazar las asociaciones visuales por otras asociaciones de tipo programático.

## Cosas de las que quiero saber más.

Por el momento nada.

## Fuentes:
+ [Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling)
+ [Conceptos básicos de las tablas HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Tables/Basics)
+ [Introducción a los Constructores](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)
+ [Herencia prototípica](https://es.javascript.info/prototype-inheritance)
+ [Prototipos nativos](https://es.javascript.info/native-prototypes)
+ [Funciones avanzadas de las tablas HTML y accesibilidad](https://developer.mozilla.org/es/docs/Learn/HTML/Tables/Advanced)


