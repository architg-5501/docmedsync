import React, { useState, useEffect } from 'react'
//import "./Owner.css";
import { getWeb3 } from "../../../utils.js";
import Docmedsync from "../../../contracts/Docmedsync.json";
import { Input, Button, Text } from "@nextui-org/react";

import Loading from '../../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const Owner = () => {

    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [contract, setContract] = useState(undefined);
    const history = useNavigate();
    const [addAdmin, setAddAdmin] = useState("");
    const [removeAdmin, setRemoveAdmin] = useState("");
    const [transferOwnership, setTransferOwnership] = useState("");

    const isReady = () => {
        return (
            typeof contract !== 'undefined'
            && typeof web3 !== 'undefined'
            && typeof accounts !== 'undefined'
        );
    }

    useEffect(() => {
        const init = async () => {
            try {
                const web3 = await getWeb3();
                const accounts = await web3.eth.getAccounts();
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = Docmedsync.networks[networkId];
                if (deployedNetwork === undefined)
                    throw new Error('Make sure you are on the corrent network. Set the network to Ropsten Test Network');
                const contract = new web3.eth.Contract(
                    Docmedsync.abi,
                    deployedNetwork && deployedNetwork.address,
                );

                setWeb3(web3);
                setAccounts(accounts);
                setContract(contract);
            } catch (error) {
                window.alert(error);
                history("/dashboard");
            }
        }
        init();
        if (isReady()) {
            window.ethereum.on('accountsChanged', accounts => {
                setAccounts(accounts);
            });
        }
    }, [history]);

    const AddAdmin = async (e) => {
        e.preventDefault();
        try {
            console.log(addAdmin);
            console.log("Adding...");
            await contract.methods.addAdmin(addAdmin.trim()).send({ from: accounts[0] });
            console.log("Added!!!");
            window.alert("Admin added successfully");
        } catch (error) {
            window.alert("Admin could not be added. Make sure you are the Owner and check the entered Address");
            console.error(error);
        }
        setAddAdmin("");
    }

    const RemoveAdmin = async (e) => {
        e.preventDefault();
        try {
            await contract.methods.removeAdmin(removeAdmin.trim()).send({ from: accounts[0] });
            window.alert("Admin removed successfully");
        } catch (error) {
            window.alert("Admin could not be removed. Make sure you are the Owner and check the entered Address");
            console.error(error);
        }
        setRemoveAdmin("");
    }

    const TransferOwnership = async (e) => {
        e.preventDefault();

        try {
            await contract.methods.changeOwner(transferOwnership.trim()).send({ from: accounts[0] });
            window.alert("Owner changed successfully");
        } catch (error) {
            window.alert("Ownership could not be transferred. Make sure you are the Owner and check the entered Address");
            console.error(error);
        }
    }

    if (!isReady()) {
        return <Loading />;
    }

    return (
        <>
            <section className="owner-dash-wrapper">
                <div className="container" >
                    <div className="section-title" >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Text h2>Owner's Dashboard</Text>
                            <Text >Various operations the owner can do.</Text>

                        </div>

                    </div>
                    <div className="add-admin"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginLeft: "10%",
                            marginTop: "4%",
                            marginBottom:"2%"
                        }}>
                        <Text h4 css={{marginBottom:"2rem"}}> Add new Admin</Text>
                            <form onSubmit={AddAdmin}>

                                <div style={{ display: "flex", flexDirection: "row", justifyItems:"center",gap:"2rem" }}>

                                    <Input
                                        clearable
                                        type="text"
                                        bordered
                                        labelPlaceholder="Admin's Address"
                                        color="primary"
                                        required={true}
                                        width='400px'
                                        value={addAdmin}
                                        onChange={e => setAddAdmin(e.target.value)}

                                    />
                                    <Button type='submit' shadow auto color="primary"  rounded>Click Here </Button>
                                </div>
                            </form>
                    </div>
                   

                    <div className="remove-admin"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginLeft: "10%",
                            marginTop: "4%",
                            marginBottom:"2%"
                        }}>
                        <Text h4 css={{marginBottom:"2rem"}}>Remove an Admin</Text>
                            <form onSubmit={RemoveAdmin}>

                                <div style={{ display: "flex", flexDirection: "row", justifyItems:"center",gap:"2rem" }}>

                                    <Input
                                        clearable
                                        type="text"
                                        bordered
                                        labelPlaceholder="Admin's Address"
                                        color="primary"
                                        required={true}
                                        width='400px'
                                        value={removeAdmin}
                                        onChange={e => setRemoveAdmin(e.target.value)}

                                    />
                                    <Button type='submit'shadow  auto color="primary"  rounded>Click Here </Button>
                                </div>
                            </form>
                    </div>

                    <div className="transfer-ownership"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginLeft: "10%",
                            marginTop: "4%",
                            marginBottom:"2%"
                        }}>
                        <Text h4 css={{marginBottom:"2rem"}}>Remove an Admin</Text>
                            <form onSubmit={TransferOwnership}>

                                <div style={{ display: "flex", flexDirection: "row", justifyItems:"center",gap:"2rem" }}>

                                    <Input
                                        clearable
                                        type="text"
                                        bordered
                                        labelPlaceholder="New Owner's Address"
                                        color="primary"
                                        required={true}
                                        width='400px'
                                        value={transferOwnership}
                                        onChange={e => setTransferOwnership(e.target.value)}

                                    />
                                    <Button type='submit' shadow  auto color="primary"  rounded>Click Here </Button>
                                </div>
                            </form>
                    </div>

            

                    
                </div>
            </section>
        </>
    )
}

export default Owner
