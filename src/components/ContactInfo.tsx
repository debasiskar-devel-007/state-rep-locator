import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface ContactInfoProps {
  contact: {
    phone: string;
    email: string;
    addresses: Address[];
  };
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ contact }) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Main Contact Information
        </h3>
        <p className="text-muted-foreground mb-6">
          Get in touch with our main office for general inquiries.
        </p>
      </div>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">PHONE</h4>
            <a 
              href={`tel:${contact.phone}`}
              className="text-primary hover:text-primary-foreground transition-colors text-lg"
            >
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">E-MAIL</h4>
            <a 
              href={`mailto:${contact.email}`}
              className="text-primary hover:text-primary-foreground transition-colors text-lg"
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* Addresses */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-3">OFFICE ADDRESSES</h4>
            <div className="space-y-4">
              {contact.addresses.map((address, index) => (
                <div key={index} className="text-foreground">
                  <p className="font-medium">{address.street}</p>
                  <p>{address.city}, {address.state} {address.zip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};