import { Link } from 'react-router-dom';
import GameArtistQuizMain from './gameArtistQuizQuestions/gameArtistQuizQuestions';

function Main() {
  return (
    <div style={{ height: '400px', width: '400px' }}>
      <Link to={'/gameArtistQuizQuestions'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio veritatis dolorum, libero
        commodi magnam exercitationem enim ipsam quam ab veniam numquam aut sint expedita nulla rem,
        possimus ducimus, quasi ipsum.
      </Link>
      <Link to={'/gameArtistQuizPictures'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio veritatis dolorum, libero
        commodi magnam exercitationem enim ipsam quam ab veniam numquam aut sint expedita nulla rem,
        possimus ducimus, quasi ipsum.
      </Link>
    </div>
  );
}

export default Main;
