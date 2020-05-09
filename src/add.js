import React, { PureComponent} from 'react';
class Add extends PureComponent {
   state = {
      val: ''
   }
   render() {
      let { add } = this.props;
      let { val } = this.state;
      return <div id="create-todo">
         <input id="new-todo"
            placeholder="What needs to be done?"
            type="text"
            value={val}  //M->V
            onChange={({ target }) => {
               this.setState({
                  val: target.value //V->M
               })
            }}
            onKeyUp={({ keyCode,target}) => {
               if (keyCode === 13) {
                  if (!val.trim()) {
                     alert('请输入内容')
                     target.focus();
                  } else {
                     add(val);
                     this.setState({
                        val: ''
                     })
                  }
                  
               }
            }}
         />
      </div>
   }
}
export default Add