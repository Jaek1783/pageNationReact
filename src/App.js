import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import './App.css';

import Posts from './Posts';
import PageNation from './PageNation';
function App() {
    //API 저장 State
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    //페이지 index
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    //useRef 가상돔 잡기
    const numRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    //페이지네이션 배열
    const postsNumber = [];
    const pageCount = Math.ceil(posts.length / postsPerPage);
    for(let i=1; i<=pageCount; i++){
        postsNumber.push(i);
   } 
    //페이지네이션 그룹화
    const [pageActiveIdx, setPageActiveIdx] = useState(0);//현재 보고있는 페이지 그룹
    let maxPageNum = 3;//현재 보고 있는 페이지네이션 번호
    let totalPageCount = Math.ceil(pageCount/maxPageNum);

    //pageNation Group
    let startNum = pageActiveIdx* maxPageNum;
    let endNum = startNum + maxPageNum;
    let pageNationNumber = postsNumber.slice(startNum, endNum);

    //가짜 Json API 받아오기
useEffect(()=>{
    const fetchPosts = async ()=>{
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
    };
    fetchPosts();
},[]);

    //Get current Page
    const end = currentPage * postsPerPage;
    const start = end - postsPerPage;
    const currentPosts = posts.slice(start, end);

    //Change Page
    const PageNate = (pageNumber)=> {
        setCurrentPage(pageNumber);
        // let numberBtn = numRef.current.childNodes;
        // numberBtn.forEach(item=>{
        //     // item.classList.remove('active');
        //     // numberBtn[pageNumber-1].classList.add('active');
        //     console.log(item);
        // });
    };
    useEffect(()=>{
        if(pageActiveIdx === 0){
            leftRef.current.style.display="none";
        }
        else{
            leftRef.current.style.display="block";
        }
        if(pageActiveIdx === totalPageCount-1){
            rightRef.current.style.display="none";
        }
        else{
            rightRef.current.style.display="block";
        }
    },[currentPage]);
  return (
    <div className="App">
        <PageNation
            maxPageNum={maxPageNum}
            pageNationNumber={pageNationNumber}
            setPageActiveIdx={setPageActiveIdx}
            pageActiveIdx={pageActiveIdx}
            PageNate={PageNate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numRef={numRef}
            leftRef={leftRef}
            rightRef={rightRef}
            />
        <Posts posts = {currentPosts} loading={loading}/>
    </div>
  );
}

export default App;
