import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, FlatList, Image, ViewBase, TouchableOpacity } from 'react-native';


const Bai3 = () => {

    const [Visible, setVisible] = useState(false)
    const animaatedValueY = useRef(new Animated.Value(300)).current;
    const animationheight = useRef(new Animated.Value(50)).current;
    const animaatedOpacity = useRef(new Animated.Value(1)).current;

    const animation = () => {
        setVisible(!Visible)
    }

    useEffect(() => {
        Animated.timing(animaatedValueY, {
            toValue: 100,
            duration: 3500,
            useNativeDriver: false
        }).start();
        Animated.timing(animaatedOpacity, {
            toValue: 0,
            duration: 3500,
            useNativeDriver: false
        }).start();
        Animated.timing(animationheight, {
            toValue: 0,
            duration: 3500,
            useNativeDriver: false
        }).start();
    }, [animaatedValueY, animaatedOpacity, animationheight])

    return (
        <View style={{ flex: 1 }}>
            {Visible ?
                <Animated.View style={[styles.header, { height: animaatedValueY }]}>

                    <Animated.View style={[{ height: animationheight, opacity: animaatedOpacity }]}>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 5 }}
                            source={{
                                uri: 'https://i.pinimg.com/736x/3d/81/89/3d8189557136ab05b1d5d9e8d8664f54.jpg',
                            }}
                        />
                        <Text>sangldph42693</Text>
                    </Animated.View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ marginRight: 20, backgroundColor: 'green', padding: 7, borderRadius: 15 }}>Popular</Text>
                        <Text style={{ marginRight: 20, padding: 7 }}>Product Design</Text>
                        <Text style={{ marginRight: 20, padding: 7 }}>Development</Text>
                        <Text style={{ padding: 7 }}>Project File</Text>

                    </View>
                </Animated.View>
                : <View style={[styles.header]}>
                    <TouchableOpacity onPress={() => animation()}>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 5 }}
                            source={{
                                uri: 'https://i.pinimg.com/736x/3d/81/89/3d8189557136ab05b1d5d9e8d8664f54.jpg',
                            }}
                        />
                        <Text>sangldph42693</Text>
                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', marginTop: 40 }}>
                        <Text style={{ marginRight: 20, backgroundColor: 'green', padding: 7, borderRadius: 15 }}>Popular</Text>
                        <Text style={{ marginRight: 20, padding: 7 }}>Product Design</Text>
                        <Text style={{ marginRight: 20, padding: 7 }}>Development</Text>
                        <Text style={{ padding: 7 }}>Project File</Text>

                    </View>
                </View>}

            <FlatList
                data={Array.from({ length: 17 })}
                renderItem={({ item, index }) =>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', marginTop: 12,
                        padding: 23, backgroundColor: 'gray', marginHorizontal: 20, borderRadius: 15
                    }}>
                        <Text>Lab3 bài 3 Item {index}</Text>
                    </View>} />


        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 300,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 20
    },
    scrollViewContent: {
        paddingTop: 5,
        height: 750
    },
    listHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
    },
    item: {
        padding: 20,
        fontSize: 18,
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    fixedText: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'lightblue',
        fontSize: 16,
        paddingLeft: 20,
    },
});

export default Bai3;