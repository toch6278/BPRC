import React, { useState, useEffect } from 'react';
import { directory } from '../config/firebase';
import { collection } from "firebase/firestore";

function DisplayCard()
{
    const resourceCard = collection(directory, "Resources");
    console.log("resource card id:", resourceCard.id);

    return (
        <div key = {resourceCard.id}>
            <h4> Name: {resourceCard.name}</h4>
        </div>
    )
}

export default DisplayCard; 