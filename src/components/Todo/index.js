import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  convertDate = (date) => {
    const newDate = new Date(date);
    const month = newDate.getMonth();
    const day = newDate.getDate();
    const year = newDate.getFullYear();
    return `${month}.${day}.${year}`;
  };

  render() {  
    return (
      <React.Fragment>
        [{this.convertDate(this.props.item.date)}]: {this.props.item.todo}
      </React.Fragment>
    );
  }
}

Todo.propTypes = {
  item: PropTypes.object,
  todo: PropTypes.string,
};

export default Todo;
