export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  zipcode: string;
  email: string;
  projectTypes: string[];
  budget: string;
  description?: string;
  consent: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  image: string;
  title: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
  initial: string;
}

export interface NavigationHandlers {
  about: () => void;
  gallery: () => void;
  services: () => void;
  contact: () => void;
}
