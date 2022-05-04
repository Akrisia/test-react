import s from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
    <div className={s.controls}>
        <button type="button" onClick={onIncrement}>Збільшити на 1</button>
        <button type="button" onClick={onDecrement}>Зменшити на 1</button>
    </div>
);

// контроли не знають контексту, тому методи класу треба передати, як пропи

export default Controls;