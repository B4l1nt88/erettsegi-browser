import { VscGithub } from "react-icons/vsc";
import { Button } from "@heroui/button"

export const OriginalSource = () => {
  return (
    <Button
      aria-label='Eredeti forráskód'
      size='sm'
      onClick={() =>
        window.open('https://github.com/skidoodle/erettsegi-browser')
      }
    >
      <VscGithub size={20} />
    </Button>
  )
}
