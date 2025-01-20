import axios from "axios";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ArrowLeft, KeyRound, Loader2, Mail, User } from "lucide-react";
import PasswordInput from "@/components/ui/password-input";
import { useState } from "react";
import { toast } from "sonner";
import { apiService } from "@/services/api/APIService";

type RegisterResponse = {
  message: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
  token_type: string;
};

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    if (password !== passwordConfirm) {
      toast.error("Password needs to be the same as confirmed!");
      return;
    }

    try {
      const response = await apiService.post<RegisterResponse>(
        "/service",
        formData
      );

      if (response.success) {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        window.location.replace("/home");
        toast.success("Successfully logged in!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-5 items-center w-1/2"
      onSubmit={handleRegister}
    >
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-bold tracking-tighter">
          Create your new account
        </h1>
        <span className="text-sm text-gray-500 dark:text-neutral-500">
          Enter your new account details below
        </span>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <Label htmlFor="username">Username</Label>
        <div className="relative">
          <Input
            id="username"
            placeholder="Username"
            type="text"
            required
            name="username"
            className="ps-9"
          />

          <User
            size={18}
            strokeWidth={1.5}
            className="absolute top-3 ms-3 stroke-gray-500 dark:stroke-neutral-600"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Input
            id="email"
            placeholder="Email"
            type="email"
            required
            name="email"
            className="ps-9"
          />

          <Mail
            size={18}
            strokeWidth={1.5}
            className="absolute top-3 ms-3 stroke-gray-500 dark:stroke-neutral-600"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <PasswordInput
            id="password"
            placeholder="Password"
            name="password"
            required
            inputClassName="ps-9"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />

          <KeyRound
            size={18}
            strokeWidth={1.5}
            className="absolute top-3 ms-3 stroke-gray-500 dark:stroke-neutral-600"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <Label htmlFor="password_confirmation">Password confirmation</Label>
        <div className="relative">
          <PasswordInput
            id="password_confirmation"
            placeholder="Confirm your password"
            name="password_confirmation"
            required
            inputClassName="ps-9"
            value={passwordConfirm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordConfirm(e.target.value)
            }
          />

          <KeyRound
            size={18}
            strokeWidth={1.5}
            className="absolute top-3 ms-3 stroke-gray-500 dark:stroke-neutral-600"
          />
        </div>
      </div>

      <div className="flex gap-2 flex-col w-full">
        <Button className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 strokeWidth={1.5} className="animate-spin" />}
          Register
        </Button>
        <a
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          <ArrowLeft size={18} /> Back to home
        </a>
      </div>

      <a href="/login" className="text-sm font-medium">
        Already have an account?{" "}
        <span className="underline">Go login instead!</span>
      </a>
    </form>
  );
};

export default SignUpForm;
