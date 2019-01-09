import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './pages/login';
import TimeLine from './pages/timeLine';
import New from './pages/new';

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  TimeLine: { screen: TimeLine },
  New: { screen: New },
});

export default createAppContainer(AppNavigator);
