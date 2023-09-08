import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    marginTop: vw(8),
    backgroundColor: "white",
    alignSelf: "center",
    height: vw(10),
    width: vw(80),
    borderRadius: vw(25),
  },
  iconsearch: {
    marginLeft: vw(4),
    marginRight: vw(6),
    alignSelf: "center",
  },
  searchtext: {
    fontFamily: "Inter_400Regular",
    width: vw(66),
  },
  carousel: {
    marginTop: vw(8),
  },
  categorias: {
    fontFamily: "Inter_500Medium",
    fontStyle: "italic",
    marginLeft: vw(4),
    fontSize: vw(5),
    marginTop: vw(8),
  },
  slider: {
    marginTop: vw(4),
  },
  empresas: {
    fontFamily: "Inter_500Medium",
    fontStyle: "italic",
    marginLeft: vw(4),
    fontSize: vw(5),
    marginTop: vw(8),
  },
  images: {
    marginTop: vw(4),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter_400Regular",
    marginTop: vw(2),
    marginBottom: vw(2),
    alignSelf: "center",
  },
  vermais: {
    alignSelf: "flex-end",
    marginTop: vw(1),
    marginRight: vw(2),
    fontFamily: "Inter_400Regular",
  },
  negociotext: {
    fontFamily: "Inter_500Medium",
    fontStyle: "italic",
    marginLeft: vw(2),
    marginTop: vw(6),
    marginBottom: vw(3),
  },
  negocioimg: {
    height: vw(40),
    width: vw(80),
    borderRadius: vw(3),
    alignSelf: "center",
    marginBottom: vw(3),
  },
  cadastrar: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: vw(4),
    height: vw(10),
    width: vw(50),
    backgroundColor: "#1429A6",
    marginBottom: vw(3),
  },
  cadastrartext: {
    fontFamily: "Inter_600SemiBold",
    color: "white",
    fontSize: vw(4),
  },
  modal: {
    marginLeft: vw(80),
    marginTop:vw(180),
    position: 'absolute'
  },
});
