export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
  relatedService: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "plumber-cost-debary-fl-2026",
    title: "How Much Does a Plumber Cost in DeBary, FL? (2026 Price Guide)",
    description:
      "2026 plumber cost guide for DeBary, FL — service call fees, common repair prices, emergency rates, and tips to avoid overpaying. Updated for Volusia County.",
    datePublished: "2026-03-01",
    readTime: "8 min read",
    relatedService: "emergency-plumbing",
    sections: [
      {
        heading: "Average Plumber Costs in DeBary",
        paragraphs: [
          "If you are searching for a plumber in DeBary, FL, the first question is usually: how much will this cost? In 2026, most DeBary homeowners pay a service call fee of $75–$150, plus parts and labor for the actual repair. Emergency and after-hours calls add $50–$150 to the base fee.",
          "Below is a realistic price range for the most common plumbing jobs we see in DeBary and Volusia County. These are estimates — your plumber will provide an exact quote after diagnosing the issue.",
        ],
      },
      {
        heading: "Common Repair Price Ranges",
        paragraphs: [
          "Drain cleaning (single fixture): $100–$250. Main line drain cleaning: $250–$600. Toilet repair: $75–$200. Faucet repair or replacement: $150–$400. Water heater repair: $150–$400. Water heater replacement (installed): $900–$2,500. Leak detection: $150–$400. Slab leak repair: $500–$3,000. Whole-house repiping: $4,000–$15,000.",
          "Emergency plumbing calls — burst pipes, active flooding, sewage backups — typically start at $150–$350 for the service visit, with repair costs on top. Marking your request as an emergency through our form gets you the fastest callback.",
        ],
      },
      {
        heading: "What Affects the Price?",
        paragraphs: [
          "Several factors influence what you pay: time of day (nights and weekends cost more), pipe material and accessibility, permit requirements for water heater and sewer work, and whether the job requires specialized equipment like camera inspection or hydro-jetting.",
          "DeBary homes built before 1990 often have galvanized or polybutylene pipes that are harder to repair and may need full replacement — which costs more upfront but prevents recurring leak bills.",
        ],
      },
      {
        heading: "How to Get the Best Value",
        paragraphs: [
          "Always get a written estimate before work begins. Ask what is included in the service call fee — some plumbers credit it toward the repair. For non-emergencies, getting a callback through Debary Plumbers lets you compare options without sitting on hold.",
          "Do not ignore small leaks. A $150 faucet repair today prevents a $3,000 water damage claim tomorrow. And never hire an unlicensed handyman for work that requires a Florida plumbing permit.",
        ],
      },
      {
        heading: "Get a Fast, Free Callback",
        paragraphs: [
          "Ready for a quote? Submit the form on our homepage or contact page. A licensed DeBary-area plumber will call you back, usually within the hour, with an honest assessment and upfront pricing.",
        ],
      },
    ],
  },
  {
    slug: "what-to-do-when-pipe-bursts",
    title: "What to Do When a Pipe Bursts: First 10 Minutes",
    description:
      "A burst pipe in your DeBary home? Follow these first 10 minutes steps to limit water damage, then get an emergency plumber callback fast.",
    datePublished: "2026-03-05",
    readTime: "6 min read",
    relatedService: "emergency-plumbing",
    sections: [
      {
        heading: "Step 1: Shut Off the Water (Minutes 0–2)",
        paragraphs: [
          "Locate your main water shut-off valve immediately. In most DeBary homes, it is near the water meter at the street, in the garage, or where the main line enters the house. Turn the valve clockwise to stop water flow.",
          "If you cannot find the main valve, shut off the fixture supply line closest to the leak. Every toilet and sink has a small valve underneath.",
        ],
      },
      {
        heading: "Step 2: Turn Off Electricity Near Water (Minutes 2–3)",
        paragraphs: [
          "If water is near electrical outlets, appliances, or your electrical panel, turn off power to the affected area at the breaker box. Do not touch electrical equipment while standing in water.",
        ],
      },
      {
        heading: "Step 3: Contain the Water (Minutes 3–7)",
        paragraphs: [
          "Use towels, buckets, and a wet/dry vacuum to contain standing water. Move furniture, rugs, and valuables away from the wet area. Open windows and run fans if safe to do so — Florida humidity makes fast drying critical to prevent mold.",
        ],
      },
      {
        heading: "Step 4: Document for Insurance (Minutes 7–9)",
        paragraphs: [
          "Take photos and video of the damage and the broken pipe before cleanup. Note the time the burst occurred. Contact your homeowners insurance company — sudden pipe bursts are often covered, while slow leaks may not be.",
        ],
      },
      {
        heading: "Step 5: Call for an Emergency Plumber (Minute 10)",
        paragraphs: [
          "Submit your request through Debary Plumbers and check 'This is an emergency.' A licensed plumber will call you back ASAP to dispatch repair help. Do not wait — every minute of running water adds to damage and repair costs.",
          "While waiting, do not attempt a permanent repair yourself. Temporary wrapping with rubber and a clamp can slow a small leak, but burst pipes need professional replacement.",
        ],
      },
      {
        heading: "Preventing Future Bursts in DeBary Homes",
        paragraphs: [
          "Many DeBary homes built in the 1970s–1990s have polybutylene or galvanized pipes prone to sudden failure. If your home has had multiple leaks, ask a plumber about repiping options. Insulating exposed pipes in attics and garages also helps during the occasional Central Florida freeze.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
