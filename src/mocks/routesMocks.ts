import { RouteStructure } from "../store/features/routes/types";

const routesMocks: RouteStructure[] = [
  {
    _id: "656d94b41c45e74e922975bc",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*IyAju_tGqm7eE7y5.jpg",
    name: "Le Morne Brabant",
    duration: 5,
    zone: "West",
    price: 70,
    numberOfStops: 2,
    description: "Aroute throgh the most important mountain of the island",
  },
  {
    _id: "656d94b41c45e74e922975bd",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/29/aa/ed.jpg",
    name: "Seven Colored Earth Geopark",
    duration: 5,
    zone: "East",
    price: 60,
    numberOfStops: 1,
    description: "Enjoy an unic place in the world that...",
  },
];

export default routesMocks;
