import type { FaqItem } from "@/lib/seo/schema";

export type AreaPageData = {
  slug: string;
  town: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  townDetail: string;
  responsePromise: string;
  testimonial?: { quote: string; name: string; location: string };
  faq: FaqItem[];
  relatedServices: string[];
};

export const AREAS: AreaPageData[] = [
  {
    slug: "debary",
    town: "DeBary",
    title: "Plumber in DeBary, FL | Debary Plumbers",
    description:
      "Need a plumber in DeBary, FL? Fast, affordable plumbing callbacks from licensed local pros. Emergency service, drains, water heaters & more.",
    h1: "Your Local Plumber in DeBary, FL",
    intro:
      "DeBary is our home base — a growing city along the St. Johns River where homeowners need plumbers who know the area, respond fast, and charge fair prices. Submit your info below and a vetted local plumber will call you back, usually within the hour.",
    townDetail:
      "DeBary's housing stock ranges from 1970s riverfront homes near DeBary Plantation and Country Club estates to newer builds in Glen Abbey and DeBary Woods. Older homes along Highbanks Road and Dirksen Drive often have original galvanized or polybutylene piping that needs attention. Newer subdivisions off U.S. 17-92 benefit from modern PEX but still face Florida's hard water challenges. Whether you are near DeBary Hall Historic Site, the SunRail station, or along the river bluffs, our network plumbers know the local infrastructure and code requirements.",
    responsePromise:
      "We prioritize DeBary homeowners for the fastest callbacks — most residents hear back within 30–60 minutes. Emergency requests with active leaks or no water are escalated immediately.",
    testimonial: {
      quote:
        "Submitted the form on my lunch break and had a plumber call me back within 30 minutes. Fixed our leak the same day!",
      name: "Sarah M.",
      location: "DeBary, FL",
    },
    faq: [
      {
        question: "Do you serve all of DeBary, including Glen Abbey and DeBary Woods?",
        answer:
          "Yes. We cover all DeBary ZIP codes (32713 and surrounding) including Glen Abbey, Country Club Estates, DeBary Woods, and neighborhoods along Enterprise Road.",
      },
      {
        question: "What plumbing problems are most common in DeBary homes?",
        answer:
          "Aging pipe failures, water heater sediment from hard water, and drain clogs from tree roots are the top three calls we see in DeBary. Homes built before 1990 should be checked for polybutylene or galvanized pipes.",
      },
    ],
    relatedServices: ["emergency-plumbing", "drain-cleaning", "water-heater-repair"],
  },
  {
    slug: "deltona",
    town: "Deltona",
    title: "Plumber in Deltona, FL | Debary Plumbers",
    description:
      "Plumber in Deltona, FL — fast callbacks for emergencies, drain cleaning, water heaters & more. Licensed local pros serving all Deltona neighborhoods.",
    h1: "Your Local Plumber in Deltona, FL",
    intro:
      "Deltona is Volusia County's largest city — and one of the busiest areas we serve. From emergency burst pipes to routine water heater maintenance, Debary Plumbers connects Deltona homeowners with licensed local plumbers who respond fast.",
    townDetail:
      "Deltona's expansive layout covers communities from Deltona Lakes and Saxon Ridge to DuPont Lakes and the Deltona Regional Library area off Howland Boulevard. Most homes were built between 1970 and 2000, meaning polybutylene piping and aging water heaters are widespread. Sandy soil throughout Deltona causes gradual pipe shifting that can create slab leaks and sewer bellies. Our plumbers regularly serve homes near Deltona City Hall, Deltona Middle School, and the corridors along Doyle Road and Enterprise Road.",
    responsePromise:
      "Deltona homeowners typically receive a callback within 45–90 minutes depending on location within the city and current demand. Emergency calls are prioritized.",
    faq: [
      {
        question: "How far into Deltona do you serve?",
        answer:
          "We cover all of Deltona including Deltona Lakes, Saxon Ridge, DuPont Lakes, Timberwood, and neighborhoods along Howland Boulevard and Doyle Road.",
      },
      {
        question: "Why do Deltona homes have so many water heater issues?",
        answer:
          "Deltona's hard groundwater causes sediment buildup in tank water heaters. Most units in the city are 10–15 years old and due for replacement or flush maintenance.",
      },
    ],
    relatedServices: ["water-heater-repair", "repiping", "sewer-line-repair"],
  },
  {
    slug: "orange-city",
    town: "Orange City",
    title: "Plumber in Orange City, FL | Debary Plumbers",
    description:
      "Plumber in Orange City, FL. Emergency plumbing, drain cleaning, water heater repair & more. Submit for a fast callback from a local pro.",
    h1: "Your Local Plumber in Orange City, FL",
    intro:
      "Orange City homeowners deserve a plumber who shows up fast and explains the work clearly. Debary Plumbers connects you with licensed professionals serving Orange City and the surrounding Blue Spring and French Avenue corridors.",
    townDetail:
      "Orange City blends historic charm near Blue Spring State Park with established neighborhoods along Volusia Avenue and newer development near the 17-92 corridor. Many homes near the downtown district date to the mid-20th century with cast iron drains and galvanized supply lines. Properties closer to Blue Spring and the St. Johns River face higher water tables that can stress foundation plumbing. Our network plumbers are familiar with Orange City's mix of well and city water systems and the specific code requirements for Volusia County.",
    responsePromise:
      "Orange City is minutes from our DeBary service hub. Most callbacks happen within 45–75 minutes, with emergencies handled faster.",
    faq: [
      {
        question: "Do you serve homes near Blue Spring State Park?",
        answer:
          "Yes. We cover all Orange City neighborhoods including areas near Blue Spring, French Avenue, Volusia Avenue, and the 17-92 commercial corridor.",
      },
      {
        question: "Are Orange City homes on city water or wells?",
        answer:
          "Both. City water serves most residential areas, but some properties near the outskirts use private wells. Your plumber will account for your water source when diagnosing pressure or quality issues.",
      },
    ],
    relatedServices: ["emergency-plumbing", "toilet-faucet-repair", "water-treatment"],
  },
  {
    slug: "deland",
    town: "DeLand",
    title: "Plumber in DeLand, FL | Debary Plumbers",
    description:
      "Plumber in DeLand, FL — Stetson University area, downtown & beyond. Fast plumbing callbacks for repairs, emergencies, and installations.",
    h1: "Your Local Plumber in DeLand, FL",
    intro:
      "DeLand combines a vibrant downtown, Stetson University, and established residential neighborhoods — each with distinct plumbing needs. Debary Plumbers connects DeLand homeowners with licensed plumbers who know the area.",
    townDetail:
      "DeLand's historic downtown and Victoria Park neighborhoods feature older homes with cast iron sewer lines and copper supply piping that requires experienced hands. Areas near Stetson University and the Beresford corridor include both renovated bungalows and mid-century ranches. Newer communities off State Road 44 and near the DeLand Naval Air Station Museum area have modern PEX but still deal with Central Florida hard water. Tree-lined streets in northwest DeLand are prone to root intrusion in older clay sewer pipes.",
    responsePromise:
      "DeLand homeowners can expect a callback within 60–90 minutes. We serve downtown DeLand, Victoria Park, the Stetson area, and neighborhoods along Woodland Boulevard.",
    faq: [
      {
        question: "Do you serve downtown DeLand and Victoria Park?",
        answer:
          "Yes. We cover all DeLand neighborhoods including downtown, Victoria Park, Glenwood, and areas near Stetson University.",
      },
      {
        question: "Are older DeLand homes harder to plumb?",
        answer:
          "Older homes may have non-standard pipe sizes and access challenges, but our network plumbers are experienced with historic DeLand properties and carry the right fittings and tools.",
      },
    ],
    relatedServices: ["repiping", "sewer-line-repair", "leak-detection-repair"],
  },
  {
    slug: "sanford",
    town: "Sanford",
    title: "Plumber in Sanford, FL | Debary Plumbers",
    description:
      "Plumber in Sanford, FL — Historic Sanford, Goldsboro & Lake Monroe area. Emergency plumbing, drains, water heaters. Fast local callbacks.",
    h1: "Your Local Plumber in Sanford, FL",
    intro:
      "Sanford's historic riverfront district and growing residential areas need plumbers who understand both old and new construction. Debary Plumbers connects Sanford homeowners with licensed local professionals for fast callbacks.",
    townDetail:
      "Sanford's Historic District along First Street features homes dating to the late 1800s with plumbing systems that have been updated multiple times — creating mixed pipe materials that require careful diagnosis. The Goldsboro community and areas near Sanford RiverWalk have a mix of mid-century and renovated properties. Newer development near the Sanford Auto Train station and along Rinehart Road features standard suburban construction. Lake Monroe's proximity means some waterfront properties deal with higher humidity and foundation moisture that affects under-slab plumbing.",
    responsePromise:
      "Sanford is within our core Volusia–Seminole service zone. Callbacks typically happen within 60–90 minutes, faster for emergencies.",
    faq: [
      {
        question: "Do you serve Historic Sanford and Goldsboro?",
        answer:
          "Yes. We cover all Sanford neighborhoods including the Historic District, Goldsboro, Georgetown, and areas near the Sanford RiverWalk and Auto Train station.",
      },
      {
        question: "What plumbing issues are common in older Sanford homes?",
        answer:
          "Mixed pipe materials, corroded galvanized lines, and aged cast iron sewer pipes are the most common issues in Sanford's older neighborhoods. Camera inspection is often the first step.",
      },
    ],
    relatedServices: ["drain-cleaning", "repiping", "emergency-plumbing"],
  },
  {
    slug: "lake-mary",
    town: "Lake Mary",
    title: "Plumber in Lake Mary, FL | Debary Plumbers",
    description:
      "Plumber in Lake Mary, FL — Heathrow, Seminole County's premier community. Water heaters, leaks, drains & more. Fast callback from local pros.",
    h1: "Your Local Plumber in Lake Mary, FL",
    intro:
      "Lake Mary and the Heathrow community expect professional, responsive home services. Debary Plumbers connects Lake Mary homeowners with licensed plumbers who meet that standard — fast callbacks, clear communication, and quality work.",
    townDetail:
      "Lake Mary's housing ranges from established homes near Lake Mary City Hall and the SunRail station to upscale properties in Heathrow and Alaqua Lakes. Most construction dates to the 1980s–2000s with copper and CPVC piping. Hard water is a significant factor — many Lake Mary homeowners install water softeners and tankless water heaters to combat mineral buildup. The commercial corridor along International Parkway and Lake Mary Boulevard also generates service calls from small businesses needing commercial plumbing support.",
    responsePromise:
      "Lake Mary homeowners receive callbacks within 60–90 minutes. We serve Heathrow, Alaqua Lakes, Crystal Lake, and all Lake Mary residential areas.",
    faq: [
      {
        question: "Do you serve Heathrow and Alaqua Lakes?",
        answer:
          "Yes. We cover all Lake Mary neighborhoods including Heathrow, Alaqua Lakes, Crystal Lake, and areas along Lake Mary Boulevard.",
      },
      {
        question: "Is hard water a problem in Lake Mary?",
        answer:
          "Yes. Seminole County groundwater is moderately hard. Many Lake Mary homeowners benefit from water softeners and regular water heater maintenance to combat mineral deposits.",
      },
    ],
    relatedServices: ["water-heater-installation", "water-treatment", "leak-detection-repair"],
  },
];

export const SMALLER_COMMUNITIES = [
  "Enterprise",
  "Osteen",
  "Cassadaga",
  "Pierson",
  "Lake Helen",
] as const;

export function getAreaBySlug(slug: string): AreaPageData | undefined {
  return AREAS.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return AREAS.map((a) => a.slug);
}
