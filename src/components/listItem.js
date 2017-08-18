import React from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className = "task">
        <div className ="right-tick" onClick = {this.props.onComplete}>
          &#10003;
        </div>
        {this.props.text}
        <div className="close-custom" onClick = {this.props.onDelete}>
          &#10006;
        </div>
      </li>
    )
  }
}