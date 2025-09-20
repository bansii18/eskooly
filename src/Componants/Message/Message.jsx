import React from 'react'
import "./Message.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faCommentAlt, faPaperclip, faPencil, faRefresh, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Message = () => {

    return (
        <div className="row">
            <div className="col-sm-12">

                <div className="">
                    <div>

                        <div className="row">
                            <div className="col-lg-6 col-xl-6 text-center  p-40 m-round compose" >
                                <h5 className="m-blue1 m-10" id="tog" style={{ cursor: "pointer", color: "#5e81f4" }}>
                                    <FontAwesomeIcon icon={faPencil} /> Compose A New Message
                                </h5>
                                <form
                                    className="m-t-30"
                                    action="#"
                                    method="post"
                                    encType="multipart/form-data"
                                    id="togdiv"
                                >
                                    <label style={{ fontSize: 12 }} className="m-gray active">
                                        {" "}
                                        Send Message To*
                                        <br />
                                        <select
                                            name="type"
                                            className="form-control m-round active"
                                            id="type"
                                            onchange="myFunction()"
                                        >
                                            <option value="AD">School Admin</option>
                                            <option value="ST">Specific Teacher</option>
                                        </select>
                                    </label>
                                    {/* <label className="active">
                <input
                  className="form-control m-round ui-autocomplete-input"
                  id="empid"
                  type="text"
                  name="xempid"
                  placeholder="Search Teacher"
                  autoComplete="off"
                />
              </label> */}
                                    <input
                                        type="text"
                                        name="empid"
                                        style={{ display: "none" }}
                                        id="empidvalue"
                                    />
                                    <textarea
                                        className="form-control m-t-10 m-round active"
                                        rows={5}
                                        placeholder="Write your Message here..."
                                        name="message"
                                        required=""
                                        defaultValue={""}
                                        style={{ margin: "1px"}}
                                    />
                                    <p style={{ fontSize: 12 }} className="m-gray">
                                        244 Character
                                    </p>
                                    <div className="upload-btn-wrapper">
                                        <div className="btn1">
                                            <FontAwesomeIcon icon={faPaperclip} /> Attach Link file
                                            {/* <input
                                                type="file"
                                                name="fileToUpload"
                                                id="fileToUpload"
                                                style={{ display: "none" }}
                                                onChange={(e) => {
                                                    const fileName = e.target.files[0]?.name || "No file selected";
                                                    document.querySelector(".filename").innerText = fileName;
                                                }}
                                            /> */}
                                        </div>
                                        <span className="filename" />
                                        {/* <input type="file" name="fileToUpload" id="fileToUpload" /> */}
                                    </div>
                                    <hr style={{ backgroundColor: "#ccd2d2" }} />
                                    <h5 className="text-center">
                                        <button
                                            type="submit"
                                            className="btn bg-m-blue1  m-round waves-effect waves-light"
                                            name="send"
                                            style={{ backgroundColor: "#5e81f4", color: "white" }}
                                        >
                                            <FontAwesomeIcon icon={faComment} /> Send Message
                                        </button>
                                    </h5>
                                </form>
                            </div>
                            <div className="col-lg-6 col-xl-6 box" >
                                <h6 className="p-10 receive">
                                    <Link to="#" style={{ marginRight: "4px", color: " #5e81f4" }}>
                                        <FontAwesomeIcon icon={faCommentAlt} /> Sent{" "}
                                    </Link>

                                    <Link to="#" style={{ marginRight: "4px", color: " #9698d6" }}>
                                        <FontAwesomeIcon icon={faRefresh} /> All{" "}
                                    </Link>
                                    <span style={{ color: " #4d4cac " }}>Chat ( 0 - 50 )</span>
                                    <Link
                                        to="#"
                                        className="to"
                                        style={{     position: "absolute",
                                            left: "17pc", color: "#ff808b " }}
                                    >
                                        <FontAwesomeIcon icon={faCommentAlt} /><span className='recieved'>Received</span> 
                                    </Link>
                                </h6>
                                
                            </div>
                            <div className='buton' >
                                    <h5 className="text-center">
                                        <Link to="#">
                                            <button style={{ background: "linear-gradient(45deg, #9698d6, #a9abdb)", borderRadius: "15px", border: "1px rgb(150, 152, 214)", padding: "13px", color: "white", position: "absolute", top: "162px" }} >
                                                <FontAwesomeIcon icon={faAngleRight} /> Load More
                                            </button>
                                        </Link>
                                    </h5>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default Message