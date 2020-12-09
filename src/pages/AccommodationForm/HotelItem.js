import React, { useState } from "react";

import { Item } from './AccommodationFormStyle';

export default function HotelItem({ hotel }) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    return (
        <Item
            backgroundImg={hotel.picUrl}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
            isMouseOver={isMouseOver}
        >
            <div>
                <span>{hotel.name}</span>
            </div>
        </Item>
    );
}