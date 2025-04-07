export interface SelectorProps {
  years: string[]
  subjects: { label: string; value: string }[]
  selectedSubject: string
  selectedYear: string
  selectedPeriod: string
  selectedLevel: string
  selectedMa: boolean
  setSelectedSubject: React.Dispatch<React.SetStateAction<string>>
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>
  setSelectedPeriod: React.Dispatch<React.SetStateAction<string>>
  setSelectedLevel: React.Dispatch<React.SetStateAction<string>>
  setSelectedMa: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ButtonProps {
  label: string
  link: string
}
