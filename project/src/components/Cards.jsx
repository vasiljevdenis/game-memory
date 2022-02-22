import React, { useEffect, useState } from 'react';
import './Cards.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Cards() {
    
let itemClass = "col card";
let startGame = useSelector(state => state.start);
const dispatch = useDispatch();
const [items, setItems] = useState([]);
const [openedCard, setOpenedCard] = useState([]);
const [matched, setMatched] = useState([]);

useEffect(() => {
    if (matched.length === 18) dispatch({
        type: "START_GAME",
        payload: false
    });
}, [matched])

useEffect(() => {
    let pairIcons;
    const url = './data/icons.json';
    axios.get(url).then((resp) => {
        const allIcons = resp.data;
        pairIcons = [...allIcons, ...allIcons];
        pairIcons.sort(() => Math.random() - 0.5);
        setItems(pairIcons);
    });
}, [])

function handleClick(index) {
    if (!openedCard.includes(index)) {
        setOpenedCard((opened) => [...opened, index]);
    }
}

useEffect(() => {
    if (openedCard < 2) return;

    const fMatched = items[openedCard[0]];
    const sMatched = items[openedCard[1]];
    let interval = null;
    if (sMatched && fMatched.id === sMatched.id) {
        setMatched([...matched, fMatched.id]);
    }

    if (openedCard.length === 1) {
        clearInterval(interval);
        interval = setTimeout(() => setOpenedCard([]), 5000);
    }
    if (openedCard.length === 2) {
        clearInterval(interval);
        interval = setTimeout(() => setOpenedCard([]), 500);
    }
    if (openedCard.length > 2) setOpenedCard([]);
    return () => clearInterval(interval);
}, [openedCard]);

return (
    <div className={startGame ? "row cards" : "row cards invisible"}>
        {items.map((item, index) => {
                 
          let isOpened = false;
          let isMatched = false;
          if (openedCard.includes(index)) isOpened = true;  
          if (matched.includes(item.id)) isMatched = true;        

          return (
            <div className={isOpened ? itemClass + " moved" : isMatched ? itemClass + " invisible" : itemClass} key={index} onClick={()=> handleClick(index)}>
                <div className="inside">
                    <div className="front">
                        <img src={item.src} alt="icon" />
                    </div>
                    <div className="back">
                    </div>
                </div>
            </div>
          );
        })}       
    </div>
)
};

export default Cards;