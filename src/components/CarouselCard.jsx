import { View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { data } from "../dataDummy/CarouselData";
import { ViewPropTypes } from "deprecated-react-native-prop-types";

const CarouselCard = () => {
	return (
		<View>
			<SliderBox
				images={data}
				resizeMode="cover"
				autoplay={true}
				autoPlayInterval={100}
				sliderBoxHeight={220}
				dotColor="gray"
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 35,
					backgroundColor: "rgba(128,128,128,0.9)",
				}}
			/>
		</View>
	);
};

export default CarouselCard;
