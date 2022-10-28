import React from "react";
import { Link } from "react-router-dom";
import left from './img/left.png';
import right from './img/right.png';
const PageNation = ({
        pageNationNumber,
        pageActiveIdx,
        setPageActiveIdx,
        maxPageNum,
        PageNate,
        numRef,
        leftRef,
        rightRef,
        currentPage,
        setCurrentPage,
    })=>{
    return(
        <div className="nav">
            <span className="arrow left" onClick={()=>{
                setPageActiveIdx(pageActiveIdx=>pageActiveIdx-1);
                setCurrentPage(pageActiveIdx*maxPageNum-maxPageNum+1);
            }} ref={leftRef}><img src={left} alt="이전버튼" /></span>
        <ol id="numbers" ref={numRef}>
            {pageNationNumber.map(pageNumber=> {
                return(
                    <li key={pageNumber} className={currentPage === pageNumber ? "active":""}> 
                        <Link to ="#" onClick={()=>{
                            PageNate(pageNumber);
                        }}>
                            {pageNumber}
                        </Link>

                    </li>
                )
            })}
        </ol>
        <span className="arrow right" onClick={()=>{
                            setPageActiveIdx(pageActiveIdx=>pageActiveIdx+1);
                            setCurrentPage(pageActiveIdx*maxPageNum+maxPageNum+1);
            }} ref={rightRef}><img src={right} alt="다음버튼" /></span>
    </div>
    )
};export default PageNation;