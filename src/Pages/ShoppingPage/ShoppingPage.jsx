import { useState } from "react";
import "./shoppingpage.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

//Firebase

import { db } from "../../firebase/firebaseConfig";
import { collection } from "firebase/firestore";

const initialState = {
    name : "",
    email : "",
    confirmEmail: "",

};

const ShoppingPage = () => {
    const [values, setValues] = useState (initialState);

    const handleOnChange = (e) => {
        const {value, name} = e.target;
        setValues ({ ...values, [name]: value});

    };

    const onSubmit = async (e) => {
        e.preventDefault ();

        const docRef = await addDoc (collection(db, "purchaseTransaction"), { values})
        setValues(initialState);
    }

    return (
        <div>
            <div className="title">
                <h1>
                    Shopping Cart
                </h1>
            </div>
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



        </div>


    )
};

export default ShoppingPage