import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Navigation from './src/navigation';

const App = () => (
	<SafeAreaProvider>
		<StatusBar barStyle={'light-content'} />
		<Navigation />
	</SafeAreaProvider>
);

export default App;
