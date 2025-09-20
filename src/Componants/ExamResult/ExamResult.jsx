import React from 'react'
import skooly from "../../Assests/skooly-icon.png";
import NoImage from '../../Assests/no-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faPhone,
  faGlobe,
  faEnvelope,
  faSearch,
  faPrint,

} from '@fortawesome/free-solid-svg-icons';
import './ExamResult.css'

const ExamResult = () => {
  const printDiv = () =>{
    window.print();
  }
  return (
    <div className="main-body">
      <div className="page-wrapper">

        <div className="page-body">

          <div className="row">
            <div id="area" className="col-lg-12 col-md-12 print2"  >
              <div
                className="col-lg-12 col-md-12 card m-t-20"
                style={{ background: "#fff", fontSize: 10, padding: 30 }}
              >
                <div
                  className="module-head"
                  style={{ textAlign: "center", background: "#fff" }}
                >
                  <img
                    src={skooly}
                    style={{ width: 60, height: 55 }}
                  />
                  <br />
                  <font
                    style={{ fontSize: 20, fontWeight: "bold", color: "black" }}
                  >
                    eSkooly
                  </font>
                  <br />
                  <b>" YOUR SCHOOL SOFTWARE "</b>
                  <br />
                  <FontAwesomeIcon icon={faPhone} />
                  +923460204447 |
                  <FontAwesomeIcon icon={faGlobe} />
                  www.eskooly.com |
                  <FontAwesomeIcon icon={faEnvelope} />
                  info@eskooly.com
                  <br />
                  <font
                    style={{ fontSize: 20, color: "brown", fontWeight: "bold" }}
                  >
                    RESULT CARD
                  </font>
                  <br />
                </div>
                <div
                  className="module-body"
                  style={{ color: "gray", fontSize: 12, padding: 0 }}
                >
                  <div className="row">
                    <div style={{ float: "left", margin: 10, marginTop: 0 }}>
                      <img
                        src={NoImage}
                        width="100px"
                        height="100px"
                        className="img-circle"
                      />{" "}
                    </div>
                    <div
                      style={{
                        float: "left",
                        margin: 10,
                        marginTop: 0,
                        width: 270
                      }}
                    >
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr style={{ borderBottom: "1px solid silver" }}>
                            <td>
                              <b>School Registration: </b>
                            </td>
                            <td> 4582333</td>
                          </tr>
                          <tr style={{ borderBottom: "1px solid silver" }}>
                            <td>
                              <b>Student Name: </b>
                            </td>
                            <td>Anuj Pandey</td>
                          </tr>
                          <tr style={{ borderBottom: "1px solid silver" }}>
                            <td>
                              <b>Father Name: </b>
                            </td>
                            <td />
                          </tr>
                          <tr style={{ borderBottom: "1px solid silver" }}>
                            <td>
                              <b>Class: </b>
                            </td>
                            <td>10</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      style={{
                        float: "right",
                        margin: 10,
                        marginTop: 0,
                        width: 270
                      }}
                    >
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr style={{ borderBottom: "1px solid silver" }}>
                            <td>
                              <b>Date Of Admission </b>
                            </td>
                            <td>2024-02-19</td>
                          </tr>
                          <tr style={{ borderBottom: "1px solid silver" }}>
                            <td>
                              <b>Date Of Birth: </b>
                            </td>
                            <td>0000-00-00</td>
                          </tr>
                          <tr style={{ borderBottom: "1px solid silver" }}>
                            <td>
                              <b>Gender: </b>
                            </td>
                            <td />
                          </tr>
                          <tr style={{ borderBottom: "1px solid silver" }}>
                            <td>
                              <b>B-form: </b>
                            </td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <h5 style={{ color: "orange", textAlign: "center", margin: 40 }}>
                    <img
                      src={skooly}
                      style={{ width: 100, height: 90 }}
                    />
                    <br />" NO EXAM DATA FOUND YET "
                  </h5>
                </div>
              </div>
            </div>
            <div className = " hider">
              <form action="#" method="post" className='form-1'>
                <select
                  name="selectexamname"
                  required=""
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid gray",
                    padding: "9px 10px 8px 10px",
                    width: 290
                  }}
                >
                  <option value="default">-----Select Other Exam-----</option>
                  <option value="l2">-- LAST 2 EXAMS --</option>
                  <option value="l3">-- LAST 3 EXAMS --</option>
                  <option value="l4">-- LAST 4 EXAMS --</option>
                </select>
                <button
                  type="submit"
                  className="btn waves-effect waves-light btno"
                  name="examresult"
                  
                >
                 <FontAwesomeIcon icon={faSearch}  />
                </button>
              </form>
            </div>
            <div
              className="col-lg-12 col-md-12 text-center m-round p-20 details"
              style={{ background: "#f7e5e9" }}
            >
              <h5>
                <img
                  src={NoImage}
                  width="100px"
                  className="img-circle"
                  height="100px"
                />
              </h5>
              <h4 className="m-blue1">Anuj Pandey</h4>
              <table
                style={{ margin: "0 auto", textAlign: "left" }}
                className="bg-m-gray m-white m-round extra"
              >
                <tbody>
                  <tr>
                    <td className='pad'>Registration/ID</td>
                    <td>
                      <b> 4582333</b>
                    </td>
                  </tr>
                  <tr>
                    <td  className='pad'>Class</td>
                    <td>
                      <b  className='pad'>10</b>
                    </td>
                  </tr>
                  <tr>
                    <td  className='pad'>Exam Counts</td>
                    <td>
                      <b />
                    </td>
                  </tr>
                  <tr>
                    <td  className='pad'>Total Marks</td>
                    <td>
                      <b />
                    </td>
                  </tr>
                  <tr>
                    <td className='pad'>Obtained Marks</td>
                    <td>
                      <b />
                    </td>
                  </tr>
                  <tr>
                    <td  className='pad'>Percentage</td>
                    <td>
                      <b> %</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <button
                  className="btn m-t-20 bg-m-orange m-white waves-effect waves-light"
                  id="btn"
                  value="Print"
                  onClick={printDiv}
                  style={{marginTop: "4px"}}
                >
                  <FontAwesomeIcon icon={faPrint} /> Print Result Card
                </button>
              </h3>
            </div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default ExamResult