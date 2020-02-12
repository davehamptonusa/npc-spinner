import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// COMPONENTS
import Separator from '../Separator/Separator';

const NameBlock = styled.div`
    line-height: 1.1;
    font-family: Cinzel, serif;
    font-size: 24px;
    color: #822000;
`;
const NameText = styled.div`
    font-weight:bold;
    font-size:34px;
    color:#822000;
`;
const CharacterDetails = styled.div`
    margin-bottom: 5px;
    color: black;
    font-size: 16px;
`;



class Name extends React.Component {

    static defaultProps ={
        name: 'Dorpin',
        age: 'Young Adult',
        gender: 'Female',
        race: 'Hobbit'
    }
    render() {
        const {
            name,
            age,
            gender,
            race
        } = this.props;
    
        return (
            <NameBlock>
              <NameText>{name}</NameText>
              <CharacterDetails>{age} {gender} {race}</CharacterDetails>
              <Separator />
            </NameBlock>
        );
    }


}

Name.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    race: PropTypes.string
}
export default Name;
