import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
   
    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
    
        this.setState(() => ( { error })); // error: error = error

        if (!error) {
            e.target.elements.option.value = '';
        }
    };

    handleAddDefaultOption = (e) => {
        e.preventDefault();

        const doption = ['小陳牛肉麵','超好吃鴻鵠軒','饒河街的藥墩排骨','巷口那間看不來不太衛生但生意很好的滷味',
        '每天都要吃八方雲集啦','小七的爪哇咖哩飯','三商巧福最近出的爌肉麵','林口街公園旁邊的肉圓',
        '天氣熱就不太涼的涼麵','月底了吃點土'];
        const addDefault = this.props.handleAddDefaultOption(doption);
    
    };
  
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption} autocomplete="off">
                <input className="add-option__input" type="text" name="option" />
                <button className="button">再加一個吧</button>
                
                </form>
                <div>
                    <button className="big-button-2" onClick={this.handleAddDefaultOption}>私房推薦</button>
                </div> 
            </div>
        );
    }
};
