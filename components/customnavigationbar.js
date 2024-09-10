import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

export default function CustomNavigationBar({ navigation, route, options, back }) {
    const title = getHeaderTitle(options, route.name);

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} />
            {route.name !== "Second" && <Ionicons
                style={styles.container}
                name="arrow-forward"
                size={24}
                color="black"
                onPress={() => navigation.navigate("Second")}
            />}
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
});