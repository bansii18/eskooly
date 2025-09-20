import React from 'react'
import "./AccountSetting.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLock, faRefresh } from '@fortawesome/free-solid-svg-icons'

const AccountSetting = () => {
  return (
    <div className="Page">
  
  <div className="page-body">

    <div className="row" style={{ margin: 10 }}>
      <div className="col-lg-7 p-10 text-center">
        <h5 className="m-blue1">Update Login details</h5>
        <hr />
        <form action="#" method="POST">
          <div className="btn-group">
            <input
              type="text"
              defaultValue="6726771BL 4582333"
              name="username"
              placeholder="New username ?"
              className="form-control"
              required=""
            />
            <br /><br/>
            <input
              id="password-field"
              type="password"
              placeholder="New Password ?"
              className="form-control"
              name="password"
              defaultValue="6726771BL 4582333"
              required=""
            />
            <span
              toggle="#password-field"
              className="field-icon toggle-password"
            />
          </div>
          <hr />
          <button
            type="submit"
            name="changepassword"
            className="button"
          >
            <FontAwesomeIcon icon={faRefresh}/>Update
          </button>
        </form>
      </div>
      <div className="col-lg-5 card p-20 card">
        <h5 className="m-dblue" style={{marginTop: "11px" }}>
          <FontAwesomeIcon icon={faLock}/>Account Login details
        </h5>
        <hr />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <b className="m-gray">Username:</b>
              </td>
              <td style={{ textAlign: "left" }}> 6726771BL 4582333</td>
            </tr>
            <tr>
              <td>
                <b className="m-gray">Password :</b>
              </td>
              <td style={{ textAlign: "left" }} className="m-gray">
                <span id="stars" style={{}}>
                  {" "}
                  *****************
                </span>
                <span
                  id="password"
                  style={{ color: "rgb(51, 51, 51)", display: "none" }}
                >
                  {" "}
                  6726771BL 4582333
                </span>
                <FontAwesomeIcon icon={faEye}/>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    </div>
   
  </div>
 
</div>

  )
}

export default AccountSetting