import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


// Component
import CollectionItem from '../../component/collection-item/collection-item';


// Stylesheet
import './collection.scss';


function Collection() {
    const { collectionID } = useParams();
    
    const collection = useSelector(
        state => 
            state.shop.collections[collectionID]
    ); 
    
    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))} 
            </div> 
        </div>
    )
}


export default Collection;