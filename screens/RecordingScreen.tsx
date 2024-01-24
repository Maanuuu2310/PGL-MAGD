import React, { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import appColors from "../assets/styles/appColors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "recordings";

interface RecordingLine {
  sound: any;
  duration: string;
  file: string;
}

export default function App() {
  const [recording, setRecording] = useState<any>();
  const [recordings, setRecordings] = useState<RecordingLine[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    loadRecordings();
  }, []);

  async function saveRecordings(records: RecordingLine[]) {
    try {
      const recordingsJson = JSON.stringify(records);
      await AsyncStorage.setItem(STORAGE_KEY, recordingsJson);
    } catch (error) {
      console.error("Error al guardar las grabaciones", error);
    }
  }

  const loadRecordings = async () => {
    try {
      console.log("cargando...");
      const recordingsJson = await AsyncStorage.getItem(STORAGE_KEY);
      console.log("cargado");
      if (recordingsJson) {
        const loadedRecordings: RecordingLine[] = JSON.parse(recordingsJson);
        setRecordings(loadedRecordings);
      }
    } catch (error) {
      console.error("Error al cargar las grabaciones", error);
    }
  };

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Por favor acepte los permisos totales al microfono");
      }
    } catch (err) {
      console.error("fallo al iniciar la grabación", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setRecordings(updatedRecordings);
    saveRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis: number) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function handleDeletePress(index: number) {
    const updatedRecordings = [...recordings];
    updatedRecordings.splice(index, 1);
    setRecordings(updatedRecordings);
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            Grabacion {index + 1} - {recordingLine.duration}
          </Text>
          <Pressable
            style={styles.botonPlay}
            onPress={() => recordingLine.sound.replayAsync()}
          >
            <Text style={styles.playText}>Play</Text>
          </Pressable>
          <Pressable
            style={styles.botonDelete}
            onPress={() => handleDeletePress(index)}
          >
            <Text style={styles.playText}>Delete</Text>
          </Pressable>
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerBoton}>
        <Text>{message}</Text>
        <Pressable
          style={styles.boton}
          onPress={recording ? stopRecording : startRecording}
        >
          <Text style={styles.loginText}>
            {" "}
            {recording ? "Pausar Grabacion 🛑 " : "Iniciar Grabacion 🗣️ "}
          </Text>
        </Pressable>
      </View>
      <ScrollView
        style={styles.ScrollViewStyle}
        showsVerticalScrollIndicator={false}
      >
        {getRecordingLines()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBoton: {
    width: "100%",
    alignItems: "center",
  },

  ScrollViewStyle: {
    width: "100%",
  },

  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 3,
  },

  playText: {
    fontSize: 18,
    color: "white",
    paddingVertical: 5,
  },

  botonPlay: {
    borderRadius: 10,
    width: "28%",
    height: "75%",
    paddingVertical: "2%",
    alignItems: "center",
    marginVertical: "2%",
    marginHorizontal: "1%",
    backgroundColor: appColors.colorBotonPlay,
  },

  botonDelete: {
    borderRadius: 10,
    width: "28%",
    height: "75%",
    paddingVertical: "2%",
    alignItems: "center",
    marginVertical: "2%",
    marginHorizontal: "1%",
    backgroundColor: appColors.coloorBotonDelete,
  },

  boton: {
    backgroundColor: appColors.colorFondo,
    color: "white",
    width: "50%",
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: "5%",
    marginVertical: "10%",
    shadowColor: "#000",
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  container: {
    flex: 1,
    backgroundColor: appColors.colorBotones,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
    margin: 16,
    color: appColors.colorTexto,
  },
});
