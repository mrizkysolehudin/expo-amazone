import { Text, TouchableOpacity } from "react-native";
import React from "react";

const ProfileInfoButton = ({ item }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={{
				borderWidth: 2,
				width: 160,
				marginRight: 10,
				marginBottom: 5,
				borderColor: "gray",
				backgroundColor: "#ffa",
				borderRadius: 20,
			}}>
			<Text
				style={{
					textAlign: "center",
					paddingVertical: 8,
					fontWeight: 600,
				}}>
				{item.title}
			</Text>
		</TouchableOpacity>
	);
};

export default ProfileInfoButton;
