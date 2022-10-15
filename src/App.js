/*
 * @Author: mjh
 * @Date: 2022-10-15 13:51:03
 * @LastEditors: mjh
 * @LastEditTime: 2022-10-15 14:09:59
 * @Description: 
 */
import './App.css';
import test from './components/test'
const msg = "<strong>你好，</strong>世界"
const list = ['vue', 'react', 'angular', 'jquery']
const str = '祝你开心'
const say = function () {
    alert("你好呀say")
}
const sayBind = function (str) {
    alert("你好" + str)
  }
 
function App() {
  return (<div>
      <p>{str}</p>
      <p dangerouslySetInnerHTML={{ __html: msg }}></p>
     <p>{1 + 1}</p>    {/*  {}里面可以写定义的变量，也可以写入js */}
      <p>{str.split('').reverse().join('')}</p>    {/*//逆序 */}
      <test></test>
      <div>
          {list.map((item, index) => <p key={index}>{item}</p>)}
      </div>
      <button onClick={() => { alert("你好呀!") }}>点我</button>
      <button onClick={say}>点我fun</button>
      <button onClick={sayBind.bind(this, '-bind')}>点我bind</button>
      <button onClick={() => sayBind('fun')}>点我func</button>
  </div>
  );
}

export default App;
