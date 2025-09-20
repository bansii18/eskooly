import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPenRuler, faPrint } from '@fortawesome/free-solid-svg-icons';
import "./TimeTable.css"

function Timetable() {
  
  const handlePrintClick = () => {
       
    
    window.print();
};

  return (
    <>
    <h3>
    <button
        className="btn btn-sm m-t-20 bg-m-orange m-white waves-effect waves-light buttton"
        style={{ borderRadius: '15px',position: "relative",
        top: "90px",
        left: "80%",
        width: "10pc"
       }}
        id="btn"
        value="Print"
        onClick={handlePrintClick}
    >
        <FontAwesomeIcon icon = {faPrint}/>Print TimeTable
    </button>
    </h3>
    <Container fluid="md" className='timetable'>
      
      <Row className='row-1'>
        <Col>
          <FontAwesomeIcon icon={faCalendar} className='fa-2xl' />
          <strong className='font'>
            <span style={{ position: "absolute" }}>TIMETABLE</span>
          </strong>
        </Col>
      </Row>
      <Row className='row-1'>
        <Col>CLASS TIMETABLE FOR:</Col>
      </Row>
      <Row className='row-1'>
        <Col><FontAwesomeIcon icon={faPenRuler} /><strong style={{fontSize:"x-large"}}>10</strong></Col>
      </Row>
      <Row className='row-1'>
        <Col className='Class' >
        
          <strong >
            Class Period
          </strong>
        </Col>
      </Row>
    </Container>

    
    </> 
  );
}


export default Timetable;