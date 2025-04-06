import { Select, SelectItem } from '@heroui/react'
import type { SelectorProps } from '@/utils/props'

export const SubjectSelector: React.FC<
  Pick<SelectorProps, 'selectedSubject' | 'setSelectedSubject' | 'subjects'>
> = ({ selectedSubject, setSelectedSubject, subjects }) => (
  <Select
    selectionMode='single'
    disallowEmptySelection={true}
    label='Tárgy'
    value={selectedSubject}
    onChange={(e) => setSelectedSubject(e.target.value)}
    className='w-56'
  >
    {subjects.map((subject) => (
      <SelectItem key={subject.value} data-value={subject.value}>
        {subject.label}
      </SelectItem>
    ))}
  </Select>
)

export const YearSelector: React.FC<
  Pick<SelectorProps, 'selectedYear' | 'setSelectedYear' | 'years'>
> = ({ selectedYear, setSelectedYear, years }) => (
  <Select
    selectionMode='single'
    disallowEmptySelection={true}
    label='Év'
    value={selectedYear}
    onChange={(e) => setSelectedYear(e.target.value)}
    className='w-56'
  >
    {years.map((year) => (
      <SelectItem key={year} data-value={year}>
        {year}
      </SelectItem>
    ))}
  </Select>
)

export const PeriodSelector: React.FC<
  Pick<SelectorProps, 'selectedPeriod' | 'setSelectedPeriod'>
> = ({ selectedPeriod, setSelectedPeriod }) => (
  <Select
    selectionMode='single'
    disallowEmptySelection={true}
    label='Időszak'
    value={selectedPeriod}
    onChange={(e) => setSelectedPeriod(e.target.value)}
    className='w-56'
  >
    <SelectItem key={'tavasz'} data-value={'tavasz'}>
      Tavasz
    </SelectItem>
    <SelectItem key={'osz'} data-value={'osz'}>
      Ősz
    </SelectItem>
  </Select>
)

export const LevelSelector: React.FC<
  Pick<SelectorProps, 'selectedLevel' | 'setSelectedLevel'>
> = ({ selectedLevel, setSelectedLevel }) => (
  <Select
    selectionMode='single'
    disallowEmptySelection={true}
    label='Szint'
    value={selectedLevel}
    onChange={(e) => setSelectedLevel(e.target.value)}
    className='w-56'
  >
    <SelectItem key={'kozep'} data-value={'kozep'}>
      Közép
    </SelectItem>
    <SelectItem key={'emelt'} data-value={'emelt'}>
      Emelt
    </SelectItem>
  </Select>
)
