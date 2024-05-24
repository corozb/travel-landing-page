// trip step
export interface Base {
  iconUrl: string
  title: string
  description: string
}

export interface CategoriesProps extends Base {
  highlighted: boolean
}

export interface DestinationProps {
  imageUrl: string
  title: string
  amount: string
  duration: string
  highlighted: boolean
}

export interface TestimonialProps {
  imageUrl: string
  review: string
  reviewerName: string
  position: string
  isBackdrop?: boolean
}
