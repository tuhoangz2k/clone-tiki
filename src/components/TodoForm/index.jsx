import React ,{useState,useRef} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    submitForm:PropTypes.func,
};
TodoForm.defaultProps={
    submitForm: null
}
function TodoForm({submitForm}) {
    const inputRef=useRef()
    const [value,setValue]=useState('')
    const onSubmit=(e)=> {
        e.preventDefault()
        if (!submitForm) return;
        submitForm(value)
        setValue('')
        inputRef.current.focus()
    }
    return (
        <form onSubmit={onSubmit}>
            <input ref={inputRef} value={value} onChange={(e)=>setValue(e.target.value)}/>
        </form>
    );
}

export default TodoForm;