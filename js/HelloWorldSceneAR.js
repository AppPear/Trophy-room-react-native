'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingInitialized={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.25, .25, .25]} position={[0, 0.4, -1]} style={styles.helloWorldTextStyle} />
        <ViroAmbientLight color={"#aaa"}/>
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0,-1,-.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true} />

        <Viro3DObject
          source={require('./res/boss.vrx')}
          position={[0, 0, -0.5]}
          scale={[0.01, 0.01, 0.01]}
          type="VRX"/>
        <ViroText text={"Boss"} scale={[0.1,0.1,0.1]} position={[0, -0.05, -0.5]} style={styles.helloWorldTextStyle} />
        <Viro3DObject
          source={require('./res/helicopter.vrx')}
          position={[-0.3, 0, -0.5]}
          scale={[0.01, 0.01, 0.01]}
          type="VRX"/>
        <ViroText text={"Helicopter"} scale={[0.1,0.1,0.1]} position={[-0.3, -0.05, -0.5]} style={styles.helloWorldTextStyle} />
        <Viro3DObject
          source={require('./res/jump.vrx')}
          position={[0.3, 0.025, -0.5]}
          scale={[0.001, 0.001, 0.001]}
          type="VRX"/>
        <ViroText text={"Jump"} scale={[0.1,0.1,0.1]} position={[0.3, -0.05, -0.5]} style={styles.helloWorldTextStyle} />

        <Viro3DObject
          source={require('./res/boyfriend.vrx')}
          position={[0, 0.3, -0.5]}
          scale={[0.01, 0.01, 0.01]}
          type="VRX"/>
        <ViroText text={"Boyfriend"} scale={[0.1,0.1,0.1]} position={[0, 0.25, -0.5]} style={styles.helloWorldTextStyle} />
        <Viro3DObject
          source={require('./res/tube.vrx')}
          position={[0.3, 0.3, -0.5]}
          scale={[0.002, 0.002, 0.002]}
          type="VRX"/>
        <ViroText text={"Tube"} scale={[0.1,0.1,0.1]} position={[0.3, 0.25, -0.5]} style={styles.helloWorldTextStyle} />
        <Viro3DObject
          source={require('./res/bye.vrx')}
          position={[-0.3, 0.3, -0.5]}
          scale={[0.001, 0.001, 0.001]}
          type="VRX"/>
        <ViroText text={"Bye"} scale={[0.1,0.1,0.1]} position={[-0.3, 0.25, -0.5]} style={styles.helloWorldTextStyle} />

      </ViroARScene>
    );
  }

  _onInitialized() {
    this.setState({
      text : ""
    });

  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

module.exports = HelloWorldSceneAR;
