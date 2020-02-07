import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
// COMPONENTS
import SimpleValue from './SimpleValue.js';
import ListValue from './ListValue.js';
import TraitList from './TraitList.js';
// DATA
import alignment from './json/alignment.json';
import hair from './json/hair.json';
import personalityTraits from './json/personalityTraits.json';
import names from './json/names.json';
import speech from './json/speech.json';
import traitsOptions from './json/traitsOptions.json';
//
import { getRandomValue } from './Utils.js';


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
      knack } = this.state;
      let description = height + " for an " + age + " " + race;
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
        ["Cadence", cadence]
      ];
      let characteristicFields = 
        [
          characteristic1,
          characteristic2,
        ];

		return (
			<div className="container-fluid">

				<div className="page-header">
  					<h1>
  						NPC Spinner
					</h1>
				</div>

				<div className="row spacer">
					<div className="col-xs-7 col-md-10 left">
						<button type="button" className="btn btn-primary"
						onClick={this.respin}>Generate new traits</button>
					</div>
				</div>
        <div className="row">
        <div className="col-xs-12">
          <div className="panel panel-info">
              <div className="panel-body">
              <h3>{name}</h3>
              <SimpleValue title="Race" text={race}/>
              <SimpleValue title="Age" text={age}/>
              <SimpleValue title="Sex" text={gender}/>
              <SimpleValue title="Hair" text={hair}/>
              <SimpleValue title="Facial" text={facialFeatures}/>
              <SimpleValue title="Description" text={description}/>
              <SimpleValue title="City" text=""/>
              <SimpleValue title="Occupation" text=""/>
              <ListValue title="Speech" fields={speechFields}/>
              <TraitList title = "Characteristics" fields={characteristicFields}/>

              <SimpleValue title="Alignment" text={alignment}/>
              <SimpleValue title="Instinct" text={instinct}/>
              <SimpleValue title="Knack" text={knack}/>
              <ListValue title="Personality" fields={personalityFields}/>
              <div>&nbsp;</div>

            </div>
          </div>
        </div>
      </div>

			</div>
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
