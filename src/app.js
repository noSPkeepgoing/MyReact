import { render } from './react';

// 가상 돔을 만들어 보자!
// HTML 구조 : 태그이름, 속성, 자식
// 속성과 자식은 여러개가 가능 함 -> 객체 또는 배열 형식으로 지정
// 속성은 key-value 쌍으로 구성 -> 객체 사용
const vdom = {
  tag: 'p',
  props: {},
  children: [
    {
      tag: 'h1',
      props: { style: 'color:coral' },
      children: ['React 만들어보기'],
    },
    {
      tag: 'ul',
      props: {},
      children: [
        {
          tag: 'li',
          props: {},
          children: ['첫 번째 아이템'],
        },
        {
          tag: 'li',
          props: {},
          children: ['두 번째 아이템'],
        },
        {
          tag: 'li',
          props: {},
          children: ['세 번째 아이템'],
        },
      ],
    },
  ],
};

render(vdom, document.querySelector('#root'));
