import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { ContactFormInput } from "./contact/ContactFormInput";
import { ContactFormTextarea } from "./contact/ContactFormTextarea";

// Initialize EmailJS
emailjs.init("BRNJRT_YbAUZ3bB-O");

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Starting contact form submission...');

    try {
      if (!name || !email || !message) {
        throw new Error("Please fill in all required fields");
      }

      const templateParams = {
        from_name: name,
        reply_to: email,
        message: message,
        to_name: 'Secondary Glazing Specialist'
      };

      console.log('Sending email via EmailJS...', {
        serviceId: 'service_3peq5cu',
        templateId: 'template_s22oydk',
        params: templateParams
      });

      const response = await emailjs.send(
        'service_3peq5cu',
        'template_s22oydk',
        templateParams,
        'BRNJRT_YbAUZ3bB-O'
      );

      console.log('Email sent successfully:', response);
      toast.success("Message sent! We'll get back to you as soon as possible.");
      
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error('Error sending email:', error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("There was an error sending your message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <ContactFormInput
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <ContactFormInput
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <ContactFormTextarea
              id="message"
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}