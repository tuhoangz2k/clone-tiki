import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination:PropTypes.object.isRequired,
    onChange:PropTypes.func,
};

Pagination.defaultProps = {
    onChange: null
}



function Pagination({onChange,pagination})  {
    const {_page,_limit,_totalRows}=pagination
    const totalPages =Math.ceil(_totalRows/_limit)
    const pagationChange=(newPage)=>{
        if(onChange)onChange(newPage)
    }
    return (
        <div>
            <button disabled={_page<=1} onClick={()=>{pagationChange(_page-1)}}>Prev</button>
            <button disabled={_page>=totalPages} onClick={()=>{pagationChange(_page+1)}}>Next</button>
        </div>
    );
}

export default Pagination;