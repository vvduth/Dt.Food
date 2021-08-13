//import { createStackNavigator, createAppContainer } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Bussiness Search'
    },
  }
);

export default createAppContainer(navigator);



//drawer navigator: like my portfolio.pop out a menu from left hand sign
//bottom navigator: in the bootom
//stack navigator: button or touch opacity (use in this project)