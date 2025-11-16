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
    phone: process.env.NEXT_PUBLIC_PHONE || "(555) 123-4567",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@example.com",
    address: {
      street: process.env.NEXT_PUBLIC_ADDRESS || "123 Business Park Drive",
      city: process.env.NEXT_PUBLIC_CITY || "Las Vegas",
      state: process.env.NEXT_PUBLIC_STATE || "NV",
      zip: process.env.NEXT_PUBLIC_ZIP || "89101",
      country: process.env.NEXT_PUBLIC_COUNTRY || "USA",
    },
  },

  // Asset Paths (relative to /public directory)
  assets: {
    logo: process.env.NEXT_PUBLIC_LOGO_PATH || "/logo.webp",
    icon: process.env.NEXT_PUBLIC_ICON_PATH || "/icon.png",
    heroImage: process.env.NEXT_PUBLIC_HERO_IMAGE || "/hero.webp",
    aboutImage: process.env.NEXT_PUBLIC_ABOUT_IMAGE || "/about-building.webp",
    catalogImage: process.env.NEXT_PUBLIC_CATALOG_IMAGE || "/catalog.webp",
    foodDisplayImage:
      process.env.NEXT_PUBLIC_FOOD_DISPLAY_IMAGE || "/food-display.webp",
    videoThumbnail:
      process.env.NEXT_PUBLIC_VIDEO_THUMBNAIL || "/video-thumbnail.webp",
    plateCard: process.env.NEXT_PUBLIC_PLATE_CARD || "/plate-card.webp",
    qualityCard: process.env.NEXT_PUBLIC_QUALITY_CARD || "/quality-card.webp",
    integrityCard:
      process.env.NEXT_PUBLIC_INTEGRITY_CARD || "/integrity-card.webp",
  },

  // Feature Flags
  features: {
    showShowroom: process.env.NEXT_PUBLIC_SHOW_SHOWROOM !== "false",
    showAbout: process.env.NEXT_PUBLIC_SHOW_ABOUT !== "false",
    showVendorCatalogs:
      process.env.NEXT_PUBLIC_SHOW_VENDOR_CATALOGS !== "false",
    showVideoTutorial: process.env.NEXT_PUBLIC_SHOW_VIDEO_TUTORIAL !== "false",
    showChinaFlatware: process.env.NEXT_PUBLIC_SHOW_CHINA_FLATWARE !== "false",
    showPromotions: process.env.NEXT_PUBLIC_SHOW_PROMOTIONS !== "false",
  },

  // Business Details (customize per customer)
  business: {
    // Showroom details
    showroom: {
      size: process.env.NEXT_PUBLIC_SHOWROOM_SIZE || "80,000",
      sizeUnit: process.env.NEXT_PUBLIC_SHOWROOM_SIZE_UNIT || "sq ft",
      hasWarehouse: process.env.NEXT_PUBLIC_HAS_WAREHOUSE !== "false",
    },

    // Service area
    serviceArea: {
      primary:
        process.env.NEXT_PUBLIC_SERVICE_AREA ||
        "Las Vegas and surrounding area",
      servesOutOfState: process.env.NEXT_PUBLIC_SERVES_OUT_OF_STATE === "true",
      openToPublic: process.env.NEXT_PUBLIC_OPEN_TO_PUBLIC === "true",
    },

    // Partnerships/memberships
    memberships: process.env.NEXT_PUBLIC_MEMBERSHIPS
      ? process.env.NEXT_PUBLIC_MEMBERSHIPS.split(",")
      : ["SEFA, Inc."],
  },

  // Social Media & Links
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  },

  // SEO & Metadata
  seo: {
    defaultTitle: process.env.NEXT_PUBLIC_SEO_TITLE || "Restaurant Supply Co",
    defaultDescription:
      process.env.NEXT_PUBLIC_SEO_DESCRIPTION ||
      "Premier restaurant equipment and supply specialists",
    keywords:
      process.env.NEXT_PUBLIC_SEO_KEYWORDS ||
      "restaurant equipment, foodservice supplies, commercial kitchen",
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
