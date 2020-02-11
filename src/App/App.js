import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import styled from 'styled-components';

// COMPONENTS
import SimpleValue from './SimpleValue/SimpleValue.js';
import ListValue from './ListValue/ListValue.js';
import TraitList from './TraitList/TraitList.js';
import Header from './Header/Header';
// DATA
import alignment from '../json/alignment.json';
import hair from '../json/hair.json';
import personalityTraits from '../json/personalityTraits.json';
import names from '../json/names.json';
import speech from '../json/speech.json';
import traitsOptions from '../json/traitsOptions.json';
// various
import { getRandomValue } from './Utils.js';
// Resources
import statBar from './stat-block-header-bar.svg'


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
    border-image:url("https://www.dndbeyond.com/content/1-0-823-0/skins/waterdeep/images/expanded-listing-item-bottom-border.png") 28 stretch;
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

const SeparatorImage = styled.img`
  max-width:100%;
  min-height:10px;
`
const Card = styled.div`
  background: url("https://www.dndbeyond.com/content/1-0-823-0/skins/waterdeep/images/mon-summary/stat-block-top-texture.png"),url("https://www.dndbeyond.com/content/1-0-823-0/skins/waterdeep/images/mon-summary/paper-texture.png");
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat,repeat;
  position: relative;
  box-shadow: 0 0 5px #979AA4;
  border: 1px solid #d4d0ce;
  padding: 15px;
  margin: 15px 0;
  font-family: Neuton;
  font-size: 16px;
  &::before {
    content:"";
    display:block;
    background:url("https://www.dndbeyond.com/content/1-0-823-0/skins/waterdeep/images/mon-summary/stat-bar-book.png")center;
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
    background:url("https://www.dndbeyond.com/content/1-0-823-0/skins/waterdeep/images/mon-summary/stat-bar-book.png") center;
    background-size:100% 100%;
    height:6px;
    position:absolute; 
    left:-3px;
    right:-3px;
    bottom:-3px;
  }
  @media (min-width:768px){
    -webkit-column-count:2;
    column-count:2;
  }
  @media print {
    box-shadow:none;
    background:0;
    -webkit-column-count:2;
    column-count:2;
    &::before{border-top:6px solid #999;}
    &::after{border-bottom:6px solid #999;}
  }
}
`

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
      name: `${firstName} ${lastName}`,
      gender: gender,
      age: getRandomValue(this.props.age),
      height: getRandomValue(this.props.height),
      race: race,
      hairStyle: getRandomValue(this.props.hairStyle),
      hairColor: getRandomValue(this.props.hairColor),
      hairTexture: getRandomValue(this.props.hairTexture),      
      facialFeatures: getRandomValue(this.props.facialFeatures),
      positiveTrait: getRandomValue(this.props.positiveTraits),
      neutralTrait: getRandomValue(this.props.neutralTraits),
      negativeTrait: getRandomValue(this.props.negativeTraits),
      alignment: getRandomValue(this.props.alignment),
      accent: getRandomValue(this.props.accent),
      airiness: getRandomValue(this.props.airiness),
      pitch: getRandomValue(this.props.pitch),
      status: getRandomValue(this.props.status),
      cadence: getRandomValue(this.props.cadence),
      characteristic1: getRandomValue(this.props.characteristics),
      characteristic2: getRandomValue(this.props.characteristics),
      instinct: getRandomValue(this.props.instincts),
      knack: getRandomValue(this.props.knacks)
    }
  } 

  respin = () => {this.setState(this.spinTraits())}

  render() {
    const { 
      accent,
      alignment,
      name, 
      gender, 
      race, 
      age,
      hairColor,
      hairStyle,
      hairTexture, 
      height, 
      facialFeatures, 
      airiness, 
      cadence, 
      pitch,
      characteristic1, 
      characteristic2, 
      positiveTrait, 
      neutralTrait,
      negativeTrait,
      instinct, 
      knack,
      status } = this.state;
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
        ["Cadence", cadence]
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
            <div class="mon-stat-block__header">
              <div class="mon-stat-block__name">
                  {name}
              </div>
              <div class="mon-stat-block__meta">{age} {gender} {race}</div>
              <SeparatorImage alt="" src={statBar} />
            </div>
            <div class="mon-stat-block__attributes">
              <SimpleValue title="Hair" text={hair} />
              <SimpleValue title="Features" text={facialFeatures} />
              <SimpleValue title="Description" text={description} />
            </div>
            <div class="mon-stat-block__attributes">
              <SeparatorImage alt="" src={statBar} />
              <ListValue title="Speech" fields={speechFields} />
            </div>
            <div class="mon-stat-block__tidbits">
              <SeparatorImage alt="" src={statBar} />
              <TraitList title="Characteristics" fields={characteristicFields} />
              <SimpleValue title={Object.keys(alignment)[0]} text={alignment[Object.keys(alignment)[0]]} />
              <SimpleValue title="Instinct" text={instinct} />
              <SimpleValue title="Knack" text={knack} />
              <ListValue title="Personality" fields={personalityFields} />
              <SimpleValue title="City" text="" />
              <SimpleValue title="Occupation" text="" />
            </div>
            <SeparatorImage alt="" src={statBar} />
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
