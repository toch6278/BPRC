import React from 'react';
import { useState } from 'react';
import MainLayout from "../MainLayout";
import {directory} from '../config/firebase';
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import "./style.css";

// take inputs from page and write to firebase
// https://www.youtube.com/watch?v=LCvBPsuHe6g&t=839s
// https://www.youtube.com/watch?v=PkioTiY3u1A

function NewResource(){

    // set input values as objects of the resource 
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [area, setArea] = useState('');
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [hashtag1, setHashtag1] = useState('');
    const [hashtag2, setHashtag2] = useState('');

    const addResource = async (event) => {
        event.preventDefault(); 

        const newResource = {
            name, 
            phone, 
            email,
            address,
            area,
            website,
            description,
            hashtag1,
            hashtag2,
        };
        
        console.log(newResource);

        // Add doc to database 
        try {
            await addDoc(collection(directory, "Resources"), 
            {
                // spread values of newResource json
                ...newResource
            });
        } catch (error) {
            console.log(error)
        }

        alert("Added Resource to Database");
        
        // clear previous inputs
        setName({ name: " " });
        setPhone({ phone: " " });
        setEmail({ email: " " });
        setAddress({ address: " " });
        setArea({ area: " " });
        setWebsite({ website: " " });
        setDescription({ description: " " });
        setHashtag1({ hashtag1: " " });
        setHashtag2({ hashtag2: " " });

    }

    return (
        <MainLayout>
            {/* call funciton on form submision */}
            <div className = 'container'> 
                <form method = 'POST' onSubmit = {addResource}>
                    <div className = 'title'> Add New Resource </div>
                {/* onSubmit = {addResourceDoc} */}
                    <input 
                        type = "text" 
                        name = "name" 
                        value = {name} 
                        onChange = {event => setName(event.target.value)}
                        placeholder = "Resource Name"
                        autoComplete = "off"
                        required
                    />
                    <input 
                        type = "text" 
                        name = "phone" 
                        value = {phone}
                        onChange = {event => setPhone(event.target.value)}
                        placeholder = "Phone Number"
                        autoComplete = "off"
                        required
                    />
                    <input 
                        type = "text" 
                        name = "email" 
                        value = {email} 
                        onChange = {event => setEmail(event.target.value)}
                        placeholder = "Email Address"
                        autoComplete = "off"
                    />
                    <input 
                        type = "text" 
                        name = "address" 
                        value = {address} 
                        onChange = {event => setAddress(event.target.value)}// onChange = {dataChange}
                        placeholder = "Address"
                        autoComplete = "off"
                        required
                    />
                    <input 
                        type = "text" 
                        name = "area" 
                        value = {area} 
                        onChange = {event => setArea(event.target.value)}
                        placeholder = "Area"
                        autoComplete = "off"
                        required
                    />
                    <input 
                        type = "text" 
                        name = "website" 
                        value = {website} 
                        onChange = {event => setWebsite(event.target.value)}
                        placeholder = "Website"
                        autoComplete = "off"
                        required
                    />
                    <textarea 
                        type = "text" 
                        name = "description" 
                        value = {description} 
                        onChange = {event => setDescription(event.target.value)}
                        placeholder = "Description"
                        autoComplete = "off"
                    />
                    <input 
                        type = "text" 
                        name = "hashtag1" 
                        value = {hashtag1} 
                        onChange = {event => setHashtag1(event.target.value)}
                        placeholder = "Hashtag #1"
                        autoComplete = "off"
                        required
                    />
                    <input 
                        type = "text" 
                        name = "hashtag2" 
                        value = {hashtag2} 
                        onChange = {event => setHashtag2(event.target.value)}
                        placeholder = "Hashtag #2"
                        autoComplete = "off"
                    />
                    <button> Save Resource </button>
                </form>
            </div>
        </MainLayout>
    )
};

export default NewResource;