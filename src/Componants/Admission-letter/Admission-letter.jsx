import React, { useState } from 'react';
import skooly from "../../Assests/skooly-icon.png";
import Arrow from "../../Assests/arrow-down.png";
import NoImage from '../../Assests/no-image.png';
import QRcodePlay from "../../Assests/qr-code-play.png"
import QRcodeApp from "../../Assests/qr-code-app.png"
import QRcodeWeb from "../../Assests/qr-code-web.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPrint } from '@fortawesome/free-solid-svg-icons';

import "./Admission-letter.css"

const AdmissionConfirmation = () => {
   

    const handlePrintClick = () => {
       
        // You can add additional logic here for printing if needed
        window.print();
    };

    return (

        <>

            <div className="row print-exclude">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 col-md-12 text-center m-round p-20 p-t-0 print"  style={{   background: '#ffff', border: '2px solid gray', borderRadius: "10px", margin: "0 auto", padding: "20px", float: "left",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "400px"}}>
                    <h6 className="bg-gradient-gray m-white p-10" style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px',padding: "6px", marginTop: "-20px" }}>
                        ADMISSION CONFIRMATION
                    </h6>
                    <h5>
                        <img src={NoImage} width="100px" className="img-circle" height="100px" alt="Student" />
                    </h5>
                    <h5 className="m-dblue m-10">Anuj Pandey</h5>

                    <table style={{ margin: '0 auto', textAlign: 'left' }} className="table-striped f-12 m-round" >
                        <tbody>
                            <tr>
                                <td>Registration/ID</td>
                                <td>
                                    <b>4582333</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Class</td>
                                <td>
                                    <b>10</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Admission Date</td>
                                <td>
                                    <b>19 February, 2024</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Account Status</td>
                                <td>
                                    <b className="text-success">
                                        Active <FontAwesomeIcon icon={faCheck}/>
                                    </b>
                                </td>
                            </tr>

                            <tr>
                                <td>Username</td>
                                <td>
                                    <b>6726771BL 4582333</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>
                                    <b>6726771BL 4582333</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    
                        <h3>
                            <button
                                className="btn btn-sm m-t-20 bg-m-orange m-white waves-effect waves-light"
                                style={{ borderRadius: '15px' }}
                                id="btn"
                                value="Print"
                                onClick={handlePrintClick}
                            >
                                <FontAwesomeIcon icon = {faPrint}/>Print Admission Letter
                            </button>
                        </h3>
                   
                </div>

            </div>
            <div className="col-lg-4"></div>
            <div className="canvas_div_pdf">
                <div className="row" id="area" style={{ width: '100%' }}>
                    <div className="col-lg-12 col-md-12">
                        <div className="col-lg-12 col-md-12" style={{ background: '#fff', fontSize: '10px', padding: '10px' }}>
                            <div className="module-head p-b-0" style={{ textAlign: 'center', background: '#fff' }}>
                                <img src={skooly} style={{ width: '60px', height: '55px' }} />
                                <br />
                                <font style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>eSkooly</font>
                                <br />
                                <b>" YOUR SCHOOL SOFTWARE "</b>
                                <br />
                                <i className="icon-phone"></i> +923460204447 | <i className="icon-globe"></i> www.eskooly.com |{' '}
                                <i className="icon-envelope"></i> info@eskooly.com
                                <br />
                                <font className="m-dblue" style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>
                                    Admission Letter
                                </font>
                                <hr />
                            </div>
                            <div className="module-body" style={{ color: '#555' }}>
                                <div className="row-fluid p-20 p-t-0 p-b-10" style={{ background: 'white', borderBottom: '1px solid #999' }}>
                                    <table style={{ width: '100%' }}>
                                        <tbody>
                                            <tr style={{ border: 'none' }}>
                                                <td>
                                                    <img src= {NoImage} style={{ width: '100px', height: '100px' }} className="m-round" />
                                                </td>
                                                <td>
                                                    <div style={{ position: 'relative' }}>
                                                       
                                                        <span className="f-10 m-gray" >
                                                            Serial No
                                                        </span>
                                                        <br />
                                                        <strong className="f-12 m-l-20">660,795</strong>
                                                    </div>

                                                    <div style={{ position: "relative" }}>
                                                       
                                                        <span className="f-10 m-gray">Registration No</span><br />
                                                        <strong className="f-12 m-l-20 m-dblue"> 4582333</strong>
                                                    </div>
                                                    <div style={{ position: "relative" }}>
                                                       
                                                        <span className="f-10 m-gray">Student Name</span><br />
                                                        <strong className="f-12 m-l-20">Anuj Pandey</strong>
                                                    </div>
                                                    <div style={{ position: "relative" }}>
                                                       
                                                        <span className="f-10 m-gray">Class</span><br />
                                                        <strong className="f-12 m-l-20">10</strong>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div style={{ position: "relative" }} className="">
                                                       
                                                        <span className="f-10 m-gray">Date Of Birth</span><br />
                                                        <strong className="f-12 m-l-20">30 November, -0001</strong>
                                                    </div>
                                                    <div style={{ position: "relative" }} className="">
                                                       
                                                        <span className="f-10 m-gray">Student Birth Form ID / NIC</span><br />
                                                        <strong className="f-12 m-l-20"></strong>
                                                    </div>
                                                    <div style={{ position: "relative", minHeight: "30px" }} className="">
                                                       
                                                        <span className="f-10 m-gray">Gender</span><br />
                                                        <strong className="f-12 m-l-20"></strong>
                                                    </div>
                                                    <div style={{ position: "relative" }} className="">
                                                       
                                                        <span className="f-10 m-gray">Religion</span><br />
                                                        <strong className="f-12 m-l-20"></strong>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div style={{ position: "relative" }}>
                                                       
                                                        <span className="f-10 m-gray">Date of Admission</span><br />
                                                        <strong className="f-12 m-l-20">19 February, 2024</strong>
                                                    </div>
                                                    <div style={{ position: "relative" }}>
                                                       
                                                        <span className="f-10 m-gray">Discount In Fee</span><br />
                                                        <strong className="f-12 m-l-20">10 %</strong>
                                                    </div>
                                                    <div style={{ position: "relative" }}>
                                                       
                                                        <span className="f-10 m-gray">Username</span><br />
                                                        <strong className="f-12 m-l-20">6726771BL 4582333</strong>
                                                    </div>
                                                    <div style={{ position: "relative" }}>
                                                       
                                                        <span className="f-10 m-gray">Password</span><br />
                                                        <strong className="f-12 m-l-20">6726771BL 4582333</strong>
                                                    </div>

                                                </td>
                                            </tr>
                                        </tbody></table>
                                </div>
                                <div className="row-fluid p-20 p-t-5 p-b-5">
                                    <table className="w-100">
                                        <tbody><tr style={{ border: "none" }}>
                                            <td>
                                                <div style={{ position: "relative", minHeight: "30px" }} className=" text-left">
                                                   
                                                    <span className="f-10 m-gray">Address</span><br />
                                                    <strong className="f-12 m-l-20"></strong>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-right" style={{ lineHeight: "10px" }}>
                                                    <strong className="f-12">SCAN QR CODE</strong><br /><span className="f-10">TO ACCESS PORTAL</span>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody></table>

                                </div>
                                <div className="row-fluid p-20 p-t-0 p-b-5" style={{ background: "white" }}>
                                    <table style={{ width: "100%" }}><tbody><tr style={{ border: "none" }}>
                                        <td>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Any Identification Mark?</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Blood Group</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Disease If Any?</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Cast</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Orphan Student</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">OSC</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Previous School</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Previous ID / Board Roll No</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Any Additional Note</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>

                                        </td>
                                        <td>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Father Name</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Father National ID</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Education</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Mobile No</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Occupation</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Profession</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Income</span><br />
                                                <strong className="f-12 m-l-20">0</strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Total Siblings</span><br />
                                                <strong className="f-12 m-l-20">0</strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }}>
                                               
                                                <span className="f-10 m-gray">Family</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>

                                        </td>
                                        <td>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Mother Name</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Mother National ID</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Education</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Mobile No</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Occupation</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Profession</span><br />
                                                <strong className="f-12 m-l-20"></strong>
                                            </div>
                                            <div style={{ position: "relative", minHeight: "30px" }} className="">
                                               
                                                <span className="f-10 m-gray">Income</span><br />
                                                <strong className="f-12 m-l-20">0</strong>
                                            </div>

                                        </td>
                                        <td>
                                            <div className="text-center">
                                                <img src={QRcodeWeb} style={{ maxHeight: "80px", border: "2px solid #777" }} />
                                                <div style={{ width: "80px", margin: "0 auto" }} className="bg-gradient-gray m-white p-10 f-10 p-t-0 p-b-0"><strong>Web Portal</strong></div>
                                            </div>
                                            <div className="text-center m-t-10">
                                                <img src={QRcodePlay} style={{ maxHeight: "80px", border: "2px solid #777" }} />
                                                <div style={{ width: "80px", margin: "0 auto" }} className="bg-gradient-gray m-white p-10 f-10 p-t-0 p-b-0"><strong>Andriod App</strong></div>
                                            </div>
                                            <div className="text-center m-t-10">
                                                <img src={QRcodeApp} style={{ maxHeight: "80px", border: "2px solid #777" }} />
                                                <div style={{ width: "80px", margin: "0 auto" }} className="bg-gradient-gray m-white p-10 f-10 p-t-0 p-b-0"><strong>iOS App</strong></div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody></table>
                                </div>
                                <div className="row-fluid p-20 p-t-5" style={{ background: 'white' }}>
                                    <strong className="f-14 m-gray">Rules And Regulations: </strong>
                                    <br />
                                    The school rules have been established in partnership with the community over a long period of time. They reflect the school community’s expectations in terms of acceptable standards of behaviour, dress and personal presentation in the widest sense. Students are expected to follow the school rules at all times when on the school grounds, representing the school, attending a school activity or when clearly associated with the school i.e. when wearing school uniform.

                                    <br />Students have the responsibility:<br />
                                    To attend school regularly
                                    <br />To respect the right of others to learn
                                    <br />To respect their peers and teachers regardless of ethnicity, religion or gender
                                    <br />To respect the property and equipment of the school and others
                                    <br />To carry out reasonable instructions to the best of their ability
                                    <br />To conduct themselves in a courteous and appropriate manner in school and in public
                                    <br />To keep the school environment and the local community free from litter
                                    <br />To observe the uniform code of the school
                                    <br />To read all school notices and bring them to their parents’/guardians’ attention

                                </div>
                                <div className="row footer" style={{ background: 'white' }}>
                                    <div className="col-6">
                                        Signature of Authority
                                        <div style={{ display: 'inline-block', width: '150px', padding: '10px', borderBottom: '1px solid #999' }}></div>
                                    </div>
                                    <div className="col-6 text-right">
                                        Institute Stamp
                                        <div style={{ display: 'inline-block', width: '150px', padding: '10px', borderBottom: '1px solid #999' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>


    );
};

export default AdmissionConfirmation;