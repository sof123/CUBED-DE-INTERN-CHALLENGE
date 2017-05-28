import React, { Component, PropTypes } from 'react'
import  {connect } from 'react-redux'
import {bindDoComputationToDispatch} from '../actions/generalActions'

const user = {}

export const LandingItem = ({doComputation}) =>{
  document.body.style.backgroundColor = "#E6E6FA";


return (
      <div >
        <meta name="author" content="Stephen" />
          <input type="hidden" name="timeStamp" />
        <table textAlign="center">
          <tbody>
            <tr>
              <td>
                <span id="AccountNameText"></span> <input type="button" defaultValue="Compute Results" id="update" onClick={doComputation} /><br />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
)
}

//dispatching  method to reducer
export default connect(null, (dispatch, ownProps) => {
        return {
            doComputation: () => bindDoComputationToDispatch()(dispatch)
        }
    })(LandingItem)
