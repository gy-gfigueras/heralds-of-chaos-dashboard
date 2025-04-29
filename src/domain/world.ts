export interface Place {
  identifier: string;
  name: string;
  description: string;
  image: string;
  inGame: boolean;
}

export interface World {
  identifier: string;
  name: string;
  description: string;
  image: string;
  detailedIcon: string;
  inGame?: boolean;
  places: Place[];
  mainColor: string;
}
