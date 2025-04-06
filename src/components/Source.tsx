import { VscGithubInverted } from 'react-icons/vsc'
import { Button } from "@heroui/button"

export const Source = () => {
  return (
    <Button
      aria-label='Forráskód'
      size='sm'
      onPress={() =>
        window.open('https://github.com/B4l1nt88/upgraded-erettsegi-browser')
      }
    >
      <VscGithubInverted size={20} />
    </Button>
  )
}
