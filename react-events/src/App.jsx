import Clicker from "./Clicker";
import Clicker2 from "./Clicker2";
import "./App.css";

function App() {
  return (
		<div>
			<Clicker2
				message={"Hi!"}
				buttonText={"please click me"}
			/>
			<Clicker2
				message={"Please stop clicking me!"}
				buttonText={"do not click"}
			/>
		</div>
	);
}

export default App;
