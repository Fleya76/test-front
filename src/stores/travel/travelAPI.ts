import { TravelObject } from '../../constants/types';

export interface TravelRequest {
  data: TravelObject[];
}

// A mock function to mimic making an async request for data
export function fetchTrips(filter: string): Promise<TravelRequest> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          // @ts-ignore
          data: [
            {
              id: 1479,
              picture:
                'https://static1.evcdn.net/images/reduction/1103742_w-1000_h-625_q-60_m-crop.jpg',
              destination: {
                id: 48,
                name: 'Inde',
              },
              title: 'Taj Mahal, palais, tigres et dunes',
              price: 1410,
              duration: 15,
              highlight: true,
              tag: 'combined',
            },
            {
              id: 15318,
              picture:
                'https://static1.evcdn.net/images/reduction/712229_w-1000_h-625_q-60_m-crop.jpg',
              destination: {
                id: 80,
                name: 'Sri Lanka',
              },
              title: 'Bouddhas et pierres de lune',
              price: 1070,
              duration: 12,
              highlight: false,
              tag: 'group',
            },
            {
              id: 11501,
              picture:
                'https://static1.evcdn.net/images/reduction/1316162_w-1000_h-625_q-60_m-crop.jpg',
              destination: {
                id: 10,
                name: 'Italie',
              },
              title:
                'Naples, de la Côte Amalfitaine à la Péninsule de Sorrente',
              price: 610,
              duration: 8,
              highlight: false,
            },
            {
              id: 13885,
              picture:
                'https://static1.evcdn.net/images/reduction/1590440_w-1000_h-625_q-60_m-crop.jpg',
              destination: {
                id: 46,
                name: 'Islande',
              },
              title:
                'Aurores boréales et icebergs - Les essentiels de la côte sud en hiver',
              price: 1030,
              duration: 8,
              highlight: true,
            },
            {
              id: 9743,
              picture:
                'https://static1.evcdn.net/images/reduction/1506414_w-1000_h-625_q-60_m-crop.jpg',
              destination: {
                id: 90,
                name: 'Tanzanie',
              },
              title: 'Incontournables de la Tanzanie en petit groupe',
              price: 1840,
              duration: 7,
              highlight: false,
              tag: 'group',
            },
            {
              id: 13811,
              picture:
                'https://static1.evcdn.net/images/reduction/1534002_w-1000_h-625_q-60_m-crop.jpg',
              destination: {
                id: 46,
                name: 'Islande',
              },
              title:
                'Un grand week-end à Reykjavik à la recherche des aurores boréales',
              price: 570,
              duration: 5,
              highlight: false,
              tag: 'combined',
            },
            {
              id: 2577,
              picture:
                'https://static1.evcdn.net/images/reduction/391763_w-1000_h-625_q-60_m-crop.jpg',
              destination: {
                id: 46,
                name: 'Islande',
              },
              title: "Les plus somptueux sites d'Islande, l'été",
              price: 2200,
              duration: 15,
              highlight: false,
            },
          ].filter((element) => (filter ? element.tag === filter : element)),
        }),
      100
    )
  );
}
