import * as React from "react";
import * as ReactDOM from "react-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";


import {
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Button
} from "react-bootstrap";
import { Router, Route, hashHistory } from 'react-router';
import { Details } from "./Details";
import { Orders } from "./Orders";
import "../scss/index.scss";


class MainNav extends React.Component<undefined, undefined> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
			<Navbar collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<span>Simple React-Redux example</span>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
                        <NavItem eventKey={2} href='#/detailsPage'>Details</NavItem>
                        <NavItem eventKey={2} href='#/ordersPage'>Orders</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar> 
        )
    }
}

class App extends React.Component<undefined, undefined> {
    render() {
        return (
            <div>
                <div>
                    <MainNav/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


ReactDOM.render((
    <Router history={hashHistory}>
        <Route component={App}>
            <Route
                path="/"
                component={Details} />
            <Route
                path="/detailsPage"
                component={Details} />
            <Route
                path="/ordersPage"
                component={Orders} />
        </Route>
    </Router>
), document.getElementById('root'));

