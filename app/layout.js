import './globals.css'

export const metadata = {
  title: 'Next.js / Azion',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
