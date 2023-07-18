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
    const {cartItems , removeItem, emptyCart} = useContext(AppContext)
    const [values, setValues] = useState(initialState);
    const [state, setState] = useState('pending');
    const [confirmationId, setConfirmationId] = useState(null);

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
    
                        <Button type="submit">Submit form</Button>
                    </Form>
                </div>
    
    
                <div>
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
                                    <td><button> - </button>{item.quantity}<button> + </button></td>
                                    <td>{item.quantity * item.funko.price}</td>
                                    <td>
                                        <button onClick={() => removeItem(item.funko)}>x</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={5}>Total</th>
                                <th>{total}</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
             </>
            ) : (
                <>
                    <h1>Congrats on your purchase</h1>
                    <p>Your confirmation is {confirmationId}</p>
                </>
            )}

           
        </div>


    )
};

export default ShoppingPage