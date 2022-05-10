Ecomerce de una local de computacion- 
la idea es que los clientes compren online  los articulos de officina que mas te dejan a pata cuando estas trabajando con opcion a envio por reparto por la tarde o bien reservar el articulo en el local para que lo pasen a  retirar(en ambos casos se descuenta del stock)

permite agregar items al carrito sin estar logueado pero pide loguin o registro antes de finalizar la compra
al filtrar por categoria da mensaje de error si la categoria esta vacia
Guarda sesion y carrito en el localStorage hasta que le das salir
Verifica stock antes de agregar al carrito y Cuando se finaliza la venta pide de nuevo el stock de la BaseDatos para evitar errores de compras simultaneas

valida datos al cargar y editar productos o usuarios
en modo administrador : muestra todos los productos aunque esten sin stock 
                        permite cargar nuevos productos con todos sus campos
                        permite eliminar un producto
                        permite modificar precio y stock de cada producto 
                        no permite agregar items al carrito

al ingresar : da la opcion de ingresar o registrarse
                valida datos antes de enviarlos
                muestra posibles errores en pantalla (generico + mensaje de firebase)
                si esta llamado desde la barra de navegacion vuelve a la home
                si esta llamado desde el carrito  desaparece y permite finalizar compra




Las librerias utilizadas son React Js , MUI, 
firebase, firestore, react-router-dom, formik

node js instalado
git clone
npm init 