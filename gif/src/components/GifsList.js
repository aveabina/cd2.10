import * as React from 'react';
import { FlatList } from "react-native";
import { addMultipleGifs, deleteAllGifs } from "../services/GIFManagement";
import GifItem from "./GifItem";

function GifsList() {
  React.useEffect(() => {
    (async () => {
      await addMultipleGifs(ids);
    })();

    return () => {
      deleteAllGifs();
    };
  }, []);

  const renderItem = (item) => {
    return <GifItem gifId={item.item.gifId} gifName={item.item.gifName} color={item.item.color} />;
  };

  const keyExtractor = (item, index) => {
    item.gifId.toString();
  };
  return (
    <FlatList
      style={{}}
      data={GIFListData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      
    />
  );
}

const GIFListData = [
  { id: 0, gifId: "3nbxypT20Ulmo", gifName: "GIF 1", color:'#dbd2ce' },
  { id: 1, gifId: "MDJ9IbxxvDUQM", gifName: "GIF 2", color:'#d1c1ba' },
  { id: 2, gifId: "GwGXoeb0gm7sc", gifName: "GIF 3", color:'#ede8e6' },
  { id: 3, gifId: "q1MeAPDDMb43K", gifName: "GIF 4", color:'#9e928d'  },
  { id: 4, gifId: "GeimqsH0TLDt4tScGw", gifName: "GIF 5", color:'#f7ede9' }
];

const ids = GIFListData.map((item) => item.gifId);

export default GifsList;