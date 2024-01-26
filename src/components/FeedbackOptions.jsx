import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.button_list}>
      {options.map(option => (
        <button onClick={onLeaveFeedback} name={option} key={option}>
          {option}
        </button>
      ))}
    </ul>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedBackOptions };
