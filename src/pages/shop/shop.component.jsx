import React from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';
//get ship css etc big picture stud=ff is midssing

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        //destructing pulling off a same named property off an object and saving it to that name
        const {collections}= this.state;
        return (<div className="shop-page">
        {
        collections.map( ({id, ...otherCollectionProps}) => (
        <CollectionPreview key = {id} {...otherCollectionProps}/> 
        ))}
        </div>
        );// end return
       }// end render
}
export default ShopPage;

