import Figure from 'react-bootstrap/Figure';
import OnlineStore from '../../Assests/onlinestore.png'
import "./OnlineStore.css"

function OnlineStores() {
  return (
    <Figure className='figure'>
      <Figure.Image
       
        alt="171x180"
        src={OnlineStore}
      />
      <Figure.Caption className='figure-caption'>
        Will Be Back Soon
      </Figure.Caption>
    </Figure>
  );
}

export default OnlineStores;