import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './../route-config';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">				
					<Header />
					<Navigation />
					<Switch>
						{this.showRouter(routes)}
					</Switch>
					<Footer />				
				</div>
			</Router>
		);
	}

	showRouter(routers) {

		let xhtml = null;
		if(routers.length > 0) {
		  xhtml = routers.map((route, index) =>{
			  return <Route key={index} exact={route.exact} path={route.path} component={route.main} />
		  })
		}    
		return xhtml
	}

}

export default App;