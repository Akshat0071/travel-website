import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  serviceType: z.enum(["package", "taxi", "enquiry"]),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export async function submitContactForm(data: ContactFormValues) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real app, this would fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
  console.log("Form submitted:", data);
  
  return { success: true, message: "Message sent successfully!" };
}
