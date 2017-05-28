import React, { Component, PropTypes } from 'react'
import  {connect } from 'react-redux'
import {bindGoToLandingToDispatch} from '../actions/generalActions'
export const MetricsItem = ({goToLanding, mostPopularColor, mostPopularManufacturer, averageDescriptionLength }) => {
  return  (
      <div>
          <input type="button" defaultValue="Home" onClick={goToLanding} id="LandingLink" />

          <table textAlign="center">
            <tbody>
              <tr>
                <td>Most popular color: </td>
                <td>{mostPopularColor}</td>
              </tr>
              <tr>
                <td>Most popular manufacturer: </td>
                <td>{mostPopularManufacturer}</td>
              </tr>
              <tr>
                <td>Average length (in characters) of a product description: </td>
                <td>{averageDescriptionLength}</td>
              </tr>
            </tbody>
          </table>
      </div>

  )
}

  export default connect( (state) =>
                          {
                            return {
                              mostPopularColor: state.mostPopularColor,
                              mostPopularManufacturer: state.mostPopularManufacturer,
                              averageDescriptionLength: state.averageLength.toString(),
                            }
                          },
    (dispatch, ownProps) => {
          return {
              goToLanding: () => bindGoToLandingToDispatch()(dispatch)
          }
      })(MetricsItem)
