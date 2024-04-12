/** @jsx createElement */
import { render, createElement } from './react'; // 런타임 오류 발생하기 위해 createElement 포함

// 가상 돔을 만들어 보자!
// HTML 구조 : 태그이름, 속성, 자식
// 속성과 자식은 여러개가 가능 함 -> 객체 또는 배열 형식으로 지정
// 속성은 key-value 쌍으로 구성 -> 객체 사용

const vdom = (
  <p>
    <h1 style='color:tomato'>React 만들기!</h1>
    <ul>
      <li>첫 번째 아이템</li>
      <li>두 번째 아이템</li>
      <li>세 번째 아이템</li>
    </ul>
  </p>
);

render(vdom, document.querySelector('#root'));
