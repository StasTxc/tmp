import {ThemeProvider} from "./ThemeProvider";
import {ReactNode} from "react";

type ProvidersProps = {
  children?: ReactNode;
}

export const Providers = ({children}: ProvidersProps) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}