import type { FaqItem } from "@/lib/seo/schema";

export type ServicePageData = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  signs: string[];
  whatToExpect: string;
  whyChoose: string;
  localAngle: string;
  faq: FaqItem[];
  relatedServices: string[];
  relatedAreas: string[];
};

export const SERVICES: ServicePageData[] = [
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumber in DeBary, FL | Debary Plumbers",
    description:
      "Burst pipe or flooding in DeBary? Submit your info for an emergency plumber callback ASAP. 24/7 urgent plumbing help in Volusia County.",
    h1: "Emergency Plumbing in DeBary, FL",
    intro:
      "When a pipe bursts, a toilet overflows, or you have no water at all, every minute counts. Debary Plumbers connects you with licensed emergency plumbers who respond fast across DeBary and Volusia County. Submit the form below and mark it as an emergency — someone will call you back right away.",
    signs: [
      "Active water leak or flooding inside your home",
      "Burst or frozen pipe spraying water",
      "Sewage backup in drains or toilets",
      "No water pressure throughout the house",
      "Water heater leaking from the tank or connections",
      "Gas smell near a water heater (leave the area and call immediately)",
    ],
    whatToExpect:
      "After you submit your request, a vetted local plumber will call to assess the situation, give you immediate safety steps, and dispatch help. Most emergency callbacks happen within the hour. The plumber will shut off water if needed, stop active damage, and explain repair options with upfront pricing before work begins.",
    whyChoose:
      "We focus on speed and clarity during emergencies. No waiting on hold — submit once, get a callback. Every pro in our network is licensed, insured, and experienced with the urgent repairs DeBary homeowners face most: burst supply lines, failed water heaters, and main-line backups.",
    localAngle:
      "Central Florida homes — especially older DeBary properties built in the 1970s and 1980s — often have aging galvanized or polybutylene pipes that fail without warning. Hurricane season and occasional cold snaps add extra stress on plumbing systems. Our emergency plumbers know these local failure patterns and arrive prepared.",
    faq: [
      {
        question: "How fast can an emergency plumber reach me in DeBary?",
        answer:
          "Most homeowners receive a callback within 30–60 minutes. True emergencies — active flooding or no water — are prioritized. Response times vary by time of day and current call volume.",
      },
      {
        question: "What should I do before the plumber arrives?",
        answer:
          "Shut off the main water valve if you can locate it (usually near the water meter or where the main line enters your home). Move valuables away from standing water. Do not touch electrical outlets near water. If you smell gas, leave the home and call 911 first.",
      },
      {
        question: "How much does emergency plumbing cost in DeBary?",
        answer:
          "Emergency service calls in the DeBary area typically range from $150–$350 for the initial visit, plus parts and labor for the repair. Burst pipe repairs often run $300–$1,500 depending on location and pipe material. You will receive an estimate before work starts.",
      },
    ],
    relatedServices: ["leak-detection-repair", "water-heater-repair", "sewer-line-repair"],
    relatedAreas: ["debary", "deltona", "orange-city"],
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning in DeBary, FL | Debary Plumbers",
    description:
      "Clogged drain in DeBary? Professional drain cleaning and drain snake service. Fast callback from local plumbers. Kitchen, bathroom & main line clogs.",
    h1: "Drain Cleaning in DeBary, FL",
    intro:
      "Slow drains and stubborn clogs are more than an annoyance — they can signal a bigger blockage deeper in your line. Debary Plumbers connects you with local drain cleaning specialists who clear kitchen sinks, shower drains, toilets, and main sewer lines throughout Volusia County.",
    signs: [
      "Water backing up in sinks, tubs, or showers",
      "Gurgling sounds from drains when you flush",
      "Multiple drains clogging at the same time",
      "Foul odor coming from kitchen or bathroom drains",
      "Toilet water rising when you run the washing machine",
      "Recurring clogs that return within days of DIY fixes",
    ],
    whatToExpect:
      "A local plumber will call to understand your symptoms, then schedule a visit. They typically start with a visual inspection and may use a motorized drain snake or hydro-jetting for tougher blockages. You will know the cause — grease, roots, pipe scale, or a foreign object — before any work proceeds.",
    whyChoose:
      "Store-bought drain chemicals can damage pipes and rarely fix main-line clogs. Our network plumbers use professional-grade equipment and camera inspection when needed, so the clog is cleared properly the first time — not just pushed further down the line.",
    localAngle:
      "Florida's sandy soil and mature tree roots near older DeBary neighborhoods make root intrusion a common cause of recurring drain problems. Hard water mineral buildup in kitchen lines is another local factor. Professional drain cleaning addresses the root cause, not just the symptom.",
    faq: [
      {
        question: "How much does drain cleaning cost in DeBary?",
        answer:
          "A standard drain snake for a single fixture runs $100–$250. Main line cleaning or hydro-jetting typically costs $250–$600. Camera inspection, if recommended, adds $150–$300. Your plumber will quote before starting.",
      },
      {
        question: "Can I use chemical drain cleaners instead?",
        answer:
          "We do not recommend it. Chemical cleaners can corrode older pipes common in DeBary homes and often fail to clear main-line blockages. Professional snaking is safer and more effective.",
      },
      {
        question: "How do I prevent future clogs?",
        answer:
          "Avoid pouring grease down kitchen drains, use drain screens, and schedule periodic cleaning if you have mature trees near your sewer line. Your plumber can recommend a maintenance plan based on your home's age and pipe material.",
      },
    ],
    relatedServices: ["sewer-line-repair", "toilet-faucet-repair", "emergency-plumbing"],
    relatedAreas: ["debary", "deltona", "sanford"],
  },
  {
    slug: "water-heater-repair",
    title: "Water Heater Repair in DeBary, FL | Debary Plumbers",
    description:
      "No hot water in DeBary? Water heater repair and replacement from local plumbers. Fast callback for tank and tankless units. Serving Volusia County.",
    h1: "Water Heater Repair in DeBary, FL",
    intro:
      "A failed water heater means cold showers and disrupted daily life. Whether your tank is leaking, making strange noises, or simply not heating, Debary Plumbers connects you with technicians who repair and replace water heaters across DeBary and surrounding communities.",
    signs: [
      "No hot water or water that runs cold quickly",
      "Rusty or discolored hot water",
      "Popping, rumbling, or banging sounds from the tank",
      "Water pooling around the base of the heater",
      "Pilot light that will not stay lit (gas units)",
      "Water heater is more than 10–12 years old",
    ],
    whatToExpect:
      "After your callback, a technician will diagnose the issue — often a failed heating element, thermostat, anode rod, or sediment buildup in Florida's hard water. They will explain whether repair makes sense or if replacement is the better long-term value, with pricing before any work begins.",
    whyChoose:
      "Water heater work involves gas lines, electrical connections, and pressure relief valves — not a DIY job. Our network plumbers are licensed for both gas and electric units and pull permits when required by Volusia County code.",
    localAngle:
      "Central Florida's hard water accelerates sediment buildup inside tank water heaters, shortening their lifespan. Many DeBary homes still run 40–50 gallon tanks installed 15+ years ago. Local technicians factor in Florida humidity, water chemistry, and code requirements for seismic strapping and TPR valve discharge.",
    faq: [
      {
        question: "How much does water heater repair cost in DeBary?",
        answer:
          "Minor repairs (thermostat, heating element, anode rod) typically run $150–$400. Major repairs or full replacement range from $900–$2,500 for a standard tank unit installed. Tankless units cost more upfront but last longer.",
      },
      {
        question: "Should I repair or replace my water heater?",
        answer:
          "If your unit is under 8 years old and the repair is minor, fixing it usually makes sense. Units over 12 years old with tank corrosion or recurring problems are often better replaced. Your technician will give an honest recommendation.",
      },
      {
        question: "How long does a water heater repair take?",
        answer:
          "Most repairs are completed in 1–3 hours. Full replacements typically take half a day including removal, installation, and code inspection.",
      },
    ],
    relatedServices: ["water-heater-installation", "emergency-plumbing", "water-treatment"],
    relatedAreas: ["debary", "deltona", "lake-mary"],
  },
  {
    slug: "water-heater-installation",
    title: "Water Heater Installation in DeBary, FL | Debary Plumbers",
    description:
      "New water heater installation in DeBary, FL — tank and tankless options. Licensed local plumbers, permits handled, fast callback. Free estimate.",
    h1: "Water Heater Installation in DeBary, FL",
    intro:
      "Upgrading your water heater improves efficiency, reliability, and home value. Debary Plumbers connects you with installers who handle tank and tankless water heater installations throughout Volusia County — including permits, code compliance, and haul-away of your old unit.",
    signs: [
      "Current water heater is over 10 years old",
      "Frequent repairs on an aging unit",
      "Household has grown and hot water runs out quickly",
      "Interested in switching to a tankless system",
      "Building an addition or renovating bathrooms",
      "Energy bills are high due to an inefficient old heater",
    ],
    whatToExpect:
      "A plumber will call to discuss your household size, fuel type (gas or electric), and budget. They will recommend the right capacity — typically 40–50 gallons for a 2–3 person DeBary home — and schedule installation. Most installs are completed in one visit with all permits and inspections handled.",
    whyChoose:
      "Improper installation can cause leaks, carbon monoxide risks (gas units), or voided warranties. Our network installers follow Florida Building Code, include expansion tanks where required, and test every connection before leaving.",
    localAngle:
      "Florida's heat and humidity mean garages and utility closets where water heaters sit are harsher environments than northern climates. Tankless units are growing in popularity in newer DeBary subdivisions for their space savings and endless hot water — especially in homes with multiple bathrooms.",
    faq: [
      {
        question: "How much does water heater installation cost in DeBary?",
        answer:
          "A standard 40–50 gallon tank installation runs $900–$1,800 including the unit. Tankless installations range from $2,500–$4,500 depending on gas line upgrades needed. Your plumber provides a written estimate before work begins.",
      },
      {
        question: "Tank or tankless — which is better for Florida?",
        answer:
          "Tanks are less expensive upfront and work well for most DeBary homes. Tankless units save space and energy over time but cost more to install. A plumber will size the right option for your home and usage patterns.",
      },
      {
        question: "Do I need a permit for water heater replacement?",
        answer:
          "Yes, Volusia County requires a permit for water heater replacement. Your installer handles permitting and the final inspection as part of the job.",
      },
    ],
    relatedServices: ["water-heater-repair", "water-treatment", "repiping"],
    relatedAreas: ["debary", "orange-city", "lake-mary"],
  },
  {
    slug: "leak-detection-repair",
    title: "Leak Detection & Repair in DeBary, FL | Debary Plumbers",
    description:
      "Hidden water leak in DeBary? Professional leak detection and slab leak repair. Stop water damage fast. Local plumbers — submit for a callback.",
    h1: "Leak Detection & Repair in DeBary, FL",
    intro:
      "Not all leaks are obvious. A spike in your water bill, warm spots on the floor, or the sound of running water when everything is off can mean a hidden leak behind walls or under your slab. Debary Plumbers connects you with leak detection specialists who find and fix leaks before they cause major damage.",
    signs: [
      "Unexplained increase in your water bill",
      "Sound of running water when all fixtures are off",
      "Warm or damp spots on floors or walls",
      "Mold or mildew smell in specific areas",
      "Low water pressure in one part of the house",
      "Cracks in foundation or settling near plumbing lines",
    ],
    whatToExpect:
      "A specialist will call to discuss your symptoms and may use electronic leak detection, thermal imaging, or pressure testing to pinpoint the leak without unnecessary demolition. Once located, they will explain repair options — spot repair, re-route, or repipe — with costs before work starts.",
    whyChoose:
      "Guessing at leak locations leads to expensive exploratory demolition. Our network uses non-invasive detection methods first, saving DeBary homeowners time and money while stopping water damage early.",
    localAngle:
      "Slab-on-grade construction is common in DeBary and Deltona, making under-slab copper and CPVC leaks a real risk as pipes age. Florida's shifting sandy soil can stress buried lines over decades. Early detection prevents foundation damage and mold — both costly in our humid climate.",
    faq: [
      {
        question: "How much does leak detection cost in DeBary?",
        answer:
          "Electronic leak detection typically runs $150–$400. Slab leak repair ranges from $500–$3,000 depending on location, access, and whether re-piping is needed. Your specialist quotes after locating the leak.",
      },
      {
        question: "Does homeowners insurance cover slab leaks?",
        answer:
          "Coverage varies by policy. Many Florida policies cover sudden pipe bursts but exclude slow leaks. Document the damage and contact your insurer while the plumber contains the leak.",
      },
      {
        question: "How long does leak detection take?",
        answer:
          "Most residential leak detections are completed in 1–2 hours. Repairs may require a follow-up visit depending on complexity.",
      },
    ],
    relatedServices: ["emergency-plumbing", "repiping", "water-treatment"],
    relatedAreas: ["debary", "deltona", "deland"],
  },
  {
    slug: "repiping",
    title: "Repiping in DeBary, FL | Debary Plumbers",
    description:
      "Whole-house repiping in DeBary, FL. Replace galvanized, polybutylene, or corroded pipes. Licensed plumbers — get a callback for a free estimate.",
    h1: "Repiping in DeBary, FL",
    intro:
      "If your home has frequent leaks, discolored water, or low pressure throughout, the problem may be your pipes — not individual fixtures. Debary Plumbers connects homeowners with repiping specialists who replace aging plumbing systems with modern PEX or copper throughout Volusia County.",
    signs: [
      "Frequent pinhole leaks in multiple locations",
      "Rusty or brown water from multiple faucets",
      "Low water pressure house-wide",
      "Home built before 1990 with original galvanized pipes",
      "Polybutylene (gray plastic) pipes visible in crawl space",
      "Plumber recommends repiping after repeated spot repairs",
    ],
    whatToExpect:
      "A repiping specialist will inspect your current pipe material, layout, and access points, then provide a whole-house estimate. Most DeBary repipes take 2–5 days depending on home size. Water is restored each evening during multi-day projects.",
    whyChoose:
      "Repiping is a major investment — you want a licensed contractor who pulls permits, follows code, and uses quality materials. Our network plumbers provide written warranties on materials and labor.",
    localAngle:
      "Many DeBary homes from the 1970s–1990s were built with galvanized steel or polybutylene — both now known to fail prematurely. Florida's mineral-rich water accelerates corrosion in older metals. A full repipe with PEX is the long-term fix that ends the cycle of recurring leaks.",
    faq: [
      {
        question: "How much does whole-house repiping cost in DeBary?",
        answer:
          "A typical 1,500–2,000 sq ft DeBary home runs $4,000–$15,000 depending on pipe material (PEX vs. copper), home layout, and number of fixtures. Your specialist provides a detailed written estimate after inspection.",
      },
      {
        question: "PEX or copper — which should I choose?",
        answer:
          "PEX is flexible, corrosion-resistant, and less expensive — ideal for most Florida homes. Copper lasts longer and handles UV exposure but costs more. Your plumber will recommend based on your home and budget.",
      },
      {
        question: "Will I have water during the repipe?",
        answer:
          "Reputable contractors restore water at the end of each work day. You may have brief interruptions while individual sections are switched over.",
      },
    ],
    relatedServices: ["leak-detection-repair", "water-heater-installation", "sewer-line-repair"],
    relatedAreas: ["debary", "orange-city", "sanford"],
  },
  {
    slug: "toilet-faucet-repair",
    title: "Toilet & Faucet Repair in DeBary, FL | Debary Plumbers",
    description:
      "Running toilet or leaky faucet in DeBary? Fast repair and installation from local plumbers. Stop wasting water — submit for a callback today.",
    h1: "Toilet & Faucet Repair in DeBary, FL",
    intro:
      "A running toilet can waste hundreds of gallons per day. A dripping faucet drives up your water bill and annoys everyone in the house. Debary Plumbers connects you with local plumbers who repair and replace toilets, faucets, and fixtures quickly across Volusia County.",
    signs: [
      "Toilet runs constantly or cycles on its own",
      "Weak or incomplete toilet flush",
      "Faucet drips even when handles are tight",
      "Low water pressure at a single fixture",
      "Toilet rocks, leaks at the base, or wobbles",
      "Outdated fixtures you want to upgrade",
    ],
    whatToExpect:
      "A plumber will call to understand the issue and schedule a visit. Most toilet repairs — flappers, fill valves, wax rings — are done in under an hour. Faucet repairs or replacements typically take 30–90 minutes. You will know the cost before work begins.",
    whyChoose:
      "Fixture repairs look simple but improper installs cause hidden leaks and water damage under cabinets and subfloors. Our network plumbers fix it right and check for related issues like supply line corrosion or valve failures.",
    localAngle:
      "Hard Central Florida water wears out faucet cartridges and toilet fill valves faster than soft-water regions. If you are replacing fixtures, WaterSense-rated models help combat the higher water bills common in Volusia County during summer irrigation season.",
    faq: [
      {
        question: "How much does toilet repair cost in DeBary?",
        answer:
          "Simple repairs (flapper, fill valve) run $75–$200. Wax ring replacement or toilet reset costs $150–$300. Full toilet replacement with installation is $250–$500 for the labor plus the unit.",
      },
      {
        question: "How much does faucet repair or replacement cost?",
        answer:
          "Minor repairs start around $75–$150. Full faucet replacement including the fixture ranges from $150–$400 depending on the model and number of holes/sinks.",
      },
      {
        question: "Can a running toilet increase my water bill?",
        answer:
          "Yes — a toilet running 24/7 can waste 200+ gallons per day, adding $50–$100+ per month to your bill. Fixing it promptly pays for itself.",
      },
    ],
    relatedServices: ["drain-cleaning", "water-heater-repair", "leak-detection-repair"],
    relatedAreas: ["debary", "deltona", "orange-city"],
  },
  {
    slug: "sewer-line-repair",
    title: "Sewer Line Repair in DeBary, FL | Debary Plumbers",
    description:
      "Sewer line problems in DeBary? Camera inspection, repair, and replacement from local plumbers. Fast callback for backups and slow drains.",
    h1: "Sewer Line Repair in DeBary, FL",
    intro:
      "Sewer line failures are serious — sewage backups pose health risks and can damage your home. Debary Plumbers connects you with sewer specialists who diagnose, repair, and replace sewer lines using camera inspection and trenchless methods when possible.",
    signs: [
      "Multiple drains backing up simultaneously",
      "Sewage smell in the yard or near the foundation",
      "Lush green patches in the lawn above the sewer line",
      "Gurgling toilets when using other fixtures",
      "Frequent main-line clogs despite drain cleaning",
      "Home is 30+ years old with original clay or cast iron sewer pipe",
    ],
    whatToExpect:
      "A specialist will call to assess symptoms and likely recommend a camera inspection to see inside the line. You will see the footage and get a clear diagnosis — root intrusion, bellied pipe, collapse, or corrosion — along with repair or replacement options and pricing.",
    whyChoose:
      "Sewer work requires specialized equipment and permitting. Our network plumbers use video inspection to avoid unnecessary digging and offer trenchless pipe lining or bursting when the line can be saved without a full excavation.",
    localAngle:
      "Mature oak and pine trees along DeBary's established streets send roots into aging clay and cast iron sewer lines. Sandy soil shifting over time can create low spots (bellies) where waste accumulates. Camera inspection is standard practice before any repair recommendation in our area.",
    faq: [
      {
        question: "How much does sewer line repair cost in DeBary?",
        answer:
          "Camera inspection runs $150–$300. Spot repairs range from $500–$2,000. Full line replacement can cost $3,000–$10,000+ depending on length, depth, and landscaping. Trenchless methods may reduce excavation costs.",
      },
      {
        question: "What is trenchless sewer repair?",
        answer:
          "Trenchless methods — pipe lining or pipe bursting — repair or replace the sewer line with minimal digging. They work well for many DeBary residential lines and save your driveway and landscaping.",
      },
      {
        question: "Is a sewer backup an emergency?",
        answer:
          "Yes. Raw sewage inside your home is a health hazard. Submit your request and mark it as an emergency for the fastest callback.",
      },
    ],
    relatedServices: ["drain-cleaning", "emergency-plumbing", "repiping"],
    relatedAreas: ["debary", "sanford", "deland"],
  },
  {
    slug: "water-treatment",
    title: "Water Softener & Filtration in DeBary, FL | Debary Plumbers",
    description:
      "Hard water in DeBary? Water softener and filtration installation from local plumbers. Protect pipes and appliances. Submit for a callback.",
    h1: "Water Treatment in DeBary, FL",
    intro:
      "Central Florida is known for hard water — the minerals that leave white buildup on fixtures, shorten appliance life, and make soap less effective. Debary Plumbers connects you with water treatment specialists who install softeners, filtration systems, and whole-house filters across Volusia County.",
    signs: [
      "White scale buildup on faucets and showerheads",
      "Spots on dishes and glassware after washing",
      "Dry skin and hair despite using moisturizer",
      "Water heater failing earlier than expected",
      "Soap does not lather well",
      "Sulfur or chlorine taste in tap water",
    ],
    whatToExpect:
      "A specialist will call to discuss your water quality concerns and may recommend a water test. Based on hardness levels — common in DeBary — they will size a softener or filtration system for your household and install it at the main supply line.",
    whyChoose:
      "Correctly sized water treatment protects your plumbing investment — especially after a repipe or water heater install. Our network installers handle bypass valves, drain connections, and regeneration settings so the system works maintenance-free.",
    localAngle:
      "Volusia County groundwater hardness often exceeds 10–15 grains per gallon. DeBary homeowners who install softeners typically see longer water heater life, fewer faucet cartridge replacements, and noticeably better water quality within the first week.",
    faq: [
      {
        question: "Do I need a water softener in DeBary?",
        answer:
          "If you notice scale buildup, spotty dishes, or appliances failing early, a softener is likely worth it. A water test confirms hardness levels. Many DeBary homeowners install softeners after moving from northern states with softer water.",
      },
      {
        question: "How much does water softener installation cost?",
        answer:
          "A standard whole-house softener system runs $800–$2,500 installed, depending on capacity and brand. Whole-house filtration adds $500–$1,500. Your specialist quotes after assessing your home size and water test results.",
      },
      {
        question: "How often does a water softener need maintenance?",
        answer:
          "Add salt every 4–8 weeks depending on usage. Annual service checks keep the system efficient. Your installer will walk you through maintenance during installation.",
      },
    ],
    relatedServices: ["water-heater-installation", "repiping", "toilet-faucet-repair"],
    relatedAreas: ["debary", "lake-mary", "deltona"],
  },
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
