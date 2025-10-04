import { Text, View, StyleSheet} from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import MyTitle from './components/my-title';
import MyContainer from './components/my-container';

export default function RemConfig() {
    const { phase } = useLocalSearchParams();
    
    return (
        <MyContainer content={
            <MyTitle text={`Configure REM ${phase}`}/>
        }/>
    );
}