import "@/app/globals.css"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" data-theme="light">
            <body>
                <div className="flex h-screen">
                    {/* Sidebar */}
                    <aside className="w-64 bg-gray-900 text-white p-4">
                        <h2 className="font-bold text-lg mb-4">Admin</h2>
                        <ul className="space-y-2">
                            <li>Dashboard</li>
                            <li>Packages</li>
                            <li>Destinations</li>
                            <li>Bookings</li>
                        </ul>
                    </aside>

                    {/* Contenido */}
                    <main className="flex-1 p-6 bg-gray-100 overflow-auto">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
