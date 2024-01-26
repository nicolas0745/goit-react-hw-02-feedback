import PropTypes from 'prop-types';
import css from './SectionTitle.module.css';
const SectionTitle = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export { SectionTitle };
