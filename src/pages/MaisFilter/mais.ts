import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  images: {
    marginTop: vw(4),
    marginBottom: vw(8),
    flexDirection: "column",
    width:vw(38),
    height: vw(40),
  },
  empresa: {
    flexDirection: "row",
    marginLeft: vw(4),
    marginBottom: vw(4),

  },
  text: {
    fontFamily: "IRegular",
    marginTop: vw(2),
    marginBottom: vw(2),
    alignSelf: "flex-start",
    fontSize: 18,
  },
  info: {
    alignSelf: "center",
    marginLeft: vw(4)
  },
  icon: {
    flexDirection: "row",
  },
  star:{
    alignItems: 'center',
    borderColor: '#BBB6B6',
    borderWidth: 1,
    paddingHorizontal: vw(4),
    borderRadius: 10,
    flexDirection: 'row',
    marginRight: vw(4)
  },
  img:{
    width:vw(38),
    height: vw(40),
    borderRadius: 10,
  }
});
