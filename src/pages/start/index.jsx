import React from "react";
import { View } from "react-native";
import { ScrollView, StyleSheet } from "react-native-gesture-handler";

export default function Start() {

  return(
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image source={require("../../assets/icons/logo3.png")} style={styles.logo}/>
          <Text style={styles.description}>
            Vamos transformar sua vida {'/n'} em jogo, buscando {'/n'} sempre o melhor nivel.
          </Text>
        </View>
      </ScrollView>
    </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: 'rgba(21,21,21, 0.98)',
  },
  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBottom: 20,
  },
  description: {
    color: '#FFFFFF',
    fontSize: ''
  }
});