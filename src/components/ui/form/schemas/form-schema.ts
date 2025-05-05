import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Namn måste innehålla minst 2 tecken.",
  }),
  mail: z
    .string()
    .min(1, { message: "Fyll i fält" })
    .email("Email är inte korrekt"),
  phone: z.string().regex(phoneRegex, "Fyll i rätt nummer"),
  message: z.string(),
  type: z.enum(["privat", "foretag", "brf"]).optional(),
  file: z.string().optional(),
});
