import { useContext, useState } from "react";
import "./shoppingpage.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Table from 'react-bootstrap/Table';

//Firebase

import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { AppContext } from "../../data";

const initialState = {
    name : "",
    email : "",
    confirmEmail: "",

};

const ShoppingPage = () => {
    const {cartItems , setItemsCart, removeItem, emptyCart} = useContext(AppContext)
    const [values, setValues] = useState(initialState);
    const [state, setState] = useState('pending');
    const [confirmationId, setConfirmationId] = useState(null);

    const decreaseQuantity = (funko) => {
        setItemsCart((prevCartItems) =>
          prevCartItems.map((item) => {
            if (item.funko.id === funko.id) {
              if (item.quantity === 1) {
                removeItem(funko);
                return null;
              } else {
                return { ...item, quantity: item.quantity - 1 };
              }
            }
            return item;
          }).filter(Boolean)
        );
      };
      
      
      const increaseQuantity = (funko) => {
        setItemsCart((prevCartItems) =>
          prevCartItems.map((item) => {
            if (item.funko.id === funko.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          })
        );
      };
      

    const handleOnChange = (e) => {
        const {value, name} = e.target;
        setValues({ ...values, [name]: value});
        
    };


    const onSubmit = async (e) => {
        e.preventDefault ();

        const submission = {
            form: values,
            cart: cartItems 
        };

        const docRef = await addDoc (collection(db, "purchaseTransaction"), { values: submission })

        setValues(initialState);
        setState('done');
        setConfirmationId(docRef.id);
        emptyCart();

    }

    let total = 0;
    cartItems .forEach(item => {
        total += item.funko.price * item.quantity;
    })

    return (
        <div>
            <div className="title">
                <h1>
                    Shopping Cart
                </h1>
            </div>

            {state === 'pending' ? (
                <>
                <div className="grandiv">
                    <div className="formdiv">
                        <Form onSubmit={onSubmit}>
                            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                            <Form.Control
                                as="textarea"
                                placeholder="Name"
                                name="name"
                                value={values.name}
                                onChange={handleOnChange}
                            />
                            </FloatingLabel>
        
                            <FloatingLabel controlId="floatingInput2" label="Email address" className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                value={values.email}
                                onChange={handleOnChange}
                            />
                            </FloatingLabel>
        
                            <FloatingLabel controlId="floatingInput3" label="Confirm email address" className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="confirmEmail"
                                value={values.confirmEmail}
                                onChange={handleOnChange}
                            />
                            </FloatingLabel>
        
                            <Button variant="dark" type="submit">Submit form</Button>
                        </Form>
                    </div>
        
        
                    <div className="tablediv">
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems .map((item, idx) => (
                                    <tr key={item.funko.id}>
                                        <td>{idx + 1}</td>
                                        <td>{item.funko.name}</td>
                                        <td>{item.funko.franchise}</td>
                                        <td>€{item.funko.price}</td>
                                        <td><Button variant="outline-dark" size="sm" onClick={() => decreaseQuantity(item.funko)}> - </Button>{item.quantity}<Button variant="outline-dark" size="sm" onClick={() => increaseQuantity(item.funko)}> + </Button></td>
                                        <td>{item.quantity * item.funko.price}</td>
                                        <td>
                                            <Button variant="outline-dark" size="sm" onClick={() => removeItem(item.funko)}>x</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan={5}>Total</th>
                                    <th>€{total}</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </Table>
                    </div>
                </div>
             </>
            ) : (
                <>
                    <div className="confirmation">
                        <h2>Thank you for your purchase</h2>
                        <h3>Your confirmation code is {confirmationId}</h3>
                    </div>
                </>
            )}

           
        </div>


    )
};

export default ShoppingPage