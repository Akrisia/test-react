// import ColorPicker from "./components/ColorPicker";
// import Alert from "./components/Alert";
import Counter from "./components/Counter";
// import Toggle from "./components/Toggle";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

function App() {
  return (
    <div className="App">
      {/* <Alert text="Ей" />
      <Alert text="Ей" type="success" />
      <Alert text="Ей" type="warning" />
      <Alert text="Ей" type="error" /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      <Counter initialValue={10git} />
      {/* <Toggle /> */}
    </div>
  );
}

export default App;
