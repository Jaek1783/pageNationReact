### 리액트로 페이지네이션 구현하기
![image](https://github.com/Jaek1783/pageNationReact/assets/73649967/902831f2-51dc-452b-bd3f-5cd930bdce36)
* 코드주소 : https://codesandbox.io/s/relaxed-neumann-crdht9?file=/src/App.js
* 완성본 : https://crdht9.csb.app/
  
## 1. useState로 값 저장하기

### 페이지네이션 구현을 위한 state 값 저장하기 - useState Hook
* jsonholder 값 저장하기
  * const [posts, setPosts] = useState([]);
* 비동기 async awawit로 데이터를 받아올 때 생기는 에러 해결을 위한 값을 저장
  * const [loading, setLoading] = useState(false);


* 페이지네이션의 클릭한 페이지 값
  * const [currentPage, setCurrentPage] = useState(1);
  
* 한 페이지 당 가져올 목록 개수
  * const postsPerPage = 10;

* next, prev버튼 조작을 위한 state값 
  * const [pageActiveIdx, setPageActiveIdx] = useState(0);
* 페이지네이션 한 그룹 당 보여줄 페이지 번호
  * const maxPageNum = 5;
## 2. axios로 jsonholder 값 받아오기
* useEffect로 처음 값을 받아오기
* async, await 을 사용하여 비동기로 작동되는 axios.get을 구현
* 값을 posts로 저장

### 3. 배열내장합수 .slice()를 이용한 페이지네이션 구현

