import React from 'react';
import {Provider} from "jotai";
import Component from "./Component";

const Case1 = () => {
	return (
		<>
			<h2>Provider Effect Test</h2>
			<Provider>
				<Component/>
			</Provider>
			<Provider>
				<Component/>
			</Provider>
		</>
	);
};

export default Case1;
