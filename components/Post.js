import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Button } from "react-native-paper";

const Post = () => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'jfowjfew ',email: 'fjso@gmail.com', passport: '89890', avatar: 'storage/avatar/image',phone: '0000', address: 'jfskjfewoi',company: 'fds', position: 'jfeow', purpose: 'j', visit: 'jwe', nrc: 'hfewoihfewo',nationality: 'fdjsks', country: 'jfd', gender: 'jifewo' })
    };

    const postExample = async () => {
        try {
            await fetch(
                'https://unityitsolutionprovider.com/registration_dash/public/api/visitors', requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            Alert.alert("Post created at : ",
                                data.createdAt);
                        });
                })
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.btn}>
            <Button type="submit" mode="contained" onPress={postExample} >
                Click to make a Post request</Button>
        </View>
    )

}

export default Post;

const styles = StyleSheet.create({
    btn: {
        marginTop: 60,
        marginLeft: 30,
        marginRight: 30
    }
})