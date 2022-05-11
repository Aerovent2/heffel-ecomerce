# WS Online ---- Heffel-Ecommerce  [http://ws-online.ml/]

## Ecommerce de un local de computación-

Es un SPA realizado para que los clientes del local puedan adquirir los artículos de oficina de uso más frecuente, de un modo rápido y sencillo. En esta primera etapa, el repartidor es quien se encarga de cobrar las ventas al momento de hacer la entrega del producto. En una segunda etapa, se completará con el agregado de la api de MercadoPago.

### Funciones

- Permite agregar items al carrito sin estar logueado, pero pide loguin o registro antes de finalizar la compra
- Al filtrar por categoria da mensaje de error si la categoria esta vacía
- Guarda sesión y carrito en el localStorage hasta que salis
- Si agregas items al carrito sin logearte tambien los almacena en localStorage
- Verifica stock antes de agregar al carrito y cuando se finaliza la venta pide de nuevo el stock de la BaseDatos para evitar errores de compras simultaneas
- Valida datos al cargar y editar productos o usuarios
- Si no esta logueado como administrador no permite la ruta /admin (te devuelve a la home)
- #### En modo administrador :

  > * Muestra todos los productos aunque esten sin stock
  > * Permite cargar nuevos productos con todos sus campos
  > * Permite eliminar un producto
  > * Permite modificar precio y stock de cada producto
  > * No permite agregar items al carrito
  >
- #### Al Ingresar :

  > * Da la opcion de ingresar o registrarse
  > * Valida datos antes de enviarlos
  > * Muestra posibles errores en pantalla (genérico + mensaje de firebase)
  > * Si esta llamado desde la barra de navegación vuelve a la home
  > * Si esta llamado desde el carrito  desaparece y permite finalizar compra
  >
- #### Librerias utilizadas :
- React Js
- MUI
- Firebase
- Firestore
- React Router Dom
- Formik
