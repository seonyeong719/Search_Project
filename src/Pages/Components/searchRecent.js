import styled from "styled-components";

const SearchRecent = ({ locals }) => {
  return (
    <RecentWrap>
      <Title>최근 검색어</Title>
      <Ul>
        {locals &&
          locals.map((e, idx) => {
            return <Li key={idx}>{e}</Li>;
          })}
      </Ul>
    </RecentWrap>
  );
};
export default SearchRecent;

const RecentWrap = styled.div`
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  border: 1px solid black;
`;
const Li = styled.li`
  list-style: none;
  padding-left: 0;
  /* padding-top: 5px;
  text-align: start;
  padding: 0; */
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: 0;
  margin: 0;
  padding: 0;
`;

const Title = styled.div`
  /* text-align: ; */
`;
