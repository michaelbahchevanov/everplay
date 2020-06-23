import React from 'react';
import { Mood } from './';

class Moodbar extends React.Component {
  render() {
    return (
      <>
        <Mood />
        <Mood />
        <Mood />
        <Mood />
        <Mood />
      </>
    );
  }
}

export default Moodbar;