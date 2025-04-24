import './globals.css';

export const metadata = {
  title: 'GlowUp Beauty - Premium Beauty Products',
  description: 'Your destination for premium beauty products at amazing prices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}