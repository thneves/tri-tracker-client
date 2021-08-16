import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faSwimmer, faRunning } from '@fortawesome/free-solid-svg-icons';
import paceCalculator from '../helpers/pace';
import dateFormat from '../helpers/dates';
import converSec from '../helpers/convertSec';
import '../styles/components/TrackCard.scss';

const TrackCard = ({
  key, day, sport, distance, movingTime,
}) => {
  let Icon;
  if (sport === 'swim') {
    Icon = faSwimmer;
  } else if (sport === 'cycling') {
    Icon = faBiking;
  } else {
    Icon = faRunning;
  }

  return (
    <div className="track-card" key={key}>
      <FontAwesomeIcon className="sport-icon-card" icon={Icon}>sport</FontAwesomeIcon>
      <h3 className="card-date">{dateFormat(day)}</h3>
      <div className="card-span-div">
        <span>
          Pace:
          {' '}
          <strong>{paceCalculator(distance, movingTime)}</strong>
          {' '}
          <strong>m/Km</strong>
        </span>
        <span>
          Distance:
          {' '}
          <strong>{distance}</strong>
          {' '}
          <strong>Km</strong>
        </span>
        <span>
          Time:
          {' '}
          <strong>{converSec(movingTime)}</strong>
        </span>
      </div>
    </div>
  );
};

TrackCard.propTypes = {
  key: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  sport: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  movingTime: PropTypes.number.isRequired,
};

export default TrackCard;
