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
import { useNavigate } from "react-router-dom";

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
  console.log(response.data.donations);
  return response.data.donations;
};

export function DonationPage() {
  const navigate = useNavigate();
  // Use TanStack Query to fetch donations
  const { data: donations, isLoading, error } = useQuery<DonationItem[]>({
    queryKey: ["donations"],
    queryFn: fetchDonations,
  });

  const handleDonateClick = (donationId: string) => {
    navigate(`/donate/${donationId}`);
  };

  return (
    <>
      <Header />
      <div className=" px-16 py-8 bg-background">
        <h1 className="text-3xl font-bold mb-6 text-center text-foreground">Donate to College Projects</h1>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Handle loading state */}
            {isLoading ? (
              <p>Loading donations...</p>
            ) : error ? (
              <p>Error loading donations: {(error as Error).message}</p>
            ) : (donations && donations.length > 0) ? (
              donations.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>{item.project_name}</CardTitle>
                    <CardDescription>
                      {item.total_donation_done} / {item.total_donation_required} raised
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {item.project_image && (
                      <img
                        src={item.project_image}
                        alt={item.project_name}
                        className="w-full h-48 object-cover mb-4"
                      />
                    )}
                    <p>{item.project_description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleDonateClick(item.id)}>Donate</Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <p>No donations available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
