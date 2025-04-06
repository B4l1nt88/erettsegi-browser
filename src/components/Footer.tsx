import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Source } from '@/components/Source'
import { OriginalSource } from '@/components/OriginalSource'


export const Footer = () => {
  return (
    <div className='fixed bottom-0 py-5 left-0 right-0 text-center space-x-5'>
      <OriginalSource />
      <Source />
      <ThemeSwitcher />
    </div>
  )
}
