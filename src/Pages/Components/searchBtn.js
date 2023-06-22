import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

const SearchBtn = ({ localAddBtn }) => {
	return (
		<Wrap>
			<Glass onClick={localAddBtn} />
		</Wrap>
	);
};
export default SearchBtn;

const Wrap = styled.div`
	position: absolute;
	right: 20px;
	/* width: 60px; */
`;

const Glass = styled(BiSearch)`
	font-size: 30px;
	color: #b29df7;
	cursor: pointer;
`;
