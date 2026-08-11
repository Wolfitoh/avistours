import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"
import { MongoClient } from "mongodb"

const envFiles = [".env.local", ".env"]

for (const file of envFiles) {
    const path = resolve(process.cwd(), file)

    if (!existsSync(path)) {
        continue
    }

    const content = readFileSync(path, "utf8")

    for (const line of content.split(/\r?\n/)) {
        const trimmed = line.trim()

        if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
            continue
        }

        const [key, ...valueParts] = trimmed.split("=")
        const value = valueParts.join("=").replace(/^["']|["']$/g, "")

        if (!process.env[key]) {
            process.env[key] = value
        }
    }
}

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB ?? "avitours"

if (!uri) {
    console.error("Missing MONGODB_URI. Add it to .env.local before running this script.")
    process.exit(1)
}

const seedTestimonials = [
    {
        clientName: "Mariana Rojas",
        clientOrigin: "Visitante de Lima",
        tourSlug: "puerto-pizarro-completo",
        tourTitle: "Puerto Pizarro completo",
        rating: 5,
        comment: "El paseo por los manglares fue tranquilo y muy bien explicado. La parada en la Isla de los Pajaros fue lo mejor del dia.",
        visitDate: "2026-04-03",
        status: "approved",
        displayImage: "/images/clients/client1.png",
        source: "seed",
    },
    {
        clientName: "Carlos Medina",
        clientOrigin: "Familia viajera",
        tourSlug: "islas-manglares-cocodrilos",
        tourTitle: "Isla del Amor, manglares y cocodrilos",
        rating: 5,
        comment: "Nos ayudaron a elegir el horario segun la marea y el recorrido salio perfecto para viajar con ninos.",
        visitDate: "2026-04-04",
        status: "approved",
        displayImage: "/images/clients/client2.png",
        source: "seed",
    },
    {
        clientName: "Lucia Torres",
        clientOrigin: "Viajera de Piura",
        tourSlug: "puerto-pizarro-completo",
        tourTitle: "Puerto Pizarro completo",
        rating: 5,
        comment: "La ruta completa por islas, cocodrilos y boca del mar fue clara, segura y muy bonita para fotos.",
        visitDate: "2026-04-05",
        status: "approved",
        displayImage: "/images/clients/client4.png",
        source: "seed",
    },
]

const client = new MongoClient(uri)

try {
    await client.connect()
    const db = client.db(dbName)
    const testimonials = db.collection("testimonials")
    const newsletter = db.collection("newsletter_subscribers")
    const now = new Date()

    await testimonials.createIndex({ status: 1, approvedAt: -1, createdAt: -1 })
    await testimonials.createIndex({ tourSlug: 1, createdAt: -1 })
    await testimonials.createIndex({ source: 1 })
    await newsletter.createIndex({ email: 1 }, { unique: true })
    await newsletter.createIndex({ status: 1, createdAt: -1 })

    for (const testimonial of seedTestimonials) {
        await testimonials.updateOne(
            {
                source: "seed",
                clientName: testimonial.clientName,
                tourSlug: testimonial.tourSlug,
            },
            {
                $setOnInsert: {
                    ...testimonial,
                    createdAt: now,
                    approvedAt: now,
                },
            },
            { upsert: true },
        )
    }

    console.log(`MongoDB ready: database "${dbName}"`)
    console.log("Collections prepared: testimonials, newsletter_subscribers")
} finally {
    await client.close()
}
