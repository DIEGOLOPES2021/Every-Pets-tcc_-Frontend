import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../src/components/Header"
import Login from "./pages/Login";
import Footer from "../src/components/Footer"


function Router() {

    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Footer />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    );
}

export default Router;