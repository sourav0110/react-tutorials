import {z} from 'zod'
const addressSchema = z.object(
    {
        street: z.string().min(1, "street is required"),
        city: z.string().min(1, "city is required"),
        zipcode: z.string().min(5, "Zip code must be atleast 5 characters long")
        .refine(value => /^d+$/.test(value),{message: "zip must contain only numeric values"})
    }
)

const userSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone number must contain exactly 10 digits")
    .optional(),

  country: z.string().min(1, "Country is required"),

  checkedOptions: z
    .array(z.string())
    .min(1, "At least one option must be selected"),

  temp: z.coerce.number(),

  model: z.string().min(1, "At least one model is required"),
});


export {addressSchema, userSchema}