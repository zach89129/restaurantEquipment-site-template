/**
 * Brand Configuration
 *
 * This file contains all branding and company-specific information.
 * When creating a new customer instance:
 * 1. Update this file with customer details
 * 2. Replace image assets in /public with customer assets
 * 3. Update environment variables for database/services
 */

export const brandConfig = {
  // Company Information
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Restaurant Supply Co",
    legalName:
      process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME || "Restaurant Supply Co",
    tagline:
      process.env.NEXT_PUBLIC_TAGLINE ||
      "Premier restaurant equipment and supply specialists",
    foundedYear: process.env.NEXT_PUBLIC_FOUNDED_YEAR || "1967",
    description:
      process.env.NEXT_PUBLIC_DESCRIPTION ||
      "Serving the Food Service Industry with quality equipment and supplies",
  },

  // Contact Information
  contact: {
    phone: "(555) 123-4567",
    email: "info@example.com",
    address: {
      street: "123 Business Park Drive",
      city: "City",
      state: "State",
      zip: "Zip",
      country: "USA",
    },
  },

  //   NEXT_PUBLIC_LOGO_PATH="/businessLogo.png"
  // NEXT_PUBLIC_ICON_PATH="/businessLogo.png"
  // NEXT_PUBLIC_ABOUT_IMAGE="/insertImageWide.png"
  // NEXT_PUBLIC_HERO_IMAGE="/insertImageWider.png"

  // Asset Paths (relative to /public directory)
  assets: {
    logo: "/businessLogo.png",
    icon: "/businessLogo.png",
    heroImage: "/insertImageWider.png",
    aboutImage: "/insertImageWide.png",
    catalogImage: "/insertImageWider.png",
    foodDisplayImage: "/insertImageWider.png",
    videoThumbnail: "/insertImage.png",
    plateCard: "/insertImageWider.png",
    qualityCard: "/insertImage.png",
    integrityCard: "/insertImage.png",
  },

  // Feature Flags
  features: {
    showShowroom: true,
    showAbout: true,
    showVendorCatalogs: true,
    showVideoTutorial: true,
    showChinaFlatware: true,
    showPromotions: true,
  },

  // Business Details (customize per customer)
  business: {
    // Showroom details
    showroom: {
      size: "80,000",
      sizeUnit: "sq ft",
      hasWarehouse: true,
    },

    // Service area
    serviceArea: {
      primary: "City, State and surrounding area",
      servesOutOfState: true,
      openToPublic: true,
    },

    // Partnerships/memberships
    memberships: ["SEFA, Inc."],
  },

  // Social Media & Links
  social: {
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  },

  // SEO & Metadata
  seo: {
    defaultTitle: "Restaurant Supply Co",
    defaultDescription: "Premier restaurant equipment and supply specialists",
    keywords: "restaurant equipment, foodservice supplies, commercial kitchen",
  },
};

// Helper function to get full address
export const getFullAddress = () => {
  const { street, city, state, zip } = brandConfig.contact.address;
  return `${street}, ${city}, ${state} ${zip}`;
};

// Helper function to format phone number
export const formatPhoneNumber = (
  phone: string = brandConfig.contact.phone
) => {
  return phone;
};
