import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      {/*Tarefas do dia*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tarefas do dia</Text>
        {/*Aqui é onde as tarefas irão ser criadas*/}
        <View style={styles.items}>
          <Task text={'Tarefa 1'} />
          <Task text={'Tarefa 2'} />
        </View>
      </View>

      {/*Escrever as tarefas*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Escreva uma tarefa"} />

        <TouchableOpacity>
          <View style={styles.addWrapper}></View>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  input: {
    paddingVertical: 15,
    width: 250,
  },
  addWrapper: {},
  addText: {},
});
