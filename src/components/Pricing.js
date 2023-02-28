import styled from 'styled-components';

const PricingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
`;

const PricingTitle = styled.h2`
	font-size: 2rem;
	color: #222;
	margin-bottom: 1rem;
`;

const PricingCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	padding: 2rem;
	margin-bottom: 2rem;
	max-width: 300px;
`;

const PricingPlan = styled.h3`
	font-size: 1.5rem;
	color: #222;
	margin-bottom: 1rem;
`;

const PricingPrice = styled.p`
	font-size: 1.2rem;
	color: #555;
	margin-bottom: 1rem;
`;

const PricingFeatureList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const PricingFeature = styled.li`
	font-size: 1rem;
	color: #555;
	margin-bottom: 0.5rem;
`;

const PricingButton = styled.button`
	background-color: #222;
	color: #fff;
	padding: 1rem 2rem;
	font-size: 1.2rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.2s;
	text-decoration: none;
	margin-top: 1rem;

	&:hover {
		background-color: #8ac6d1;
	}
`;

const Pricing = () => {
	return (
		<PricingContainer>
			<PricingTitle>Pricing</PricingTitle>
			<PricingCard>
				<PricingPlan>Basic Plan</PricingPlan>
				<PricingPrice>$99.99/month</PricingPrice>
				<PricingFeatureList>
					<PricingFeature>5 surprise trips per year</PricingFeature>
					<PricingFeature>Domestic flights only</PricingFeature>
					<PricingFeature>Accommodation included</PricingFeature>
				</PricingFeatureList>
				<PricingButton>Sign Up</PricingButton>
			</PricingCard>
			<PricingCard>
				<PricingPlan>Premium Plan</PricingPlan>
				<PricingPrice>$199.99/month</PricingPrice>
				<PricingFeatureList>
					<PricingFeature>10 surprise trips per year</PricingFeature>
					<PricingFeature>International flights</PricingFeature>
					<PricingFeature>Accommodation included</PricingFeature>
					<PricingFeature>Private tours</PricingFeature>
				</PricingFeatureList>
				<PricingButton>Sign Up</PricingButton>
			</PricingCard>
		</PricingContainer>
	);
};

export default Pricing;
