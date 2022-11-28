import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Start() {

  return(
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require('../../assets/icons/logo3.png')} />
          <Text>
            Vamos transformar sua vida {'/n'} em jogo, buscando {'/n'} sempre o melhor nivel.
          </Text>
        </View>
      </ScrollView>
    </View>
    
  )
}