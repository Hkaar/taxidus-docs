import axios from "axios";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ArrowLeft, KeyRound, Loader2, User } from "lucide-react";
import PasswordInput from "@/components/ui/password-input";
import React, { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { apiService } from "@/services/api/APIService";

type LoginResponse = {
  message: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
  token_type: string;
};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await apiService.post<LoginResponse>("/login", formData);

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
      className="flex flex-col gap-5 items-center w-1/2 max-w-96"
      onSubmit={handleLogin}
    >
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-bold tracking-tighter">
          Login to your account
        </h1>
        <span className="text-sm text-gray-500 dark:text-neutral-500">
          Enter your account details below
        </span>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <Label htmlFor="username">Email or Username</Label>
        <div className="relative">
          <Input
            id="username"
            placeholder="Email or username"
            type="text"
            required
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            name="username"
            autoComplete="username"
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
        <div className="flex items-center gap-3 justify-between">
          <Label htmlFor="password">Password</Label>

          <a href="/" className="text-sm text-gray-500 dark:text-neutral-600">
            Forgot your password?
          </a>
        </div>
        <div className="relative">
          <PasswordInput
            id="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            name="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
            inputClassName="ps-9"
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
          Login
        </Button>
        <a
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          <ArrowLeft size={18} /> Back to home
        </a>
      </div>

      <a href="/sign-up" className="text-sm font-medium">
        Don't have an account yet?{" "}
        <span className="underline">Sign up now!</span>
      </a>
    </form>
  );
};

export default LoginForm;
