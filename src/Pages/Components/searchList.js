const SearchList = ({ focusIdx, searchInput, list }) => {
  /*
  1. 인풋의 값과 연관검색어로 뜨는 리스트를 비교해야 한다.
  1-1. 문자열의 안에 인풋의 문자열과 동일한지 비교를 한다.
  2. 비교를 해서 동일한 값이 있다면, 동일한 값을 기준으로 나눠준다. 
  2-1. 동일한 값의 스타일을 하이라이트를 해준다. 
  3. 나눠진 값들을 다 합쳐준다.
  ****split 괄호안에 인자에는 어떤 값을 나눠줄지 넣어줘야 한다****
  */

  return (
    <>
      <div>연관 검색어</div>
      {searchInput && (
        <ul>
          {list.map((el, idx) => (
            <li key={idx} style={{ backgroundColor: idx === focusIdx ? "gray" : "white" }}>
              {el.includes(searchInput) ? (
                <>
                  {el.split(searchInput)[0]}
                  <span style={{ color: "blue" }}>{searchInput}</span>
                  {el.split(searchInput)[1]}
                </>
              ) : (
                el
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default SearchList;
