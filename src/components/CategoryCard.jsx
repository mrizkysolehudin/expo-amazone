import React from "react";
import CategoryItem from "./CategoryItem";
import { categoryData } from "../dataDummy/CarouselData";
import { ScrollView } from "react-native";

const CategoryCard = () => {
	return (
		<ScrollView
			style={{
				paddingLeft: 25,
				paddingVertical: 20,
				backgroundColor: "white",
			}}
			horizontal={true}
			showsHorizontalScrollIndicator={false}>
			{categoryData.map((item, index) => (
				<CategoryItem key={index} img={item.img} text={item.text} />
			))}
		</ScrollView>
	);
};

export default CategoryCard;
