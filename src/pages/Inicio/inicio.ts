import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";


export const styles = StyleSheet.create({
    topoImg:{
        height: vw(20),
        width: vw(80),
        alignSelf: 'center',
        marginTop: vw(8)
    },
    meioImg:{
        height: vw(60),
        width: vw(80),
        alignSelf: 'center',
        marginTop: vw(16)
    },
    content:{
        alignItems: 'center',
        marginTop: vw(8)
    },
    botoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: vw(10)
      },
      botao:{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: vw(4),
        height: vw(13),
        width: vw(38),
        backgroundColor: "#1429A6",
      },
    botaoText:{
        fontFamily: "ISemi",
        color: "white",
        fontSize: vw(6),
      },
      negocio: {
        alignItems: 'center',
        marginTop: vw(12)
      }
})