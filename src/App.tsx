import { useState } from "react";
import "./App.css";
import TestDummy from "./components/TestDummy/TestDummy";
import TestingItem from "./schemas/TestingItem";

function App() {
	const [itemsToTest, setItemsToTest] = useState<TestingItem[]>([
		{
			name: TestDummy.name,
			component: <TestDummy />,
			active: false,
		},
	]);
	const menuItems = itemsToTest.map((menuItem, index) => {
		const onChangeHandler = () =>
			setItemsToTest((prev) =>
				prev.map((item) =>
					item.name !== menuItem.name
						? item
						: { ...menuItem, active: !menuItem.active }
				)
			);
		return (
			<li key={menuItem.name}>
				<label>
					<input
						type="checkbox"
						checked={menuItem.active}
						onChange={onChangeHandler}
					/>
					{menuItem.name}
				</label>
			</li>
		);
	});
	return (
		<div className="App">
			<section className="items-test">
				<section className="items-list-control">
					<h2>Items to play:</h2>
					<ul>{menuItems}</ul>
				</section>
				<section className="items-list-playground">
					{itemsToTest
						.filter((item) => item.active)
						.map((item) => (
							<div
								className="items-list-playground__item"
								key={item.name}
							>
								{item.component}
							</div>
						))}
				</section>
			</section>
		</div>
	);
}

export default App;
