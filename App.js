
import {useKeepAwake} from 'expo-keep-awake'
import  AppState  from './src/AppState/AppState';

export default function App() {
    useKeepAwake();
    <AppState />
}


