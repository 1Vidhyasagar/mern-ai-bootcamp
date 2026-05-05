function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Vidhyasagar" />
      <Greeting name="John" />
    </div>
  );
}

export default App;