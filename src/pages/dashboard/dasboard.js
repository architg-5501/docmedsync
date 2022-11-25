import React from 'react'
import { Nav } from '../../components/navbar/navbar'
import { Card, Grid, Row, Text } from "@nextui-org/react";
export default function Dasboard() {




    const list = [
        {
            title: "Public",
            img: "/images/fruit-1.jpeg",
            desc: "These function are open to all and do not need any special privileges to access.",
        },
        {
            title: "Authorized",
            img: "/images/fruit-2.jpeg",
            desc: "These funtions are for the authorized organization only. Make sure that you have the correct access rights before you enter.",
        },
        {
            title: "Hospital",
            img: "/images/fruit-3.jpeg",
            desc: "These funtions are for the verified hospitals only. Make sure that you have the correct access rights before you enter.",
        },
        {
            title: "Patient",
            img: "/images/fruit-1.jpeg",
            desc: "These funtions are for registerd patients only. Make sure that you have the correct access rights before you enter.",
        },
        {
            title: "Admins",
            img: "/images/fruit-2.jpeg",
            desc: "These funtions are for the admins only. Make sure that you have the correct access rights before you enter.",
        },
        {
            title: "Owner",
            img: "/images/fruit-3.jpeg",
            desc: "These funtions are for the Owner only. Make sure that you are the owner before you access.",
        },


    ];

    return (
        <div>
           

            <Grid.Container gap={5} justify="space-evenly" css={{ marginTop: "$10" }}  >
                {list.map((item, index) => (
                    <Grid xs={12} sm={4} key={index} justify="center">
                        <Card isHoverable isPressable css={{ mw: "500px" }}>
                            <Card.Header css={{justifyContent:"center"}}>
                                <Text  weight="bold" size={30} >{item.title}</Text>
                            </Card.Header>
                           
                            <Card.Body css={{ py: "$10" }}>
                                <Text >
                                    {item.desc}
                                </Text>
                            </Card.Body>
                           
                            <Card.Footer>
                                
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>


        </div>
    )
}
