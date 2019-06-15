import React from 'react';

const Jumbotron = props => {
    console.log(props.one.results? props.one.results[0] : null)
    return (
<div>
            {props.one.results ? 
    
   ( <h1>{props.one.results[0].title}</h1>) : (<h1>Before results</h1>)
            }
       </div> 
    )
}

export default Jumbotron;