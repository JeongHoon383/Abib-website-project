# 아비브 화장품 판매 사이트

## 프로젝트 소개

* 아비브 화장품 판매 사이트 클론코딩 입니다.
* 제품을 조회, 검색, 카트에 담을 수 있습니다.
* 회원가입, 로그인이 가능하며 로그인시 리뷰, 제품 문의가 가능합니다.

## 개발 기간

23.12.27 ~ 24.01.15

## 멤버 구성

팀장 : 정훈 - 카트, 주문 페이지

팀원 : 성소아 - 관리자, 마이페이지

팀원 : 박지원 - 메인페이지, 마이페이지 

팀원 : 윤혁진 - 로그인, 회원가입, 카트

팀원 : 백지수 - 제품상세, 검색, 목록

## 개발 환경

* front : HTML, CSS, JavaScript, React, Tailwind CSS, redux-toolkit
* Back-end : Node.js, Express
* DB : MySQL

## ERD
<img width="450" alt="스크린샷 2024-08-01 오후 9 14 00" src="https://github.com/user-attachments/assets/ca5b56fc-ea6c-4c97-ad5e-38b89ded15db">

## 채택한 개발 기술과 브랜치 전략
- React
  - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
  - DOM을 가상화하여 메모리에 보관함으로써 DOM 변경을 최소화하고 스마트하게 최적화할 수 있습니다.<br/><br/>
- Tailwind-CSS
  - HTML 코드 안에 스타일 코드가 포함되어 있기 때문에 HTML과 CSS 파일을 별도로 관리할 필요가 없습니다.
  - Tailwind는 색상이나 간격, 사이즈 등등 다양한 유틸리티 클래스가 정해져있어 모든 곳에서 동일하게 사용이 가능해 일관된 스타일로 디자인을 구현하기가 더욱 쉽습니다.
  - Tailwind CSS는 다른 여러 프레임워크들과 비교해서 더욱 기본 스타일 값을 세세한 부분까지 쉽게 커스텀이 가능합니다.<br/><br/>
- Redux-toolkit
  - 기존 Redux의 많은 보일러 플레이트 코드를 toolkit으로 줄이고, 액션 타입, 액션 생성함수, 리듀서를 하나의 함수로 선언할 수 있습니다.<br/><br/>
- eslint, prettier
  - 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
  - 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.<br/><br/>
- 브랜치 전략
  - Git-flow 전략을 기반으로 main, develop 브랜치와 feature(페이지명) 보조 브랜치를 사용했습니다.
  - **main** 브랜치는 출시 가능한 프로덕션 코드를 모아두는 브랜치 입니다.
  - **develop** 브랜치는 다음 버전 개발을 위한 코드를 모아두는 브랜치 입니다. 개발이 완료되면, main 브랜치로 머지됩니다.
  - **Feature** 브랜치는 하나의 기능을 개발하기 위한 브랜치 입니다.

## 페이지별 기능
### [메인 화면]
  - 페이지 접속시 가장 먼저 보이는 화면 입니다.
  - 상품을 조회, 검색할 수 있으며 다크모드가 가능합니다.
<img width="250" alt="스크린샷 2024-08-01 오후 9 39 11" src="https://github.com/user-attachments/assets/5c9be72c-c2a0-4553-b5cf-07d2fc0f5804">
<img width="250" alt="스크린샷 2024-08-01 오후 9 39 56" src="https://github.com/user-attachments/assets/7cafcbd1-02f9-4dbf-b6c8-57be82589e0d">
<img width="250" alt="스크린샷 2024-08-01 오후 9 39 34" src="https://github.com/user-attachments/assets/88250e14-b78c-4b47-b439-24141af1c395">

### [회원가입, 로그인]
  - 회원 입력란에서 유효성 검사가 진행되고 조건에 만족하지 못한 경우 하단에 경고창이 표시됩니다.
  - 조건 만족시 경고창이 사라지며 모든 조건 만족시 하단 가입 완료 버튼을 클릭하면 회원 가입 완료창이 나타납니다.
  - 회원 가입한 아이디, 비밀번호로 로그인이 가능합니다.
  - SNS(네이버, 카카오톡) 소셜 로그인 기능은 구현되어 있지 않습니다.
<img width="400" alt="스크린샷 2024-08-01 오후 9 49 57" src="https://github.com/user-attachments/assets/3e370386-7037-432e-972f-cfbc32886610">
<img width="400" alt="스크린샷 2024-08-01 오후 9 52 46" src="https://github.com/user-attachments/assets/b23ef53a-32f2-4b71-874b-8b58fb953392">

### [제품 상세, 검색, 제품 목록]
  - 제품 상세페이지를 들어가면 제품 상세 내용, 리뷰를 작성할 수 있는 페이지를 볼 수 있습니다. 
  - 리뷰 작성하기를 누르면 리뷰를 작성할 수 있는 모달창이 나오고 별점, 내용을 작성하여 등록하면 리뷰란에 추가가 됩니다.
  - 상단 헤더부분에서 상품 검색이 가능하며 검색시 해당 내용에 맞는 제품 페이지가 나옵니다.
<img width="300" alt="스크린샷 2024-08-01 오후 9 55 55" src="https://github.com/user-attachments/assets/d2be53dc-8694-4e48-b938-cf0d313a38f9">
<img width="300" alt="스크린샷 2024-08-01 오후 9 56 33" src="https://github.com/user-attachments/assets/f2ce679e-14c6-40cd-9202-85d98a93625d">
<img width="300" alt="스크린샷 2024-08-01 오후 9 56 53" src="https://github.com/user-attachments/assets/c5f83f20-f34b-46d4-86a2-0002ae9a0178">

### [마이페이지]
  - 로그인 후 마이페이지를 들어가면 주문내역, 회원정보, 문의내역을 볼 수 있습니다. 
  - 주문 완료 후 주문 내역을 확인 할 수 있으며, 관리자에게 문의가 가능합니다. 
<img width="500" alt="스크린샷 2024-08-01 오후 10 11 29" src="https://github.com/user-attachments/assets/0a736c28-a0fe-4b8a-9ecf-fe72d44ebc03">
<img width="500" alt="스크린샷 2024-08-01 오후 10 09 55" src="https://github.com/user-attachments/assets/e6a10118-1eeb-494c-b314-8cbe35472fa1">

### [카트, 주문]
  - 제품을 카트에 담을 수 있으며, 카트 페이지에서 수량, 제품 삭제, 구매 기능이 가능합니다.
  - 주문 페이지에서는 주문자 내용 작성이 가능하며, 상품 확인 후 결제가 가능합니다. 
<img width="500" alt="스크린샷 2024-08-01 오후 10 17 38" src="https://github.com/user-attachments/assets/bbc073b5-2964-4a4a-91cd-08979de1851e">
<img width="500" alt="스크린샷 2024-08-01 오후 10 18 01" src="https://github.com/user-attachments/assets/95c3a001-1669-4283-8bd5-db4fe0ce5b5a">
