import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const NavigatorCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>NavigatorCard</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default NavigatorCard;

const styles = StyleSheet.create({});
