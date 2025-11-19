import { create } from "zustand"

interface LangState {
  lang: "en" | "es"
  setLang: (l: "en" | "es") => void
}

export const useLanguage = create<LangState>((set) => ({
  lang: "en",
  setLang: (l) => set({ lang: l }),
}))
