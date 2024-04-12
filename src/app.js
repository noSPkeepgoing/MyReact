import { render, createElement } from './react';

// 가상 돔을 만들어 보자!
// HTML 구조 : 태그이름, 속성, 자식
// 속성과 자식은 여러개가 가능 함 -> 객체 또는 배열 형식으로 지정
// 속성은 key-value 쌍으로 구성 -> 객체 사용

const vdom = createElement(
  'p',
  {},
  createElement('h1', { style: 'color:coral' }, 'React 만들기!'),
  createElement(
    'ul',
    {},
    createElement('li', {}, '첫 번째 아이템'),
    createElement('li', {}, '두 번째 아이템'),
    createElement('li', {}, '세 번째 아이템')
  )
);

console.log(vdom);

render(vdom, document.querySelector('#root'));
