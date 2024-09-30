import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";

type FormInputs = {
  fullName: string;
  email: string;
  password: string;
  userType: "alumni" | "student";
  graduationYear?: string;
  expectedGraduationYear?: string;
};

const registerUser = async (userData: FormInputs) => {
  console.log(userData);

  const response = await fetch(`${import.meta.env.VITE_API_URL}/sign-in/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};

export const Signup = () => {
  const [userType, setUserType] = useState<"alumni" | "student">("alumni");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      userType: "alumni",
    },
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("Registration successful", data);
      // Handle successful registration (e.g., show success message, redirect)
    },
    onError: (error) => {
      console.error("Registration failed", error);
      // Handle registration error (e.g., show error message to user)
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="signup-name">Full Name</Label>
          <Input
            id="signup-name"
            placeholder="Enter your full name"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.fullName && (
            <span className="text-red-500">{errors.fullName.message}</span>
          )}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="signup-email">Email</Label>
          <Input
            id="signup-email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="signup-password">Password</Label>
          <Input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="user-type">I am a</Label>
          <Select
            onValueChange={(value: "alumni" | "student") => {
              setUserType(value);
              setValue("userType", value); // Update form value using setValue
            }}
            defaultValue={userType}
          >
            <SelectTrigger id="user-type">
              <SelectValue placeholder="Select user type" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="alumni">Alumni</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {userType === "alumni" && (
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="graduation-year">Graduation Year</Label>
            <Input
              id="graduation-year"
              placeholder="Enter your graduation year"
              {...register("graduationYear", {
                required: "Graduation year is required",
                pattern: {
                  value: /^\d{4}$/,
                  message: "Please enter a valid year",
                },
              })}
            />
            {errors.graduationYear && (
              <span className="text-red-500">
                {errors.graduationYear.message}
              </span>
            )}
          </div>
        )}
        {userType === "student" && (
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="expected-graduation">
              Expected Graduation Year
            </Label>
            <Input
              id="expected-graduation"
              placeholder="Enter expected graduation year"
              {...register("expectedGraduationYear", {
                required: "Expected graduation year is required",
                pattern: {
                  value: /^\d{4}$/,
                  message: "Please enter a valid year",
                },
              })}
            />
            {errors.expectedGraduationYear && (
              <span className="text-red-500">
                {errors.expectedGraduationYear.message}
              </span>
            )}
          </div>
        )}
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Submitting..." : "Submit"}
          </Button>
        </CardFooter>
        {mutation.isError && (
          <div className="text-red-500 mt-2">
            An error occurred during registration. Please try again.
          </div>
        )}
      </div>
    </form>
  );
};
