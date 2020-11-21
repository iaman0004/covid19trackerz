import React from 'react';
import { Switch, Route } from 'react-router-dom';

import World from './components/world/world';
import India from './components/India/India';
import FAQ from './components/faq/faq';

const Screen = () => {
	return (
		<Switch>
			<Route path='/' exact component={World} />
			<Route path='/india' exact component={India} />
			<Route path='/faq' exact component={FAQ} />
		</Switch>
	);
};

export default Screen;
