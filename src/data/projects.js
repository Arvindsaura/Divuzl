const projects = [
  {
    slug: "sprite",
    title: "Sprite Campaign",
    description: `Vibrant rebranding for Sprite.

**Objective:**
To modernize Sprite’s visual identity and align it with Gen Z sensibilities without losing its iconic freshness.

**Execution:**
We revamped Sprite’s logo with a more energetic look, created a bold new color palette, and designed hyper-visual outdoor ads and digital banners. Social campaigns included interactive challenges and AR filters that resonated with younger audiences.

**Impact:**
The campaign dramatically improved brand recall and engagement among youth.`,
    image: "/images/project0.jpg",
    service: "Branding",
    industry: "FMCG",
    stats: [
      { label: "Reach", value: 120000 },
      { label: "Brand Recall Increase (%)", value: 28 },
      { label: "Ad Engagement Rate", value: 4.5 },
    ],
  },
  {
    slug: "nike-airdrop",
    title: "Nike Airdrop Strategy",
    description: `A tech-driven Web3 strategy to launch Nike’s new NFT sneakers.

**Objective:**
Enter the Web3 space and connect with sneakerheads and NFT enthusiasts through digital innovation.

**Execution:**
We launched a gated airdrop strategy through exclusive partner communities and blockchain influencers. The NFTs unlocked early access to limited-edition sneakers and IRL rewards.

**Impact:**
The campaign went viral, generating a waitlist of tens of thousands and strong resale interest for the NFTs.`,
    image: "/images/project1.jpg",
    service: "Strategy",
    industry: "Fashion",
    stats: [
      { label: "NFTs Minted", value: 9500 },
      { label: "Drop Conversion Rate (%)", value: 17.3 },
      { label: "Waitlist Signups", value: 32000 },
    ],
  },
  {
    slug: "zomato-reel-ads",
    title: "Zomato Insta Reels",
    description: `Short-form reel campaigns that boosted engagement by 300%.

**Objective:**
Tap into Instagram Reels to increase daily active engagement and improve food brand visibility.

**Execution:**
Created meme-style, trending audio-driven reels featuring influencers and food lovers. The content was crafted to be snackable, funny, and share-worthy.

**Impact:**
Reel CTR and shares far exceeded benchmarks. Engagement and new user acquisition soared in Tier 1 cities.`,
    image: "/images/project2.jpg",
    service: "Advertising",
    industry: "Tech",
    stats: [
      { label: "Video Views", value: 1450000 },
      { label: "CTR (%)", value: 6.2 },
      { label: "Conversion Uplift (%)", value: 38 },
    ],
  },
  {
    slug: "amul-identity-refresh",
    title: "Amul Identity Refresh",
    description: `Modernized the identity of Amul while keeping its legacy intact.

**Objective:**
Refresh Amul’s brand look while preserving its legacy appeal and rural charm.

**Execution:**
We retained core design elements but modernized the color schemes, typography, and visual patterns. The packaging redesign rolled out across multiple SKUs and was supported by a storytelling-led launch.

**Impact:**
The refresh improved in-store impact and led to strong positive sentiment online.`,
    image: "/images/project3.jpg",
    service: "Branding",
    industry: "FMCG",
    stats: [
      { label: "Logo Iterations", value: 25 },
      { label: "Positive Sentiment (%)", value: 91 },
      { label: "Packaging Redesigns", value: 18 },
    ],
  },
  {
    slug: "nykaa-social-strategy",
    title: "Nykaa GenZ Social Strategy",
    description: `Created a bold new content direction for GenZ consumers.

**Objective:**
Make Nykaa culturally relevant to GenZ across platforms like Instagram, YouTube Shorts, and Snapchat.

**Execution:**
Built an in-house creator squad to generate low-fi, high-impact content. Ran platform-specific series such as “Get Ready With Nykaa” and “Budget Glam”.

**Impact:**
Follower growth accelerated, and engagement became more community-driven.`,
    image: "/images/project4.jpg",
    service: "Strategy",
    industry: "Fashion",
    stats: [
      { label: "Content Pieces Created", value: 120 },
      { label: "GenZ Follower Growth", value: 46000 },
      { label: "Engagement Rate (%)", value: 7.8 },
    ],
  },
  {
    slug: "samsung-ads-v1",
    title: "Samsung Flagship Ads",
    description: `High-conversion ad creatives for the Galaxy S series launch.

**Objective:**
Drive conversions and excitement for Samsung’s flagship series with modern creative assets.

**Execution:**
We developed multiple ad variants targeting different audience segments and tested them across platforms. Campaign assets were optimized for mobile and included storytelling-led short videos.

**Impact:**
Massive impressions, excellent ROAS, and high lead conversion across multiple devices and geographies.`,
    image: "/images/project5.jpg",
    service: "Advertising",
    industry: "Tech",
    stats: [
      { label: "Ad Impressions", value: 2100000 },
      { label: "Lead Conversions", value: 43000 },
      { label: "ROAS", value: 5.6 },
    ],
  },
  {
    slug: "samsung-ads-v2",
    title: "Samsung Flagship Ads",
    description: `High-conversion ad creatives for the Galaxy S series launch.

**Objective:**
Increase awareness and engagement through impactful visuals and call-to-actions.

**Execution:**
Created immersive ad formats for YouTube and social platforms, using 3D mockups and influencer integration to drive traction.

**Impact:**
Viewers spent longer on ads, CTR improved, and brand preference lifted significantly post-campaign.`,
    image: "/images/project6.jpg",
    service: "Advertising",
    industry: "Tech",
    stats: [
      { label: "CTR (%)", value: 8.1 },
      { label: "Video Watch Time (hrs)", value: 3200 },
      { label: "Sales Lift (%)", value: 12 },
    ],
  },
  {
    slug: "sprite-alt",
    title: "Sprite Campaign",
    description: `Vibrant rebranding for Sprite.

**Objective:**
Boost shelf presence and emotional connect with the youth segment.

**Execution:**
Executed a 360° branding strategy that included influencer-led unboxings, unique bottle shapes, and crowd-sourced slogans.

**Impact:**
The campaign ranked high on recall, with noticeable growth in market share within metro cities.`,
    image: "/images/project0.jpg",
    service: "Branding",
    industry: "FMCG",
    stats: [
      { label: "Youth Reach", value: 68000 },
      { label: "Slogan Recall (%)", value: 79 },
      { label: "Shelf Impact Score", value: 9.2 },
    ],
  },
  {
    slug: "nike-airdrop-alt",
    title: "Nike Airdrop Strategy",
    description: `A tech-driven Web3 strategy to launch Nike’s new NFT sneakers.

**Objective:**
Monetize NFT hype and convert sneakerheads into brand ambassadors.

**Execution:**
Introduced dynamic NFTs tied to real-world perks like sneaker discounts, early drops, and private Discord access.

**Impact:**
NFT revenue exceeded expectations and social shareability spiked after key influencer endorsements.`,
    image: "/images/project1.jpg",
    service: "Strategy",
    industry: "Fashion",
    stats: [
      { label: "NFT Revenue ($)", value: 480000 },
      { label: "Social Shares", value: 82000 },
      { label: "Campaign Reach", value: 1.2e6 },
    ],
  },
  {
    slug: "zomato-reel-ads-alt",
    title: "Zomato Insta Reels",
    description: `Short-form reel campaigns that boosted engagement by 300%.

**Objective:**
Create bingeable content loops to increase brand exposure.

**Execution:**
Designed short skits and mini-challenges with delivery riders and food themes that aligned with GenZ humor.

**Impact:**
Reel watch duration increased and Zomato app installs hit a new weekly high.`,
    image: "/images/project2.jpg",
    service: "Advertising",
    industry: "Tech",
    stats: [
      { label: "Avg Watch Duration (sec)", value: 27 },
      { label: "Reel Shares", value: 58000 },
      { label: "New Users", value: 32000 },
    ],
  },
  {
    slug: "amul-identity-refresh-alt",
    title: "Amul Identity Refresh",
    description: `Modernized the identity of Amul while keeping its legacy intact.

**Objective:**
Scale brand identity refresh across retail chains and digital.

**Execution:**
Created brand playbooks for franchise partners and trained 200+ vendors. Introduced QR-based product stories.

**Impact:**
Customer satisfaction scores rose post-launch and packaging recall surveys showed major uplift.`,
    image: "/images/project3.jpg",
    service: "Branding",
    industry: "FMCG",
    stats: [
      { label: "Stores Rebranded", value: 470 },
      { label: "Product Packaging Designed", value: 32 },
      { label: "Customer Satisfaction (%)", value: 89 },
    ],
  },
  {
    slug: "nykaa-social-strategy-alt",
    title: "Nykaa GenZ Social Strategy",
    description: `Created a bold new content direction for GenZ consumers.

**Objective:**
Redefine Nykaa’s voice through creator economy and meme culture.

**Execution:**
Produced viral formats and started community-first campaigns like #NykaaNoFilter and #BareItBold.

**Impact:**
Drove organic IG follower growth and sparked massive user-generated content.`,
    image: "/images/project4.jpg",
    service: "Strategy",
    industry: "Fashion",
    stats: [
      { label: "Brand Mentions", value: 25000 },
      { label: "IG Followers Gained", value: 33000 },
      { label: "Shareability Score", value: 8.4 },
    ],
  }
];

export default projects;