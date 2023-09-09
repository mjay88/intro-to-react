import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./ScoreKeeper.css";
import { set } from "mongoose";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
	const [scores, setScores] = useState(new Array(numPlayers).fill(0));

	function incrementScore(idx) {
		setScores((prevScores) => {
			return prevScores.map((score, i) => {
				if (i === idx) return score + 1;
				return score;
			});
		});
	}

	const resetScores = () => {
		setScores(new Array(numPlayers).fill(0));
	};

	return (
		<div>
			{scores.map((score, i) => {
				return (
					<div>
						<span>
							Player {i + 1} Score {score}
						</span>
						{score >= 3 && <span>You Win!</span>}
						<button onClick={() => incrementScore(i)}>
							Increment Score of Player {i + 1}
						</button>
					</div>
				);
			})}
			<button onClick={resetScores}>Reset Scores</button>
		</div>
	);
}
