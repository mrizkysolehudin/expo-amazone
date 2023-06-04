import { View, Image } from "react-native";
import React, { useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import {
	OrderData,
	WishListData,
	accountData,
	infoData,
} from "../dataDummy/ProfileData";
import ProfileInfoButton from "../components/ProfileInfoButton";
import ProfileInfoCard from "../components/ProfileInfoCard";

const ProfileScreen = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerTitle: "",
			headerLeft: () => (
				<Image
					source={require("../../assets/amazon.png")}
					style={{
						width: 90,
						height: 30,
						marginLeft: 20,
						marginTop: 10,
					}}
				/>
			),
			headerRight: () => (
				<View
					style={{
						flexDirection: "row",
						marginTop: 5,
						marginRight: 20,
					}}>
					<MaterialIcons
						name="notifications-none"
						size={26}
						style={{ marginRight: 20 }}
					/>
					<MaterialIcons name="search" size={26} />
				</View>
			),
			headerStyle: {
				backgroundColor: "rgba(5,250,242,0.4)",
				height: 100,
			},
		});
	}, []);

	return (
		<View>
			<LinearGradient colors={["rgba(5, 250, 242, 0.4)", "#fff"]}>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "center",
						marginBottom: 10,
					}}>
					{infoData.map((item, index) => (
						<ProfileInfoButton key={index} item={item} />
					))}
				</View>
			</LinearGradient>

			<ProfileInfoCard title="Your orders" data={OrderData} />

			<ProfileInfoCard title="Your Wishlist" data={WishListData} />

			<ProfileInfoCard
				title="Your Accounts"
				titleItem
				data={accountData}
			/>
		</View>
	);
};

export default ProfileScreen;
