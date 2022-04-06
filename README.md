Ecomerce de una local de computacion- 
la idea es que los clientes compren online  los articulos de officina que mas te dejan a pata cuando estas trabajando con opcion a envio por reparto por la tarde o bien reservar el articulo en el local para que lo pasen a  retirar(en ambos casos se descuenta del stock)


Las librerias utilizadas son React Js y MUI


1 la lista de productos la tomo de dos lugares diferentes pero contiene los mismos datos. 
* en itemlistcontainer la tomo con una promesa realizada a un json local
* en itemDetailcontainer la tomo de un fetch a una api de mocki

2 en Item el boton de ver detalles lo use con useNavigate en vez de Link to="" (estuve probando) 

3 en ItemDetaliContainer le saque el timeout porq ya la toma externa no hace falta simular la demora 
 *tambien ahora envia  un solo props a itemDetail y ahi lo "desmenuza"