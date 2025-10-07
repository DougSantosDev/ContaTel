import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const contatos = [
  {
    id: '1',
    nome: 'Dave John',
    cargo: 'Diretor',
    email: 'davejohn@email.com',
    imagem: require('../assets/user1.jpg'),
    telefone: '11999999999',
  },
  {
    id: '2',
    nome: 'Kassie E. Holmes',
    cargo: 'Recursos Humanos',
    email: 'kassieholmes@email.com',
    imagem: require('../assets/user2.jpg'),
    telefone: '11888888888',
  },
  {
    id: '3',
    nome: 'Roger V. Scott',
    cargo: 'Vendas',
    email: 'rogerscott@email.com',
    imagem: require('../assets/user3.jpg'),
    telefone: '11777777777',
  },
];

export default function ListaContatos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos</Text>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Perfil', { contato: item })}>
            <Image source={item.imagem} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.cargo}>{item.cargo}</Text>
            </View>
            <View style={styles.icones}>
              <Ionicons name="call" size={24} color="#0077ff" />
              <Ionicons name="chatbubble" size={24} color="#555" style={{ marginLeft: 12 }} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
    marginBottom: 10,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 10,
  },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  info: { flex: 1, marginLeft: 10 },
  nome: { fontFamily: 'Poppins_600SemiBold', fontSize: 16, color: '#222' },
  cargo: { fontFamily: 'Poppins_400Regular', fontSize: 13, color: '#777' },
  icones: { flexDirection: 'row', alignItems: 'center' },
});
