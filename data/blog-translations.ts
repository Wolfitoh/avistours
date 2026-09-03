import type { BlogPost } from "./blogs"

export type BlogPostTranslation = Omit<BlogPost, "slug" | "image" | "featured">

// Los artículos se agregan aquí únicamente cuando su traducción editorial está
// revisada. Así la versión inglesa nunca presenta contenido español ni una
// traducción automática a los buscadores o a los visitantes.
export const englishBlogTranslations: Partial<Record<string, BlogPostTranslation>> = {
    "mareas-en-puerto-pizarro": {
        title: "Tides in Puerto Pizarro: the best time for a mangrove tour",
        excerpt: "Learn how tides shape Puerto Pizarro and how to choose the best time for a Tumbes mangrove tour.",
        category: "Tides",
        location: "Puerto Pizarro, Tumbes",
        readTime: "7 min read",
        date: "7 Apr 2026",
        author: "Avis Tours team",
        highlights: [
            "Tides influence how boats travel through the mangroves",
            "The best time depends on the type of experience you want",
            "A local operator adjusts departures for the tide and weather",
        ],
        body: [
            {
                type: "paragraph",
                text: "Tides in Puerto Pizarro are a key part of any Tumbes mangrove tour. It is not simply a matter of getting on a boat: choosing the right time helps you enjoy the scenery, the ride and wildlife watching more fully. At Avis Tours, each departure is coordinated with the tide, weather and estuary conditions in mind."
            },
            {
                type: "heading",
                text: "Why are tides important in Puerto Pizarro?"
            },
            {
                type: "paragraph",
                text: "Water level directly affects access to mangrove channels, how easy it is to navigate and what you can see along the way. On a Puerto Pizarro tour, understanding the tide can turn an average boat ride into a much more memorable experience."
            },
            {
                type: "image",
                src: "/images-optimized/galeria/galeria31.webp",
                alt: "Boat tour through Puerto Pizarro mangroves at high tide",
                caption: "Tide times change every day, so we always recommend confirming them before booking your tour."
            },
            {
                type: "heading",
                text: "The difference between high tide and low tide"
            },
            {
                type: "paragraph",
                text: "At high tide, mangrove channels are deeper, making the boat ride smoother and more comfortable. It is a great choice for a relaxed cruise. At low tide, the scenery changes completely: mangrove roots, bird feeding areas and ecosystem details that are usually hidden become visible."
            },
            {
                type: "list",
                items: [
                    "High tide: smoother boating and wider access to channels.",
                    "Low tide: better views of birds and mangrove roots.",
                    "Both options offer different and worthwhile experiences."
                ]
            },
            {
                type: "heading",
                text: "What is the best time for a Puerto Pizarro tour?"
            },
            {
                type: "paragraph",
                text: "There is no single best time for everyone. The ideal time for a Puerto Pizarro mangrove tour depends on the experience you prefer. That is why it is best to check with a local operator who can recommend a time based on that day’s tide."
            },
            {
                type: "quote",
                text: "The best time for a Puerto Pizarro tour is not always the earliest one; it is the one that coincides with the best tide.",
                author: "Avis Tours team"
            },
            {
                type: "heading",
                text: "Recommendations before booking your tour"
            },
            {
                type: "list",
                items: [
                    "Check the tide time before choosing your tour.",
                    "Avoid booking without checking weather conditions.",
                    "Confirm boat availability.",
                    "Ask which experience suits your travel plans best."
                ]
            },
            {
                type: "heading",
                text: "Book your tour at the best time"
            },
            {
                type: "paragraph",
                text: "At Avis Tours, we coordinate each departure around the tide, weather and daily conditions so you can enjoy the Tumbes mangroves to the fullest. If this is your first time in Puerto Pizarro, we can help you choose the best time for your tour."
            },
            {
                type: "paragraph",
                text: "Ready to experience it? Contact us on WhatsApp and we will recommend the best time for your Puerto Pizarro boat trip."
            }
        ]
    },
    "ruta-completa-islas-manglares-cocodrilos": {
        title: "Complete Puerto Pizarro tour: islands, mangroves and crocodiles",
        excerpt: "Discover Puerto Pizarro’s most complete tour: Bird Island, mangroves, crocodiles and the mouth of the sea in one experience.",
        category: "Tours",
        location: "Puerto Pizarro, Tumbes",
        readTime: "8 min read",
        date: "7 Apr 2026",
        author: "Avis Tours team",
        highlights: [
            "A complete Puerto Pizarro tour of mangroves and islands",
            "Includes birds, crocodiles and estuary cruising",
            "Ideal for first-time visitors to Tumbes",
        ],
        body: [
            {
                type: "paragraph",
                text: "If you are looking for the best Puerto Pizarro tour, the complete islands, mangroves and crocodiles route is the most comprehensive option. It brings together Tumbes’ main attractions in one experience, combining nature, wildlife and a cruise through the mangroves."
            },
            {
                type: "heading",
                text: "What does the complete Puerto Pizarro tour include?"
            },
            {
                type: "paragraph",
                text: "This Tumbes mangrove tour is designed to offer a varied, dynamic experience. Along the route, you can explore several of Puerto Pizarro’s best-known stops, each with its own character."
            },
            {
                type: "list",
                items: [
                    "Boat ride through the Puerto Pizarro mangroves.",
                    "A visit to Bird Island for birdwatching.",
                    "Entry to the crocodile breeding centre.",
                    "A panoramic view of the mouth of the sea.",
                    "Well-timed stops for photos and a break."
                ]
            },
            {
                type: "image",
                src: "/images-optimized/galeria/completo_galeria8.webp",
                alt: "Complete tour of mangroves and islands in Puerto Pizarro",
                caption: "The route may be adjusted for the tide, weather and conditions of the day to create a better experience."
            },
            {
                type: "heading",
                text: "Why choose this Puerto Pizarro tour?"
            },
            {
                type: "paragraph",
                text: "Unlike shorter trips, the complete tour lets you experience Puerto Pizarro as a whole. It is ideal if you are visiting Tumbes for the first time and want to make the most of your time, because it combines several attractions in one departure."
            },
            {
                type: "paragraph",
                text: "Cruising through the mangroves gives you a unique view of the ecosystem, while Bird Island lets you observe different species in their natural habitat."
            },
            {
                type: "heading",
                text: "Who is this tour ideal for?"
            },
            {
                type: "list",
                items: [
                    "Travellers visiting Tumbes for the first time.",
                    "Families looking for a complete and varied experience.",
                    "Couples who would enjoy a relaxed nature-based trip.",
                    "Visitors who want to see the best of Puerto Pizarro in one day."
                ]
            },
            {
                type: "heading",
                text: "Duration and recommendations"
            },
            {
                type: "paragraph",
                text: "Tour length can vary according to the tide and weather conditions. We therefore recommend arranging your departure time in advance to make the most of the Tumbes mangroves."
            },
            {
                type: "list",
                items: [
                    "Ask about the best time based on the tide.",
                    "Arrive early at the tourist pier.",
                    "Bring sunscreen and water.",
                    "Keep your phone ready for photos along the route."
                ]
            },
            {
                type: "heading",
                text: "Book your Puerto Pizarro tour"
            },
            {
                type: "paragraph",
                text: "At Avis Tours, we organise the complete Puerto Pizarro tour while adjusting each detail for the tide, weather and daily availability. Our goal is for you to have a safe, well-organised and memorable Tumbes mangrove experience."
            },
            {
                type: "paragraph",
                text: "Contact us on WhatsApp to check availability and reserve your boat trip. We can help you choose the best time to make the most of your visit."
            }
        ]
    },
    "isla-de-los-pajaros-y-manglares": {
        title: "Bird Island in Tumbes: a Puerto Pizarro mangrove tour",
        excerpt: "Discover Bird Island in Puerto Pizarro on a Tumbes mangrove tour with birdwatching and natural scenery.",
        category: "Nature",
        location: "Tumbes Mangroves",
        readTime: "7 min read",
        date: "7 Apr 2026",
        author: "Avis Tours team",
        highlights: [
            "Located in the Puerto Pizarro mangroves near Tumbes",
            "Ideal for observing birds in their natural habitat",
            "A great option for shorter Tumbes mangrove tours",
        ],
        body: [
            { type: "paragraph", text: "Bird Island lies within the Puerto Pizarro mangroves, near the city of Tumbes in northern Peru. It is one of the most visited places for travellers who want to observe birds and enjoy natural scenery on a boat trip." },
            { type: "heading", text: "What is Bird Island?" },
            { type: "paragraph", text: "Bird Island is an area within the Puerto Pizarro mangroves where you can observe different bird species in their natural environment. It is a common stop on boat tours and one of Tumbes’ most recognisable nature attractions." },
            { type: "heading", text: "Where is Bird Island in Tumbes?" },
            { type: "paragraph", text: "Bird Island is visited from Puerto Pizarro, a tourist area close to Tumbes city. The trip starts at the tourist pier and continues by boat through mangrove channels to the birdwatching areas." },
            { type: "image", src: "/images-optimized/galeria/pajaros_galeria3.webp", alt: "Birds on Bird Island in Puerto Pizarro, Tumbes", caption: "Bird activity can vary with the time of day, season and tide." },
            { type: "heading", text: "What can you see along the route?" },
            { type: "paragraph", text: "On a Puerto Pizarro mangrove tour, you can observe seabirds, travel through natural channels and enjoy a landscape shaped by mangrove vegetation. It is an ideal experience for photography, relaxation and time in nature." },
            { type: "list", items: ["Birdwatching on Bird Island.", "Cruising through mangrove channels.", "Unique natural Tumbes scenery.", "A peaceful setting to disconnect."] },
            { type: "heading", text: "How long is the Bird Island tour?" },
            { type: "paragraph", text: "This kind of Puerto Pizarro tour is usually shorter than the complete route. That makes it a great option if you have limited time or prefer a lighter experience in the Tumbes mangroves." },
            { type: "heading", text: "Who is this route ideal for?" },
            { type: "list", items: ["Travellers with limited time in Tumbes.", "People interested in nature photography.", "Families looking for a peaceful trip.", "Visitors who want their first mangrove experience."] },
            { type: "heading", text: "Recommendations for your visit" },
            { type: "list", items: ["Check the tide-based time for a better experience.", "Bring sunscreen and sunglasses.", "Keep your phone or camera ready for bird photos.", "Avoid carrying unnecessary luggage."] },
            { type: "quote", text: "Bird Island is one of those places where silence and nature do all the work.", author: "Avis Tours team" },
            { type: "heading", text: "Book your Bird Island tour" },
            { type: "paragraph", text: "At Avis Tours, we organise Puerto Pizarro tours around the tide and daily conditions, so you can make the most of your visit to Bird Island and the Tumbes mangroves." },
            { type: "paragraph", text: "Contact us on WhatsApp and we will help you choose the best time for your boat trip. Enjoy an authentic experience in one of Tumbes’ most important natural destinations." }
        ]
    },
    "como-llegar-a-puerto-pizarro-desde-tumbes": {
        title: "Where is Puerto Pizarro? Getting there from Tumbes and the airport",
        excerpt: "Puerto Pizarro is close to Tumbes city in northern Peru. Learn how to get there from Tumbes or the airport and find the tourist pier.",
        category: "Planning",
        location: "Tumbes and Puerto Pizarro",
        readTime: "7 min read",
        date: "10 Apr 2026",
        author: "Avis Tours team",
        highlights: [
            "The location of Puerto Pizarro and its tourist pier",
            "Options from central Tumbes and the airport",
            "Tips for arriving on time for your tour",
        ],
        body: [
            { type: "paragraph", text: "Puerto Pizarro is close to Tumbes city in northern Peru. It is a tourist area and the starting point for boat trips through the mangroves and islands." },
            { type: "heading", text: "Where is Puerto Pizarro?" },
            { type: "paragraph", text: "Puerto Pizarro is a tourist area near Tumbes city in northern Peru. Its tourist pier is where tours depart for the Tumbes mangroves, Bird Island, the crocodile breeding centre and the mouth of the sea." },
            { type: "image", src: "/images-optimized/galeria/galeria30.webp", alt: "Access to the Puerto Pizarro tourist pier in Tumbes", caption: "The tourist pier is the main departure point for Puerto Pizarro tours." },
            { type: "heading", text: "Getting there from central Tumbes" },
            { type: "paragraph", text: "Getting from central Tumbes to Puerto Pizarro is relatively straightforward. The journey is usually short, although traffic and the time of day can affect it. Leave early to avoid setbacks before your tour." },
            { type: "list", items: ["The journey is short from central Tumbes.", "You can use a taxi or local transport.", "Leave with enough time to avoid delays.", "Locate the tourist pier in advance."] },
            { type: "heading", text: "Getting there from Tumbes airport" },
            { type: "paragraph", text: "If you arrive in Tumbes by plane, you can also travel straight to Puerto Pizarro. In that case, coordinate your timings carefully, especially if you plan to take a tour on the day you arrive." },
            { type: "list", items: ["Allow time to collect your luggage.", "Arrange transport from the airport.", "Avoid a very tight tour schedule.", "Check availability before you travel."] },
            { type: "heading", text: "Tips for arriving without hassle" },
            { type: "paragraph", text: "Planning your transfer in advance is key to enjoying Puerto Pizarro without stress. A good time buffer lets you find the pier, confirm your booking and get ready for the trip." },
            { type: "list", items: ["Arrive at least 20 to 30 minutes early.", "Save the pier location on your phone.", "Check the schedule based on the tide.", "Avoid travelling with no time to spare."] },
            { type: "quote", text: "Arriving in Puerto Pizarro with time to spare not only avoids stress; it also improves your experience from the start of the tour.", author: "Avis Tours team" },
            { type: "heading", text: "Plan your arrival and book your tour" },
            { type: "paragraph", text: "At Avis Tours, we can help you coordinate your Puerto Pizarro visit from the moment you arrive in Tumbes. We can guide you on the best time according to the tide and help you organise your tour efficiently." },
            { type: "paragraph", text: "Contact us on WhatsApp to check availability and receive personalised recommendations for your arrival and Tumbes mangrove trip." }
        ]
    },
    "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro": {
        title: "What to bring on a Puerto Pizarro mangrove tour: a complete guide",
        excerpt: "Find out what to bring on a Puerto Pizarro tour: clothing, sun protection and practical tips for enjoying the Tumbes mangroves.",
        category: "Tips",
        location: "Puerto Pizarro, Tumbes",
        readTime: "6 min read",
        date: "10 Apr 2026",
        author: "Avis Tours team",
        highlights: ["A practical checklist for Puerto Pizarro tours", "Recommendations for the Tumbes climate", "Tips for a more enjoyable boat trip"],
        body: [
            { type: "paragraph", text: "If you are planning a Puerto Pizarro tour, knowing what to bring will help you make the most of the Tumbes mangroves. The weather, sun exposure and boat ride make a few items essential for a comfortable, safe trip." },
            { type: "heading", text: "Why is it important to prepare well?" },
            { type: "paragraph", text: "A Puerto Pizarro mangrove tour means time outdoors, sun exposure and travelling by boat. Bringing the right things helps you enjoy the route, take photos comfortably and avoid unnecessary discomfort." },
            { type: "image", src: "/images-optimized/galeria/galeria26.webp", alt: "Visitors prepared for a Puerto Pizarro mangrove tour", caption: "Travelling light but prepared is key to enjoying a Tumbes mangrove tour." },
            { type: "heading", text: "Basic checklist for your Puerto Pizarro tour" },
            { type: "list", items: ["Sunscreen for the strong sun.", "A cap or hat for comfort.", "Sunglasses.", "Water to stay hydrated.", "A phone or camera with enough battery.", "Light, comfortable clothing.", "A small bag or practical backpack."] },
            { type: "heading", text: "Additional recommendations" },
            { type: "paragraph", text: "Beyond the basics, a few details can improve your Tumbes mangrove tour. Preparing beforehand lets you focus on the scenery and the boat ride." },
            { type: "list", items: ["Avoid unnecessary or heavy items.", "Protect your devices if you bring a camera or phone.", "Wear cool clothing suited to warm weather.", "Check the weather before you leave."] },
            { type: "heading", text: "What should you not bring?" },
            { type: "list", items: ["Large or awkward luggage.", "Unnecessary valuables.", "Heavy or poorly breathable clothing.", "Accessories that could fall during the trip."] },
            { type: "heading", text: "A key tip for your experience" },
            { type: "paragraph", text: "The lighter you travel, the more comfortable your Puerto Pizarro boat ride will be. Bring only what you need to enjoy the natural surroundings without complications." },
            { type: "quote", text: "You do not need to bring much to enjoy a Puerto Pizarro mangrove tour—just the right things.", author: "Avis Tours team" },
            { type: "heading", text: "Prepare and book your tour" },
            { type: "paragraph", text: "At Avis Tours, we help organise your Puerto Pizarro tour with the tide, weather and daily conditions in mind. Our goal is for you to have a comfortable, well-planned Tumbes mangrove experience." },
            { type: "paragraph", text: "Contact us on WhatsApp to check availability and receive personalised recommendations before your trip." }
        ]
    },
    "que-hacer-en-tumbes-en-1-dia": {
        title: "What to do in Tumbes in one day: a complete guide with Puerto Pizarro",
        excerpt: "Discover what to do in Tumbes in one day, including beaches, mangroves and Puerto Pizarro tours to make the most of your visit.",
        category: "Guide",
        location: "Tumbes, Peru",
        readTime: "8 min read",
        date: "15 Apr 2026",
        author: "Avis Tours team",
        highlights: ["An ideal guide for short trips to Tumbes", "Includes Puerto Pizarro and the mangroves", "Perfect for planning a one-day itinerary"],
        body: [
            { type: "paragraph", text: "If you have limited time and are wondering what to do in Tumbes in one day, the key is to organise your route well. This destination in northern Peru combines beaches, nature and Puerto Pizarro tours that you can enjoy in a single day." },
            { type: "heading", text: "Morning: visit Puerto Pizarro" },
            { type: "paragraph", text: "Start your day early with Puerto Pizarro, one of Tumbes’ main attractions. From here, you can take a mangrove tour, visit islands and enjoy a boat trip." },
            { type: "list", items: ["Tumbes mangrove tour.", "A visit to Bird Island.", "Boat ride through natural channels.", "Wildlife watching."] },
            { type: "heading", text: "Afternoon: beaches and local food" },
            { type: "paragraph", text: "After your Puerto Pizarro tour, you can continue to nearby beaches or enjoy local food. Tumbes is known for fresh seafood and traditional northern Peruvian dishes." },
            { type: "heading", text: "Tips to make the most of your day" },
            { type: "list", items: ["Start early to make better use of your time.", "Arrange your Puerto Pizarro tour in advance.", "Check timings according to the tide.", "Bring light clothing and sunscreen."] },
            { type: "image", src: "/images-optimized/galeria/solo_isla_galeria4.webp", alt: "Birds on Bird Island in Puerto Pizarro, Tumbes", caption: "Bird activity can vary with the time of day, season and tide." },
            { type: "heading", text: "Book your Puerto Pizarro tour" },
            { type: "paragraph", text: "At Avis Tours, we help you organise your Tumbes visit so you can make the most of the day. Our Puerto Pizarro tours adapt to your available time and daily conditions." },
            { type: "paragraph", text: "Contact us on WhatsApp and plan your Tumbes mangrove experience." }
        ]
    },
    "puerto-pizarro-o-mancora": {
        title: "Puerto Pizarro or Máncora: which should you visit near Tumbes?",
        excerpt: "Find out whether Puerto Pizarro or Máncora better suits your travel style, budget and the experience you are looking for.",
        category: "Comparison",
        location: "Tumbes, Peru",
        readTime: "7 min read",
        date: "15 Apr 2026",
        author: "Avis Tours team",
        highlights: ["A clear comparison of two northern Peru destinations", "Useful for planning your Tumbes trip", "Helps you choose for your travel style"],
        body: [
            { type: "paragraph", text: "If you are planning a trip to northern Peru, you may wonder whether to visit Puerto Pizarro or Máncora. Both destinations offer different experiences, so the right choice depends on the kind of trip you want." },
            { type: "heading", text: "Puerto Pizarro: nature and mangroves" },
            { type: "paragraph", text: "Puerto Pizarro is ideal for travellers looking for nature, tranquillity and organised tours. Here you can explore the Tumbes mangroves, visit islands and enjoy boat trips." },
            { type: "list", items: ["Mangrove tours.", "Birdwatching.", "Island visits.", "A peaceful atmosphere."] },
            { type: "heading", text: "Máncora: beach and nightlife" },
            { type: "paragraph", text: "Máncora is better known for its beaches, tourist atmosphere and nightlife. It is a good choice if you are looking for fun, surfing and beach activities." },
            { type: "heading", text: "Which should you choose?" },
            { type: "list", items: ["Choose Puerto Pizarro for nature and tours.", "Choose Máncora if you prefer the beach and entertainment.", "You can combine both if you have more time."] },
            { type: "heading", text: "Final recommendation" },
            { type: "paragraph", text: "If this is your first time in Tumbes, Puerto Pizarro is an excellent choice for discovering the mangroves and enjoying a unique nature experience." },
            { type: "image", src: "/images-optimized/galeria/galeria17.webp", alt: "Birds on Bird Island in Puerto Pizarro, Tumbes", caption: "Bird activity can vary with the time of day, season and tide." },
            { type: "heading", text: "Book your Puerto Pizarro experience" },
            { type: "paragraph", text: "At Avis Tours, we organise Puerto Pizarro tours to suit your travel style. We can help you choose the best option for your time and preferences." },
            { type: "paragraph", text: "Message us on WhatsApp and plan your visit to the Tumbes mangroves." }
        ]
    },
    "zoocriadero-cocodrilos-puerto-pizarro": {
        title: "Puerto Pizarro crocodile breeding centre: what to see and how to visit",
        excerpt: "Learn about the Puerto Pizarro crocodile breeding centre, what you can see there and how to include it on your Tumbes mangrove route.",
        category: "Nature",
        location: "Puerto Pizarro, Tumbes",
        readTime: "7 min read",
        date: "11 Aug 2026",
        author: "Avis Tours team",
        highlights: ["One of Puerto Pizarro’s most visited attractions", "How to combine the stop with mangroves and islands", "Tips for planning your Puerto Pizarro route"],
        body: [
            { type: "paragraph", text: "The Puerto Pizarro crocodile breeding centre is one of the attractions you can visit in this tourist area of Tumbes. For many travellers, observing these animals complements a route through the mangroves, islands and natural channels that define Puerto Pizarro." },
            { type: "heading", text: "What is the Puerto Pizarro crocodile breeding centre?" },
            { type: "paragraph", text: "It is a crocodile-focused site that can be visited on certain Puerto Pizarro tourist routes. It lets you see these animals up close and adds a different experience to the classic Tumbes mangrove boat trip." },
            { type: "heading", text: "What can you see during the visit?" },
            { type: "paragraph", text: "Crocodiles are the main attraction. The experience is especially interesting for families, first-time Puerto Pizarro visitors and people who want to learn about animals that represent this part of northern Peru." },
            { type: "list", items: ["Crocodile viewing.", "A walk through the visitor facilities.", "A different stop within the Puerto Pizarro experience.", "An opportunity to take photos along the route."] },
            { type: "heading", text: "How can you visit the crocodiles of Puerto Pizarro?" },
            { type: "paragraph", text: "A practical way to visit this attraction is to include it in a Puerto Pizarro tour. Some routes combine several points of interest, letting you see the mangroves, navigate among islands and visit crocodiles in one experience." },
            { type: "image", src: "/images-optimized/galeria/manglares_cocodrilos_galeria2.webp", alt: "Tour to visit crocodiles and mangroves in Puerto Pizarro, Tumbes", caption: "The crocodile visit can be combined with a route through the Puerto Pizarro mangroves." },
            { type: "heading", text: "Mangrove and crocodile tours in Puerto Pizarro" },
            { type: "paragraph", text: "To make the most of your visit, choose a route that combines islands, mangroves and crocodiles. You will not need to organise each attraction separately and can experience different parts of Puerto Pizarro in one departure." },
            { type: "list", items: ["Boat trip from Puerto Pizarro.", "Route through mangrove areas.", "Island visits depending on the route selected.", "A stop to see the crocodiles.", "An experience surrounded by Tumbes’ natural environment."] },
            { type: "heading", text: "When is the best time to take the route?" },
            { type: "paragraph", text: "Tide and weather conditions can affect Puerto Pizarro routes. Before choosing a departure time, check that day’s conditions and confirm which route is available." },
            { type: "heading", text: "What should you bring?" },
            { type: "paragraph", text: "Puerto Pizarro has a warm climate for much of the year. For a more comfortable visit, bring the basics to protect yourself from the sun and enjoy the boat trip." },
            { type: "list", items: ["Sunscreen.", "A cap or hat.", "Water.", "Cool, comfortable clothing.", "A phone or camera for photos.", "A bag or protection for water-sensitive belongings."] },
            { type: "heading", text: "Is the Puerto Pizarro crocodile visit worthwhile?" },
            { type: "paragraph", text: "It can be an interesting stop if you want more than a boat ride. Combining it with the mangroves and islands gives you a more varied experience and lets you discover different Puerto Pizarro attractions in one visit." },
            { type: "quote", text: "Combining mangroves, islands and crocodiles lets you discover different sides of Puerto Pizarro in one departure.", author: "Avis Tours team" },
            { type: "heading", text: "Book a mangrove and crocodile tour" },
            { type: "paragraph", text: "At Avis Tours, we offer options for exploring Puerto Pizarro and its main attractions. We can advise you on available routes and the most suitable time based on tide, weather and boat availability." },
            { type: "paragraph", text: "If you want to visit the Puerto Pizarro mangroves and crocodiles, check availability before you arrive to choose the route that best fits your time." }
        ]
    },
    "manglares-de-puerto-pizarro": {
        title: "Puerto Pizarro mangroves: what to see, how to visit and tours",
        excerpt: "Discover what you can see in the Puerto Pizarro mangroves, how to visit them and what to consider before taking a tour in this part of Tumbes.",
        category: "Guide",
        location: "Puerto Pizarro, Tumbes",
        readTime: "9 min read",
        date: "11 Aug 2026",
        author: "Avis Tours team",
        highlights: ["A guide to visiting the mangroves from Puerto Pizarro", "Islands, birds, crocodiles and boat routes", "Advice for choosing your tour and timing"],
        body: [
            { type: "paragraph", text: "The Puerto Pizarro mangroves are one of the main reasons to visit this part of Tumbes. Boat trips leave from the tourist pier, taking you through channels, to different islands and into a natural setting very different from northern Peru’s traditional beaches." },
            { type: "heading", text: "Where are the Puerto Pizarro mangroves?" },
            { type: "paragraph", text: "Puerto Pizarro is near Tumbes city and is one of the main departure points for tourist trips through this mangrove area. Different boat routes are coordinated from its pier according to the places a visitor wants to see." },
            { type: "paragraph", text: "If you are still unsure how to get there, see our specific guide to reaching Puerto Pizarro from Tumbes or the airport." },
            { type: "heading", text: "What can you see on a mangrove tour?" },
            { type: "paragraph", text: "Routes can vary with the tour you choose, daily conditions and the stops included. Not every Puerto Pizarro trip therefore offers exactly the same experience." },
            { type: "list", items: ["Mangrove channels and areas.", "Islands along the route.", "Birds and other wildlife.", "Bird Island on routes that include it.", "Crocodiles on routes that include this stop.", "The mouth of the sea on longer routes."] },
            { type: "image", src: "/images-optimized/galeria/completo_galeria2.webp", alt: "Puerto Pizarro mangroves on a Tumbes boat tour", caption: "Boat routes let you discover different parts of Puerto Pizarro." },
            { type: "heading", text: "Bird Island" },
            { type: "paragraph", text: "Bird Island is one of the best-known natural attractions on Puerto Pizarro routes. Travellers who enjoy nature and birdwatching can choose tours that approach this area during the trip." },
            { type: "heading", text: "Crocodiles in Puerto Pizarro" },
            { type: "paragraph", text: "Another option is to choose a tour that includes a crocodile visit. It is especially appealing for families or anyone who wants to combine nature, boating and different attractions in one departure." },
            { type: "heading", text: "How do you visit the Puerto Pizarro mangroves?" },
            { type: "paragraph", text: "The usual way to explore this area is by boat from Puerto Pizarro. Before booking, check the places included in each option, as there are short routes and more complete alternatives." },
            { type: "list", items: ["Decide how much time you have available.", "Check which islands the route includes.", "Ask if you want to visit Bird Island.", "Confirm whether the route includes crocodiles.", "Ask about tide conditions before choosing a time."] },
            { type: "heading", text: "How long is a mangrove tour?" },
            { type: "paragraph", text: "Duration depends on the route selected. A trip focused on only a few attractions takes less time than a tour combining several islands, mangroves, crocodiles and other Puerto Pizarro stops. Choose based on your available time and the places you really want to see." },
            { type: "heading", text: "What is the best time to visit the mangroves?" },
            { type: "paragraph", text: "There is no single perfect time for every day. The tide can change navigation conditions and the experience in certain areas. Before booking, check the expected conditions for your visit date." },
            { type: "heading", text: "What should you bring on a mangrove tour?" },
            { type: "paragraph", text: "Wear comfortable clothes and prepare for sun and a waterside environment. You do not need to bring many things, but a few items can make the trip much more comfortable." },
            { type: "list", items: ["Sunscreen.", "A cap or hat.", "Water.", "Light clothing.", "Comfortable footwear.", "Protection for your phone, camera and personal belongings."] },
            { type: "heading", text: "Which mangrove tour should you choose?" },
            { type: "paragraph", text: "The best option depends on what you want to see. If you have little time, choose a shorter route. If this is your first visit and you want several attractions, a complete Puerto Pizarro tour lets you make the most of the trip and combine different stops in one experience." },
            { type: "quote", text: "Before choosing a tour, review the stops included and the tide conditions to make the most of your visit.", author: "Avis Tours team" },
            { type: "heading", text: "Puerto Pizarro mangrove tours with Avis Tours" },
            { type: "paragraph", text: "At Avis Tours, we organise different routes from Puerto Pizarro. Choose between options focused on particular attractions or fuller trips to see islands, mangroves, crocodiles and other places of interest." },
            { type: "paragraph", text: "Before you reserve your trip, we can advise you on the route and available time according to the tide, weather and daily navigation conditions." }
        ]
    },
}
