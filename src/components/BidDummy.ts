export type BidRow = {
  id: number;
  item: {
    image: string;
    title: string;
    author: string;
  };
  openPrice: string;
  yourOffer: string;
  recentOffer: {
    image: string;
    price: string;
  };
  timeLeft: string;
  action: string;
};
