'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cities, concerts } from '../lib/concert-data'
import ConcertList from '../components/ui/concert-list'

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string | undefined>(undefined)

  const filteredConcerts = selectedCity
    ? concerts.filter(concert => concert.city === selectedCity)
    : []

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">Concert Finder</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Your City</h2>
          <Select onValueChange={(value: string) => setSelectedCity(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map(city => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {selectedCity && (
          <ConcertList concerts={filteredConcerts} city={selectedCity} />
        )}
      </div>
    </main>
  )
}

