Readme modificado para el desafio 
1 la lista de productos la tomo de dos lugares diferentes pero contiene los mismos datos. 
* en itemlistcontainer la tomo con una promesa realizada a un json local
* en itemDetailcontainer la tomo de un fetch a una api de mocki

2 en Item el boton de ver detalles lo use con useNavigate en vez de Link to="" (estuve probando) 

3 en ItemDetaliContainer le saque el timeout porq ya la toma externa no hace falta simular la demora 
 *tambien ahora envia  un solo props a itemDetail y ahi lo "desmenuza"