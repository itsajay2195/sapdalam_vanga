import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const nav = createStackNavigator({
  // the key can be anything we want, can be search or anything
  Search: SearchScreen,
  ResultDetail: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});

const AppContainer =createAppContainer(nav)
export default AppContainer;

// the app.js is the speciall file in react native, whatever is exported in this page will be displayed first