import React from 'react';

const Action = (props) => (
        <div>
        <button
        className="big-button" 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
            該吃什麼好？
        </button>
        </div>
    );


export default Action;