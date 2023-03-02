import styled from 'styled-components';

const FeaturesContainer = styled.div`
	background-color: #f9f9f9;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
`;

const FeaturesTitle = styled.h2`
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: #222;
`;

const FeaturesList = styled.ul`
	list-style: none;
	margin: 2rem 0;
	padding: 0;
`;

const FeatureItem = styled.li`
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	color: #555;
`;

const Features = () => {
	return (
		<FeaturesContainer>
			<FeaturesTitle>Wowly Features</FeaturesTitle>
			<FeaturesList>
				<FeatureItem>Book a surprise trip for you and your partner</FeatureItem>
				<FeatureItem>
					Choose from various trip themes and activities
				</FeatureItem>
				<FeatureItem>Customize your trip preferences</FeatureItem>
				<FeatureItem>Get a curated itinerary for your trip</FeatureItem>
				<FeatureItem>Surprise your partner with a unique adventure</FeatureItem>
			</FeaturesList>
		</FeaturesContainer>
	);
};

export default Features;
