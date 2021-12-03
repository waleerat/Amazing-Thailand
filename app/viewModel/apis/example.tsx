/*
src/screens/user.js
import React from 'react';
import { Text, View } from 'react-native';
const UserScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>User Details</Text>
        </View>
    );
};
UserScreen.navigationOptions = {
    title: 'User Details'
};
export default UserScreen;

*********************
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import User from './User';
const Users = props => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);
    return(
        <View style={{ padding: 20 }}>
            {isLoading ? <Text>Loading...</Text> :
            (
                <FlatList
                    data={users}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => <Text>{item.name}  </Text>}
                />
            )}
        </View>
    );
};
export default Users;

********************
/components/User.js
import React from 'react';
import { Text, ScrollView } from 'react-native';
const User = props => {
    return (
        <ScrollView>
            <Text  style={{padding: 10 }}>{props.user.name}</Text>
        </ScrollView>
    );
};
export default User;

***************


import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
const UserScreen = props => {
    const id = props.navigation.getParam('id');
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [userAddress, setUserAddress] = useState([]);
    const [userCompany, setUserCompany] = useState([]);
    getUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
          .then((response) => response.json())
          .then((json) => {
              setUser(json);
              console.log(json);
              setUserAddress(json.address);
              setUserCompany(json.company);
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        console.log(id)
        setLoading(true);
        getUser();
    }, []);
    return (
        
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? <Text>Loading...</Text> : 
            (
                <View>
                    <Text style={{ alignItems: 'center', fontSize: 25 }}>{user.name}</Text>
                    <Text>Phone: {user.phone}</Text>
                    <Text>Website: {user.website}</Text>
                    <Text>Company: {userCompany.name} </Text>
                    <Text>Address: {userAddress.street}, {userAddress.suite}, </Text>
                    <Text>{userAddress.city}, {userAddress.zipcode}  </Text>
                </View>
            )}
        </View>
);
};
UserScreen.navigationOptions = {
    title: 'User Details'
};
export default UserScreen;


*/