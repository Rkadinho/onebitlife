import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LifeStatus from "../../components/common/lifeStatus";
import DefaultButton from "../../components/common/defaultButton";

export default function Start() {
  const handleNavAppExplanation = () => {
    console.log('testando o clique')
  }

  return(
    <View style={styles.container}>
      <ScrollView style={styles.scroll}  showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center' }}>
          <Image source={require('../../assets/icons/logo3.png')} style={styles.logo}/>
          <LifeStatus />
          <Text style={styles.description}>
            Vamos transformar sua vida em jogo, buscando sempre o melhor nivel.
          </Text>
          <DefaultButton buttonText={"Continuar"}
            handlePress={handleNavAppExplanation}
            width={250}
            height={50}/>
        </View>
      </ScrollView>
    </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  logo: {
    width: 300,
    height: 50,
    marginTop: 100,
    marginBottom: 20,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60,
  },
});