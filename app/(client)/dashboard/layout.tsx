import "@/app/globals.css"

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" data-theme="light">
            <body>
                <div>
                    {/* Navbar cliente */}
                    <header className="p-4 shadow bg-white">
                        Panel Cliente
                    </header>

                    {/* Contenido */}
                    <main className="p-6 bg-gray-50 min-h-screen">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
