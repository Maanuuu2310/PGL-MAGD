import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Audio } from "expo-av";
import appColors from "../assets/styles/appColors";

interface RecordingLine {
  sound: any;
  duration: string;
  file: string;
}

export default function App() {
  const [recording, setRecording] = useState<any>();
  const [recordings, setRecordings] = useState<RecordingLine[]>([]);
  const [message, setMessage] = useState<string>("");
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

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
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
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

    if (isMounted.current) {
      setRecordings(updatedRecordings);
    }
  }

  function getDurationFormatted(millis: number) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
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
            onPress={() => recordingLine.sound.replayAsync()}
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
            {recording ? "Pausar Grabacion" : "Iniciar Grabacion"}
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

// import { Pressable, StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import appColors from "../assets/styles/appColors";

// const RecordingScreen = () => {
//   const [isRecording, setIsRecording] = useState(false);

//   const grabacion = () => {
//     setIsRecording(!isRecording);
//   };

//   return isRecording ? (
//     <View style={styles.container}>
//       <Pressable
//         accessibilityLabel="BotonLogin"
//         style={styles.boton}
//         onPress={grabacion}
//       >
//         <Text style={styles.loginText}>Iniciar Grabación</Text>
//       </Pressable>
//     </View>
//   ) : (
//     <View style={styles.container}>
//       <Pressable
//         accessibilityLabel="BotonLogin"
//         style={styles.boton}
//         onPress={grabacion}
//       >
//         <Text style={styles.loginText}>Parar Grabación</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default RecordingScreen;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "flex-start",
//     flexDirection: "row",
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: appColors.colorBotones,
//   },
//   boton: {
//     backgroundColor: appColors.colorFondo,
//     color: "white",
//     width: "50%",
//     height: "9%",
//     borderRadius: 20,
//     alignItems: "center",
//     paddingVertical: "5%",
//     marginVertical: "10%",
//     shadowColor: "#000",
//     shadowOpacity: 0.44,
//     shadowRadius: 10.32,
//     elevation: 16,
//   },

//   loginText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: appColors.colorTexto,
//   },

//   welcomeText: {
//     fontSize: 40,
//     color: appColors.colorTexto,
//     marginTop: "-20%",
//   },

//   usertext: {
//     fontSize: 35,
//     color: appColors.colorTexto,
//   },

//   image: {},
// });
