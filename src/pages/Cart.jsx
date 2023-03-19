import React from 'react'
import Table from 'react-bootstrap/Table';
import { useCart } from 'react-use-cart';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  let toastShown = false;
  const notify = () => {
    if (!toastShown) {
      toast.error('Product deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      toastShown = true
    }
  }



  return isEmpty ? <div className="d-flex align-items-center justify-content-center"><img className='img-fluid' src='https://www.qrcardboard.com/images/cart.gif?v=01' width={650} height={650} alt='err' /></div> :

    <div style={{ height: '72vh' }}>
      <h1 className='my-3 text-center fw-bold'>Cart</h1>
      <Table className='text-center mt-5' striped bordered hover >
        <thead >
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Product name</th>
            <th>Product price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {items.map((fd, i) => {
            return <tr>
              <td>{i + 1}</td>
              <td><img src={fd.images[0]} alt='err' width={50} height={50} /></td>
              <td>{fd.title}</td>
              <td>{fd.price.toFixed(2) * fd.quantity}$</td>
              <td>
                <Button onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)} className='py-2 px-3 me-2' variant='outline-danger'>-</Button>
                <span className='mx-2'>{fd.quantity}</span>
                <Button onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)} className='py-2 px-3 me-2' variant='outline-success'>+</Button>

              </td>
              <td>
                <Button onClick={() => {
                  removeItem(fd.id);
                  notify(); 
                }
                } variant='outline-danger'>Del</Button>

              </td>

            </tr>
          })}
        </tbody>
        <ToastContainer />
      </Table>

      <Button variant='outline-danger' onClick={() => emptyCart()} >Del</Button>
    </div>
}



export default Cart
