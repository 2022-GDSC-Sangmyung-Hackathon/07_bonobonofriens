import React, { useState } from "react";
import { View, Text, Button, Alert, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import DateTimePicker from "react-native-modal-datetime-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Select from "./Select";
import Selected from "./Selected";
const NativeStack = createNativeStackNavigator();

const Screen4 = ({ navigation: { navigate } }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  const [state, setState] = useState(false);
  const setState1 = () => {
    if (state === false) {
      setState8(false);
      setState7(false);
      setState6(false);
      setState5(false);
      setState4(false);
      setState3(false);
      setState2(false);
      setState(true);
    } else {
      setState(false);
    }
  };
  const [state2, setState2] = useState(false);
  const setState22 = () => {
    if (state2 === false) {
      setState8(false);
      setState7(false);
      setState6(false);
      setState5(false);
      setState4(false);
      setState3(false);
      setState2(true);
      setState(false);
    } else {
      setState2(false);
    }
  };
  const [state3, setState3] = useState(false);
  const setState33 = () => {
    if (state3 === false) {
      setState8(false);
      setState7(false);
      setState6(false);
      setState5(false);
      setState4(false);
      setState3(true);
      setState2(false);
      setState(false);
    } else {
      setState3(false);
    }
  };
  const [state4, setState4] = useState(false);
  const setState44 = () => {
    if (state4 === false) {
      setState8(false);
      setState7(false);
      setState6(false);
      setState5(false);
      setState4(true);
      setState3(false);
      setState2(false);
      setState(false);
    } else {
      setState4(false);
    }
  };
  const [state5, setState5] = useState(false);
  const setState55 = () => {
    if (state5 === false) {
      setState8(false);
      setState7(false);
      setState6(false);
      setState5(true);
      setState4(false);
      setState3(false);
      setState2(false);
      setState(false);
    } else {
      setState5(false);
    }
  };
  const [state6, setState6] = useState(false);
  const setState66 = () => {
    if (state6 === false) {
      setState8(false);
      setState7(false);
      setState6(true);
      setState5(false);
      setState4(false);
      setState3(false);
      setState2(false);
      setState(false);
    } else {
      setState6(false);
    }
  };
  const [state7, setState7] = useState(false);
  const setState77 = () => {
    if (state7 === false) {
      setState8(false);
      setState7(true);
      setState6(false);
      setState5(false);
      setState4(false);
      setState3(false);
      setState2(false);
      setState(false);
    } else {
      setState7(false);
    }
  };
  const [state8, setState8] = useState(false);
  const setState88 = () => {
    if (state8 === false) {
      setState8(true);
      setState7(false);
      setState6(false);
      setState5(false);
      setState4(false);
      setState3(false);
      setState2(false);
      setState(false);
    } else {
      setState8(false);
    }
  };
  return (
    <Container>
      <SliderContainer>
        <View style={{ width: 155, height: 569 }}>
          <Slider1>
            <TouchableOpacity onPress={setState1}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  ????????????
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState22}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state2 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state2 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  ????????????
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState33}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state3 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state3 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  ?????????
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState44}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state4 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state4 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  ????????????
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState55}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state5 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state5 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  ????????????
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState66}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state6 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state6 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  ????????????
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState77}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state7 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state7 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  ????????????
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState88}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state8 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state8 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  ?????????
                </Text>
              </View>
            </TouchableOpacity>
          </Slider1>
        </View>

        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            display: "flex",
          }}
        >
          <View style={{ display: state8 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state7 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>??????3</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state6 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state5 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state4 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state3 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>????????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>????????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigate("Select2", { screen: "Select2" })}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>????????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>?????????</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ display: state2 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity
                onPress={() => navigate("Select1", { screen: "Select1" })}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </SliderContainer>
    </Container>
  );
};
export default Screen4;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const Date = styled.View`
  background-color: white;
  width: 184px;
  height: 42px;
  margin-top: 128px;
  margin-left: 156px;
  margin-right: 20px;
  border: 1px;
  border-color: #ededed;
  justify-content: center;
  align-items: center;
`;
const SliderContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const Slider1 = styled.ScrollView`
  background-color: #f8f8fa;
`;
const Slider2 = styled.View`
  flex: 1;
  background-color: black;
  height: 100%;
`;
const TestText = styled.Text`
  color: #ebebec;
  font-weight: 900;
  font-size: 18px;
`;

const Btn1 = styled.View`
  height: 55px;
  justify-content: center;
  align-items: center;
`;

const Detail = styled.View`
  background-color: #0000ff;
  flex: 1;
  display: style;
`;
