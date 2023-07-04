import Star from "./Star";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

export default function Stars({ count }) {
  if (typeof count !== 'number' || isNaN(count) || count < 1 || count > 5) {
    return null;
  };

  const starsElements = [];
  for (let i = 0; i < count; i += 1) {
    starsElements.push(<Star key={nanoid(10)} />);
  }

  console.log(count);

  return (
    <ul className="card-body-stars u-clearfix">
      {starsElements}
    </ul>
  );
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}