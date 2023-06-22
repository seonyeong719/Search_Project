import styled from 'styled-components';

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
		<S.ListWrap>
			<S.Wrap>
				{searchInput && (
					<>
						<S.Title>연관 검색어</S.Title>
						<S.Ul>
							{list.map((el, idx) => (
								<S.Li
									key={idx}
									style={{
										backgroundColor:
											idx === focusIdx
												? '#d9d9d9'
												: 'white',
									}}
								>
									{el.includes(searchInput) ? (
										<>
											{el.split(searchInput)[0]}
											<S.Span>{searchInput}</S.Span>
											{el.split(searchInput)[1]}
										</>
									) : (
										el
									)}
								</S.Li>
							))}
						</S.Ul>
					</>
				)}
			</S.Wrap>
		</S.ListWrap>
	);
};
export default SearchList;

const ListWrap = styled.div`
	border: none;
	background-color: white;
	border-radius: 10px;
`;

const Wrap = styled.div`
	margin: 10px;
	padding: 20px;
	min-height: 300px;
`;

const Title = styled.div`
	color: gray;
	font-size: 14px;
	font-weight: 700;
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	list-style: 0;
	padding: 0;
	margin-top: 20px;
`;

const Li = styled.li`
	background-color: blue;
	list-style: none;
	width: 100%;
	margin-bottom: 5px;
`;

const Span = styled.span`
	color: blue;
	font-weight: 700;
`;

const S = {
	ListWrap,
	Wrap,
	Title,
	Span,
	Ul,
	Li,
};
