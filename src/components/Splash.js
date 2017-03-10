import React, {Component} from 'react'
import {connect} from 'react-redux'
//material-ui
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Divider from 'material-ui/Divider';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import {Card, CardHeader, CardText} from 'material-ui/Card';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './../css/splash.css';

//actions
import * as actions from './../actions/actions'

const styles = {
  paperStyle:{

    width: '30vh',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
  button: {
   margin: 12,
 },
 exampleImageInput: {
   cursor: 'pointer',
   position: 'absolute',
   top: 0,
   bottom: 0,
   right: 0,
   left: 0,
   width: '100%',
   opacity: 0,
 },
 slider: {
   margin:20
 },
 settingsIconArea:{
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
   padding:10,
 },
 settingsIcon:{
   marginRight:10,
 }
};

class Splash extends Component{
  render(){
    return (
      <div className="container">
        <Paper style={styles.paperStyle} zDepth={5} >
          <RaisedButton
            label="Start the game"
            secondary={true}
            style={styles.button}
            onClick={()=>{
              this.props.dispatch(actions.changeGameStatus('started'));
              this.props.dispatch(actions.changeBoardSize(this.props.boardSize))
            }}
          />
           <Divider />
           <div style={styles.settingsIconArea}>
             <SettingsIcon style={styles.settingsIcon}/> Settings
           </div>
           <div>

             <Card>
                <CardHeader
                  title="Board Size:"
                  subtitle={this.props.boardSize}
                  actAsExpander={true}
                  showExpandableButton={true}
                />

                <CardText expandable={true}>
                  <Slider onChange={(obj,newVal)=>{
                    this.props.dispatch(actions.changeBoardSize(newVal))
                  }} min={3} max={5} style={styles.slider} step={1} value={this.props.boardSize} />
                </CardText>
              </Card>
           </div>
        </Paper>
      </div>

  );
  }
}

export default connect((state)=>{
  return {
    boardSize:state.boardSize
  }
})(Splash);
