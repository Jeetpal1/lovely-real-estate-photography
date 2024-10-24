// app/data/pricingPlans.ts

export const pricingPlans = {
    under4000: [
      {
        title: "BASIC",
        price: 95,
        features: [
          {
            text: "Up to 35 Stunning Photos (Professionally Enhanced)",
            tooltip: "",
          },
         
          {
            text: "NEW: Unlimited Object Removal (Basic)",
            tooltip:
              "Say goodbye to unwanted objects in your photos. Perfect for minor clutter like garbage cans. For more complex removals, additional charges apply.",
          },

          { text: "24-Hour Turnaround for Quick Results", tooltip: "" },
          { text: "Free Graphic Designer for a Polished Finish", tooltip: "" },
        ],
      },
      {
        title: "PREMIUM",
        price: 145,
        features: [
          { text: "Unlimited Photos (Professionally Enhanced)", tooltip: "" },
          { text: "Cinematic Video Tours to Captivate Buyers", tooltip: "" },
          { text: "4K Drone, Aerial (Promotionally Free On the First Booking)", tooltip: "" },
        
          {
            text: "NEW: Unlimited Object Removal (Basic)",
            tooltip:
              "Say goodbye to unwanted objects in your photos. Perfect for minor clutter like garbage cans. For more complex removals, additional charges apply.",
          },
          { text: "12-Hour Turnaround for Faster Results", tooltip: "" },
          { text: "Free Graphic Designer for Superior Quality", tooltip: "" },
        ],
      },
      {
        title: "PREMIUM PLUS+",
        price: 195,
        popular: true,
        features: [
          { text: "Unlimited Photos (Professionally Enhanced)", tooltip: "" },
          { text: "Premium Cinematic Video (Realtor Intro & Outro in Video )", tooltip: "" },
          { text: "4K Drone, Aerial Photos and Video Clips Edited in the Video Walkthrough", tooltip: "" },
          {
            text: "Matterport 3D Virtual Tour ( Add on $99 ) ( 1-Month hosting Free )",
            tooltip:
              "*3D Virtual Tours include a 30-day free hosting period. Upon completion of the trial, each 3D Virtual Tour is hosted for $9.99/month plus applicable taxes and fees. You may cancel at any time. For inquiries, please contact info@lovelymedia.ca.",
          },
          {
            text: "NEW: Unlimited Object Removal (Basic)",
            tooltip:
              "Say goodbye to unwanted objects in your photos. Perfect for minor clutter like garbage cans. For more complex removals, additional charges apply.",
          },
          // { text: "Detailed Floorplans with Dimensions", tooltip: "" },
          {
            text: "Premium Twilight Photo for Breathtaking Visuals",
            tooltip: "",
          },
          // { text: "Virtual Feature Sheets", tooltip: "" },

          { text: "12-Hour Turnaround", tooltip: "" },
          { text: "Free Graphic Designer", tooltip: "" },
        ],
      },
    ],
    over4000: [
      {
        title: "PREMIUM PLUS+",
        price: 699,
        popular: true,
        features: [
          { text: "Unlimited Photos (Professionally Enhanced)", tooltip: "" },
          { text: "Cinematic Video Tours", tooltip: "" },
          {
            text: "Matterport 3D Virtual Tour (Add-On 150) (1-Month Free)",
            tooltip:
              "*3D Virtual Tours include a 30-day free hosting period. Upon completion of the trial, each 3D Virtual Tour is hosted for $9.99/month plus applicable taxes and fees. You may cancel at any time. For inquiries, please contact info@lovelymedia.ca.",
          },
          {
            text: "NEW: Unlimited Object Removal (Basic)",
            tooltip:
              "Say goodbye to unwanted objects in your photos. Perfect for minor clutter like garbage cans. For more complex removals, additional charges apply.",
          },
          // { text: "Dedicated Property Website", tooltip: "" },
          // { text: "Detailed Floorplans with Dimensions", tooltip: "" },
          { text: "Premium Twilight Photos", tooltip: "" },
          { text: "Virtual Feature Sheets", tooltip: "" },
          {
            text: "Unlimited Revisions",
            tooltip:
              "Submit as many change requests as you'd like until you're satisfied with the content. See terms of use for details.",
          },
          { text: "12-Hour Turnaround", tooltip: "" },
          { text: "Free Graphic Designer", tooltip: "" },
        ],
      },
    ],
  };
  