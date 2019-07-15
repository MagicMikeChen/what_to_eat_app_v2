import React from 'react';

const Option = (props) => (
        <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
            <button
                className="button button--link-rwd" 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
            }}
            >
            <div className="">不想吃這個</div>
            </button>
        </div>
    );


export default Option;