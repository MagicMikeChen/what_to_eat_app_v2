import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div>
            <div className="widget-header">
            <h3 className="widget-header__title">從這裡面選</h3>
                <button
                className="button button--link" 
                onClick={props.handleDeleteOptions}>通通不想吃</button>
                </div>
                
                {props.options.length === 0 && <p className="widget__message">肚子很餓趕快填幾個!</p>}
                {
                    props.options.map((option, index) => (
                    <Option
                        key={option}
                        optionText={option}
                        count={index + 1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                    ))
                }
                
         </div>
    );

export default Options;