import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../src/components/Header"
import Login from "./pages/Login";


function Router() {

    return (
        <>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Header />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    );
}

export default Router;