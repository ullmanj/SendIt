/* This was an import in node_modules, but it had a bug, so we placed it here to ensure
the fix was included. */

import { colors } from "../themes/colors";
/*
--- LICENSE ---

MIT License

Copyright (c) 2019 talalmajali

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--- PACKAGE ---

{
  "name": "react-native-countdown-component",
  "version": "2.7.1",
  "description": "React Native CountDown Component",
  "repository": {
    "type": "git",
    "url": "https://github.com/talalmajali/react-native-countdown-component.git"
  },
  "keywords": [
    "react-native",
    "react-component",
    "react-native-component",
    "react",
    "mobile",
    "ios",
    "android",
    "counter",
    "countdown"
  ],
  "author": {
    "name": "Talal Majali",
    "email": "t.majali93@gmail.com"
  },
  "homepage": "https://github.com/talalmajali/react-native-countdown-component",
  "bugs": {
    "url": "https://github.com/talalmajali/react-native-countdown-component/issues"
  },
  "dependencies": {
    "lodash": "^4.17.13",
    "sprintf-js": "^1.1.1",
    "prop-types": "^15.5.8"
  }
}
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AppState
} from 'react-native';
import _ from 'lodash';
import {sprintf} from 'sprintf-js';

const DEFAULT_DIGIT_STYLE = {backgroundColor: '#FAB913'};
const DEFAULT_DIGIT_TXT_STYLE = {color: '#000'};
const DEFAULT_TIME_LABEL_STYLE = {color: '#000'};
const DEFAULT_SEPARATOR_STYLE = {color: '#000'};
const DEFAULT_TIME_TO_SHOW = ['D', 'H', 'M', 'S'];
const DEFAULT_TIME_LABELS = {
  d: 'Days',
  h: 'Hours',
  m: 'Minutes',
  s: 'Seconds',
};

class CountDown extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    digitStyle: PropTypes.object,
    digitTxtStyle: PropTypes.object,
    timeLabelStyle: PropTypes.object,
    separatorStyle: PropTypes.object,
    timeToShow: PropTypes.array,
    showSeparator: PropTypes.bool,
    size: PropTypes.number,
    until: PropTypes.number,
    onChange: PropTypes.func,
    onPress: PropTypes.func,
    onFinish: PropTypes.func,
  };

  state = {
    until: Math.max(this.props.until, 0),
    lastUntil: null,
    wentBackgroundAt: null,
    eventListener: null,  // included due to depreciation of AppState.addEventListener in favor of varName.remove()
  };

  constructor(props) {
    super(props);
    this.timer = setInterval(this.updateTimer, 1000);
  }

  componentDidMount() {
    this.state.eventListener = AppState.addEventListener('change', this._handleAppStateChange);  // modified
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.state.eventListener.remove();  // modified
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.until !== prevProps.until || this.props.id !== prevProps.id) {
      this.setState({
        lastUntil: prevState.until,
        until: Math.max(prevProps.until, 0)
      });
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.until !== nextProps.until || this.props.id !== nextProps.id) {
  //     this.setState({
  //       lastUntil: this.state.until,
  //       until: Math.max(nextProps.until, 0)
  //     });
  //   }
  // }

  _handleAppStateChange = currentAppState => {
    const {until, wentBackgroundAt} = this.state;
    if (currentAppState === 'active' && wentBackgroundAt && this.props.running) {
      const diff = (Date.now() - wentBackgroundAt) / 1000.0;
      this.setState({
        lastUntil: until,
        until: Math.max(0, until - diff)
      });
    }
    if (currentAppState === 'background') {
      this.setState({wentBackgroundAt: Date.now()});
    }
  }

  getTimeLeft = () => {
    const {until} = this.state;
    return {
      seconds: until % 60,
      minutes: parseInt(until / 60, 10) % 60,
      hours: parseInt(until / (60 * 60), 10) % 24,
      days: parseInt(until / (60 * 60 * 24), 10),
    };
  };

  updateTimer = () => {
    // Don't fetch these values here, because their value might be changed
    // in another thread
    // const {lastUntil, until} = this.state;

    if (this.state.lastUntil === this.state.until || !this.props.running) {
      return;
    }
    if (this.state.until === 1 || (this.state.until === 0 && this.state.lastUntil !== 1)) {
      if (this.props.onFinish) {
        this.props.onFinish();
      }
      if (this.props.onChange) {
        this.props.onChange(this.state.until);
      }
    }

    if (this.state.until === 0) {
      this.setState({lastUntil: 0, until: 0});
    } else {
      if (this.props.onChange) {
        this.props.onChange(this.state.until);
      }
      this.setState({
        lastUntil: this.state.until,
        until: Math.max(0, this.state.until - 1)
      });
    }
  };

  renderDigit = (d) => {
    const {digitStyle, digitTxtStyle, size} = this.props;

    const {days, hours, minutes, seconds} = this.getTimeLeft();  // We added this
    const onlySeconds = days === 0 && hours === 0 && minutes === 0;  // We added this
    return (
      <View style={[
        styles.digitCont,        
        {width: size * 2.3, height: size * 2.6},
        digitStyle,
      ]}>
        <Text style={[
          styles.digitTxt,
          {fontSize: size},
          digitTxtStyle,
          {color: onlySeconds ? colors.darkpink : "#000000"}  // We added this - now the timer turns pink when only seconds left.
        ]}>
          {d}
        </Text>
      </View>
    );
  };

  renderLabel = label => {
    const {timeLabelStyle, size} = this.props;
    if (label) {
      return (
        <Text style={[
          styles.timeTxt,
          {fontSize: size / 1.8},
          timeLabelStyle,
        ]}>
          {label}
        </Text>
      );
    }
  };

  renderDoubleDigits = (label, digits) => {
    return (
      <View style={styles.doubleDigitCont}>
        <View style={styles.timeInnerCont}>
          {this.renderDigit(digits)}
        </View>
        {this.renderLabel(label)}
      </View>
    );
  };

  renderSeparator = () => {
    const {separatorStyle, size} = this.props;
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[
          styles.separatorTxt,
          {fontSize: size * 1.2},
          separatorStyle,
        ]}>
          {':'}
        </Text>
      </View>
    );
  };

  renderCountDown = () => {
    const {timeToShow, timeLabels, showSeparator} = this.props;
    const {until} = this.state;
    const {days, hours, minutes, seconds} = this.getTimeLeft();
    const newTime = sprintf('%02d:%02d:%02d:%02d', days, hours, minutes, seconds).split(':');
    const Component = this.props.onPress ? TouchableOpacity : View;

    return (
      <Component
        style={styles.timeCont}
        onPress={this.props.onPress}
      >
        {timeToShow.includes('D') ? this.renderDoubleDigits(timeLabels.d, newTime[0]) : null}
        {showSeparator && timeToShow.includes('D') && timeToShow.includes('H') ? this.renderSeparator() : null}
        {timeToShow.includes('H') ? this.renderDoubleDigits(timeLabels.h, newTime[1]) : null}
        {showSeparator && timeToShow.includes('H') && timeToShow.includes('M') ? this.renderSeparator() : null}
        {timeToShow.includes('M') ? this.renderDoubleDigits(timeLabels.m, newTime[2]) : null}
        {showSeparator && timeToShow.includes('M') && timeToShow.includes('S') ? this.renderSeparator() : null}
        {timeToShow.includes('S') ? this.renderDoubleDigits(timeLabels.s, newTime[3]) : null}
      </Component>
    );
  };

  render() {
    return (
      <View style={this.props.style}>
        {this.renderCountDown()}
      </View>
    );
  }
}

CountDown.defaultProps = {
  digitStyle: DEFAULT_DIGIT_STYLE,
  digitTxtStyle: DEFAULT_DIGIT_TXT_STYLE,
  timeLabelStyle: DEFAULT_TIME_LABEL_STYLE,
  timeLabels: DEFAULT_TIME_LABELS,
  separatorStyle: DEFAULT_SEPARATOR_STYLE,
  timeToShow: DEFAULT_TIME_TO_SHOW,
  showSeparator: false,
  until: 0,
  size: 15,
  running: true,
};

const styles = StyleSheet.create({
  timeCont: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeTxt: {
    color: 'white',
    marginVertical: 2,
    backgroundColor: 'transparent',
  },
  timeInnerCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  digitCont: {
    borderRadius: 5,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doubleDigitCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  digitTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontVariant: ['tabular-nums']
  },
  separatorTxt: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    paddingBottom: 5,  // We added this as well to move the separator up slightly
  },
});

export default CountDown;
export { CountDown };
