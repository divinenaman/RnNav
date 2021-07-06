import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const options = ({navigation}) => {
	return (
		<View className="container" style={styles.container}>
			<Text>Options</Text>
			<Button
				style={styles.btn}
				className="btn"
				onPress={() => navigation.navigate('Stack1')}
				title={'GO TO STACK 1'}
			/>
			<Button
				style={styles.btn}
				className="btn"
				onPress={() => navigation.navigate('Stack2')}
				title={'GO TO STACK 2'}
			/>
		</View>
	);
};

const stack1 = ({navigation}) => {
	return (
		<View className="container" style={styles.container}>
			<Text>Stack 1</Text>
			<Button
				style={styles.btn}
				className="btn"
				onPress={() => navigation.navigate('Tab1')}
				title={'GO TO Tab1'}
			/>
		</View>
	);
};

const stack2 = ({navigation}) => {
	return (
		<View className="container" style={styles.container}>
			<Text>Stack 2</Text>
			<Button
				style={styles.btn}
				className="btn"
				onPress={() => navigation.navigate('Settings')}
				title={'GO TO SETTINGS'}
			/>
		</View>
	);
};

const Settings = ({navigation}) => {
	return (
		<Stack.Navigator initialRouteName="Options">
			<Stack.Screen name="Options" component={options} />
			<Stack.Screen name="Stack1" component={stack1} />
			<Stack.Screen name="Stack2" component={stack2} />
		</Stack.Navigator>
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

export default Settings;
