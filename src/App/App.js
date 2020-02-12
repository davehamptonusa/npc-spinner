import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import Header from './Header/Header';
import ListValue from './ListValue/ListValue.js';
import Name from './Name/Name';
import Separator from './Separator/Separator';
import SimpleValue from './SimpleValue/SimpleValue.js';
import TraitList from './TraitList/TraitList.js';

// DATA
import alignment from '../json/alignment.json';
import hair from '../json/hair.json';
import personalityTraits from '../json/personalityTraits.json';
import names from '../json/names.json';
import speech from '../json/speech.json';
import traitsOptions from '../json/traitsOptions.json';
// various
import { getRandomValue } from './Utils.js';
// images
import bottomBorder from './bottom-border.png';
import paperTexture from './paper-texture.png';
import statBarBook from './stat-bar-book.png';
import topTexture from './top-texture.png';



const Page = styled.div`
  background-color:white;
  border-left:1px solid #ECE9E9;
  border-right:1px solid #ECE9E9;
  width:90%;
  margin:0 auto;
  padding:20px 20px 0;
  &::after{
    content:'';
    display:block;
    height:28px;
    width:calc(100% + 40px);
    border-bottom:28px solid transparent;
    border-image:url("${bottomBorder}") 28 stretch;
    position:relative;
    top:4px;
    margin:0 -20px;
  }
  @media print{
    border-left:none;
    border-right:0;
    padding-left:0;
    padding-right:0;
    &::after{
      display:none;
    }
  }
  @media (min-width:1024px){
    padding:30px 26px 0;
    &::after{
      width:calc(100% + 52px);
      margin:0 -26px;
    }
  }
`


