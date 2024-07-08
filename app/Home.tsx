import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.baner}>
                <ImageBackground style={{ alignItems: 'flex-end', width: '100%' }} source={require('../assets/icons/Group 26 (1).png')} >
                    <Image style={{ marginTop: 10 }} source={require('../assets/image (3).png')} />
                </ImageBackground>

            </View>
            <ScrollView style={styles.scrol}>
                <View style={{ paddingBottom: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: '700' }}>Subjects</Text>
                    <Text style={{ color: '#BCC1CD' }}>Recommendations for you</Text>

                </View>
                <ScrollView horizontal={true} >
                    <View style={{ marginRight: 20 }}>
                        <ImageBackground source={require('../assets/icons/Group 27.png')}
                            style={{ justifyContent: "space-between", width: 200, height: 160, borderRadius: 20, padding: 20 }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image source={require('../assets/icons/square-root-of-x-math-formula 1.png')}
                                    style={{ width: 30, height: 30 }} />
                                <Image source={require('../assets/icons/ellipsis-v 2.png')}
                                    style={{ width: 30, height: 30 }} />
                            </View>
                            <Text style={{ fontSize: 20, color: 'white' }}>Mathematics</Text>
                        </ImageBackground>
                    </View>

                    <View>
                        <ImageBackground source={require('../assets/icons/Group 28 (1).png')}
                            style={{ justifyContent: "space-between", width: 200, height: 160, borderRadius: 20, padding: 20 }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image source={require('../assets/icons/Group.png')}
                                    style={{ width: 30, height: 30 }} />
                                <Image source={require('../assets/icons/ellipsis-v 2.png')}
                                    style={{ width: 30, height: 30 }} />
                            </View>
                            <Text style={{ fontSize: 20, color: 'white' }}>Geography</Text>
                        </ImageBackground>
                    </View>

                </ScrollView>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Home

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#00664F',
        // height: '100%',
        width: "100%",
        // flexDirection: "column",
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end',
    },
    scrol: {
        backgroundColor: 'white',
        // flex: 2,

        // direction: "ltr",
        padding: 25,
        height: '60%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // width: "40%",
        // justifyContent: "flex-end",
        // flexDirection: "row"

    },
    baner: {
        height: '40%'

    }
})