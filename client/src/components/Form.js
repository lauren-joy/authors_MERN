import { navigate } from '@reach/router';
import React, {useState} from 'react'

const Form = props => {
    const {onSubmitHandler, initialName} = props;
    const [name, setName] = useState(initialName)
    const cancelHandler = (e)=>{
        navigate("/")
    }

    return (
        <form onSubmit={e=>{onSubmitHandler(e, {name})}}>
            <label>Name:</label>
            <br />
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br/>
            <button className="btn btn-primary btn1" onClick={cancelHandler}>Cancel</button>
            <input type="submit" className="btn btn-primary btn2" />
        </form>
    )
}

export default Form;