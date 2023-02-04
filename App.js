import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Booking from "./Screens/Booking";

import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
   const [loaded] = useFonts({
     Poppins: require("./assets/fonts/Poppins.ttf"),
   });

   if (!loaded) {
     return null;
   }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="booking" component={Booking} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
