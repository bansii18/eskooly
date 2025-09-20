import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Nf from '../../Assests/nf.webp'
import "./HomeAssignment.css"

const HomeAssignment = () => {
    return (
      
           <Figure className='figure'>
             <Figure.Image
              
               alt="171x180"
               src={Nf}
             />
             <Figure.Caption className='figure-caption'>
               There is No Assignment For This Week
             </Figure.Caption>
           </Figure>
         );
       }
export default HomeAssignment;
    
   
    
    

