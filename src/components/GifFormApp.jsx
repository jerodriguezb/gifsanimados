import React, { useState } from 'react'

const GifFormApp = ({setCategories}) => {

    const [inputValue, setinputValue] = useState("")
    const handleChange=(e)=>{
        //console.log(e.target.value)
        setinputValue(e.target.value)

    }
const handleSubmit=(e)=>{
    e.preventDefault();
    //console.log("Submit")
    if (inputValue.trim().length>2){
        setCategories(cats=>[inputValue,...cats])
    setinputValue("")
    }

}
    return (
        <form onSubmit={handleSubmit}>

            <input 
            type="text"
            value={inputValue}
            onChange={handleChange}

            />
            
        </form>
    )
}

export default GifFormApp
