import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Contacts from "../components/Contacts.jsx"
import Welcome from "../components/Welcome.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
export default function Chat() {
    //const [currentChat, setCurrentChat] = useState(undefined);
    return (
        <>
            <Container>
                <div className="container">
                    <Contacts />
                    <Welcome />
                    <ChatContainer />
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`

`