import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
	background: linear-gradient(to right, #8ac6d1, #57c3c3);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const HeroTitle = styled.h1`
	font-size: 3rem;
	margin-bottom: 1rem;
	color: #222;
`;

const HeroDescription = styled.p`
	font-size: 1.5rem;
	margin-bottom: 2rem;
	color: #555;
`;

const BookButton = styled.button`
	background-color: #222;
	color: #fff;
	padding: 1rem 2rem;
	font-size: 1.5rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.2s;
	text-decoration: none;

	&:hover {
		background-color: #8ac6d1;
	}
`;

const Home = () => {
	return (
		<HomeContainer>
			<HeroTitle>Discover Surprising Trips with Wowly</HeroTitle>
			<HeroDescription>
				Experience the excitement of booking a surprise trip with your
				significant other. Let Wowly plan your next adventure.
			</HeroDescription>
			<Link to='/pricing'>
				<BookButton>Book Your Trip</BookButton>
			</Link>
		</HomeContainer>
	);
};
export default Home;
