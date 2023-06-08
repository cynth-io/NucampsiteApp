import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { View } from 'react-native-animatable';

const DirectoryScreen = ({ navigation }) => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const renderDirectoryItem = ({ item: campsite }) => {
        //console.log()
        return (
            <ListItem
                onPress={() =>
                    navigation.navigate('CampsiteInfo', { campsite })
                }
            >
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    //screen view render below - what is to be returned//
    return (
        <View>
            <Text> A Title</Text>
            <FlatList
                data={campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default DirectoryScreen;