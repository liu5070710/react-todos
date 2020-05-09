import React, { Component } from 'react';

class Li extends Component {
   constructor(props){
      super(props);
      this.state = {
         done: false,
         editState: false,
         val:this.props.data.title
      }
   }
   
   componentDidUpdate(prevState){
      let {editState} = prevState;
      let nowState = this.state.editState;
      if(!editState && nowState){
         //如果更新前编辑状态为false 并且 当前编辑状态为true,则目前进入了编辑状态
         this.refs.todoInput.focus();
      }
   }
   render() {
      let { data, changeTodo, destroy, editData } = this.props;
      let { id, title, done } = data;
      let { editState,val} = this.state;
      return <li className={`${editState ? 'editing' : ''}`}>
         <div className={`todo ${done ? "done" : ""}`}>
            <div className="display">
               <input className="check"
                  type="checkbox"
                  checked={done}
                  onChange={(e) => {
                     this.setState({
                        done: !done
                     })

                     // setTimeout(()=>{
                     //    console.log(this.state.done);
                     // },1)

                     changeTodo(id, e.target.checked);
                  }}

               />

               <div className="todo-content"
                  onDoubleClick={() => {
                     console.log('双击了li');
                     this.setState({
                        editState: true
                     })
                  }}
               >{val}</div>
               <span className="todo-destroy" onClick={() => {
                  destroy(id);
               }}></span>
            </div>



            <div className="edit">
               <input className="todo-input"
                  type="text"
                  value={val}
                  ref={"todoInput"}
                  onChange={({target})=>{
                     this.setState({
                        val: target.value
                     })
                  }}
                  onBlur={() => {
                     if(!val.trim()){
                        this.setState({
                           val:title
                        })
                     }else{
                        editData(id,val)
                     }
                     
                     this.setState({
                        editState: false
                     })
                  }} />
            </div>
         </div>
      </li>


   }
}


export default Li 