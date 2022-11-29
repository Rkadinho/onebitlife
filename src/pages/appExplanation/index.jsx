import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../../components/common/defaultButton";
import ExplanationCard from "../../components/explanation/explanationCard";

export default function AppExplanation() {
  const navigation = useNavigation();

  function handleNavHome() {
    navigation.navigate("Home");
  }

  return(
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>Antes, deixa eu te explicar...</Text>
          <ExplanationCard />
          <Text style={styles.descriptionCta}>Pronto(a) para subir de nivel na vida?</Text>
          <Text style={styles.description}>Na próxima tela você vai poder escolher 
            seus 4 hábitos de forma individual
          </Text>
          <DefaultButton buttonText={'Continuar'}
            handlePress={handleNavHome}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21, 21, 21, 0.98)',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 40,
    marginTop: 85
  },
  descriptionCta: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20
  },
  description: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  }
})