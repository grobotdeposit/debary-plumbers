import { z } from "zod";
import { SERVICE_TYPES } from "@/lib/types/lead";

const phoneRegex = /^[\d\s().+-]{10,}$/;

function countDigits(value: string): number {
  return (value.match(/\d/g) ?? []).length;
}

export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(phoneRegex, "Please enter a valid phone number")
    .refine((val) => countDigits(val) >= 10, {
      message: "Phone number must have at least 10 digits",
    }),
  email: z.string().trim().email("Please enter a valid email address"),
  address: z.string().trim().min(3, "Please enter your service address or ZIP"),
  service_type: z.enum(SERVICE_TYPES, {
    message: "Please select a service type",
  }),
  description: z.string().trim().optional(),
  is_emergency: z.boolean().default(false),
  website: z.string().max(0, "Invalid submission").optional(),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;

export const leadUpdateSchema = z.object({
  status: z.enum(["new", "contacted", "sold", "closed"]).optional(),
  notes: z.string().nullable().optional(),
});

export const forwardLeadSchema = z.object({
  to: z.string().trim().email("Please enter a valid email address"),
});

const phoneFieldSchema = z
  .string()
  .trim()
  .refine((val) => val === "" || /^\+?[\d\s().-]{10,}$/.test(val), {
    message: "Please enter a valid phone number",
  })
  .refine((val) => val === "" || (val.match(/\d/g) ?? []).length >= 10, {
    message: "Phone number must have at least 10 digits",
  });

export const settingsUpdateSchema = z.object({
  notification_email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  notification_phone: phoneFieldSchema.optional().default(""),
});
