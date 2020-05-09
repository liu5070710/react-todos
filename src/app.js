import React, {PureComponent } from 'react';
import Title from './title';
import Content from './content';

class App extends PureComponent {
   state = {
      data: [
         {
            id: 1,
            title: 'The first data',
            done: false
         }, {
            id: 2,
            title: 'The second data',
            done: true
         }, {
            id: 3,
            title: 'The third data',
            done: true
         }
      ]
   }

   //添加一条todo
   add = (value) => {
      let { data } = this.state;
      // let length = data.length;
      data.push({
         id: new Date().valueOf(),
         title: value,
         done: false
      });
      this.setState({
         data:[...data]
      })
      console.log(data);
      
   }
   //修改todo的状态
   changeTodo = (id, done) => {
      // console.log(!done);
      let { data } = this.state
      data.forEach(item => {
         if (item.id === id) {
            item.done = done;
         }
      })
      this.setState({
         data:[...data]
      })
   }

   //删除一条todo
   destroy = (id) => {
      let { data } = this.state;
      let newData = data.filter(item => item.id !== id)
      // data.splice(newData, 1)
      this.setState({
         data:newData
      })
   }
   //计算已完成的数量
   completedCount = (data) => {
      let completed = 0;
      data.forEach(item => {
         if (item.done === true) {
            completed++;
         }
      })
      return completed;
   }
   //计算未完成的数量
   uncompletedCount = (data) => {
      let uncompleted = 0;
      data.forEach(item => {
         if (item.done === false) {
            uncompleted++;
         }
      })
      return uncompleted;
   }
   //删除已完成的todos
   removeCompleted = () => {
      let { data } = this.state;
      let newData = [];
      data.forEach(item => {
         if (item.done === false) {
            newData.push(item)
         }
      })
      this.setState({
         data:[...newData]
      })
   }
   //编辑一条todo
   editData = (id,title)=>{
      let {data} = this.state;
      data.forEach(item=>{
         if(id === item.id){
            item.title = title;
         }
         this.setState({
            data:[...data]
         })
      })
   }

   render() {
      let { data } = this.state
      let completed = this.completedCount(data);
      let uncompleted = this.uncompletedCount(data);
      return <div id="todoapp">
         <Title />

         <Content data={data}
            add={this.add}
            changeTodo={this.changeTodo}
            destroy={this.destroy}
            completed={completed}
            uncompleted={uncompleted}
            removeCompleted={this.removeCompleted}
            editData={this.editData} />
      </div>
   }

}


export default App