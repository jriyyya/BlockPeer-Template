import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type Demo = {
  image: StaticImageData
  url: string
  name: string
}

export type Feature = {
  icon?: ReactNode
  name: string
}

export type WhyChooseUsType = {
  icon: ReactNode
  title: string
  description: string
}
