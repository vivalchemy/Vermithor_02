import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/base components/Header";

export function ConnectionPage() {
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically fetch matching alumni/students from an API
    console.log("Searching for connections with:", {
      industry,
      location,
      interests,
    });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Connect with Alumni and Students
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select onValueChange={setIndustry} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, State, or Country"
                />
              </div>
              <div>
                <Label htmlFor="interests">Interests</Label>
                <Input
                  id="interests"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="e.g., Mentoring, Networking, Research"
                />
              </div>
              <Button type="submit" className="w-full">
                Search Connections
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Suggested Connections
            </h2>
            <div className="space-y-4">
              {/* This would typically be populated dynamically */}
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>
                    Technology | San Francisco, CA
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Interests: Mentoring, AI, Startups</p>
                  <Button className="mt-2">Connect</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Jane Smith</CardTitle>
                  <CardDescription>Finance | New York, NY</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Interests: Investment Banking, Networking</p>
                  <Button className="mt-2">Connect</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
