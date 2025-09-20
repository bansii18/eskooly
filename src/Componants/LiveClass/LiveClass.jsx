import Nf from '../../Assests/nf.webp'
import Figure from 'react-bootstrap/Figure';
import "./LiveClass.css"

function LiveClass() {
  return (
    <Figure className='figure'>
      <Figure.Image
       
        alt="171x180"
        src={Nf}
      />
      <Figure.Caption className='figure-caption'>
        There is No Live Class
      </Figure.Caption>
    </Figure>
  );
}

export default LiveClass;
