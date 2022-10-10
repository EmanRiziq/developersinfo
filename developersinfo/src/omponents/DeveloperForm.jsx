import React, { useState } from 'react';
import { actionType } from '../reducers/devReducer';
import './Form.css';

function DeveloperForm(props) {
    const [name, setName] = useState('')
    const [language, setLanguage] = useState('')
    const [tech, setTech] = useState('')
    const [drink, setDrink] = useState('')
    const [food, setFood] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch({ type: actionType.ADD_DEV, payload: { name, language, tech, drink, food } });
        setName('');
        setLanguage('');
        setTech('');
        setDrink('');
        setFood('');
    }

    const languagesArr = ['JS', 'C#', 'C++']
    const techArr = ['React', 'Express', 'Angular']

    return (
        <div className="form-box">
            <h5 className="form-step"> enter your informations please </h5>

            <form onSubmit={handleSubmit}>
                <input required={true} placeholder="Developer's name" type="text" onChange={(e) => setName(e.target.value)} value={name} />

                <select name="Programming language" onChange={(e) => setLanguage(e.target.value)} value={language} >
                    <option disabled={true} value="">  Programming language </option>
                    {languagesArr.map((n, idx) => {
                        return (<option key={idx} value={n}>{n}</option>);
                    })}
                </select>

                <select name="Technologies" onChange={(e) => setTech(e.target.value)} value={tech} >
                    <option disabled={true} value="">  Technologies </option>
                    {techArr.map((n, idx) => {
                        return (<option key={idx} value={n}>{n}</option>);
                    })}
                </select>

                <input placeholder="Favorite Drink" type="text" onChange={(e) => setDrink(e.target.value)} value={drink} />
                <input placeholder="Favorite food" type="text" onChange={(e) => setFood(e.target.value)} value={food} />
                <button type="submit">  Add Developer  </button>
            </form>
        </div>

    );
}

export default DeveloperForm;