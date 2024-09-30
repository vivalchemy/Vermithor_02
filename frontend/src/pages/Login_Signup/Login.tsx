import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  userType: "alumni" | "student";
  graduationYear?: string;
  expectedGraduationYear?: string;
  email: string;
  password: string;
};

export const Login = () => {
  const [userType, setUserType] = useState<"alumni" | "student">("alumni");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle login logic here
  };

  const password = watch("password");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="user-type">I am a</Label>
            <Select
              onValueChange={(value: "alumni" | "student") => {
                setUserType(value);
                register("userType").onChange({ target: { value } });
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
                  {errors.graduationYear.message as string}
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
                  {errors.expectedGraduationYear.message as string}
                </span>
              )}
            </div>
          )}
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="login-email">Email</Label>
            <Input
              id="login-email"
              placeholder="Enter your email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="login-password">Password</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button">Cancel</Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </CardFooter>
        </div>
      </form>
    </>
  );
};
