import React from 'react';
import ProTypes from 'prop-types';


const Error = ({mensaje}) => {
    return ( 
        <p className='alert alert-danger error'>{mensaje}</p>
     );
}


Error.ProTypes = {
    mensaje: ProTypes.string.isRequired
}
 
export default Error;