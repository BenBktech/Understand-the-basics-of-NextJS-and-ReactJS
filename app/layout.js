'use client'
import Header from "@/components/Header/Header"
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeContextProvider } from "@/context/theme"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}