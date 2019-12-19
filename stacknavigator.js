import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Table from './table';
import Table2 from './table2';

const AppNavigator = createStackNavigator(
    {
        Table:{
            screen:Table,
            navigationOptions:()=>({
                header:null
            })
        },
        Table2:{
            screen:Table2,
            navigationOptions:()=>({
                header:null
            })
        }
    },
    {
        initialRouteName:"Table2"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component{
    render(){
        return(
            <AppContainer />
        )
    }
}