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
import { Header } from "@/base components/Header";

export function DonationPage() {
  const [amount, setAmount] = useState("");
  const [project, setProject] = useState("");

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a payment gateway
    console.log(`Donating $${amount} to ${project}`);
    alert("Thank you for your donation!");
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Donate to College Projects</h1>
        <form onSubmit={handleDonate} className="max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <Label htmlFor="amount">Donation Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="project">Select Project</Label>
              <Select onValueChange={setProject} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scholarship">Scholarship Fund</SelectItem>
                  <SelectItem value="research">Research Initiatives</SelectItem>
                  <SelectItem value="facilities">Campus Facilities</SelectItem>
                  <SelectItem value="athletics">Athletics Program</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Donate Now
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
