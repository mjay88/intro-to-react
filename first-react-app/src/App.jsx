import "./App.css";
import Greeter from "./Greeter";
import SlotMachine from "./SlotMachine";
import ShoppingList from "./ShoppingList";
import ScoreKeeper from "./ScoreKeeper";
import ColorBox from "./ColorBox";
import ColorBoxLayout from "./ColorBoxLayout";
import Box from "./Box";
import BoxGrid from "./BoxGrid";

const data = [
	{ id: 1, item: "eggs", quantity: 12, completed: false },
	{ id: 2, item: "milk", quantity: 1, completed: true },
	{ id: 3, item: "chicken breasts", quantity: 4, completed: false },
	{ id: 4, item: "carrots", quantity: 6, completed: true },
];

const palette = [
	"#42a5f5",
	"#1976d2",
	"#1565c0",
	"#ba68c8",
	"#9c27b0",
	"#7b1fa2",
	"#ef5350",
	"#d32f2f",
	"#c62828",
	"#ff9800",
	"#ed6c02",
	"#e65100",
	"#03a9f4",
	"#0288d1",
	"#01579b",
	"#4caf50",
	"#2e7d32",
	"#1b5e20",
];

function App() {
	return (
		<div>
			{/* <ShoppingList items={data} /> */}
			{/* <ScoreKeeper numPlayers={10} target={3} /> */}
			{/* <ColorBoxLayout colors={palette} /> */}
		
			<BoxGrid />
		</div>
	);
}

export default App;
