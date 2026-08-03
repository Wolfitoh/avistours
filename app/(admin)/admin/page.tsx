import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Admin",
    robots: {
        index: false,
        follow: false,
    },
}

export default function AdminPage() {
    return (
        <section>
            <h1 className="text-2xl font-semibold text-gray-900">
                Panel administrativo
            </h1>
            <p className="mt-2 text-sm text-gray-600">
                Espacio reservado para gestionar contenido, paquetes y reservas de Avis Tours.
            </p>
        </section>
    )
}
