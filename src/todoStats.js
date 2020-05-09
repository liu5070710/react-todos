import React, { Component } from 'react';

class TodoStats extends Component {
   render() {
      let { completed, uncompleted, removeCompleted} = this.props;
      return <div id="todo-stats">

         <span className="todo-count">
            <span className="number">
               {uncompleted}
            </span>
            <span className="word"> item{`${uncompleted>1?'s':''}`}</span> left.
         </span>


         
         <span className={`todo-clear${completed===0?' hide':''}`}
               onClick={removeCompleted}>
            <p href="#">
               Clear <span className="number-done">{completed}</span>
               completed <span className="word-done">item{`${completed>1?'s':''}`}</span>
            </p>
            {/* <a href="#">
               Clear <span className="number-done">2</span>
               completed <span className="word-done">items</span>
            </a> */}
         </span>

      </div>
   }
}


export default TodoStats