import React,{useRef, useState} from 'react';
import PropTypes from 'prop-types';

Filtersform.propTypes = {
    onSubmit:PropTypes.func
};

Filtersform.defaultProps = {
    onSubmit: null
}
function Filtersform({onSubmit}) {
    const intervalId=useRef()
    const [searchTerm,setSearchTerm]=useState('')
    const handleSearchTermChange =(e)=>{
        const value=e.target.value
        setSearchTerm(value)
        if(!onSubmit)return
        if(intervalId.current)clearInterval(intervalId.current)
        intervalId.current=setTimeout(()=>{
            const formValue ={
                searchTerm:value,
            }
            onSubmit(formValue)
        },350)
    }
    return (
        <form >
            <label htmlFor={"search-term"}>search</label>
            <input value={searchTerm} onChange={handleSearchTermChange} id="search-term" name='search-term'/>
        </form>
    );
}

export default Filtersform;