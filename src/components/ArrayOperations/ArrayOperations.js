import React from "react";

const ArrayOperations = () => {
	const exampleArray = [1, 2, [3, 4], [5, [6, 7]]];

	return (
		<div>
			<h2>Array Operations</h2>
			<h3>Map</h3>
			<p>{exampleArray.map((item) => item)}</p>
			<h3>Flat</h3>
			<p>{exampleArray.flat()}</p>
			<h3>Slice</h3>
			<p>{exampleArray.slice(1, 3)}</p>
			<h3>Filter</h3>
			<p>{exampleArray.filter((item) => Array.isArray(item))}</p>
		</div>
	);
};

export default ArrayOperations;
