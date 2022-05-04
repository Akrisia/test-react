import { Component } from "react";
import Controls from './Controls';
import s from './Counter.module.css';

class Counter extends Component {
// 1 - спочатку пишемо статику, нам треба дефолтні значення, то пишемо їх так
    
    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {

    };
    
// 2 - потім пишемо стан
    // constructor() {
    //     super();

    //     this.state = {
    //         value: 0,
    //     };
    // }
    // Конструктор Babel транспілює в наступне:

    state = {
        value: this.props.initialValue,
    };
    
// 3 - пищемо кастомні методи
    handleIncrement = () => {
    //    this.state.value = 10 - не можна перезаписувати значення в посилання
    
    // Так пишемо (як об"єкт), коли треба одноразово перезаписати значення
        // this.setState({
        //     value: 10,
        // });

    // Так пишемо (як функцію), коли треба записувати значення на основі попередньо засписаного і т.д.
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
        });    
    }

    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            };
        }); 
    }

// 4 - пишемо рендер
    render() {
        return (
            <div className={s.counter}>
                <span className={s.value}>{this.state.value}</span>

                <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
            </div>
        );
    }
}

export default Counter;