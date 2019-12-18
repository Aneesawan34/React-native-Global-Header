import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  View,
  Image
} from "react-native";

import { Header, Left, Body, Right } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { FontColor, theme } from "./constant/theme";

export default class GlobalHeader extends Component {
  render() {
    return (
      //   <GlobalHeader
      //     backgroundColor={"transparent"}
      //     leftArrow={true}
      //     leftSetting={true}
      //     OneHeadingEnable = {true}
      //     HeadingText="Summary"
      //     elevation={4}
      // twoWords={2}
      //     leftArrowSmall={true}
      //     rightSearchAdd={false}
      //     TwoHeadingEnable = {true}
      //     order="order"
      //     name="name"
      // plusIcons = {true}
      //     rightThreeIcons = {true}
      //     deleteRight={true}
      //     navigation={this.props.navigation}
      //   />
      <Header
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : "transparent",
          elevation: this.props.elevation,
          height: 70
        }}
      >
        <Left
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "center",
            paddingLeft: 3
          }}
        >
          {this.props.leftArrow == true ? (
            <TouchableOpacity
              style={{}}
              onPress={() => this.props.navigation.goBack()}
            >
              <FontAwesome5
                name="chevron-left"
                style={{
                  color: theme.blue,
                  fontSize: 26,
                  marginLeft: 2,
                  marginTop: 10
                }}
              />
            </TouchableOpacity>
          ) : this.props.leftSetting == true ? (
            <TouchableOpacity>
              <FontAwesome
                name="gear"
                size={30}
                style={{ color: theme.blue }}
              />
            </TouchableOpacity>
          ) : this.props.leftArrowSmall == true ? (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <FontAwesome5
                name="chevron-left"
                style={{
                  color: theme.grayDark,
                  fontSize: 25,
                  marginLeft: 2,
                  marginTop: 0
                }}
              />
            </TouchableOpacity>
          ) : null}
        </Left>

        <Body
          style={
            this.props.twoWords === 1
              ? {
                  flex: 1.1,
                  justifyContent: "center",
                  // borderWidth: 1,

                  // backgroundColor: "red",
                  alignItems: "center"
                }
              : {
                  flex: 4,
                  // borderWidth: 1,
                  // justifyContent: "center",
                  alignItems: "center"
                }
          }
        >
          {this.props.OneHeadingEnable == true ? (
            <View>
              {this.props.HeadingText !== "" ? (
                <Text
                  style={{
                    color: FontColor.grayDark,
                    fontSize: 28,
                    textAlignVertical: "center",
                    textAlign: "center"
                  }}
                >
                  {this.props.HeadingText}{" "}
                </Text>
              ) : null}
            </View>
          ) : null}

          {this.props.TwoHeadingEnable == true ? (
            <View style={{ borderWidth: 0, left: 0 }}>
              {this.props.order !== "" ? (
                <Text
                  style={{
                    fontSize: 26,
                    color: FontColor.grayDark
                  }}
                >
                  {this.props.order}
                </Text>
              ) : null}
              {this.props.name !== "" ? (
                <Text
                  style={{
                    fontSize: 14,
                    color: FontColor.grayDark
                  }}
                >
                  {this.props.name}
                </Text>
              ) : null}
            </View>
          ) : null}
        </Body>

        <Right
          style={{
            borderWidth: 0,
            height: "100%",
            alignItems: "center",
            paddingRight: 5
          }}
        >
          {this.props.rightSearchAdd == true ? (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ borderWidth: 0, marginRight: 5 }}>
                <MaterialIcons
                  name="search"
                  size={30}
                  color={FontColor.grayDark}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ borderWidth: 0 }}>
                <MaterialIcons
                  name="add"
                  size={32}
                  color={FontColor.grayDark}
                />
              </TouchableOpacity>
            </View>
          ) : this.props.plusIcons == true ? (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ borderWidth: 0 }}>
                <MaterialIcons
                  name="add"
                  size={32}
                  color={FontColor.grayDark}
                />
              </TouchableOpacity>
            </View>
          ): this.props.rightThreeIcons == true ? (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ borderWidth: 0, marginRight: 5, marginTop: 5 }}
              >
                <Image
                  source={require("../../assets/icons/qr2.png")}
                  style={{ height: 20, width: 20, marginRight: 3 }}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ borderWidth: 0, marginRight: 2 }}>
                <MaterialIcons
                  name="search"
                  size={30}
                  color={FontColor.grayDark}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ borderWidth: 0 }}>
                <MaterialIcons
                  name="shopping-cart"
                  size={32}
                  color={FontColor.grayDark}
                />
                <View
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: FontColor.blue,
                    borderRadius: 10,
                    left: 10,
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: FontColor.white, fontSize: 12 }}>
                    4
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : this.props.deleteRight == true ? (
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/icons/delete.png")}
                style={{ height: 25, width: 25 }}
                resizeMode={"contain"}
              />
            </View>
          ) : null}
        </Right>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  avatarImage: {
    width: 20,
    height: 15
  }
});
