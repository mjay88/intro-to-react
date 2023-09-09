import ColorBox from "./ColorBox";
import "./ColorBoxLayout.css";
export default function ColorBoxLayout({ colors }) {
	function createLayout() {
		const array = [];
		for (let i = 0; i < 25; i++) {
			array.push(<ColorBox colors={colors} />);
		}
		return array;
	}

	return (
		<div className="container">
			<div className="ColorBoxLayout">
				{createLayout().map((el) => {
					return el;
				})}
			</div>
		</div>
	);
}
