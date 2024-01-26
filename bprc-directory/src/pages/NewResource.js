import React from 'react';
import { useState } from 'react';
import MainLayout from "../MainLayout";
import {directory} from '../config/firebase';
import { addDoc, collection, doc } from "firebase/firestore";

// take inputs from page and write to firebase
// https://www.youtube.com/watch?v=DV1sUeszRuA

function NewResource() {

    // set input values as objects of the resource 
    const [resource, setResource] = useState({
        name: "", 
        phone: "", 
        email: "", 
        area: "", 
        address: "", 
        website: "", 
        description: "",
    });

    // taking database reference from firebase to input into document
    // directory = firebase.firestore();

    // function to change the data in firestore
    const dataChange = (event) => {
        // event.PreventDefault();
        const {name, value} = event.target;
        setResource((prev) => {
            return {...prev, [name]: value};
        })
    }

    // // upload inputted data on site to documents on firebase 
    // const addResourceDoc = (event) => {
    //     event.PreventDefault();
    //     // use .add() to create automatic ids for each resource
    //     db.collection("Resources").add({
    //         name: resource.name, 
    //         phone: resource.phone,
    //         email: resource.email,
    //         area: resource.area,
    //         address: resource.address,
    //         website: resource.website,
    //         description: resource.description,
    //     }).then((resourceRef) => {
    //         // receives a document reference from firestore after resource is created
    //         const resourceId = resourceRef.id;
    //         console.log(resourceId);
    //     }).catch((err) => {
    //         // catches any errors that might occur when creating the resource
    //         console.log("error" + err.message);
    //     })
    // }

    return (
        <MainLayout>
            <div> Add New Resource </div>
            {/* call funciton on form submision */}
            <form>
            {/* onSubmit = {addResourceDoc} */}
                <input 
                    type = "text" 
                    name = "name" 
                    value = {resource.name} 
                    onChange = {dataChange}
                    placeholder = "Resource Name"
                />
                <input 
                    type = "text" 
                    name = "phone" 
                    value = {resource.phone}
                    onChange = {dataChange}
                    placeholder = "Phone Number"
                />
                <input 
                    type = "text" 
                    name = "email" 
                    value = {resource.email} 
                    onChange = {dataChange}
                    placeholder = "Email Address"
                />
                <input 
                    type = "text" 
                    name = "area" 
                    value = {resource.area} 
                    onChange = {dataChange}
                    placeholder = "Area"
                />
                <input 
                    type = "text" 
                    name = "address" 
                    value = {resource.address} 
                    onChange = {dataChange}
                    placeholder = "Address"
                />
                <input 
                    type = "text" 
                    name = "website" 
                    value = {resource.website} 
                    onChange = {dataChange}
                    placeholder = "Website"
                />
                <input 
                    type = "text" 
                    name = "description" 
                    value = {resource.description} 
                    onChange = {dataChange}
                    placeholder = "Description"
                />
                <button> Save Resource </button>
            </form>
        </MainLayout>
    )
}

export default NewResource