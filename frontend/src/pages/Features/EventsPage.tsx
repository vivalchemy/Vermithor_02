import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/base components/Header";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchEvents = async ({ eventType, location }: { eventType?: string; location?: string }) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/events/`, { eventType, location });
  return response.data.events; // Assuming the API returns an object with an 'events' array
};

export function EventsPage() {
  const [eventType, setEventType] = useState("");
  const [location, setLocation] = useState("");

  const { data: events, refetch, isLoading, isError } = useQuery({
    queryKey: ['events', eventType, location],
    queryFn: () => fetchEvents({ eventType, location }),
    enabled: false, // This prevents the query from running automatically
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    refetch(); // This triggers the query
  };

  return (
    <>
      <Header />
      <div className="mx-auto px-8 py-8 bg-background">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Alumni Events</h1>
        <form onSubmit={handleSearch} className="mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="eventType" className="text-muted-foreground">Event Type</Label>
              <Select onValueChange={setEventType}>
                <SelectTrigger className="text-muted-foreground">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-foreground" value="reunion">Reunion</SelectItem>
                  <SelectItem className="text-foreground" value="networking">Networking</SelectItem>
                  <SelectItem className="text-foreground" value="workshop">Workshop</SelectItem>
                  <SelectItem className="text-foreground" value="seminar">Seminar</SelectItem>
                  <SelectItem className="text-foreground" value="hackathon">Hackathon</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="location" className="text-muted-foreground">Location</Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or Online"
              />
            </div>
          </div>
          <Button type="submit">Search Events</Button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <p>Loading events...</p>
          ) : isError ? (
            <p>Error fetching events. Please try again.</p>
          ) : events && events.length > 0 ? (
            events.map((event: any) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.event_name}</CardTitle>
                  <CardDescription>{event.date} | {event.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.event_description}</p>
                </CardContent>
                <CardFooter>
                  <Button>Register</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="text-foreground">No events found. Try adjusting your search criteria.</p>
          )}
        </div>
      </div>
    </>
  );
}
