export interface RouteDataStructure {
  image: string;
  name: string;
  duration: number;
  zone: string;
  price: number;
  numberOfStops: number;
  description: string;
}

export interface RouteStructure extends RouteDataStructure {
  _id: string;
}

export interface RoutesStateStructure {
  routes: RouteDataStructure[];
}
