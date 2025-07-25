/* eslint-disable prettier/prettier */
// example interfaces that can be use
// TIP: the types mentioned in the interfaces must be fulfilled in order to solve the problem.
interface TemperatureReading {
  time: Date
  temperature: number
  city: string
}
interface TemperatureSummary {
  first: number
  last: number
  high: number
  low: number
  average: number
}


const example = [
  {
    time: new Date,
    temperature: 8,
    city: 'Utah',
  },
  {
    time: new Date('1/2/2021'),
    temperature: 10,
    city: 'Utah',
  },
  {
    time: new Date('1/2/2021'),
    temperature: 9,
    city: 'Utah',
  },
  {
    time: new Date('1/2/2021'),
    temperature: 12,
    city: 'Utah',
  },
  {
    time: new Date('1/2/2021'),
    temperature: 11,
    city: 'Utah',
  },
  {
    time: new Date('3/12/2021'),
    temperature: 15,
    city: 'New York',
  },
  {
    time: new Date('3/12/2021'),
    temperature: 10,
    city: 'New York',
  },
  {
    time: new Date('3/12/2021'),
    temperature: 11,
    city: 'New York',
  },
  {
    time: new Date('3/12/2021'),
    temperature: 9,
    city: 'New York',
  },
  {
    time: new Date('3/13/2021'),
    temperature: 16,
    city: 'New York',
  },
]


const temperatureMap: Map<string, Map<Date, TemperatureReading[]>> = new Map()


//This function will store the readings in a map, with city as the key
export function processReadings(readings: TemperatureReading[]): void {
  readings.forEach(temp => {
    const city = temp.city
    const dateString = temp.time.toString()
    //Checks if that city is already in the map
    if (!temperatureMap.has(city)){
      temperatureMap.set(city, new Map())
    } 

    //Checks if that time is already in the city's map
    //Use the '!' non null assertion
    const tempCity = temperatureMap.get(city)!
    if (!tempCity.has(temp.time)){
      tempCity.set(temp.time, [])
    } 

    tempCity.get(temp.time)!.push(temp)
  })
  
}

export function getTemperatureSummary(
  date: Date,
  city: string,
): TemperatureSummary | null {
  //add here your code
  return null
}
