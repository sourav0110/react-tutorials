import {z} from 'zod'
const addressSchema = z.object(
    {
        street: z.string().min(1, "street is required"),
        city: z.string().min(1, "city is required"),
        zipcode: z.string().min(5, "Zip code must be atleast 5 characters long")
        .refine(value => /^d+$/.test(value),{message: "zip must contain only numeric values"})
    }
)

const userSchema = z.object(
    {
        email: z.email("Invalid email").min(1, "Email is required"),
        password: z.string().min(8, "Password is required"),
        phoneNumber: z.string().min(10, "Phone number must contain 10 digits").max(10).optional(),
        country: z.string().min(1, "country is required"), 

    }
)

export {addressSchema, userSchema}