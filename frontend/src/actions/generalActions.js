import resource, {COMPUTE} from '../actions'
var db = require('../../db')

const bindDoComputationToDispatch = () => (dispatch) => {
  var mostPopularColor = computeMostPopular(db, "color")
  var mostPopularManufacturer = computeMostPopular(db, "manufacturer")
  var averageDescriptionLength = computeAverageDescriptionLength(db)
  dispatch({type: COMPUTE, payload: [mostPopularColor, mostPopularManufacturer, averageDescriptionLength]})

}

const bindGoToLandingToDispatch = () => (dispatch) => {
  dispatch({type: 'goToLandingToDo'})
}




function computeAverageDescriptionLength(dbFile) {
  var objectArray = dbFile['default']
  var totalLength = 0;
  var totalNumDescriptions = 0
  objectArray.forEach(function(product) {
    if (product['description']){
      totalLength += product['description'].length
      totalNumDescriptions+=1
    }
  });
  return {averageLength: totalLength/totalNumDescriptions}
}

function computeMostPopular(dbFile, attribute, callback) {
  var objectArray = dbFile['default']
  var attributeToCount = {}
  objectArray.forEach(function(product) {
    if (product[attribute]){
      attributeToCount[product[attribute]] = 0
    }
  });

  //increment all
  objectArray.forEach(function(product) {
    if (product[attribute]){
      attributeToCount[product[attribute]] += 1
    }
  });

  var biggestAttribute;
  var biggest = 0;
  for (var att in attributeToCount){
    if (attributeToCount[att] >= biggest){
      biggestAttribute = att
      biggest = attributeToCount[att]
    }
  }
  return {attribute: biggestAttribute, count: biggest, attributeType: attribute}
}

export {bindDoComputationToDispatch, bindGoToLandingToDispatch}
