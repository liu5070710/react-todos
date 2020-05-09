import React, { Component } from 'react';
import Add from './add';
import Todos from './todos';
import TodoStats from './todoStats'

class Content extends Component {
   render() {
      let {data,add,changeTodo,destroy,completed,uncompleted,removeCompleted,editData} = this.props
      
      return <div className="Content">
         <Add add={add} />
         <Todos data={data} changeTodo={changeTodo} destroy={destroy} editData={editData}/>
         <TodoStats  completed={completed} uncompleted={uncompleted} removeCompleted={removeCompleted}/>
      </div>
   }
}


export default Content