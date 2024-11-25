import { Concert } from '../../lib/concert-data'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ConcertListProps {
  concerts: Concert[]
  city: string
}

export default function ConcertList({ concerts, city }: ConcertListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-900">Upcoming Concerts in {city}</h2>
      {concerts.length === 0 ? (
        <p className="text-gray-600">No upcoming concerts found for this city.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {concerts.map(concert => (
            <Card key={concert.id} className="overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                <CardTitle>{concert.artist}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-2">{new Date(concert.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="font-semibold text-gray-800">{concert.venue}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

