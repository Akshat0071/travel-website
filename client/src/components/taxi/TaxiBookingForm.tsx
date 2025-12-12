import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Phone, MapPin, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useToast } from "@/hooks/use-toast";
import { vehicleTypes } from "@/data/taxis";

const formSchema = z.object({
  serviceType: z.enum(["one-way", "round-trip"]),
  vehicleType: z.string().min(1, "Please select a vehicle"),
  pickup: z.string().min(2, "Pickup location is required"),
  drop: z.string().min(2, "Drop location is required"),
  date: z.date({ required_error: "Date is required" }),
  passengers: z.string().min(1, "Required"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
});

export default function TaxiBookingForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: "one-way",
      passengers: "2",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Generate WhatsApp Message
      const message = `New Taxi Booking Request:
      
Service: ${values.serviceType}
Vehicle: ${vehicleTypes.find(v => v.id === values.vehicleType)?.name || values.vehicleType}
Pickup: ${values.pickup}
Drop: ${values.drop}
Date: ${format(values.date, "dd MMM yyyy")}
Pax: ${values.passengers}
Name: ${values.name}
Phone: ${values.phone}`;

      const link = generateWhatsAppLink("911234567890", message);
      
      toast({
        title: "Redirecting to WhatsApp",
        description: "Please send the pre-filled message to confirm.",
      });
      
      window.open(link, "_blank");
    }, 1000);
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-border">
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-bold text-primary">Book Your Ride</h3>
        <p className="text-muted-foreground text-sm">Get instant confirmation via WhatsApp</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trip Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select trip type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="one-way">One Way Drop</SelectItem>
                    <SelectItem value="round-trip">Round Trip / Tour</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="pickup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Location</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="e.g. Chandigarh Airport" className="pl-9" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="drop"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Drop Location</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="e.g. Manali Mall Road" className="pl-9" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="vehicleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Vehicle" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {vehicleTypes.map(v => (
                        <SelectItem key={v.id} value={v.id}>{v.name} ({v.category})</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date()
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="9876543210" className="pl-9" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6 mt-2" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Book Now via WhatsApp"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
