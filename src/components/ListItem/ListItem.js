import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        marginBottom: 5
    }
});

export default listItem;