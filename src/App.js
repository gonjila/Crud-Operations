import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
    return (
        <Container>
            <BrowserRouter>
                <h2>React Crud Operations</h2>
                <Switch>
                    <Route exact path="/">
                        <Read />
                    </Route>
                    <Route exact path="/create">
                        <Create />
                    </Route>
                    <Route exact path="/update">
                        <Update />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Container>
    );
}

export default App;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #212121;
    color: whitesmoke;
    flex-direction: column;
`;
