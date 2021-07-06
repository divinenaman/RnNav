import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const tab1 = ({navigation}) => {
	return (
		<View className="container" style={styles.container}>
			<Text>TAB 1</Text>
			<Button
				style={styles.btn}
				className="btn"
				onPress={() => navigation.navigate('Settings')}
				title={'GO TO SETTINGS'}
			/>
		</View>
	);
};

const tab2 = ({navigation}) => {
	return (
		<View className="container" style={styles.container}>
			<Text>TAB 2</Text>
			<Button
				style={styles.btn}
				className="btn"
				onPress={() => navigation.navigate('Settings')}
				title={'GO TO SETTINGS'}
			/>
		</View>
	);
};

const tab3 = ({navigation}) => {
	return (
		<View className="container" style={styles.container}>
			<Text>TAB 3</Text>
			<Button
				style={styles.btn}
				className="btn"
				onPress={() => navigation.navigate('Settings')}
				title={'GO TO SETTINGS'}
			/>
		</View>
	);
};

const Home = ({navigation}) => {
	return (
		<BottomTab.Navigator initialRouteName="Tab1">
			<BottomTab.Screen name="Tab1" component={tab1} />
			<BottomTab.Screen name="Tab2" component={tab2} />
			<BottomTab.Screen name="Tab3" component={tab3} />
		</BottomTab.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	btn: {
		padding: 20,
		color: 'grey',
		backgroundColor: 'black',
	},
});

export default Home;
