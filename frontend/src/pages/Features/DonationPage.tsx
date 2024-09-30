// import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/base components/Header";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface DonationItem {
  id: string;                             // ID is a string
  project_name: string;                   // Project name is a string
  project_image: string | null;           // Project image is a string (URL/path), nullable
  total_donation_required: number;        // Total donation required is a number (monetary value)
  total_donation_done: number;            // Total donation done is a number (monetary value)
  project_description: string;            // Project description is a string
  contact_person: string;                 // Contact person is a string
}

// Function to fetch donations
const fetchDonations = async (): Promise<DonationItem[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/donations/`);
  console.log(response.data);
  return response.data;
};

export function DonationPage() {


  // Use TanStack Query to fetch donations
  const { data: donations, isLoading, error } = useQuery({
    queryKey: ["donations"],
    queryFn: fetchDonations,
  });

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a payment gateway
    console.log(`Donating 234 to gahgdh`);
    alert("Thank you for your donation!");
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Donate to College Projects</h1>
        <form onSubmit={handleDonate}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <p>Loading donations...</p>
              ) : error ? (
                <p>Error loading donations: {(error as Error).message}</p>
              ) : (
                donations?.map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.date} | {item.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Donate</Button>
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
