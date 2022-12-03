import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../../components/common/defaultButton";
import ExplanationCard from "../../components/explanation/explanationCard";
import ChangeNavigationService from "../../services/changeNavigationService";

export default function AppExplanation() {
  const navigation = useNavigation();

  const [showHome, setShowHome] = useState('false');
  const startDate = new Date();
  const month = `${startDate.getMonth() + 1}`.padStart(2, "0")
  const day = `${startDate.getDate()}`.padStart(2, "0")
  const appStartData = `${startDate.getFullYear()}-${month}-${day}`


  function handleNavHome() {
    navigation.navigate("Home");
  }

  function handleSetShowHome() {
    if (showHome !== "true") {
      ChangeNavigationService.setShowHome({ showHome: "true", appStartData })
        .then(() => console.log(`Sucesso! ${showHome} ${appStartData}`))
        .catch((err) => console.log(err));
      setShowHome("true");

      handleNavHome();
    }

    handleNavHome();
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
            width={250}
            height={50}
            handlePress={handleSetShowHome}
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