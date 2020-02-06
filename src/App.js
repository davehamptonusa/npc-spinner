import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
// COMPONENTS
import SimpleValue from './SimpleValue.js';
import ListValue from './ListValue.js';
import TraitValue from './TraitValue.js';
// DATA
import alignment from './alignment.json';
import hair from './hair.json';
import personalityTraits from './personalityTraits.json';
import speech from './speech.json';
import traitsOptions from './traitsOptions.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.spinTraits();
  }
  static defaultProps = {
    ...alignment,
    ...hair,
    ...personalityTraits,
    ...speech,
    ...traitsOptions   
  };
	/**
	 * TODO Abstract to helper object?
	 */
	getRandomValue = (data) => 
		data[Math.floor(Math.random() * data.length)];

  spinTraits = () => {
    let characteristic = this.getRandomValue(this.props.characteristics);
    return {
      name: this.getRandomValue(this.props.names),
      gender: this.getRandomValue(this.props.gender),
      age: this.getRandomValue(this.props.age),
      height: this.getRandomValue(this.props.height),
      race: this.getRandomValue(this.props.race),
      hairStyle: this.getRandomValue(this.props.hairStyle),
      hairColor: this.getRandomValue(this.props.hairColor),
      hairTexture: this.getRandomValue(this.props.hairTexture),      
      facialFeatures: this.getRandomValue(this.props.facialFeatures),
      positiveTrait: this.getRandomValue(this.props.positiveTraits),
      neutralTrait: this.getRandomValue(this.props.neutralTraits),
      negativeTrait: this.getRandomValue(this.props.negativeTraits),
      alignment: this.getRandomValue(this.props.alignment),
      accent: this.getRandomValue(this.props.accent),
      airiness: this.getRandomValue(this.props.airiness),
      pitch: this.getRandomValue(this.props.pitch),
      cadence: this.getRandomValue(this.props.cadence),
      characteristic: characteristic,
      charLoc: characteristic.hasLocation ? this.getRandomValue(this.props.bodyLocations) : null,
      instinct: this.getRandomValue(this.props.instincts),
      knack: this.getRandomValue(this.props.knacks)
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
      characteristic, 
      charLoc, 
      positiveTrait, 
      neutralTrait,
      negativeTrait,
      instinct, 
      knack } = this.state;
      let description = height + " for an " + age + " " + race;
      let hair = `${hairStyle}, ${hairTexture}, ${hairColor} Hair`
      let descriptivePitch = `${pitch} for a ${gender} ${race}`
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
              <br/>
              <SimpleValue title="Name" text={name}/>
              <SimpleValue title="Sex" text={gender}/>
              <SimpleValue title="Hair" text={hair}/>
              <SimpleValue title="Facial" text={facialFeatures}/>
              <SimpleValue title="Description" text={description}/>
              <SimpleValue title="Occupation" text=""/>

              <br/>
              <ListValue title="Speech" fields={speechFields}/>
              <SimpleValue title="Alignment" text={alignment}/>
              <SimpleValue title="Instinct" text={instinct}/>
              <TraitValue title="Characteristic" text={characteristic.text} location={charLoc}/>
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
