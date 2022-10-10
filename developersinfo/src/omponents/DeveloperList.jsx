import React from 'react'
import Developer from './Developer';
import './DeveloperList.css'

function DeveloperList(props) {
    // console.log(props.devList)
    return props.devList.length ? (
       <div className='table-box'>
         <h3>Developers List</h3>
                <table >
                    <thead>
                    <tr>
                    <th> Name</th>
                    <th> Language</th>
                    <th> technology</th>
                    <th> drink</th>
                    <th> food</th>
                </tr>
               </thead>
               <tbody>
                    {props.devList.map(dev => (
                        <Developer key={dev.id} dev={dev} dispatch={props.dispatch} />
                    ))}
                    </tbody>


                </table>
                </div>
    ) : <h3>the list is empty!</h3>

}


export default DeveloperList;