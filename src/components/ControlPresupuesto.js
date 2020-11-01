import React,{ Fragment } from 'react';
import ProTypes from 'prop-types';
import {revisarPresupuesto} from '../helpers';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'>
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
     );
}
 
ControlPresupuesto.ProTypes = {
    presupuesto: ProTypes.number.isRequired,
    restante: ProTypes.number.isRequired
}
 
export default ControlPresupuesto;