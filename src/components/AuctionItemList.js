import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const AuctionItem = ({ item, onBid }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="body2">Current Bid: ${item.currentBid}</Typography>
        <Button variant="contained" onClick={() => onBid(item)}>
          Place Bid
        </Button>
      </CardContent>
    </Card>
  );
};

const AuctionItemList = ({ items, onBid }) => {
  return (
    <div>
      {items.map((item) => (
        <AuctionItem key={item.id} item={item} onBid={onBid} />
      ))}
    </div>
  );
};

export default AuctionItemList;
