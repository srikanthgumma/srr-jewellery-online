import Card from 'react-bootstrap/Card';
import img1 from '../Assets/rings.jpg';
import img2 from '../Assets/necklase.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-bootstrap';
import './srrBody.css';




export const SrrBody = () => {

    const [show, setShow] = useState(false);
    const [itemdata, setItemdata] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = (val) => {
        setShow(true);
        setItemdata(val);
        console.log(itemdata);
    }

    const data = [
        {
            id: "1",
            title: "Silver Ring",
            image: img1,
            category: "silver",
            price: "25000",
            description: ""
        },
        {
            id: "2",
            title: "Silver Ring",
            category: "silver",
            image: img2,
            price: "350000",
            description: ""

        },
        {
            id: "3",
            title: "Silver Ring",
            category: "gold",
            image: img1,
            price: "83737",
            description: ""

        },
        {
            id: "3",
            title: "Silver Ring",
            category: "gold",
            image: img1,
            price: "42999",
            description: ""

        },
        {
            id: "1",
            title: "Silver Ring",
            category: "gold",
            image: img1,
            price: "29101",
            description: ""
        },
        {
            id: "2",
            title: "Silver Ring",
            category: "gold",
            image: img2,
            price: "19999",
            description: ""
        },
        {
            id: "3",
            title: "Silver Ring",
            category: "silver",
            image: img1,
            price: "1989",
            description: ""
        },
        {
            id: "3",
            title: "Silver Ring",
            category: "gold",
            image: img1,
            price: "2599",
            description: ""
        },
        {
            id: "3",
            title: "Silver Ring",
            category: "silver",
            image: img1,
            description: "",
            price: "6599"
        },
        {
            id: "3",
            title: "Silver Ring",
            category: "silver",
            image: img1,
            description: "",
            price: "250000"
        },
        {
            id: "3",
            title: "Silver Ring",
            category: "silver",
            description: "",
            image: img1,
            price: "9999"
        },
        {
            id: "3",
            title: "Silver Ring",
            category: "silver",
            image: img1,
            description: "",
            price: "45999"
        }
    ]


    const store = data.map((v, i) => {
        return (
            <Card style={{ width: '100%', border: 'none' }} key={i}>
                <Card.Img variant="top" src={v?.image} style={{ width: '100%', height: '100%' }} />
                <Card.Body>
                    <Card.Title>{v.title}</Card.Title>
                    <Card.Text>
                        Price: {v.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => { handleShow(v) }}>Buy Now</Button>
                </Card.Body>

                <Offcanvas show={show} onHide={handleClose} placement='top' style={{ padding: "1rem", height: "fit-content" }}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Your Item</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='main'>
                            <Card className='Sub-1'>
                                <Card.Header>
                                    {itemdata.title}
                                </Card.Header>
                                <Card.Body className='p-0 w-100 h-100'>
                                    <img src={itemdata.image} alt='item' width='100%' height='100%' />
                                </Card.Body>
                                <Card.Footer>
                                    <p><b>Price:</b>{" "}{itemdata.price}</p>
                                </Card.Footer>
                            </Card>
                            <Card className='Sub-2 p-3 h-100'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et deleniti doloremque? Architecto adipisci et commodi. Hic, itaque corrupti magnam quam reiciendis deserunt provident.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magni et dolores in totam doloremque nulla error nemo tempore perferendis? Unde sunt ea ipsa, corrupti rerum quam explicabo harum laborum.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit asperiores placeat esse ullam ab voluptatem veniam at provident iusto commodi excepturi incidunt quod cumque dicta nemo vel, voluptatibus necessitatibus!</p>
                            </Card>
                            <Card className='Sub-3 p-3 h-100'>
                                <NavLink href='https://wa.me/c/919505254353' className='bg-primary w-50 text-center p-1 text-white m-auto'>Whatsapp</NavLink>
                            </Card>

                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Card>
        )

    })












    const [key, setKey] = useState('home');
    return (
        <>


            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    <div style={{ display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: '20px' }}>
                        {store}
                    </div>
                </Tab>
                <Tab eventKey="gold" title="Gold">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="silver" title="Silver">
                    Tab content for Contact
                </Tab>
            </Tabs>



        </>


    )
}