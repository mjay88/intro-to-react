import { useState } from "react";
import "./ColorBox.css";


export default function ColorBox({ colors }) {
    const [newColor, setNewColor] = useState(
        colors[Math.floor(Math.random() * colors.length)]
    );
    
	function randomColor() {
		const color = colors[Math.floor(Math.random() * colors.length)];
        setNewColor(color)	
	}

	return (
		<div
			className="ColorBox"
			onClick={() => randomColor()}
			style={{ backgroundColor: newColor }}
		>
	
		</div>
	);
}
