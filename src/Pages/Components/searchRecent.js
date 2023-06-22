import styled from 'styled-components';

const SearchRecent = ({ locals }) => {
	return (
		<S.RecentWrap>
			<S.Wrap>
				<S.Title>최근 검색어</S.Title>
				<S.Ul>
					{locals &&
						locals.map((e, idx) => {
							return <S.Li key={idx}>{e}</S.Li>;
						})}
				</S.Ul>
			</S.Wrap>
		</S.RecentWrap>
	);
};
export default SearchRecent;

const RecentWrap = styled.div`
	border: none;
	background-color: white;
	border-radius: 10px;
	box-shadow: 2px 2px 5px 1px gray;
`;

const Wrap = styled.div`
	margin: 10px;
	padding: 20px;
	min-height: 300px;
`;

const Li = styled.li`
	list-style: none;
	width: 100%;
	margin-bottom: 5px;
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	list-style: 0;
	padding: 0;
	margin-top: 20px;
`;

const Title = styled.div`
	color: gray;
	font-size: 14px;
	font-weight: 700;
`;

const S = {
	RecentWrap,
	Wrap,
	Li,
	Ul,
	Title,
};
