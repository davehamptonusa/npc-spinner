import React from 'react';
import styled from 'styled-components';
// Resources
import statBar from './stat-block-header-bar.svg'

const SeparatorImage = styled.img`
  max-width:100%;
  min-height:10px;
`
class Separator extends React.Component {

    render() {
    
        return (
            <SeparatorImage alt="" src={statBar} />
        );
    }


}


export default Separator;
