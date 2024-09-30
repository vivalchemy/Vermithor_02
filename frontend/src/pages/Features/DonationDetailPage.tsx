import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/base components/Header";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

interface DonationItem {
  id: string;
  project_name: string;
  project_image: string | null;
  total_donation_required: number;
  total_donation_done: number;
  project_description: string;
  contact_person: string;
}

const fetchDonationDetail = async (id: string): Promise<DonationItem> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/donations/${id}`
  );
  return response.data;
};

export function DonationDetailPage() {
    const stripe = useStripe();
    const elements = useElements();

//   const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [amount, setAmount] = useState("");
  const {
    data: donation,
    isLoading,
    error,
  } = useQuery<DonationItem>({
    queryKey: ["donation", id],
    queryFn: () => fetchDonationDetail(id!),
  });

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-payment-intent/`,
        {
          amount: parseFloat(amount) * 100, // Convert to cents
        }
      );
      const { clientSecret } = response.data;
      
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: 'Jenny Rosen', // Replace with actual user name
          },
        },
      });

      if (result.error) {
        console.error(result.error.message);
        alert("Payment failed. Please try again.");
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          alert("Payment successful!");
          // Handle successful payment (e.g., update UI, navigate to success page)
        }
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Error processing payment. Please try again.");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;
  if (!donation) return <p>No donation found.</p>;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>{donation.project_name}</CardTitle>
            <CardDescription>
              {donation.total_donation_done} /{" "}
              {donation.total_donation_required} raised
            </CardDescription>
          </CardHeader>
          <CardContent>
            {donation.project_image && (
              <img
                src={donation.project_image}
                alt={donation.project_name}
                className="w-full h-64 object-cover mb-4"
              />
            )}
            <p className="mb-4">{donation.project_description}</p>
            <p>Contact: {donation.contact_person}</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4">Donate Now</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Make a Donation</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleDonate}>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                  <CardElement />
                  <button
                    type="submit"
                    style={{
                      padding: "10px 20px",
                      background: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "16px",
                      width: "100%",
                      marginTop: "10px",
                    }}
                  >
                    Pay Now
                  </button>
                </form>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

// Wrap your component with Elements provider
const WrappedDonationDetailPage = () => (
  <Elements stripe={loadStripe('pk_test_51Q4eHVGY7azj7GbIXZlHtK7wvbkX5KzVIMipcCtSfsAvlvaWNd995M31HwwyGvZjXhvW2f96jYfL0zwS22lGlZU000Pit872qf')}>
    <DonationDetailPage />
  </Elements>
);

export default WrappedDonationDetailPage;
