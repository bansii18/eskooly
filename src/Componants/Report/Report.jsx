import React from 'react'
import skooly from "../../Assests/skooly-icon.png";
import NoImage from '../../Assests/no-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPrint,
    faPhone,
    faGlobe,
    faEnvelope,
    faGraduationCap,
    faStar,
    faSadCry,
    faFootball
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Report.css"

const Report = () => {
    const handlePrintClick = () => {

        window.print();
        console.log("ready to print");
    };

    return (
        <div className="main-body">
            <div className="page-wrapper">

                <div className="page-body" >

                    <div className="row">
                        <div className="col-sm-12">
                            
                            <Link to="#" className="f-right">
                                <button
                                    className="btn  bg-m-blue1 m-white  print1"
                                    onClick={handlePrintClick}
                                    title="Print Statement"
                                    style={{border:"bllue"}}
                                >
                                    <FontAwesomeIcon icon={faPrint} />
                                    Print Report Card
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 text-center m-round p-20 p-t-0 exam" style={{
                        background: '#ffff', border: '2px solid gray', borderRadius: "10px", margin: "0 auto", padding: "20px", float: "left",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "361px"
                    }}>
                        <h6 className="bg-gradient-gray m-white p-10" style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', padding: "6px", marginTop: "-20px" }}>
                            Examination Result
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
                                        <b>X</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Examination Month/Year</td>
                                    <td>
                                        <b>February-2024</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Marks</td>
                                    <td>
                                        <b className="text-success">
                                            400
                                        </b>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Total Marks</td>
                                    <td>
                                        <b>500</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Percentage</td>
                                    <td>
                                        <b>80%

                                        </b>
                                    </td>

                                </tr>
                                <tr>
                                    <td>Grade</td>
                                    <td>
                                        <b>A

                                        </b>
                                    </td></tr>
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
                                <FontAwesomeIcon icon={faPrint} />Print Report Card
                            </button>
                        </h3>

                    </div>


                    <div
                        className="row m-t-10 row-2"
                        style={{
                            border: "0px solid #9698d6", padding: "5px 5px 5px 15px",
                            marginLeft: "256px", float: "left",
                            position: "relative",
                            top: "7pc",
                            left: "0pc"
                        }}
                    >
                        <div
                            id="area"
                            className="col-lg-12 col-md-12 m-round class"
                            style={{ border: "1px solid #333", background: "#fff", /*idth:"950px"*/ }}
                        >
                            <div
                                className="module-head"
                                style={{ textAlign: "center", background: "#fff" }}
                            >
                                <img
                                    src={skooly} alt="#"
                                    style={{ width: 60, height: 55 }}
                                />
                                <br />
                                <font style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
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
                                    className="m-dblue"
                                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}
                                >
                                    Student Report Card
                                </font>
                            </div>
                            <div className="module-body">
                                <div
                                    className="col-sm-12  m-round part-1"
                                    style={{ border: "1px solid #555", marginTop: 10 }}
                                >
                                    <table className="w-100 f-10">
                                        <tbody>
                                            <tr>
                                                <td
                                                    style={{
                                                        width: 80,
                                                        borderRight: "1px solid #555",
                                                        padding: "none",
                                                        paddingRight: 10
                                                    }}
                                                >
                                                    <img
                                                        src={NoImage}
                                                        alt='#'
                                                        className="img-circle"
                                                        style={{ width: 80, height: 80 }}
                                                    />
                                                </td>
                                                <td style={{ borderRight: "1px solid #555", padding: 5 }}>
                                                    <table className="w-100 f-10">
                                                        <tbody>
                                                            <tr>
                                                                <td>REGISTRATION</td>
                                                                <td>
                                                                    <b className="f-right"> 4582333</b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>NAME</td>
                                                                <td>
                                                                    <b className="f-right">Anuj Pandey</b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>CLASS</td>
                                                                <td>
                                                                    <b className="f-right">10</b>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td style={{ borderRight: "1px solid #555", padding: 5 }}>
                                                    <table className="w-100 f-10">
                                                        <tbody>
                                                            <tr>
                                                                <td>DATE OF BIRTH</td>
                                                                <td>
                                                                    <b className="f-right">30 November, -0001</b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>GENDER</td>
                                                                <td>
                                                                    <b className="f-right" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>ADMISSION DATE</td>
                                                                <td>
                                                                    <b className="f-right">19 February, 2024</b>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td style={{ padding: 5 }}>
                                                    <table className="w-100 f-10">
                                                        <tbody>
                                                            <tr>
                                                                <td>ATTENDANCE</td>
                                                                <td>
                                                                    <b className="f-right">0 %</b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>LEAVES</td>
                                                                <td>
                                                                    <b className="f-right">1</b>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>ABSENTS</td>
                                                                <td>
                                                                    <b className="f-right">0</b>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-12  m-round m-t-10">
                                    <div className="row">
                                        <div
                                            className="col-sm-12 m-round EXAMINATION "
                                            style={{ border: "1px solid #555", padding: 0 }}
                                        >
                                            <p style={{ paddingLeft: 10, margin: 0, fontSize: 11 }}>
                                                < FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />{" "}
                                                COGNITIVE DOMAIN - EXAMINATION
                                            </p>
                                            <table className="w-100 f-10">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            style={{
                                                                border: "0.5px solid #666",
                                                                verticalAlign: "bottom",
                                                                padding: 2,
                                                                fontSize: 10
                                                            }}
                                                        >
                                                            EXAMINATIONS
                                                        </th>
                                                        <td
                                                            className="htr"
                                                            style={{
                                                                writingMode: "tb-rl",
                                                                transform: "rotate(-180deg)",
                                                                border: "0.5px solid #666",
                                                                padding: 2,
                                                                fontSize: 10
                                                            }}
                                                        >
                                                            <span style={{ display: "block" }}>Maths (62)</span>
                                                        </td>{" "}
                                                        <th
                                                            className="htr"
                                                            style={{
                                                                writingMode: "tb-rl",
                                                                transform: "rotate(-180deg)",
                                                                border: "0.5px solid #666",
                                                                padding: 2,
                                                                fontSize: 10
                                                            }}
                                                        >
                                                            <span style={{ display: "block" }}>
                                                                OBTAINED MARKS
                                                            </span>
                                                        </th>
                                                        <th
                                                            className="htr"
                                                            style={{
                                                                writingMode: "tb-rl",
                                                                transform: "rotate(-180deg)",
                                                                border: "0.5px solid #666",
                                                                padding: 2,
                                                                fontSize: 10
                                                            }}
                                                        >
                                                            <span style={{ display: "block" }}>TOTAL MARKS</span>
                                                        </th>
                                                        <th
                                                            className="htr"
                                                            style={{
                                                                writingMode: "tb-rl",
                                                                transform: "rotate(-180deg)",
                                                                border: "0.5px solid #666",
                                                                padding: 2,
                                                                fontSize: 10
                                                            }}
                                                        >
                                                            <span style={{ display: "block" }}>PERCENTAGE</span>
                                                        </th>
                                                        <th
                                                            className="htr"
                                                            style={{
                                                                writingMode: "tb-rl",
                                                                transform: "rotate(-180deg)",
                                                                border: "0.5px solid #666",
                                                                padding: 2,
                                                                fontSize: 10
                                                            }}
                                                        >
                                                            <span style={{ display: "block" }}>GRADE</span>
                                                        </th>
                                                        <th
                                                            className="htr"
                                                            style={{
                                                                verticalAlign: "bottom",
                                                                border: "0.5px solid #666",
                                                                padding: 2,
                                                                textAlign: "center",
                                                                fontSize: 10
                                                            }}
                                                        >
                                                            STATUS
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="m-dblue">
                                                        <td
                                                            style={{
                                                                padding: 4,
                                                                border: "0.5px solid #666",
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            OVER ALL PERFORMANCE
                                                        </td>
                                                        <td
                                                            className="text-center"
                                                            style={{
                                                                padding: 4,
                                                                border: "0.5px solid #666",
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            0
                                                        </td>{" "}
                                                        <td
                                                            className="text-center"
                                                            style={{
                                                                padding: 4,
                                                                border: "0.5px solid #666",
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        />
                                                        <td
                                                            className="text-center"
                                                            style={{
                                                                padding: 4,
                                                                border: "0.5px solid #666",
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        />
                                                        <td
                                                            className="text-center"
                                                            style={{
                                                                border: "0.5px solid #666",
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            0%
                                                        </td>
                                                        <td
                                                            className="text-center"
                                                            style={{
                                                                padding: 4,
                                                                border: "0.5px solid #666",
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            F
                                                        </td>
                                                        <td
                                                            className="text-center"
                                                            style={{
                                                                border: "0.5px solid #666",
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            FAIL
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                paddingLeft: 4,
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            SUBJECT WISE PERFORMANCE
                                                        </td>
                                                        <td className="text-center" style={{ fontSize: 9 }}>
                                                            <i className="fa fa-long-arrow-down" />
                                                        </td>{" "}
                                                        <td colSpan={5} rowSpan={5}>
                                                            <div
                                                                className="m-round"
                                                                style={{
                                                                    margin: 4,
                                                                    padding: 4,
                                                                    paddingLeft: 10,
                                                                    paddingTop: 5
                                                                }}
                                                            >
                                                                <font style={{ fontSize: 10 }}>
                                                                    TOTAL SCORE
                                                                    <br />
                                                                    <strong className="f-14 m-dblue"> / </strong>
                                                                </font>
                                                                <hr style={{ margin: 4, color: "#111" }} />
                                                                <table className="w-100">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <font
                                                                                    style={{
                                                                                        fontSize: 10,

                                                                                        marginTop: 5
                                                                                    }}
                                                                                >
                                                                                    PERCENTAGE
                                                                                    <br />
                                                                                    <strong className="f-14 m-dblue">
                                                                                        0%
                                                                                    </strong>
                                                                                </font>
                                                                            </td>
                                                                            <td
                                                                                style={{
                                                                                    borderLeft: "1px solid #999",
                                                                                    paddingLeft: 20
                                                                                }}
                                                                            >
                                                                                <font
                                                                                    style={{
                                                                                        fontSize: 10,

                                                                                        marginTop: 5
                                                                                    }}
                                                                                >
                                                                                    GRADE
                                                                                    <br />
                                                                                    <strong className="f-14 m-dblue">
                                                                                        F
                                                                                    </strong>
                                                                                </font>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <hr style={{ margin: 4, size: 2, color: "#111" }} />
                                                                <font
                                                                    style={{
                                                                        fontSize: 10,

                                                                        marginTop: 5
                                                                    }}
                                                                >
                                                                    STATUS
                                                                    <br />
                                                                    <strong className="f-14 m-dblue">FAIL </strong>
                                                                </font>
                                                                <hr style={{ margin: 4, marginBottom: 0 }} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                padding: 1,
                                                                border: "0.5px solid #666",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            TOTAL MARKS
                                                        </td>
                                                        <td
                                                            className="text-center"
                                                            style={{
                                                                padding: 0,
                                                                border: "0.5px solid #666",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            0
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                padding: 1,
                                                                border: "0.5px solid #666",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            PERCENTAGE
                                                        </td>
                                                        <td
                                                            className="text-center"
                                                            style={{
                                                                padding: 0,
                                                                border: "0.5px solid #666",
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            0%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                padding: 1,
                                                                border: "0.5px solid #666",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            GRADE
                                                        </td>
                                                        <td
                                                            className="text-center"
                                                            style={{
                                                                padding: 0,
                                                                border: "0.5px solid #666",
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            F
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                padding: 1,
                                                                border: "0.5px solid #666",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            STATUS
                                                        </td>
                                                        <td
                                                            className="text-center"
                                                            style={{
                                                                padding: 0,
                                                                border: "0.5px solid #666",
                                                                fontWeight: "bold",
                                                                fontSize: 9
                                                            }}
                                                        >
                                                            FAIL
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className="w-100 f-12" style={{ marginBottom: 5 }}>
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                paddingLeft: 10,
                                                                fontWeight: "bold",
                                                                fontSize: 12
                                                            }}
                                                            className="m-dblue1"
                                                        >
                                                            COMPARISON
                                                            <br /> WITH CLASS
                                                        </td>
                                                        <td>
                                                            <font style={{ fontSize: 10 }}>
                                                                CLASS STRENGTH
                                                                <br />
                                                                <strong className="f-14 m-dblue">
                                                                    2 <font className="f-12">STUDENTS</font>{" "}
                                                                </strong>
                                                            </font>
                                                        </td>
                                                        <td>
                                                            <font style={{ fontSize: 10 }}>
                                                                CLASS AVERAGE
                                                                <br />
                                                                <strong className="f-14 m-dblue">
                                                                    0<font className="f-12">%</font>{" "}
                                                                </strong>
                                                            </font>
                                                        </td>
                                                        <td>
                                                            <font style={{ fontSize: 10 }}>
                                                                CLASS MAX AVERAGE
                                                                <br />
                                                                <strong className="f-14 m-dblue">
                                                                    0<font className="f-12">%</font>{" "}
                                                                </strong>
                                                            </font>
                                                        </td>
                                                        <td>
                                                            <font style={{ fontSize: 10 }}>
                                                                CLASS MIN AVERAGE
                                                                <br />
                                                                <strong className="f-14 m-dblue">
                                                                    0<font className="f-12">%</font>{" "}
                                                                </strong>
                                                            </font>
                                                        </td>
                                                        <td>
                                                            <font style={{ fontSize: 10 }}>
                                                                STUDENT POSITION
                                                                <br />
                                                                <strong className="f-14 m-dblue">
                                                                    1st<font className="f-12"> out of </font>2{" "}
                                                                </strong>
                                                            </font>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 m-t-10  "
                                    style={{ fontSize: 9, padding: 0 }}
                                >
                                    <table className="w-100">
                                        <tbody>
                                            <tr>
                                                <td style={{ verticalAlign: "top" }}>
                                                    <div
                                                        className="m-round arrange"
                                                        style={{ border: "0.5px solid #666" }}
                                                    >
                                                        <p style={{ paddingLeft: 10, margin: 0, fontSize: 11 }}>
                                                            < FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />{" "}
                                                            COGNITIVE DOMAIN - CLASS TESTS
                                                        </p>
                                                        <table className="size-1">
                                                            <thead>
                                                                <tr>
                                                                    <th
                                                                        style={{
                                                                            border: "0.5px solid #666",
                                                                            verticalAlign: "bottom",
                                                                            paddingLeft: 5,
                                                                            fontSize: 10
                                                                        }}
                                                                    >
                                                                        SUBJECTS
                                                                    </th>
                                                                    <th
                                                                        className="htr"
                                                                        style={{
                                                                            writingMode: "tb-rl",
                                                                            transform: "rotate(-180deg)",
                                                                            border: "0.5px solid #666",
                                                                            fontSize: 9
                                                                        }}
                                                                    >
                                                                        <span style={{ display: "block" }}>
                                                                            TOTAL TESTS
                                                                        </span>
                                                                    </th>
                                                                    <th
                                                                        className="htr"
                                                                        style={{
                                                                            writingMode: "tb-rl",
                                                                            transform: "rotate(-180deg)",
                                                                            border: "0.5px solid #666",
                                                                            fontSize: 9
                                                                        }}
                                                                    >
                                                                        <span style={{ display: "block" }}>
                                                                            TOTAL MARKS
                                                                        </span>
                                                                    </th>
                                                                    <th
                                                                        className="htr hide"
                                                                        style={{
                                                                            writingMode: "tb-rl",
                                                                            transform: "rotate(-180deg)",
                                                                            border: "0.5px solid #666",
                                                                            fontSize: 9
                                                                        }}
                                                                    >
                                                                        <span style={{ display: "block" }}>
                                                                            OBTAINED
                                                                        </span>
                                                                    </th>
                                                                    <th
                                                                        className="htr hide"
                                                                        style={{
                                                                            writingMode: "tb-rl",
                                                                            transform: "rotate(-180deg)",
                                                                            border: "0.5px solid #666",
                                                                            fontSize: 9
                                                                        }}
                                                                    >
                                                                        <span style={{ display: "block" }}>
                                                                            AVERAGE
                                                                        </span>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            padding: 1,
                                                                            border: "0.5px solid #666",
                                                                            paddingLeft: 5,
                                                                            fontSize: 9
                                                                        }}
                                                                    >
                                                                        Maths
                                                                    </td>
                                                                    <td
                                                                        className="text-center"
                                                                        style={{
                                                                            padding: 1,
                                                                            border: "0.5px solid #666",
                                                                            fontSize: 9
                                                                        }}
                                                                    >
                                                                        0
                                                                    </td>
                                                                    <td
                                                                        className="text-center"
                                                                        style={{
                                                                            padding: 1,
                                                                            border: "0.5px solid #666",
                                                                            fontSize: 9
                                                                        }}
                                                                    >
                                                                        0
                                                                    </td>
                                                                    <td
                                                                        className="text-center"
                                                                        style={{
                                                                            padding: 1,
                                                                            border: "0.5px solid #666",
                                                                            fontSize: 9
                                                                        }}
                                                                    >
                                                                        0
                                                                    </td>
                                                                    <td
                                                                        className="text-center"
                                                                        style={{
                                                                            padding: 1,
                                                                            border: "0.5px solid #666",
                                                                            fontSize: 9
                                                                        }}
                                                                    >
                                                                        0%
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table
                                                            className="w-100 f-12"
                                                            style={{ marginBottom: 5 }}
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ paddingLeft: 5, paddingRight: 5 }}>
                                                                        <font style={{ fontSize: 9 }}>
                                                                            OVERALL TESTS
                                                                            <br />
                                                                            <strong className="f-12 m-dblue">0 </strong>
                                                                        </font>
                                                                    </td>
                                                                    <td style={{ paddingLeft: 2, paddingRight: 5 }}>
                                                                        <font style={{ fontSize: 9 }}>
                                                                            OBTAINED MARKS
                                                                            <br />
                                                                            <strong className="f-12 m-dblue">
                                                                                0<font className="f-12" />{" "}
                                                                            </strong>
                                                                        </font>
                                                                    </td>
                                                                    <td style={{ paddingLeft: 2, paddingRight: 5 }}>
                                                                        <font style={{ fontSize: 9 }}>
                                                                            TOTAL MARKS
                                                                            <br />
                                                                            <strong className="f-12 m-dblue">
                                                                                0<font className="f-12" />{" "}
                                                                            </strong>
                                                                        </font>
                                                                    </td>
                                                                    <td style={{ paddingLeft: 2, paddingRight: 5 }}>
                                                                        <font style={{ fontSize: 9 }}>
                                                                            SCORE
                                                                            <br />
                                                                            <strong className="f-12 m-dblue">
                                                                                0<font className="f-12">%</font>{" "}
                                                                            </strong>
                                                                        </font>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                                <td style={{ verticalAlign: "top" }}>
                                                    <table className="size">
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{ paddingLeft: 10, verticalAlign: "top" }}
                                                                >
                                                                    <div
                                                                        className="m-round"
                                                                        style={{ border: "0.5px solid #666" }}
                                                                    >
                                                                        <p
                                                                            style={{
                                                                                paddingLeft: 10,
                                                                                margin: 0,
                                                                                fontSize: 11
                                                                            }}
                                                                        >
                                                                            < FontAwesomeIcon icon={faSadCry} aria-hidden="true" />{" "}
                                                                            AFFECTIVE DOMAINS
                                                                        </p>
                                                                        <table
                                                                            className="w-100 f-12"
                                                                            style={{ marginBottom: 5 }}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style={{ paddingLeft: 5 }}>
                                                                                        <font
                                                                                            style={{ fontSize: 9 }}
                                                                                        >
                                                                                            OVERALL RATING
                                                                                            <br />
                                                                                            <strong className="f-12 m-dblue">
                                                                                                0<FontAwesomeIcon icon={faStar} />
                                                                                                <FontAwesomeIcon icon={faStar} />
                                                                                                <FontAwesomeIcon icon={faStar} />
                                                                                                <FontAwesomeIcon icon={faStar} />
                                                                                                <FontAwesomeIcon icon={faStar} />{" "}
                                                                                            </strong>
                                                                                        </font>
                                                                                    </td>
                                                                                    <td>
                                                                                        <font
                                                                                            style={{ fontSize: 9 }}
                                                                                        >
                                                                                            SCORE
                                                                                            <br />
                                                                                            <strong className="f-12 m-dblue">
                                                                                                0<font className="f-12">%</font>{" "}
                                                                                            </strong>
                                                                                        </font>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    style={{ paddingLeft: 10, verticalAlign: "top" }}
                                                                >
                                                                    <div
                                                                        className="m-round"
                                                                        style={{ border: "0.5px solid #666" }}
                                                                    >
                                                                        <p
                                                                            style={{
                                                                                paddingLeft: 10,
                                                                                margin: 0,
                                                                                fontSize: 11
                                                                            }}
                                                                        >
                                                                            < FontAwesomeIcon icon={faFootball} aria-hidden="true" />{" "}
                                                                            PSYCOMOTOR DOMAINS
                                                                        </p>
                                                                        <table
                                                                            className="w-100 f-12"
                                                                            style={{ marginBottom: 5 }}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style={{ paddingLeft: 5 }}>
                                                                                        <font
                                                                                            style={{ fontSize: 9 }}
                                                                                        >
                                                                                            OVERALL RATING
                                                                                            <br />
                                                                                            <strong className="f-12 m-dblue">
                                                                                                0<FontAwesomeIcon icon={faStar} />
                                                                                                <FontAwesomeIcon icon={faStar} />
                                                                                                <FontAwesomeIcon icon={faStar} />
                                                                                                <FontAwesomeIcon icon={faStar} />
                                                                                                <FontAwesomeIcon icon={faStar} />{" "}
                                                                                            </strong>
                                                                                        </font>
                                                                                    </td>
                                                                                    <td>
                                                                                        <font
                                                                                            style={{ fontSize: 9 }}
                                                                                        >
                                                                                            SCORE
                                                                                            <br />
                                                                                            <strong className="f-12 m-dblue">
                                                                                                0<font className="f-12">%</font>{" "}
                                                                                            </strong>
                                                                                        </font>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan={2} style={{ maxWidth: "67%" }}>
                                                                    <div
                                                                        className="m-round m-l-10 m-t-10 long p-10"
                                                                        style={{
                                                                            border: "1px solid #666",
                                                                            paddingTop: 0
                                                                        }}
                                                                    >
                                                                        <span style={{ margin: 0, fontSize: 11 }}>
                                                                            <i
                                                                                className="fa fa-comments-o"
                                                                                aria-hidden="true"
                                                                            />{" "}
                                                                            COMMENTS / OBSERVATIONS
                                                                        </span>
                                                                        <hr style={{ marginTop: 0, marginBottom: 5 }} />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div
                                    className="col-sm-12 m-t-10"
                                    style={{ fontSize: 10, padding: 0 }}
                                >
                                    <table className="size-2">
                                        <tbody>
                                            <tr>
                                                <td
                                                    style={{
                                                        verticalAlign: "top",
                                                        padding: 15,

                                                        fontSize: 10
                                                    }}
                                                >
                                                    OVERALL RATING <br />
                                                    <strong
                                                        className="f-14 m-dblue"

                                                    >
                                                        0 <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />{" "}
                                                    </strong>
                                                    <br />
                                                    OVERALL SCORE
                                                    <br />
                                                    <strong
                                                        className="f-14 m-dblue"

                                                    >
                                                        0%
                                                    </strong>
                                                </td>
                                                <td
                                                    style={{
                                                        verticalAlign: "bottom",
                                                        padding: 15,
                                                        fontSize: 10
                                                    }}
                                                >
                                                    <strong>09 March, 2024</strong>
                                                    <hr style={{ margin: 0, padding: 0 }} />
                                                    DATE
                                                </td>
                                                <td
                                                    style={{
                                                        verticalAlign: "bottom",
                                                        padding: 15,

                                                        fontSize: 10
                                                    }}
                                                >
                                                    <hr style={{ margin: 5, padding: 0 }} />
                                                    SIGNATURE
                                                </td>
                                                <td
                                                    style={{
                                                        verticalAlign: "bottom",
                                                        padding: 15,

                                                        fontSize: 10
                                                    }}
                                                >
                                                    <hr style={{ margin: 5, padding: 0 }} />
                                                    STAMP
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* Row end */}
                        {/* Row start */}
                        {/* Row end */}
                    </div>
                    {/* Page-body end */}
                </div>
            </div>
        </div>

    )
}

export default Report