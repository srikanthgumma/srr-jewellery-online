import axios from "axios"
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export const SrrAdmin = () => {
  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((val) => {
      setdata(val.data);
    })
  
  },[]);


  const submit_action =(e) => {
    e.preventDefault();
    console.log(e);
    let item_title = e.target[0].value;
    let item_price = e.target[1].value;
    let  item_image  = e.target[2].value;

    console.log(item_image);

    const adddata = {
      title:item_title,
      price:item_price,
      image:item_image,
    category:'jewelery'
    };
    setShow(false);
    data.push(adddata)
    setdata(data);

    console.log(data);
    item_image= item_price= item_title = "";
  }

  const store = data.map((v, i, ar) => {
    if (v.category === 'jewelery') {
      return (
        <Card style={{ width: '100%', height: 'fit-content', border: 'none' }} key={i}>
          <Card.Img variant="top" src={v?.image} style={{ width: '200px', height: '200px' }} />
          <Card.Body>
            <Card.Title>{v.title}</Card.Title>
            <Card.Text>
              Price: {v.price}
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      )
    }

    return true

  })


  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginRight: "20px" }}>
        <Button variant="primary" onClick={handleShow}>
          Add an Item
        </Button>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <form onSubmit={submit_action}>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Item Title"
                className="mb-3"
              >
                <Form.Control type="text" placeholder=""/>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Enter Price"
                className="mb-3"
              >
                <Form.Control type="text" placeholder=""/>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Upload"
                className="mb-3"
              >
                <Form.Control type="file"/>
              </FloatingLabel>

              <div style={{display:'flex',columnGap:'20px'}}>
                <input type="button" value="CANCEL" onClick={handleClose} />
                <input type="submit" value="Add" />
              </div>
            </form>






          </Modal.Body>
        </Modal>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: '20px', padding: '2rem' }}>
        {store}
      </div>
    </>


  )
}