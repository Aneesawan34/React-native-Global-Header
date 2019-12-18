import React, {} from 'react';
import RNPickerSelect from 'react-native-picker-select';

{
// render==>
    const placeholder = {
        label: 'Leave Category',
        value: null,
      };
}

{
    <RNPickerSelect
    useNativeAndroidPickerStyle={false}
    placeholder={placeholder}
    placeholderTextColor={'white'}
    // onValueChange={value => this.handleChange("category", value)}
    onValueChange={value => console.log(value)}
    Icon={() => {
      return (
        <Image
          source={require('../../assets/down-arrow.png')}
          style={{width: 12, height: 12}}
        />
      );
    }}
    style={Styles}
    items={[
      {
        label: 'Annual leave',
        value: 'Annual leave',
        color: 'White',
      },
      {
        label: 'Compassionate leave',
        value: 'Compassionate leave',
        color: 'White',
      },
      {
        label: 'Medical leave',
        value: 'Medical leave',
        color: 'White',
      },
    ]}
  />
}
{
 const styles = {
    inputIOS: {
        fontSize: 18,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: 'black',
        paddingRight: 30,
      },
      inputAndroid: {
        fontSize: 18,
        height: 45,
        paddingLeft: 15,
        color: 'black',
        alignContent: 'center',
        alignItems: 'center',
        // borderBottomWidth:1,
        // borderBottomColor:"green",
        // width:"100%",
        // justifyContent:"center"
      },
      iconContainer: {
        top: 20,
        // right: 5,
      },
 }   
}