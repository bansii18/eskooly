
import "./TestResult.css"

function TestResult() {
  return (
    <table className='sizing'>
      <thead>
        <tr>
          <th style={{textAlign:"center", border: "1px solid black",color:"black"}}>Date</th>
          <th style={{textAlign:"center", border: "1px solid black",color:"black",padding:"5px"}}>Grade</th>
          <th style={{textAlign:"center", border: "1px solid black",color:"black"}}>Subject</th>
          <th style={{textAlign:"center", border: "1px solid black",color:"black"}}>Total Marks</th>
          <th style={{textAlign:"center", border: "1px solid black",color:"black"}}>Get</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>21/05/23</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black",padding:"5px"}}>F</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>Maths</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>100</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>34</td>
        </tr>
        <tr>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>22/05/23</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black",padding:"5px"}}>A</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>Physics</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>100</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>90</td>
        </tr>
        <tr>
        <td style={{padding:"13px",border: "1px solid black",color:"black"}}>24/05/23</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black",padding:"5px"}}>A</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>Chemistry</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>100</td>
          <td style={{padding:"13px",border: "1px solid black",color:"black"}}>84</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TestResult;