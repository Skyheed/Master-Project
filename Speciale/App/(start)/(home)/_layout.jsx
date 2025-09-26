import { Stack } from "expo-router"

export default function Layout() {
    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false}} />
                <Stack.Screen name="homeStor" options={{ headerShown: false}} />
                <Stack.Screen name="homeLille" options={{ headerShown: false}} />
                <Stack.Screen name="search" options={{ headerShown: false}} />
                <Stack.Screen name="(type)" options={{ headerShown: false}} />
                <Stack.Screen name="(info)" options={{ headerShown: false}} />
            </Stack>
        </>
    )
}