import React from 'react';
import {Route, Routes} from "react-router-dom";
import Case1 from "./case1";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/case1" element={<Case1 />} />
		</Routes>
	);
};

export default App;