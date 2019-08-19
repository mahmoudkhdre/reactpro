import React , { Component } from 'react';
import {AboutSection , AboutInfo , InfoTitle , Span , InfoDir , Desc , Inchor} from './style';

const About  = () => {
    return(
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Inchor href="#">explicabo</Inchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Desc>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Desc>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}
export default About;
