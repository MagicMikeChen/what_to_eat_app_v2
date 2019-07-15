import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class WhatToEatApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
        // the same as -> this.setState(() => ({options: []}));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option) // return true -> keep all, return false -> delete all
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return '乖乖打字進去啦';
        } else if (this.state.options.indexOf(option) > -1) {
            return '已經有囉';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };

    handleAddDefaultOption = (doption) => {
      
        this.setState((prevState) => ({options: prevState.options.concat(doption)}));
    }

    


    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
        
        if (options) {
            this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing 
        }        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    
    render() {
        const subtitle = '跟老闆說 吃飯皇帝大';
        

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                            

                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                            handleAddDefaultOption={this.handleAddDefaultOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />            
            </div>
        );
    }
}

WhatToEatApp.defaultProps= {
    options: []
};
