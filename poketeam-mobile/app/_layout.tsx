import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
              name="pokemon/[id]"
              options={{
                  title: 'Détail du Pokémon',
                  headerBackTitle: 'Retour',
                  presentation: 'card',
              }}
          />
      </Stack>
  );
}