import { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function Read() {
    const [APIData, setAPIData] = useState();

    useEffect(() => {
        axios
            .get(`https://616888aa09e030001712c011.mockapi.io/fakeData`)
            .then((result) => setAPIData(result.data));
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        sessionStorage.setItem("ID", id);
        sessionStorage.setItem("First Name", firstName);
        sessionStorage.setItem("Last Name", lastName);
        sessionStorage.setItem("Checkbox Value", checkbox);
    };

    const getData = () => {
        axios.get(`https://616888aa09e030001712c011.mockapi.io/fakeData`).then((getData) => {
            setAPIData(getData.data);
        });
    };
    const onDelete = (id) => {
        axios.delete(`https://616888aa09e030001712c011.mockapi.io/fakeData/${id}`).then(() => {
            getData();
        });
    };

    return (
        <Container>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData?.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? "Checked" : "Unchecked"}</Table.Cell>
                                <Table.Cell>
                                    <Link to="/update">
                                        <button onClick={() => setData(data)}>Update</button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => onDelete(data.id)}>Delete</button>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
            <div id="addSectionWrapper">
                <Link exact to="/create">
                    <button>add section</button>
                </Link>
            </div>
        </Container>
    );
}

export default Read;

const Container = styled.div`
    margin-top: 20px;

    #addSectionWrapper {
        text-align: right;
    }
`;
