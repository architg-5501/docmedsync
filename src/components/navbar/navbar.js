import { Button, Dropdown, Link, Navbar, Switch, Text, useTheme } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons.tsx';
import { AcmeLogo } from './logo.tsx';
import { GithubIcon } from '../icons/GithubIcon.tsx'

import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';
import useDarkMode from 'use-dark-mode';
import { Link as ReactLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Nav = () => {

    const darkMode = useDarkMode(false);
    const navigate = useNavigate();



    const collapseItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Services", link: "/" },
        { name: "Dashboard", link: "/dashboard" }


    ];
    return (
        <Navbar
            isBordered
            variant={"sticky"}
            maxWidth={"fluid"}

        >
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand

            >
                <AcmeLogo />
                <Text b color="inherit">
                    docmedsync
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                variant="highlight-rounded"
            >
                <Navbar.Link onPress={() => { navigate("/") }}  >Home</Navbar.Link>
                <Navbar.Link onPress={() => navigate("/about")} >About</Navbar.Link>
                <Navbar.Link onPress={() => navigate("/")} >Services</Navbar.Link>
                <Navbar.Link onPress={() => navigate("/dashboard")} >Dashboard</Navbar.Link>
            </Navbar.Content>

            <Navbar.Collapse >
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={item}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: '100%',
                            }}

                            onPress={() => navigate(item.link)}
                        >
                            
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
                <Navbar.CollapseItem>
                    <Link
                        color="inherit"
                        css={{
                            minWidth: '100%',
                        }}
                        target="_blank"
                        href="https://github.com/SahilJaiman/docmedsync"
                    >
                        <GithubIcon />
                    </Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Switch
                        checked={darkMode.value}
                        onChange={() => darkMode.toggle()}
                        iconOn={<SunIcon filled />}
                        iconOff={<MoonIcon filled />}
                    />
                </Navbar.CollapseItem>
            </Navbar.Collapse>
            <Navbar.Content>
                <ModalLogin />


                <Navbar.Item hideIn={'xs'}>
                    <Link
                        color="inherit"
                        css={{
                            minWidth: '100%',
                        }}
                        target="_blank"
                        href="https://github.com/SahilJaiman/docmedsync"
                    >
                        <GithubIcon />
                    </Link>
                </Navbar.Item>
                <Navbar.Item hideIn={'xs'}>
                    <Switch
                        checked={darkMode.value}
                        onChange={() => darkMode.toggle()}
                        iconOn={<SunIcon filled />}
                        iconOff={<MoonIcon filled />}
                    />
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    );
};