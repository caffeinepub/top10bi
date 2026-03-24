import { createContext, useContext, useState } from "react";

export const locations = [
  "All Locations",
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Miami",
  "Dallas",
  "Seattle",
  "Boston",
];

interface LocationContextType {
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
}

const LocationContext = createContext<LocationContextType>({
  selectedLocation: "All Locations",
  setSelectedLocation: () => {},
});

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
