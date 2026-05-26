import { Button } from "@react-navigation/elements";
import { Image, StyleSheet, Text, View } from "react-native";

var estilo = StyleSheet.create({
  copa: {
    maxWidth: 1200,
    maxHeight: 600
  }
})

export default function App() {
  return (
    <View>
      <h1>PALPITE</h1>
      <Image style={estilo.copa} source={require("@/imagens/copadomundo.png")} />
      <Text>Meu nome: Zé Brasil</Text>
      <hr></hr>
      <Text>A seleção campeã da copa do mundo será o Brasil pq ela tem as mesmas cores da bandeira do país</Text>
      <Button>Enviar</Button>
    </View>
  )
}