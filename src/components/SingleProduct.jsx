import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SingleProduct = ({ item }) => {
  const { addItem } = useCart();
  const notify = () => toast.success('Product Added', {
    position: "bottom-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  
  return (
    <Col sm={12} md={3}  >
      <Card style={{ width: '18rem', height: 'auto' }}>
        <div className="text-center">
          <Card.Img variant="top" src={item.images[0]} style={{ width: '268px', height: '200px', 'borderRadius': '10px' }} />
        </div>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description.substring(0, 50)}
          </Card.Text>
          <Card.Text>
            Price: {item.price}$
          </Card.Text>
          <Button variant="primary" onClick={() => {
            addItem(item);
            notify();
          }}>Add to cart</Button>
          <ToastContainer
            position="bottom-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleProduct