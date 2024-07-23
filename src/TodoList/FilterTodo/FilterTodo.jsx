import React, { Component } from "react";

class FilterTodo extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label>
          Фільтрувати тут:
          <input type="text" value={value} onChange={onChange} />
        </label>
      </div>
    );
  }
}

export default FilterTodo;
