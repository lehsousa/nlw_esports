import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, ButtonProps } from 'react-native';


function Button(props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>

  )
}

export default function App() {
  return (
    <View style={styles.container}>
    
<Button title="Sabia"/>
<Button title="Que eu Te amo"/>
<Button title="Muito"/>
<Button title="Vou fazer a janta"/>

      <StatusBar style="auto" />
    </View>
  );

  interface ButtonProps{
    title: string;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
 
});
