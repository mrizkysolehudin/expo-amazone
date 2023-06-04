import {
	View,
	Text,
	ScrollView,
	Image,
	Touchable,
	TouchableOpacity,
} from "react-native";
import React from "react";

const ProfileInfoCard = ({ title, data, titleItem }) => {
	return (
		<View
			style={{
				paddingLeft: 10,
				marginTop: 14,
				borderBottomColor: "lightgray",
				borderBottomWidth: 1,
				paddingBottom: 20,
			}}>
			<Text style={{ fontSize: 22, fontWeight: 900 }}>{title}</Text>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{ flexDirection: "row", marginTop: 10 }}>
				{data.map((item, index) =>
					titleItem ? (
						<TouchableOpacity
							activeOpacity={0.7}
							style={{
								borderWidth: 1,
								borderColor: "gray",
								borderRadius: 7,
								paddingVertical: 10,
								paddingHorizontal: 4,
								marginRight: 20,
								width: 130,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Text style={{ fontWeight: 600, color: "gray" }}>
								{item.title}
							</Text>
						</TouchableOpacity>
					) : (
						<Image
							key={index}
							src={item.image}
							style={{
								width: 180,
								height: 120,
								resizeMode: "contain",
								marginRight: 10,
								borderWidth: 2,
								borderColor: "lightgray",
								borderRadius: 6,
							}}
						/>
					)
				)}
			</ScrollView>
		</View>
	);
};

export default ProfileInfoCard;
