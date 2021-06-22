import React, { Component } from 'react'

export default class ListExample extends Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.state = {
      cursor: 0,
      result: [{title:'teste01', _id:'1234'},{title:'teste02', _id:'1235'},{title:'teste03', _id:'1236'}, ]
    }
  }

  handleKeyDown(e) {
    const { cursor, result } = this.state
    console.log(e);
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < result.length - 1) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    }
  }

  render() {
    const { cursor } = this.state

    return (
      <>
        <input onKeyDown={ this.handleKeyDown }/>
        <ul>
          {
            this.state.result.map((item, i) => (
              <li
                key={ item._id }
                className={cursor === i ? 'active' : null}
              >
                <span>{ item.title }</span>
              </li>
            ))
          }
        </ul>
      </>
    )
  }
}
