import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useState, useEffect } from "react";

const getInitialData = () => {
	const data = JSON.parse(localStorage.getItem("todos"));
	if(!data) return []
	return data
};

const initialTodos = [
	{ id: 1, text: "walk the cat", completed: false },
	{ id: 2, text: "do the dishes", completed: true },
	{ id: 3, text: "fold laundry", completed: false },
	{ id: 4, text: "take out trash", completed: false },
];

export default function TodoList() {
	const [todos, setTodos] = useState(getInitialData);
	// const [nextId, setNextId] = useState(todos.at(-1).id++);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const toggleTodo = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				} else {
					return todo;
				}
			});
		});
	};

	const removeTodo = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((t) => t.id !== id);
		});
	};

	const addTodo = (text) => {
		setTodos((prevTodos) => {
			return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }];
		});
	};
	return (
		<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggle={() => toggleTodo(todo.id)}
					remove={removeTodo}
				/>
			))}
			<TodoForm addTodo={addTodo} />
		</List>
	);
}
