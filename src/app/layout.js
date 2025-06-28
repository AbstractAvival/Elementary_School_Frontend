export const metadata = {
  title: "Elementary School",
  description: "Frontend for an elementary school."
}

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  )
}
