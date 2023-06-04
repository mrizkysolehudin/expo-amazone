import { View, Text, Image } from "react-native";
import React from "react";

const DealCard = ({ data, title }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				flexWrap: "wrap",
			}}>
			<Text
				style={{
					fontSize: 16,
					fontWeight: 900,
					color: "black",
					marginTop: 10,
					marginLeft: 10,
					opacity: 0.8,
				}}>
				{title}
			</Text>

			{data.map((item, index) => (
				<View
					key={index}
					style={{
						alignItems: "center",
						margin: 13,
						marginTop: 10,
					}}>
					<Image
						src={item.img}
						style={{
							width: 160,
							height: 160,
							borderRadius: 3,
						}}
					/>
					<Text
						style={{
							width: 130,
							textAlign: "center",
							color: "gray",
							fontWeight: 700,
						}}>
						{item.text}
					</Text>
				</View>
			))}
		</View>
	);
};

export default DealCard;
