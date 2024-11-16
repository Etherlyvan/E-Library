import {object, string} from "zod";

export const SignInSchema = object({
    email: string().email("Must be a valid email"),
    password: string().min(8, "Password must be more than 8 characters").max(32, "Password must be less than 32 characters"),
});

export const RegisterSchema = object({
    name: string().min(1, "Name must be more than 1 character").max(50, "Name must be less than 50 characters"),
    email: string().email("Must be a valid email"),
    password: string().min(8, "Password must be more than 8 characters").max(32, "Password must be less than 32 characters"),
    confirmPassword: string().min(8, "Confirm Password must be more than 8 characters").max(32, "Confirm Password must be less than 32 characters")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});


