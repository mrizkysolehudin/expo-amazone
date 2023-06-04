import { View, Text } from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const DeliveryAddressCard = () => {
	return (
		<View
			style={{
				flexDirection: "row",
				paddingVertical: 10,
				paddingHorizontal: 12,
				backgroundColor: "rgba(155, 222, 225,0.7)",
			}}>
			<MaterialIcon name="location-pin" size={20} />
			<Text style={{ marginLeft: 5 }}>
				Deliver to Baraya Codes - Indonesia
			</Text>
			<MaterialIcon name="keyboard-arrow-down" size={20} />
		</View>
	);
};

export default DeliveryAddressCard;
