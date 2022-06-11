const Controls = ({ step, onIncrement, onDecrement }) => (
  <div>
    <button type="button" onClick={onDecrement}>
      Зменшити на {step}
    </button>
    <button type="button" onClick={onIncrement}>
      Збільшити на {step}
    </button>
  </div>
);

export default Controls;
