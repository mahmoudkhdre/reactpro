import React , { useState , useEffect } from 'react';

import { ProfileSection, ProfileSkills , ProfileTitle , ProfileList , ProfileItem , ProfileSpan , Web , Skills , SkillsDesc , Bar , Title , Perc , Parent , ParentSpan , skillTitleSpan} from './style';
import axios from 'axios';


const Profile = () => {

    
    const [ skills , setSkills] = useState([])
    useEffect ( () => {
        axios.get('js/data.json').then( res => { setSkills (res.data.profile)})
        

    } , []  )






    return(
        <ProfileSection>
        <div className="container">
            <ProfileTitle>
                <ProfileSkills><skillTitleSpan>My </skillTitleSpan>Profile</ProfileSkills>
              
            </ProfileTitle>
            
            <Skills>
                <ProfileSkills>Some <skillTitleSpan>skills</skillTitleSpan></ProfileSkills>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
                <Bar>
                    <Title>Bootstrap</Title>
                    <Perc>100%</Perc>
                    <Parent>
                        <ParentSpan></ParentSpan>
                    </Parent>
                </Bar>
                
                <Bar>
                    <Title>CSS3</Title>
                    <Perc>90%</Perc>
                    <Parent>
                        <ParentSpan></ParentSpan>
                    </Parent>
                </Bar>
                
                <Bar>
                    <Title>Photoshop</Title>
                    <Perc>80%</Perc>
                    <Parent>
                        <ParentSpan></ParentSpan>
                    </Parent>
                </Bar>
            </Skills>
            
        </div>
    </ProfileSection>
    )
}
export default Profile ;
