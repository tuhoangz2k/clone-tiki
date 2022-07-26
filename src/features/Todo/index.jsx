import React from 'react';
import { Outlet} from 'react-router-dom'
function TodoFeature(props) {
   
    return (
        <div>
            <h2>Share UI</h2>
            <Outlet/>
        </div>
    );
}

export default TodoFeature;