import React, { useEffect } from 'react'
import { Checkbox, ButtonGroup, Divider } from '@heroui/react'
import { PdfButton, ZipButton, Mp3Button } from '@/components/Buttons'
import { Footer } from '@/components/Footer'
import { fetchData } from '@/utils/fetch'
import useYears from '@/hooks/useYears'
import { Analytics } from '@vercel/analytics/next'
import { useAppState } from '@/hooks/useState'
import {
  SubjectSelector,
  YearSelector,
  PeriodSelector,
  LevelSelector,
  MaSelector,
} from '@/components/Selectors'
import { subjects } from '@/utils/subjects'

export default function Home() {
  const {
    flPdfLink,
    setflPdfLink,
    utPdfLink,
    setutPdfLink,
    flZipLink,
    setflZipLink,
    utZipLink,
    setutZipLink,
    flMp3Link,
    setflMp3Link,
    idFlPdfLink,
    setidFlPdfLink,
    idUtPdfLink, 
    setidUtPdfLink, 
    selectedSubject,
    setSelectedSubject,
    selectedYear,
    setSelectedYear,
    selectedPeriod,
    setSelectedPeriod,
    selectedLevel,
    setSelectedLevel,
    selectedMa,
    setSelectedMa,
    years,
    setYears,
  } = useAppState()

  useYears(setYears)

  useEffect(() => {
    if (selectedLevel && selectedPeriod && selectedSubject && selectedYear) {
      void fetchData(
        selectedSubject,
        selectedYear,
        selectedPeriod,
        selectedLevel,
        selectedMa,
        setflZipLink,
        setutZipLink,
        setflPdfLink,
        setutPdfLink,
        setflMp3Link,
        setidFlPdfLink,
        setidUtPdfLink
        
        
          // Add this
      );
    }
  }, [selectedLevel, selectedPeriod, selectedSubject, selectedYear, selectedMa])

  return (
    <main className='dark:bg-[#121212] text-foreground bg-background py-5'>
      <h1 className='text-4xl font-bold text-[#34ed00] text-center mt-16'>
        Érettségi kereső
      </h1>
      <div className='flex min-h-screen flex-col items-center justify-between'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-center'>
            <div className='mt-5 mb-3'>
              <SubjectSelector
                selectedSubject={selectedSubject}
                setSelectedSubject={setSelectedSubject}
                subjects={subjects}
              />
            </div>
            <div className='mb-3'>
              <YearSelector
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                years={years}
              />
            </div>
            <div className='mb-3'>
              <PeriodSelector
                selectedPeriod={selectedPeriod}
                setSelectedPeriod={setSelectedPeriod}
              />
            </div>
            <div className='mb-3'>
              <LevelSelector
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
              />
            </div>
            <div className='flex gap-4'>
              <Checkbox
                isSelected={selectedMa} // Bind to selectedMa state
                onChange={(event) => setSelectedMa(event.target.checked)} // Update state on toggle
                size="sm"
              >
                Idegen nyelvű sor (ma verzió)
              </Checkbox>
            </div>
            <div className='space-x-3'>
              <ButtonGroup>
                <PdfButton label='Feladatlap' link={flPdfLink} />
                <Divider orientation='vertical' />
                <PdfButton label='Útmutató' link={utPdfLink} />
              </ButtonGroup>
            </div>
            
            
            {['inf', 'infoism', 'digkult'].includes(selectedSubject) && (
              <div className='space-x-3'>
                <ButtonGroup>
                  <ZipButton label='Forrás' link={flZipLink} />
                  <Divider orientation='vertical' />
                  <ZipButton label='Megoldás' link={utZipLink} />
                </ButtonGroup>
              </div>
            )}
            {['angol', 'nemet'].includes(selectedSubject) && (
              <div className='space-x-3'>
                <Mp3Button label='Hang' link={flMp3Link} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <Analytics />
    </main>
  )
}
