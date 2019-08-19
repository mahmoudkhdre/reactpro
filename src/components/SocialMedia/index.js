import React , { Component } from 'react';
import {SocialMediaSection , Social , Icon , Parag , InfoOne , InfoTwo} from './style.js';
import axios from 'axios';

class SocialMedia extends Component {

    state = {
        social : []
    }
    componentDidMount () {
        axios.get ('js/data.json')
        .then ( res =>   {this.setState({social : res.data.social })
        })
    }
    render() {

        const {social}  = this.state
        const SocialList = social.map( (socialItem) => {
            return(
                <Social  item = {socialItem.id } key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <Parag>
                    <InfoOne>{socialItem.title}</InfoOne>
                    <InfoTwo>{socialItem.body}</InfoTwo>
                </Parag>
            </Social>
        )
        })
        return (
            <SocialMediaSection>
                
          
            {SocialList}

        </SocialMediaSection>
        )
        }
}
export default SocialMedia;
