import React from 'react';
import ProTypes from 'prop-types';

const Gasto = ({gasto}) => {
    return ( 
        <li className='gastos'>
            <p>
                {gasto.nombre}

                <span className='gasto'> ${ gasto.cantidad } </span>
            </p>
        </li>
     );
}
Gasto.ProTypes = {
    gastos: ProTypes.object.isRequired
}
 
export default Gasto;