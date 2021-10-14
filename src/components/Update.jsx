import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";

function Update() {
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checkbox, setCheckbox] = useState();
    const history = useHistory();

    useEffect(() => {
        setID(sessionStorage.getItem("ID"));
        setFirstName(sessionStorage.getItem("First Name"));
        setLastName(sessionStorage.getItem("Last Name"));
        setCheckbox(sessionStorage.getItem("Checkbox Value") === "true" ? true : false);
    }, []);

    const updateAPIData = () => {
        axios
            .put(`https://616888aa09e030001712c011.mockapi.io/fakeData/${id}`, { firstName, lastName, checkbox })
            .then(() => history.push("/"));
    };

    return (
        <Container>
            <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox
                    label="I agree to the Terms and Conditions"
                    checked={checkbox}
                    onChange={(e) => setCheckbox(!checkbox)}
                />
            </Form.Field>
            <Button type="submit" onClick={updateAPIData}>
                Update
            </Button>
        </Container>
    );
}

export default Update;

const Container = styled(Form)`
    label {
        color: whitesmoke !important;
        font-family: "Montserrat", sans-serif;
        font-size: 12px !important;
    }
`;
