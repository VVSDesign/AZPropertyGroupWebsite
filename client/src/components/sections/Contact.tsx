import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Parallax } from "react-scroll-parallax";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  zipcode: z.string().min(5, "Zip code must be at least 5 digits"),
  email: z.string().email("Invalid email address"),
  projectTypes: z.array(z.string()).min(1, "Please select at least one project type"),
  budget: z.string().min(1, "Please select a budget range"),
  description: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to receive communications" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      zipcode: "",
      email: "",
      projectTypes: [],
      budget: "",
      description: "",
      consent: true,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Form submitted successfully!",
        description: "We will contact you shortly.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Kitchen Renovation",
    "Bathroom Renovation",
    "Full Home Renovation",
    "Living Room/Family Room Remodel",
    "Home Office Renovation",
    "Flooring Installation",
    "Other"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $50,000",
    "$50,000+"
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Parallax speed={-5} className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-10" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          }}
        />
      </Parallax>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 font-montserrat">Book A Consultation</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Ready to transform your home? Contact us for a free consultation and estimate.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6 font-montserrat">Contact Us For A FREE Estimate</h3>
            <p className="text-neutral-600 mb-8">
              At AZ Property Group, we are dedicated to bringing your dream vision to life through our many years of expertise and experienced home renovation, & indoor living services. When you're considering a home upgrade, call Florida's #1 renovation team.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-800 mb-1 font-poppins">Phone</h4>
                  <a href="tel:(617) 678-5426" className="text-neutral-600 hover:text-primary transition duration-300">(617) 678-5426</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-800 mb-1 font-poppins">Email</h4>
                  <a href="mailto:info@azpropertygroupfl.com" className="text-neutral-600 hover:text-primary transition duration-300">info@azpropertygroupfl.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-800 mb-1 font-poppins">Hours</h4>
                  <p className="text-neutral-600">Monday - Friday: 8am - 6pm</p>
                  <p className="text-neutral-600">Saturday: 9am - 4pm</p>
                  <p className="text-neutral-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 font-medium">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="First Name" 
                            className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 font-medium">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Last Name" 
                            className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700 font-medium">Phone *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Phone Number" 
                          className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="zipcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700 font-medium">Zip Code *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Zip Code" 
                          className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700 font-medium">Email *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Email" 
                          className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectTypes"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-neutral-700 font-medium">What Kind Of Project Do You Need Help With? (Select All That Apply)</FormLabel>
                      <div className="space-y-2">
                        {projectTypes.map((type) => (
                          <FormField
                            key={type}
                            control={form.control}
                            name="projectTypes"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={type}
                                  className="flex items-center space-x-2"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(type)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, type])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== type
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="ml-2 text-neutral-600 font-normal cursor-pointer">
                                    {type}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700 font-medium">What's Your Project's Budget?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="space-y-2"
                        >
                          {budgetRanges.map((range) => (
                            <div key={range} className="flex items-center">
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <RadioGroupItem value={range} />
                                </FormControl>
                                <FormLabel className="ml-2 text-neutral-600 font-normal cursor-pointer">
                                  {range}
                                </FormLabel>
                              </FormItem>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700 font-medium">Project Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your project" 
                          className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex items-start">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                      </FormControl>
                      <FormLabel className="ml-2 text-sm text-neutral-600 font-normal">
                        I Consent to Receive SMS Notifications, Alerts & Occasional Marketing Communication from AZ Property Group. Message frequency varies. Message & data rates may apply. Text HELP to (617) 678-5426 for assistance. You can reply STOP to unsubscribe at any time.
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                
                <div className="text-center text-sm text-neutral-500">
                  <a href="https://www.example.com/" className="hover:text-primary transition duration-300">Privacy Policy</a> | 
                  <a href="https://www.example.com/" className="hover:text-primary transition duration-300">Terms of Service</a>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
