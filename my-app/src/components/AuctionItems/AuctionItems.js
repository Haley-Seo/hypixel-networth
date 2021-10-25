import { useState, useEffect } from 'react';
// import nbt from 'prismarine-nbt';
// import nbt from 'nbt';
import NBT from 'mcnbt';

const extractAuctionItem = async (item) => {
  let itemBytes = item.item_bytes;
  let data = Buffer.from(itemBytes, 'base64');
  console.log(data);
  try {
    // const { parsed } = await nbt.parse(data);
    const parsed = new NBT();
    parsed.loadFromBuffer(data, function(err) {
      if(err) return console.error(err);
      const itemBytes = parsed.select('').select('Data').select('item_byptes');
      console.log(itemBytes);
  });
    

    console.log(parsed);
    return {
      name: item.item_name,
      id: parsed.value.i.value.value[0].id.value,
      extra: item.extra,
      bin: (item.bin? true: false),
      currentPrice: item.starting_bid,
    }
  } catch (error) { 
    console.log(error);
    return null;
  }
}

const AuctionItems = (props) => {
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    const fetchAuctionItems = async() => {
      const auctionRes = await fetch('https://api.hypixel.net/skyblock/auctions');
      const auctionJson = await auctionRes.json();
      const promises = auctionJson.auctions.map(item => extractAuctionItem(item));
      const newAuctionItems = await Promise.all(promises);
      
      setAuctionItems(newAuctionItems);
      // console.log(auctionItems);
    };
    
    fetchAuctionItems().catch((error) => console.log(error));
  },[]);

  return (
    <div><h1>
      Sample Auction Items!!</h1>
      <p>{auctionItems}</p></div>
  )
}

export default AuctionItems;



