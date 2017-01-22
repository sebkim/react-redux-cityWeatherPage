import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length - 273.15)
}
function minimum(data) {
  return _.round(_.min(data) - 273.15);
}
export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: {average(props.data)} {props.units}</div>
      <div>Minimum: {minimum(props.data)} {props.units}</div>
    </div>
  )
}
