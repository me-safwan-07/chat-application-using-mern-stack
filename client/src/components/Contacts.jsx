import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

export default function Contacts({}) {

    return (
        <>
            <Container>
                <div className="brand">
                    <img src={Logo} alt="logo" />
                    <h3>snappy</h3>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    //display: grid;
    //grid-template-rows: 10% 75% 15%;

    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        
        img {
            height: 2rem;
        }
        
        h3 {
            //color: white;
            text-transform: uppercase;
        }
        
    }
`