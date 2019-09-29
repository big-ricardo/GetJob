import React, { useState, useEffect } from 'react';

export default function List() {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useState(null);

    useEffect(() => {
        window.onScroll =handleScroll();
    }, []);

    function handleScroll() {
        console.log(document.querySelector('#root').scrollTop)
        console.log( window.innerHeight )
        console.log(document.querySelector('#root').scrollHeight)
        alert("evento scroll detectado! " + window.pageXOffset + " " + window.pageYOffset);
        
        if (document.querySelector('#root').scrollTop +  window.innerHeight  >= document.documentElement.scrollHeight) console.log('a');
        setIsFetching(true);
    }

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    function fetchMoreListItems() {
        setTimeout(() => {
            setIsFetching(null);
            setListItems(prevState => ([...prevState, ...Array.from(Array(30).keys(), n => n +prevState.length  + 1)]));
        }, 2000);}
        

        return (
            <div>
                <ul className="list-group mb-2">
                    {listItems.map(listItem => <li key={listItem} className="list-group-item">List Item {listItem}</li>)}
                </ul>
                {isFetching && 'Fetching more list items...'}
            </div>
        );
    
}
