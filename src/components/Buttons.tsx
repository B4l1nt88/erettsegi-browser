import { Button } from '@heroui/react'
import React, { useState, useEffect, useCallback } from 'react'
import type { ButtonProps } from '@/utils/props'
import type { ButtonColor } from '@/utils/types'

const CustomButton: React.FC<ButtonProps> = React.memo(({ label, link }) => {
  const [status, setStatus] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const checkLinkStatus = useCallback(async (): Promise<void> => {
    if (link) {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/validate?link=${encodeURI(link)}`)
        const data = (await response.json()) as { status: number }
        setStatus(data.status)
      } catch (error) {
        setStatus(500)
      } finally {
        setIsLoading(false)
      }
    }
  }, [link])

  useEffect(() => {
    void checkLinkStatus()
  }, [checkLinkStatus])

  const getColor = useCallback((): ButtonColor => {
    switch (true) {
      case isLoading:
        return 'default'
      case status === 200:
        return 'primary'
      case status === 404:
        return 'danger'
      default:
        return 'default'
    }
  }, [isLoading, status])

  return (
    <Button
      isDisabled={status !== 200 || !link || isLoading}
      isLoading={isLoading}
      className='w-28 mt-3 text-sm font-bold py-2 px-2'
      color={getColor()}
    >
      {isLoading && <span className='ml-2'>Betöltés...</span>}
      {status === 404 && <span>Nem található</span>}
      {status === 500 && <span>Hiba történt</span>}
      {status !== 404 && status !== 500 && (
        <a href={link} className='btn'>
          {label}
        </a>
      )}
    </Button>
  )
})

export const PdfButton: React.FC<ButtonProps> = React.memo(
  ({ label, link }) => <CustomButton label={label} link={link} />
)

export const ZipButton: React.FC<ButtonProps> = React.memo(
  ({ label, link }) => <CustomButton label={label} link={link} />
)

export const Mp3Button: React.FC<ButtonProps> = React.memo(
  ({ label, link }) => <CustomButton label={label} link={link} />
)
