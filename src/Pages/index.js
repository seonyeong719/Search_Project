import { useEffect, useState } from "react";
import SearchBtn from "./Components/searchBtn";
import useDebounce from "../Apis/debounceApi";
import SearchList from "./Components/searchList";
import { SearchApi } from "../Apis/api";
import styled from "styled-components";
import SearchRecent from "./Components/searchRecent";
let recentBtn = JSON.parse(localStorage.getItem("recent"));

const SearchListBox = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [locals, setLocals] = useState();
  const [focusIdx, setFocusIdx] = useState(-1);
  const debounce = useDebounce(searchInput); // searchInput 이 debounce의 밸류값.

  const getSearch = async (debounce) => {
    try {
      const res = await SearchApi(debounce);
      setList(res.data); //간단한게 말하면 api 통신할때 debounce로 따로 기능을 만들어준 친구를 매개변수로 꽂아줌(플러스 해줌).
    } catch (err) {}
  };

  useEffect(() => {
    // if (!list) return setList([]);
    if (!searchInput) return; // 인풋 값이 없으면 그냥 리턴하라. 그냥 여기서 끝냄(getSearch 통신 못하게 막아주는 조건문).
    getSearch(debounce);
  }, [debounce]);

  const searchPage = (e) => {
    setSearchInput(e.target.value);
  };

  // 로컬스토리지

  useEffect(() => {
    if (!localStorage.recent) {
      localStorage.setItem("recent", JSON.stringify([]));
    }
    setLocals(JSON.parse(localStorage.getItem("recent")));
  }, []);

  // 검색 클릭했을때
  const localAddBtn = () => {
    if (searchInput.trim().length === 0) return;
    recentBtn.unshift(searchInput);
    if (recentBtn.length > 5) recentBtn.pop();
    localStorage.setItem("recent", JSON.stringify(recentBtn));
    setLocals(JSON.parse(localStorage.getItem("recent")));

    // 동일검색어 최신으로 띄우기
    const sameInput = locals.find((el) => el === searchInput);
    if (sameInput) {
      const inputList = locals.filter((el) => el !== sameInput);
      inputList.unshift(sameInput);
      setLocals(inputList);
    }
    setFocusIdx(-1);
    setSearchInput("");
  };

  // keyPress 기능
  const onArrowKey = (e) => {
    if (!searchInput) return;
    if (e.nativeEvent.isComposing) return;
    if (e.key === "ArrowDown") {
      setFocusIdx((prev) => (prev + 1) % list.length);
    }

    if (e.key === "ArrowUp") {
      setFocusIdx((prev) => (prev - 1) % list.length);
      if (focusIdx === -1) {
        setFocusIdx(list.length - 1);
      }
    }

    if (e.key === "Enter") {
      if (searchInput.trim().length === 0) return;
      recentBtn.unshift(list[focusIdx]);
      if (recentBtn.length > 5) recentBtn.pop();
      localStorage.setItem("recent", JSON.stringify(recentBtn));
      setLocals(JSON.parse(localStorage.getItem("recent")));
      setFocusIdx(-1);
      setSearchInput("");
    }

    if (e.key === "Escape") {
      setFocusIdx(-1);
    }
  };

  return (
    <Wrap>
      <SearchWrap>
        <SearhBox
          placeholder="검색어를 입력하세요"
          value={list[focusIdx] ?? searchInput}
          onKeyDown={onArrowKey}
          onChange={searchPage}
        />
        <SearchBtn localAddBtn={localAddBtn} />
      </SearchWrap>
      <div>
        <SearchList focusIdx={focusIdx} searchInput={searchInput} list={list} />
        <SearchRecent locals={locals} />
      </div>
    </Wrap>
  );
};
export default SearchListBox;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SearhBox = styled.input`
  width: 30%;
  height: 40px;
`;

const SearchWrap = styled.div``;
