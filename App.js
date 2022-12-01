import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 
import Task from "./src/pages/Task"
import NewTask from "./src/pages/NewTask"
import Details from "./src/pages/DeTails"

 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
          name="Tarefa"
          component={Task}
          options={{
            headerTintColor: "#F92E6A",
          }}
        />
        <Stack.Screen
          name="Adicionar Tarefa"
          component={NewTask}
          options={{
            headerTintColor: "#F92E6A",
          }}
          
        />
        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={{
            headerTintColor: "#F92E6A",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}