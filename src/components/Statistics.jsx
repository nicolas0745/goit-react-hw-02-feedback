import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statistisc_list}>
      <li>
        <span>Good:</span> {good}
      </li>
      <li>
        <span>Neutral:</span> {neutral}
      </li>
      <li>
        <span>Bad:</span> {bad}
      </li>
      <li>
        <span>Total:</span> {total}
      </li>
      <li>
        <span>Positive feedback: </span>
        {isNaN(positivePercentage) ? 0 : positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistics };
