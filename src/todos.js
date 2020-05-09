import React, { Component } from 'react';
import Li from './li'

class Todos extends Component {
   render() {
      let { data, changeTodo, destroy, editData} = this.props;
      return <div id="todos">
         <ul id="todo-list">
            {
               data.map((item) => {
                  return <Li key={item.id} data={item} changeTodo={changeTodo} destroy={destroy} editData={editData}/>
               })
            }
         </ul>
      </div>

   }
}


export default Todos