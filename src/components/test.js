/*
 * @Author: mjh
 * @Date: 2022-10-15 14:08:53
 * @LastEditors: mjh
 * @LastEditTime: 2022-10-15 14:09:08
 * @Description: 
 */
// react 响应式数据state
// 导入React 和Component方法 imrc + TAB
import React, { Component } from 'react';
 
// 创建一个App类 基础了Component方法 ccc+Tab
class App extends Component {
  // 构造函数
  constructor(props) {
    // 执行父类方法
    super(props);
    // 响应式状态
    this.state = { num:1 }
  }
  addNum(n){
    this.setState({num:this.state.num+n})
  }
  // 渲染方法
  render() { 
    // 返回一个节点
    return (
    <div>
        <h1>函数类</h1>
        <button onClick={()=>{
            // 更新num值为原来的值＋1
            this.setState({num:this.state.num+1})
        }}>{this.state.num}</button>
        <button onClick={this.addNum.bind(this,2)}>{this.state.num}</button>
    </div>);
  }
}
 
export default App;
 
// 更新state状态 this.setState({key:value})
// 