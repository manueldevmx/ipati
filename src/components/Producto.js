import React from 'react';
import {Link} from 'react-router-dom';

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto

    return (  
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td className="acciones">
               <Link>
                
               </Link>
            </td>
        </tr>
    );
}
 
export default Producto;