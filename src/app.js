/** @jsx createElement */

import { render, createElement, Component } from './react'; // 런타임 오류 발생 방지하기 위해 createElement 포함

// 가상 돔을 만들어 보자!
// HTML 구조 : 태그이름, 속성, 자식
// 속성과 자식은 여러개가 가능 함 -> 객체 또는 배열 형식으로 지정
// 속성은 key-value 쌍으로 구성 -> 객체 사용

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>;
}

const App = () => (
  <p>
    <Title label='React'>React</Title>
    <ul>
      <Item color='red'>첫 번째 아이템</Item>
      <Item color='orange'>두 번째 아이템</Item>
      <Item color='yellow'>세 번째 아이템</Item>
    </ul>
  </p>
);

render(<App />, document.querySelector('#root'));
