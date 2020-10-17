import React from 'react';
import { useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';



//Redux
import { useDispatch} from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar} from '../actions/productoActions';

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto

    const dispatch = useDispatch();
    const history = useHistory();//habilitar history 

    //Confirmar elimnar
    const  confirmarElimnarProducto = id => {

        //preguntar
        Swal.fire({
            title: 'Estas seguro?',
            text: "No podras volver a revertir la accion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#285c4d',
            cancelButtonColor: '#9d2449',
            confirmButtonText: 'Si, borrarlo!'
          }).then((result) => {
            if (result.value) {

            //pasar al action
        dispatch(borrarProductoAction(id));  
              
            }
          })
    }

    //funcion que redirige de forma programada
        const redireccionarEdicion = producto => {
            dispatch(obtenerProductoEditar(producto));
            history.push(`/productos/editar/${producto.id}`)
        }

    return (  
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td className="acciones">
               <button 
               type="button"
               onClick={()=> redireccionarEdicion(producto) }
               className="btn__editar btn mr-2">
                Editar
               </button >
               <button
               type="button"
               className="btn__eliminar btn"
               onClick={()=> confirmarElimnarProducto(id)}
               >Eliminar</button>
            </td>
        </tr>
    );
}
 
export default Producto;

