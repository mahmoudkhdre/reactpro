import React  from 'react';
import {HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , DescSpan , Btn} from './style';

const Home = () => {
    return(
        <HomeSection>
        <div className="container">
            <HomeInformation>
                <HomeTitle>Mahmoud Khdre</HomeTitle>
                <HomeInfo>Creative Director</HomeInfo>
                <HomeDesc>
                    Iam a professional <DescSpan>UX Designer</DescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <Btn>Let's Begin</Btn>
            </HomeInformation>
        </div>
    </HomeSection>
    );
}
export default Home;
