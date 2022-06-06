// function HelloWorld() {
//   return <div className="container">Hello Function Component</div>;
// }

// function App() {
//   return (
//     <>
//       <HelloWorld />
//       <HelloWorld />
//     </>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

class HelloWorld extends React.Component {
  render() {
    return <div className="container">Hello Class Component</div>;
  }
}

root.render(<HelloWorld />);
