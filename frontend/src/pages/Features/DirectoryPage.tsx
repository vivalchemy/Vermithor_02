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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Header } from "@/base components/Header";

export function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [profession, setProfession] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically fetch alumni data from an API
    console.log("Searching directory with:", {
      searchTerm,
      graduationYear,
      profession,
    });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Alumni Directory</h1>
        <form onSubmit={handleSearch} className="mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="searchTerm">Search</Label>
              <Input
                id="searchTerm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Name or Keywords"
              />
            </div>
            <div>
              <Label htmlFor="graduationYear">Graduation Year</Label>
              <Select onValueChange={setGraduationYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(10)].map((_, i) => (
                    <SelectItem
                      key={i}
                      value={(new Date().getFullYear() - i).toString()}
                    >
                      {new Date().getFullYear() - i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="profession">Profession</Label>
              <Select onValueChange={setProfession}>
                <SelectTrigger>
                  <SelectValue placeholder="Select profession" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit">Search Directory</Button>
        </form>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Graduation Year</TableHead>
              <TableHead>Profession</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* This would typically be populated dynamically */}
            <TableRow>
              <TableCell>Alice Johnson</TableCell>
              <TableCell>2018</TableCell>
              <TableCell>Software Engineer</TableCell>
              <TableCell>San Francisco, CA</TableCell>
              <TableCell>
                <Button variant="outline">View Profile</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Williams</TableCell>
              <TableCell>2015</TableCell>
              <TableCell>Financial Analyst</TableCell>
              <TableCell>New York, NY</TableCell>
              <TableCell>
                <Button variant="outline">View Profile</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
