// ============================================================================
// STUDIO CONFIGURATION
// ----------------------------------------------------------------------------
// This is the ONLY file you need to edit to update studio details, phone
// numbers, address, opening hours, services and gallery images.
// Nothing in the components is hard-coded — everything reads from here.
// ============================================================================

import {
  IdCard,
  Image,
  Frame,
  BookImage,
  Heart,
  PartyPopper,
  FileText,
  Printer,
  Camera,
} from "lucide-react";

// ---- Basic studio details --------------------------------------------------
// Edit these values with your real studio details.
export const STUDIO_NAME = {
  ta: "ஜீவா ஸ்டூடியோ",
  en: "Jeevaa Studio",
};

// Phone number WITHOUT +91 or spaces, used for tel: links and shown to users.
export const PHONE_NUMBER = "9943799798";
export const PHONE_DISPLAY = "+91 99437 99798";

// WhatsApp number in international format WITHOUT "+" or spaces (used in wa.me links)
export const WHATSAPP_NUMBER = "919943799798";

export const ADDRESS = {
  ta: "ஜீவா ஸ்டூடியோ, T.கிருஷ்ணாபுரம் விலக்கு, T.பாறைப்பட்டி, M.கல்லுப்பட்டி மெயின் ரோடு, எழுமலை, தமிழ்நாடு 625535",
  en: "Jeevaa studio, T.Krishnapuram vilaku, T.Paraipatti, M.Kallupatti Main Rd, Elumalai, Tamil Nadu 625535",
};

// Studio's real Google Maps share link (opens directions in Google Maps).
export const MAPS_URL = "https://maps.app.goo.gl/F8MTPmqaU8VsXeXB8";

// Precise coordinates from the Google Maps listing — used for the embedded
// map and for LocalBusiness SEO structured data in index.html.
export const MAP_COORDS = { lat: 9.8082461, lng: 77.6741179 };

export const OPENING_HOURS = {
  ta: "திங்கள் - ஞாயிறு, காலை 9:00 - இரவு 8:30",
  en: "Mon - Sun, 9:00 AM - 8:30 PM",
};

// ---- Services ---------------------------------------------------------------
// id must stay unique and stable — it is used to pre-fill the enquiry form
// and the WhatsApp message. Reorder, add, or remove entries freely.
export const SERVICES = [
  {
    id: "passport-photo",
    icon: IdCard,
    nameTa: "பாஸ்போர்ட் புகைப்படம்",
    nameEn: "Passport Photo",
    descTa: "பாஸ்போர்ட், விசா, அரசு படிவங்களுக்கான உடனடி புகைப்படம்.",
    descEn: "Instant photos for passport, visa and government forms.",
  },
  {
    id: "photo-print",
    icon: Image,
    nameTa: "6×4 புகைப்பட பிரிண்ட்",
    nameEn: "6×4 Photo Print",
    descTa: "தெளிவான தரமான பிரிண்ட், பல அளவுகளில்.",
    descEn: "Sharp quality prints, available in multiple sizes.",
  },
  {
    id: "photo-frame",
    icon: Frame,
    nameTa: "புகைப்பட ஃப்ரேம்",
    nameEn: "Photo Frame",
    descTa: "உங்கள் புகைப்படத்திற்கு ஏற்ற அழகான ஃப்ரேம்கள்.",
    descEn: "Beautiful frames to match your photo.",
  },
  {
    id: "photo-album",
    icon: BookImage,
    nameTa: "புகைப்பட ஆல்பம்",
    nameEn: "Photo Album",
    descTa: "திருமணம் மற்றும் குடும்ப நினைவுகளுக்கான ஆல்பம்.",
    descEn: "Albums for weddings and family memories.",
  },
  {
    id: "marriage-photography",
    icon: Heart,
    nameTa: "திருமண புகைப்படம்",
    nameEn: "Marriage Photography",
    descTa: "திருமணம் மற்றும் சடங்குகளுக்கான புகைப்பட சேவை.",
    descEn: "Photography service for weddings and rituals.",
  },
  {
    id: "function-photography",
    icon: PartyPopper,
    nameTa: "விழா புகைப்படம்",
    nameEn: "Function Photography",
    descTa: "பிறந்தநாள், நிச்சயதார்த்தம், குடும்ப விழாக்கள்.",
    descEn: "Birthdays, engagements and family functions.",
  },
  {
    id: "photoshooting",
    icon: Camera,
    nameTa: "போட்டோஷூட்",
    nameEn: "Photoshooting",
    descTa: "மாடலிங், வெளிப்புற மற்றும் உள்ளரங்க போட்டோஷூட் சேவைகள்.",
    descEn: "Modeling, outdoor, and indoor photoshooting services.",
  },
  {
    id: "patta-chitta",
    icon: FileText,
    nameTa: "பட்டா / சிட்டா சேவை",
    nameEn: "Patta / Chitta",
    descTa: "பட்டா, சிட்டா மற்றும் ஆவண சேவைகள்.",
    descEn: "Patta, Chitta and related document services.",
  },
  {
    id: "printout-xerox-scan",
    icon: Printer,
    nameTa: "பிரிண்ட் / ஜெராக்ஸ் / ஸ்கேன்",
    nameEn: "Printout / Xerox / Scan",
    descTa: "ஆவணங்கள் பிரிண்ட், ஜெராக்ஸ் மற்றும் ஸ்கேன் செய்யப்படும்.",
    descEn: "Documents printed, photocopied and scanned.",
  },
];

// ---- Gallery ------------------------------------------------------------
// Replace the `src` with your own photos. Keep the same file names in
// src/assets/gallery/ or point src to any image path / URL.
// `category` must match one of GALLERY_CATEGORIES ids below.
export const GALLERY_CATEGORIES = [
  { id: "marriage", ta: "திருமணம்", en: "Marriage" },
  { id: "functions", ta: "விழாக்கள்", en: "Functions" },
  { id: "album", ta: "ஆல்பம்", en: "Album" },
  { id: "frame", ta: "ஃப்ரேம்", en: "Frame" },
  { id: "print", ta: "புகைப்பட பிரிண்ட்", en: "Photo Print" },
];

export const GALLERY_IMAGES = [
  { id: 1, category: "marriage", src: "/images/marriage.jpeg", altTa: "திருமண புகைப்படம்", altEn: "Marriage photo" },
  { id: 2, category: "marriage", src: "/images/marriage2.jpeg", altTa: "திருமண சடங்கு", altEn: "Wedding ritual" },
  { id: 3, category: "functions", src: "/images/functions.jpeg", altTa: "பிறந்தநாள் விழா", altEn: "Birthday function" },
  { id: 4, category: "functions", src: "/images/functions2.jpeg", altTa: "குடும்ப விழா", altEn: "Family function" },
];

// Hero and section images — replace with your own studio photos any time.
export const HERO_IMAGE = "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=900&h=1100&fit=crop";
export const PHOTOGRAPHY_IMAGE_1 = "/images/marriage.jpeg";
export const PHOTOGRAPHY_IMAGE_2 = "/images/functions.jpeg";