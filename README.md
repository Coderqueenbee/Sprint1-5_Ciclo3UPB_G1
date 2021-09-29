# Sprint1-5_Ciclo3UPB_G1

SPRINT#1

Actividades
•Cree una página de inicio con una
descripción de su proyecto, además la
interfaz gráfica debe diseñarse pensando
en una aplicación de escritorio. Esta
página estará en el archivo index.html
•Esta página debe contar con una barra de
navegación horizontal ubicada en la
parte superior de la página. Para esto
utilice la etiqueta < nav > cuyo atributo id
debe ser horizontal_navbar
•Dentro de la barra de navegación debe
haber un logo pequeño alusivo al
proyecto. Para esto utilice la etiqueta
img > cuyo atributo id debe ser
landing_logo

Actividades
•En la barra de navegación, agregue un
botón para que el usuario pueda ir a una
página de registro. Utilice la etiqueta
button > cuyo atributo id debe ser
boton_registro_usuario ””.
•Agregue una etiqueta <a> cuyo atributo id
sea irA_registro _usuario”, de forma
que cuando el usuario de click sobre el
botón boton_registro_usuario el usuario
sea redirigido a la página de registro de
usuarios.

Actividades
•En un nuevo documento registro.html debe crear un
formulario de registro de usuarios. Para esto utilice la
etiqueta < form > cuyo atributo id debe ser
form_nuevo_usuario
•El formulario debe contar con los siguientes tres campos:
•Un <input> para ingresar el nombre de usuario, su id
debe ser dato_nombre_usuario
•Un <input> de tipo numérico para ingresar la edad del
usuario, su id debe ser dato_edad_usuario
•Un <input> para ingresar la contraseña, su id debe ser
dato_contrasena
•Finalmente, debe haber un botón para enviar el
formulario. Utilice la etiqueta < button > cuyo atributo id
debe ser enviar_registro
********************************************************************************************************************************************************************
**********************************************************************************
**********************************************************************************
**********************************************************************************
**********************************************************************************
**********************************************************************************
**********************************************************************************
Sprint2

Actividades
•El formulario cuenta con un <input> cuyo id es
dato_nombre_usuario ””. Debe implementar una
función de JS validar_nombre_usuario que recibe un
parámetro tipo string , la función realiza las siguientes
validaciones para el string
•Solo puede contener solo letras de la A a la Z y
espacios.
•Debe validar que el string no inicie ni termine con
espacios.
•Debe validar que la primera letra después de cada
espacio sea mayúscula.
En caso de cumplir las condiciones retorna verdadero,
de lo contrario retorna falso.




Actividades
•El formulario cuenta con un <input> cuyo id es
dato_edad_usuario ””. Debe implementar una función
de JS validar_edad_usuario que recibe un parámetro, la
función realiza las siguientes validaciones:
•El valor del parámetro es un número.
•El número debe ser positivo.
•El número debe ser igual o mayor a 13 y menor que
110.
En caso de cumplir las condiciones retorna verdadero,
de lo contrario retorna falso.

Actividades
•El formulario cuenta con un <input> cuyo id es
dato_contrasena ””. Debe implementar una función de
JS validar_contrasena que recibe un parámetro tipo
string , la función realiza las siguientes validaciones para
el string
•Debe tener 6 o más caracteres.
•Solo puede contener caracteres alfanuméricos. Es
decir, letras de la A a la Z y los números del 0 al 9.
En caso de cumplir las condiciones retorna verdadero,
de lo contrario retorna falso.

********************************************************************************************************************************************************************
**********************************************************************************
**********************************************************************************
**********************************************************************************
**********************************************************************************
**********************************************************************************
**********************************************************************************


Sprint3
Historia de usuario
Yo como administrador requiero poder
guardar la información ingresada en el
formulario de registro en una estructura de
datos

Actividades
•
Crear un arreglo de objetos que contenga la información
consignada en el formulario de registro. Recuerde que
los atributos id de los <input> del formulario son
dato_nombre_usuario , dato_edad_usuario y
dato_contrasena respectivamente.
Instrucciones:
•
Declarar un arreglo global en donde se almacenen cada uno de los registros. Se almacenarán tantos
registros como la cantidad de veces que se haya enviado el formulario. El objeto almacenado debe
tener los campos usuario , edad y contrasena
•
Crear la función agregarRegistro()agregarRegistro(), la cual estará encargada de validar la información ingresada en el
formulario de registro y guardarla en el arreglo. La función no retorna ningún valor.
•
Opcional: Emplee el objeto console para imprimir el contenido que se está ingresando en el arreglo,
tome de referencia la siguiente documentación: https://developer.mozilla.org/es/docs/Web/API/Console

Historia de usuario
Yo
como administrador requiero manipular la
información guardada, con el fin de hacer un
análisis de la misma

Actividades
•
Implemente una función OrdenarArreglo . La función
toma un parámetro que representa al arreglo de registros
que se quiere ordenar.
•
La función debe ordenar el arreglo los registros del
arreglo de menor a mayor por el campo edad.
•
La función debe de imprimir en consola dicho arreglo
ordenado y finalmente retornarlo.
