import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import LifeStatus from "../../components/common/lifeStatus";
import CreateHabit from "../../components/home/createHabit/index,";
import EditHabit from "../../components/home/editHabit";
import StatusBar from "../../components/home/statusBar";
import ChangeNavigationService from "../../services/changeNavigationService";
import HabitsService from "../../services/habitService";

export default function Home({ route }) {
  const navigation = useNavigation();
  const [mindHabit, setMindHabit] = useState();
  const [moneyHabit, setMoneyHabit] = useState();
  const [bodyHabit, setBodyHabit] = useState();
  const [funHabit, setFunHabit] = useState();
  const [robotDaysLife, setRobotDaysLife] = useState();

  const today = new Date();

  function handleNavExplanation() {
    navigation.navigate("AppExplanation");
  }

  const excludeArea = route.params?.excludeArea;

  useEffect(() => {

    HabitsService.findByArea("Mente").then((mind) => {
      setMindHabit(mind[0]);
    });
    HabitsService.findByArea("Financeiro").then((money) => {
      setMoneyHabit(money[0]);
    });
    HabitsService.findByArea("Corpo").then((body) => {
      setBodyHabit(body[0]);
    });
    HabitsService.findByArea("Humor").then((fun) => {
      setFunHabit(fun[0]);
    });

    ChangeNavigationService.checkShowHome(1)
    .then((showHome) => {
      const formDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
      const checkDays =
        new Date(formDate) - new Date(showHome.appStartData) + 1;

	      setRobotDaysLife(checkDays.toString().padStart(2, "0"));
    })
      .catch((err) => console.log(err));
  }, [route.params]);

  if (excludeArea) {
    if (excludeArea == "Mente") {
      setMindHabit(null);
    }
    if (excludeArea == "Financeiro") {
      setMoneyHabit(null);
    }
    if (excludeArea == "Corpo") {
      setBodyHabit(null);
    }
    if (excludeArea == "Humor") {
      setFunHabit(null);
    }
  }

  return(
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.dailyChecks}>❤️ 20 dias - ✔️ 80 checks</Text>
          <LifeStatus />
          <StatusBar />
          {mindHabit ? (
            <EditHabit habit={mindHabit} checkColor="#90B7F3"/>) 
              : (<CreateHabit habitArea='Mente' borderColor='#90B7F3'/>)}
              
          {moneyHabit ? (
            <EditHabit habit={moneyHabit} checkColor="#85BB65"/>) 
              : (<CreateHabit habitArea='Financeiro' borderColor='#85BB65'/>)}

          {bodyHabit ? (
            <EditHabit habit={bodyHabit} checkColor="#FF0044" />) 
              : (<CreateHabit habitArea='Corpo' borderColor='#FF0044'/>)}

          {funHabit ? (
            <EditHabit habit={funHabit} checkColor="#FE7F23" />) 
              : (<CreateHabit habitArea='Humor' borderColor='#FE7F23'/>)}
              
        </View>
        <Text style={styles.explanationText}
          onPress={() => {handleNavExplanation();}}> Ver explicação novamente</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  dailyChecks: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 40,
  },
  explanationText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 25,
  },
});