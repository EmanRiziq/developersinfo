import React from 'react';
import { actionType } from '../reducers/devReducer';


function Developer(props) {
    console.log(props.dev)
    return (
        // <li key={props.dev.id} onClick={() => props.dispatch({ type: actionType.DELETE_DEV, payload: { id: props.dev.id } })}>
        //     {props.dev.name} : {props.dev.language} :{props.dev.tech}:{props.dev.drink}:{props.dev.food}
        // </li>
        <tr key={props.dev.id} onClick={() => props.dispatch({ type: actionType.DELETE_DEV, payload: { id: props.dev.id } })}>
            <td>  {props.dev.name}   </td>
            <td>{props.dev.language} </td>
            <td>{props.dev.tech}</td>
            <td>{props.dev.drink}</td>
            <td>{props.dev.food}</td>

        </tr>
    )
}

export default Developer;