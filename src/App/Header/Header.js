import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
    line-height: 1.1;
    font-family: Cinzel;
    font-size: 24px;
    color: #822000;
`;

const Button = styled.button`
    background-color: #822000;
    border: none;
    color: white;
    padding: 4px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    margin: 4px 2px;
    cursor: pointer;  
    vertical-align: middle;
`

class Header extends React.Component {

    static defaultProps ={
        title: 'My Title',
        buttonTitle: 'Click Me',
        buttonAction: () => {alert('clicked')}
    }
    render() {
        const {
            title,
            buttonTitle,
            buttonAction
        } = this.props;
    
        return (
            <Title>
                {title} <Button onClick={buttonAction}>{buttonTitle}</Button>
            </Title>
        );
    }


}

Header.propTypes = {
    title: PropTypes.string,
    buttonTitle: PropTypes.string,
    buttonAction: PropTypes.func
}
export default Header;
