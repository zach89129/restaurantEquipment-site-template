"use client";
import { PageContainer } from "@/components/ui/PageContainer";
import { Section } from "@/components/ui/Section";
import { ImageCard } from "@/components/ui/ImageCard";
import { CallToAction } from "@/components/ui/CallToAction";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { brandConfig } from "@/config/brand.config";

export default function AboutPage() {
  // NOTE: Update this array with customer-specific client logos
  // Replace with actual customer logos in /public directory
  const clients = [
    { name: "Client 1", image: "/clients/client-1.webp" },
    { name: "Client 2", image: "/clients/client-2.webp" },
    { name: "Client 3", image: "/clients/client-3.webp" },
    { name: "Client 4", image: "/clients/client-4.webp" },
    { name: "Client 5", image: "/clients/client-5.webp" },
  ];

  const { company, contact, business } = brandConfig;

  return (
    <PageContainer title="About Us">
      <div className="space-y-16">
        <Section title="Reputation">
          Our Company is known for, and has been built upon, our outstanding
          reputation for quality, service and strong business ethics. No matter
          what your needs, we assure you they will be done with your best
          interest in mind.
        </Section>

        {business.memberships.length > 0 && (
          <Section title="National Partnership">
            {company.name} is a proud member of{" "}
            {business.memberships.join(", ")}, a nationwide network of premier
            foodservice equipment and supply specialists. We partner with
            manufacturers and dealers to provide you with knowledgeable
            salespeople, quality products and competitive pricing.
          </Section>
        )}

        {business.showroom.hasWarehouse && (
          <ImageCard
            src={brandConfig.assets.aboutImage}
            alt={`${company.name} Facility`}
            title={`Our ${contact.address.city} Showroom`}
            description={`Visit our ${business.showroom.size} ${business.showroom.sizeUnit} showroom and warehouse facility in ${contact.address.city}, featuring the latest in restaurant equipment and supplies.`}
            className="my-20"
          />
        )}

        <Section title="Our Organization">
          We are built on the concept that our personnel are the best in the
          industry. Our sales staff can assist you when placing your order by
          phone and in person. If you should decide to visit our showroom and
          warehouse facility, we welcome you.
        </Section>

        {/* Gradient Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <CallToAction phoneNumber={contact.phone}>
          <p>
            Let us put our proven reputation for quality, service and value to
            work for you. Whether you&apos;re remodeling or opening a new
            facility,
            {company.name} is your link to success.
          </p>
          <p className="mt-6">
            We serve {business.serviceArea.primary} and work with leading
            hospitality and restaurant organizations:
          </p>
        </CallToAction>

        <LogoCarousel logos={clients} />
      </div>
    </PageContainer>
  );
}
