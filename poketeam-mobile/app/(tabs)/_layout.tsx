
import { Tabs } from 'expo-router';
import {FolderGit2, Home, Info, Search, Star} from "lucide-react-native";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'yellow' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Accueil',
                    tabBarIcon: ({ color }) => <Home size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="rechercher"
                options={{
                    title: 'Rechercher',
                    tabBarIcon: ({ color }) => <Search size={28} color={color}/>
                }}
            />
            <Tabs.Screen
                name="equipe"
                options={{
                    title: 'Equipe',
                    tabBarIcon: ({ color }) => <Star size={28} color={color} />,
                }}
            />
        </Tabs>
    );
}