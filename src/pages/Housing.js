import React from 'react';
import { Navigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';


export default function Housing(props) {
   
    const { item } = props;

    if (!item || !item.id) {
        return <Navigate to="/not-found" replace={true} />;
      }
    
    return(
        <div className="housing">
            <Slideshow pictures={ item.pictures }/>
            <div className='housing-header'>
                <div className='housing-description'>
                    <h2>{ item.title }</h2>
                    <h3>{ item.location }</h3>
                    <ul className="tag-list">
                    { item.tags.map((tag, index) => (
                        <li key={ index }>{ tag }</li>
                    ))}
                    </ul>
                </div>
                <div className='housing-host-rating'>
                    <div className='housing-host'>
                        <h4>{ item.host.name }</h4>
                        <img src={ item.host.picture } alt={ item.host.name } className="host-img"></img>
                    </div>
                    <Rating rating = { item.rating }/>
                </div>
            </div>
            <div className="housing-collapse">
                <Collapse about={{ title: "Description", text: item.description, list: false }} />
                <Collapse about={{ title: "Equipements", text: item.equipments, list: true }} />
            </div>
        </div>
    )
}