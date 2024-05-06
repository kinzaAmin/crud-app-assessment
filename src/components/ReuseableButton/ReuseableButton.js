// components/Button.js
import React from "react";

const ReuseableButton = ({ title, onClick, style }) => {
	return (
		<button style={style} onClick={onClick}>
			{title}
		</button>
	);
};

export default ReuseableButton;
