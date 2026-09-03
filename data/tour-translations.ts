import type { Tour } from "./promotions"

type TourTranslation = Pick<
  Tour,
  | "title"
  | "duration"
  | "description"
  | "discount"
  | "features"
  | "featureIcons"
  | "activities"
  | "activityIcons"
  | "includes"
  | "recommendations"
  | "itinerary"
>

type TourTranslations = Partial<Record<Tour["slug"], TourTranslation>>

export const englishTourTranslations: TourTranslations = {
  "puerto-pizarro-completo": {
    title: "Complete Puerto Pizarro Tour",
    duration: "2–3 hours",
    discount: "Most complete",
    description:
      "Explore mangroves, Love Island, Bird Island, the crocodile breeding centre and the mouth of the sea in one trip.",
    features: ["Love Island", "Bird Island", "Mangroves", "Crocodile breeding centre", "Mouth of the sea"],
    featureIcons: {
      "Love Island": "island",
      "Bird Island": "bird",
      Mangroves: "mangrove",
      "Crocodile breeding centre": "crocodile",
      "Mouth of the sea": "sea",
    },
    activities: [
      "Estuary cruise",
      "Birdwatching",
      "Visit to the breeding centre",
      "View of the mouth of the sea",
      "Time on Love Island",
      "Photo stops",
      "Beach time",
      "Water recreation",
    ],
    activityIcons: {
      "Estuary cruise": "boat",
      Birdwatching: "bird",
      "Visit to the breeding centre": "crocodile",
      "View of the mouth of the sea": "sea",
      "Time on Love Island": "island",
      "Photo stops": "camera",
      "Beach time": "beach",
      "Water recreation": "kayak",
    },
    includes: ["Life jacket", "Tour boat", "Local guide", "Interpretive stops", "Tide-based scheduling"],
    recommendations: [
      "Bring sunscreen",
      "Wear a cap or hat",
      "Bring cash for personal expenses",
      "Confirm the departure time according to the tide",
      "Bring insect repellent",
    ],
    itinerary: [
      "Departure from Puerto Pizarro tourist pier",
      "Cruise through mangrove channels and nearby islands",
      "Stop to watch birds on Bird Island",
      "Visit to the crocodile breeding centre",
      "View of the entrance or mouth of the sea",
      "Landing on Love Island",
      "Return to the tourist pier",
    ],
  },
  "solo-visita-a-la-isla": {
    title: "Love Island Visit",
    duration: "2 hours",
    description:
      "Ideal for travellers who want to reach Love Island, enjoy the marine surroundings and organise their time freely.",
    features: ["Love Island", "Estuary views"],
    featureIcons: {
      "Love Island": "island",
      "Estuary views": "view",
    },
    activities: ["Estuary cruise", "Time on Love Island", "Mangrove views", "Photo stops", "Beach time", "Water recreation"],
    activityIcons: {
      "Estuary cruise": "boat",
      "Time on Love Island": "island",
      "Mangrove views": "mangrove",
      "Photo stops": "camera",
      "Beach time": "beach",
      "Water recreation": "kayak",
    },
    includes: ["Life jacket", "Round-trip boat transfer", "Boarding guidance", "Schedule coordination"],
    recommendations: ["Arrange your return in advance", "Bring water", "Check tide conditions"],
    itinerary: [
      "Meet at the tourist pier",
      "Board and transfer to the island",
      "Time on Love Island",
      "Return to the tourist pier",
    ],
  },
  "isla-pajaros-manglares": {
    title: "Love Island, Bird Island & Mangroves",
    duration: "1–2 hours",
    description:
      "A scenic route to visit Love Island, watch birds on Bird Island and cruise through the mangroves.",
    features: ["Love Island", "Bird Island", "Mangroves"],
    featureIcons: {
      "Love Island": "island",
      "Bird Island": "bird",
      Mangroves: "mangrove",
    },
    activities: ["Estuary cruise", "Birdwatching", "Mangrove views", "Time on Love Island", "Photo stops", "Beach time", "Water recreation"],
    activityIcons: {
      "Estuary cruise": "boat",
      Birdwatching: "bird",
      "Mangrove views": "mangrove",
      "Time on Love Island": "island",
      "Photo stops": "camera",
      "Beach time": "beach",
      "Water recreation": "kayak",
    },
    includes: ["Life jacket", "Tour boat", "Local guide", "Interpretive stops", "Tide-based scheduling"],
    recommendations: ["Bring a charged camera or phone", "Wear light clothing", "Do not feed birds with unauthorised food"],
    itinerary: [
      "Departure from Puerto Pizarro tourist pier",
      "Cruise through mangrove channels and nearby islands",
      "Stop to watch birds on Bird Island",
      "Landing on Love Island",
      "Return to the tourist pier",
    ],
  },
  "islas-manglares-cocodrilos": {
    title: "Love Island, Mangroves & Crocodiles",
    duration: "2 hours",
    description:
      "Visit Love Island, cruise through mangrove channels and stop at the crocodile breeding centre.",
    features: ["Love Island", "Mangroves", "Crocodile breeding centre"],
    featureIcons: {
      "Love Island": "island",
      Mangroves: "mangrove",
      "Crocodile breeding centre": "crocodile",
    },
    activities: ["Estuary cruise", "Mangrove views", "Visit to the breeding centre", "Time on Love Island", "Photo stops", "Beach time", "Water recreation"],
    activityIcons: {
      "Estuary cruise": "boat",
      "Mangrove views": "mangrove",
      "Visit to the breeding centre": "crocodile",
      "Time on Love Island": "island",
      "Photo stops": "camera",
      "Beach time": "beach",
      "Water recreation": "kayak",
    },
    includes: ["Life jacket", "Tour boat", "Local guide", "Interpretive stops", "Tide-based scheduling"],
    recommendations: ["Bring insect repellent", "Wear comfortable shoes", "Confirm departure according to the tide"],
    itinerary: [
      "Departure from Puerto Pizarro tourist pier",
      "Cruise through mangrove channels and nearby islands",
      "Visit to the crocodile breeding centre",
      "Landing on Love Island",
      "Return to the tourist pier",
    ],
  },
  "pajaros-y-manglares": {
    title: "Birds & Mangroves",
    duration: "1 hour",
    description:
      "An accessible outing to watch birds and cruise through Puerto Pizarro's mangrove channels.",
    features: ["Love Island", "Bird Island", "Mangroves", "Crocodile breeding centre", "Mouth of the sea"],
    featureIcons: {
      "Bird Island": "bird",
      Mangroves: "mangrove",
    },
    activities: ["Estuary cruise", "Birdwatching", "Mangrove views", "Photo stops"],
    activityIcons: {
      "Estuary cruise": "boat",
      Birdwatching: "bird",
      "Mangrove views": "mangrove",
      "Photo stops": "camera",
    },
    includes: ["Life jacket", "Local guide", "Interpretive stops", "Mangrove area cruise", "Tide-based scheduling"],
    recommendations: ["Bring a charged phone or camera", "Wear a cap", "Avoid making noise near birds", "Confirm the schedule before arriving"],
    itinerary: [
      "Departure from Puerto Pizarro tourist pier",
      "Cruise through mangrove channels and nearby islands",
      "Stop to watch birds on Bird Island",
      "Return to the tourist pier",
    ],
  },
  "manglares-y-cocodrilos": {
    title: "Mangroves & Crocodiles",
    duration: "1 hour",
    description:
      "A practical mangrove cruise with a visit to the crocodile breeding centre, ideal for a first experience.",
    features: ["Mangroves", "Crocodile breeding centre"],
    featureIcons: {
      Mangroves: "mangrove",
      "Crocodile breeding centre": "crocodile",
    },
    activities: ["Estuary cruise", "Mangrove views", "Visit to the breeding centre", "Photo stops"],
    activityIcons: {
      "Estuary cruise": "boat",
      "Mangrove views": "mangrove",
      "Visit to the breeding centre": "crocodile",
      "Photo stops": "camera",
    },
    includes: ["Life jacket", "Interpretive stops", "Local guide", "Breeding centre stop", "Tide-based scheduling"],
    recommendations: ["Bring insect repellent", "Wear light clothing", "Follow your guide's instructions", "Check tide conditions"],
    itinerary: [
      "Departure from the tourist pier",
      "Cruise through mangrove channels",
      "Visit to the crocodile breeding centre",
      "Return to Puerto Pizarro",
    ],
  },
}
