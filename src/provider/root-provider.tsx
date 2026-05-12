import { FC, ReactNode } from "react"
import { NotedProvider } from "./notes-provider"
import { ThemeProvider } from "./theme-provider"

export const RootProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <NotedProvider>
        {children}
      </NotedProvider>
    </ThemeProvider>
  )
}