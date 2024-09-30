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

export function EventsPage() {
  const [eventType, setEventType] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically fetch events from an API
    console.log("Searching events with:", { eventType, location });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Alumni Events</h1>
        <form onSubmit={handleSearch} className="mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="eventType">Event Type</Label>
              <Select onValueChange={setEventType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reunion">Reunion</SelectItem>
                  <SelectItem value="networking">Networking</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="seminar">Seminar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
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
          {/* This would typically be populated dynamically */}
          <Card>
            <CardHeader>
              <CardTitle>Class of 2010 Reunion</CardTitle>
              <CardDescription>June 15, 2024 | Campus Quad</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Join us for a nostalgic evening celebrating our alma mater and
                reconnecting with old friends.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tech Industry Networking Night</CardTitle>
              <CardDescription>July 8, 2024 | Online</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Connect with fellow alumni in the tech industry and explore new
                career opportunities.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Leadership Workshop</CardTitle>
              <CardDescription>August 22, 2024 | Alumni Center</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Develop your leadership skills with this intensive workshop led
                by successful alumni.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
