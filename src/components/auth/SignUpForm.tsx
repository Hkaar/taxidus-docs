import axios from "axios";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ArrowLeft, KeyRound, Mail, User } from "lucide-react";
import PasswordInput from "@/components/ui/password-input";
import { useState } from "react";

type RegisterResponse = {
  message: string,
  token: string,
}

const SignUpForm = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const apiURL = import.meta.env.PUBLIC_API_URL;
    const formData = new FormData(event.currentTarget);

    if (password !== passwordConfirm) {
      console.error("Not same");
      return;
    }

    try {
      const response = await axios.post(`${apiURL}/register`, formData, {
        withCredentials: true
      });
      const data: RegisterResponse = response.data;

      localStorage.setItem('session_token', data.token.split('|')[1]);

      globalThis.window.location.replace('/home');

    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.status) {
          console.log(error)
        } else if (error.response) {
          console.log(error)
        } else {
          console.log(error)
        }
      } else {
        console.error(error);
      }
    }
  };

  return (
    <form className="flex flex-col gap-5 items-center w-1/2" onSubmit={handleRegister}>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-bold tracking-tighter">Create your new account</h1>
        <span className="text-sm text-gray-500 dark:text-neutral-500"
        >Enter your new account details below</span
        >
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}
          />

          <KeyRound
            size={18}
            strokeWidth={1.5}
            className="absolute top-3 ms-3 stroke-gray-500 dark:stroke-neutral-600"
          />
        </div>
      </div>

      <div className="flex gap-2 flex-col w-full">
        <Button className="w-full"> Register </Button>
        <a href="/" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
          <ArrowLeft size={18} /> Back to home
        </a>
      </div>

      <a href="/login" className="text-sm font-medium">
        Already have an account? <span className="underline">Go login instead!</span>
      </a>
    </form>
  );
}

export default SignUpForm;