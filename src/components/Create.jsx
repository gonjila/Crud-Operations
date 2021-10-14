import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";

function Create() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const history = useHistory();

    const postData = () => {
        // სერვერზე ტვირთავს ფორმაში ჩაწერილ მონაცემებს
        axios
            .post(`https://616888aa09e030001712c011.mockapi.io/fakeData`, { firstName, lastName, checkbox })
            .then(() => history.push("/"));
    };

    return (
        <Container>
            <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" onChange={() => setCheckbox(!checkbox)} />
            </Form.Field>
            <Button type="submit" onClick={postData}>
                Submit
            </Button>
        </Container>
    );
}

export default Create;

const Container = styled(Form)`
    label {
        color: whitesmoke !important;
        font-family: "Montserrat", sans-serif;
        font-size: 12px !important;
    }
`;
