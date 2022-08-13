import travelReducer, { manageProperty } from './travelSlice';

describe('travel reducer', () => {
  const initialState = {
    value: [
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
    ],
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(travelReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
      status: 'idle',
    });
  });
  it('should manage state', () => {
    expect(
      travelReducer(
        initialState,
        manageProperty({ id: 1479, key: 'tag', value: 'group' })
      )
    ).toEqual({
      value: [
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
          tag: 'group',
        },
      ],
      status: 'idle',
    });
  });
});
