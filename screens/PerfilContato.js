import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import * as SMS from 'expo-sms';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilContato({ route }) {
  const { contato } = route.params;

  const ligar = () => {
    Linking.openURL(`tel:${contato.telefone}`);
  };

  const enviarSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      await SMS.sendSMSAsync([contato.telefone], `Olá ${contato.nome}!`);
    } else {
      Alert.alert('Ops!', 'Função de SMS não disponível neste dispositivo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos</Text>
      <Image source={contato.imagem} style={styles.avatar} />
      <Text style={styles.nome}>{contato.nome}</Text>
      <Text style={styles.cargo}>{contato.cargo}</Text>
      <Text style={styles.email}>{contato.email}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#0077ff' }]} onPress={ligar}>
          <Ionicons name="call" size={26} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#555' }]} onPress={enviarSMS}>
          <Ionicons name="chatbubble" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontFamily: 'Poppins_600SemiBold', fontSize: 20, marginBottom: 20, color: '#333' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  nome: { fontFamily: 'Poppins_600SemiBold', fontSize: 18, color: '#222' },
  cargo: { fontFamily: 'Poppins_400Regular', fontSize: 14, color: '#777' },
  email: { fontFamily: 'Poppins_400Regular', fontSize: 14, color: '#999', marginTop: 5 },
  buttons: { flexDirection: 'row', marginTop: 25 },
  botao: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
