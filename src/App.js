import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import World from './components/world/world';
import India from './components/India/India';
import FAQ from './components/faq/faq';

const App = () =>{
    return(
        <BrowserRouter>
            <Route path="/" exact component={World}/>
            <Route path="/india" exact component={India}/>
            <Route path="/faq" exact component={FAQ}/>
        </BrowserRouter>
    );
}

export default App;