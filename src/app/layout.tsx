import type { Metadata } from 'next'
import './_styles/globals.scss'

export const metadata: Metadata = {
  title: 'Canonical Home Assignment',
  description: 'Canonical Home Assignment - three fetched cards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
