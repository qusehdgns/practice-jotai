import React from 'react';
import {useAtom} from "jotai";
import {firstAtom} from "./store";

const Component: React.FC = () => {
	const [firstValue, setFirstValue] = useAtom(firstAtom);
	
	return (
		<div>
			{firstValue}
			<button onClick={() => setFirstValue(prev => prev + 1)}>add</button>
		</div>
	);
};

export default Component;
