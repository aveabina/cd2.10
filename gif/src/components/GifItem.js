import * as React from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getSingleGif } from "../services/GIFManagement";

function GifItem(props) {
  const [isHidden, setIsHidden] = React.useState(true);
  const [gifUri, setGIFUri] = React.useState(props.gifId);

  const handleSelect = async (id) => {
    try {
      setGIFUri(await getSingleGif(id));
    } catch (e) {
      console.error("Couldn't load gif", e);
    }
  };
  handleSelect(gifUri);

  return (
    <View style={styles.gifListItemContainer}>
      <View style={styles.gifListItemTextContainer}>
        <Text style={styles.gifListItemText}>{props.gifName}</Text>
        
      </View>
      {isHidden && <Image source={{ uri: gifUri }} style={{ height: 200 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  gifListItemContainer: {
    borderColor: "#bf4787",
    borderWidth: 10,
    backgroundColor:"#fddde6"
  },
  gifListItemTextContainer: {
    width: "100%",
    height: 100,
    
    padding: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  gifListItemText: {
    fontFamily: "sans-serif-thin",
    fontSize: 30,
    fontWeight: "bold",
    color:'#422b3a',
  },

});

export default GifItem;