const Card = styled.div`
  background: url("${topTexture}"),url("${paperTexture}");
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat,repeat;
  position: relative;
  box-shadow: 0 0 5px #979AA4;
  border: 1px solid #d4d0ce;
  padding: 15px;
  margin: 15px 0;
  font-family: Neuton, serif;
  font-size: 16px;
  &::before {
    content:"";
    display:block;
    background:url("${statBarBook}")center;
    background-size:100% 100%;
    height:6px;
    position:absolute; 
    left:-3px;
    right:-3px;
    top:-3px;
  }

  &::after {
    content:"";
    display:block;
    background:url("${statBarBook}") center;
    background-size:100% 100%;
    height:6px;
    position:absolute; 
    left:-3px;
    right:-3px;
    bottom:-3px;
  }
  @media (min-width:768px){
    column-count:2;
  }
  @media print {
    box-shadow:none;
    background:0;
    column-count:2;
    &::before{border-top:6px solid #999;}
    &::after{border-bottom:6px solid #999;}
  }
`
const Block = styled.div`
  break-inside: avoid;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.spinTraits();
  }
  static defaultProps = {
    ...alignment,
    ...hair,
    ...names,
    ...personalityTraits,
    ...speech,
    ...traitsOptions   
  };
	/**
	 * TODO Abstract to helper object?
	 */

  spinTraits = () => {

    let race = getRandomValue(this.props.race);
    let gender = getRandomValue(this.props.gender);


    // Combine lists for "Half" Species
    let firstNameList = 
      race.includes("Half-") 
        ? this.props.names[race.replace("Half-","")].First[gender].concat(this.props.names.Human.First[gender])
        : this.props.names[race].First[gender];
    let lastNameList = 
      race.includes("Half-") 
        ? this.props.names[race.replace("Half-","")].Last.concat(this.props.names.Human.Last)
        : this.props.names[race].Last;
    let firstName = getRandomValue(firstNameList);
    let lastName = getRandomValue(lastNameList);

    return {
      accent: getRandomValue(this.props.accent),
      age: getRandomValue(this.props.age),
      airiness: getRandomValue(this.props.airiness),
      alignment: getRandomValue(this.props.alignment),
      cadence: getRandomValue(this.props.cadence),
      characteristic1: getRandomValue(this.props.characteristics),
      characteristic2: getRandomValue(this.props.characteristics),
      facialFeatures: getRandomValue(this.props.facialFeatures),
      gender: gender,
      hairColor: getRandomValue(this.props.hairColor),
      hairStyle: getRandomValue(this.props.hairStyle),
      hairTexture: getRandomValue(this.props.hairTexture),      
      height: getRandomValue(this.props.height),
      instinct: getRandomValue(this.props.instincts),
      knack: getRandomValue(this.props.knacks),
      name: `${firstName} ${lastName}`,
      negativeTrait: getRandomValue(this.props.negativeTraits),
      neutralTrait: getRandomValue(this.props.neutralTraits),
      pitch: getRandomValue(this.props.pitch),
      positiveTrait: getRandomValue(this.props.positiveTraits),
      race: race,
      status: getRandomValue(this.props.status),
      throat:getRandomValue(this.props.throat),
    }
  } 

  respin = () => {this.setState(this.spinTraits())}

  render() {
    const { 
      accent,
      age,
      airiness, 
      alignment,
      cadence, 
      characteristic1, 
      characteristic2, 
      facialFeatures, 
      gender, 
      hairColor,
      hairStyle,
      hairTexture, 
      height, 
      instinct, 
      knack,
      name, 
      negativeTrait,
      neutralTrait,
      pitch,
      positiveTrait, 
      race, 
      status, 
      throat 
    } = this.state;
      const the_vowel = ["a","e","i","o","u"];
      let word = (the_vowel.includes(race[0].toLowerCase())) ? "an" : "a";
      let description = `${height} for ${word} ${race}`;
      let hair = `${hairStyle}, ${hairTexture}, ${hairColor} Hair`
      let personalityFields = [
        ["Normal Behavior", positiveTrait],
        ["Drunk or Tired", neutralTrait],
        ["Angry or Stressed", negativeTrait]
      ];
      let speechFields = [
        ["Accent", accent],
        ["Pitch", `${pitch} for a ${gender} ${race}`],
        ["Airiness", airiness],
        ["Status", status],
        ["Cadence", cadence],
        ["Throat", throat]
      ];
      let characteristicFields = 
        [
          characteristic1,
          characteristic2,
        ];

		return (

        <Page>
          <Header title="NPC Spinner" buttonTitle = "Spin Again" buttonAction={this.respin} />
          <Card>
            <Name name={name} age={age} gender={gender} race={race} />
            <Block>
              <SimpleValue title="Hair" text={hair} />
              <SimpleValue title="Features" text={facialFeatures} />
              <SimpleValue title="Description" text={description} />
            </Block>
            <Block>
              <Separator />
              <ListValue title="Speech" fields={speechFields} />
            </Block>
            <Block>
              <Separator />
              <TraitList title="Characteristics" fields={characteristicFields} />
              <SimpleValue title={Object.keys(alignment)[0]} text={alignment[Object.keys(alignment)[0]]} />
              <SimpleValue title="Instinct" text={instinct} />
              <SimpleValue title="Knack" text={knack} />
              <ListValue title="Personality" fields={personalityFields} />
              <SimpleValue title="City" text="" />
              <SimpleValue title="Occupation" text="" />
            </Block>
            <Separator />
          </Card>
        </Page>
		);

	};
};



App.propTypes = {
  npcs: PropTypes.number,
  maxNpcs: PropTypes.number,
  names: PropTypes.arrayOf(PropTypes.string),
  instincts: PropTypes.arrayOf(PropTypes.string),
  knacks: PropTypes.arrayOf(PropTypes.string),
  speech: PropTypes.arrayOf(PropTypes.string),
  hairColor: PropTypes.arrayOf(PropTypes.string),
  hairStyle: PropTypes.arrayOf(PropTypes.string),
  hairTexture: PropTypes.arrayOf(PropTypes.string),
  facialFeatures: PropTypes.arrayOf(PropTypes.string),
  bodyLocations: PropTypes.arrayOf(PropTypes.string),
  personality: PropTypes.arrayOf(PropTypes.string)
};

export default App;
