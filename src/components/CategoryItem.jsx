import { View, Text, Image } from "react-native";
import React from "react";

const CategoryItem = ({ img, text }) => {
	return (
		<View
			style={{
				alignItems: "center",
				paddingRight: 30,
			}}>
			<Image
				src={img}
				style={{
					width: 50,
					height: 50,
					borderRadius: 30,
					resizeMode: "cover",
				}}
			/>

			<Text style={{ fontSize: 12 }}>{text}</Text>
		</View>
	);
};

export default CategoryItem;
