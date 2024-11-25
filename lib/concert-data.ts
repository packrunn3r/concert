export interface Concert {
  id: string;
  artist: string;
  date: string;
  venue: string;
  city: string;
}

export const concerts: Concert[] = [
  {
    id: '1',
    artist: 'Taylor Swift',
    date: '2023-08-15',
    venue: 'Madison Square Garden',
    city: 'New York',
  },
  {
    id: '2',
    artist: 'Ed Sheeran',
    date: '2023-09-02',
    venue: 'Wembley Stadium',
    city: 'London',
  },
  {
    id: '3',
    artist: 'Beyoncé',
    date: '2023-07-20',
    venue: 'Staples Center',
    city: 'Los Angeles',
  },
  {
    id: '4',
    artist: 'BTS',
    date: '2023-10-10',
    venue: 'Tokyo Dome',
    city: 'Tokyo',
  },
  {
    id: '5',
    artist: 'Adele',
    date: '2023-11-05',
    venue: 'Sydney Opera House',
    city: 'Sydney',
  },
];

export const cities = Array.from(new Set(concerts.map(concert => concert.city)));

