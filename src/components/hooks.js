import {useState} from 'react';
export function useFormInput(initialValue){
    const [value, setValue] = useState();

    function handleChange(e){
        e.preventDefault();
        setValue(e.target.value);
    }

    return {
        value,
        onChange:handleChange
    }
}