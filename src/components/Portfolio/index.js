import React , { useState , useEffect } from 'react';
import {PortfolioSection , PortfolioTitle , TitleSpan , PortfolioList, ListItem , DivInBox , Img , Overlay , OverlaySpan } from './style';
import axios from 'axios';


const Portfolio  = () => {

    const [ images , setImages] = useState([])

    useEffect ( () => {
       axios.get('js/data.json').then( res => { setImages (res.data.portfolio)})

    
    } , []  )

    const PortfolioImages = images.map( (imageItem) => {
        return (
            <DivInBox key={imageItem.id}>
            <Img src={imageItem.image} alt=""  />
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </DivInBox>
        
        )
    })

    return(
        <PortfolioSection>
        <PortfolioTitle><TitleSpan>My</TitleSpan> Portfolio</PortfolioTitle>
        <PortfolioList>
            <ListItem active >All</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>Photoshop</ListItem>
            <ListItem>Wordpress</ListItem>
            <ListItem>Mobile</ListItem>
        </PortfolioList>
        
        <div className="box">
           {PortfolioImages}
            
        </div>
        
    </PortfolioSection>
    )
}
export default Portfolio;
