/* eslint-disable no-multi-spaces */
/* eslint-disable @typescript-eslint/key-spacing */

import { type Avatar } from './me'
import { type Product } from './order'

export interface ReviewResponse {
  reviews: Array<Review>
  hypes: Array<unknown>
  totalReviewCount: number
  totalHypeCount: number
  reviewsPerPage: number
  ratingReviewCount: number
  currentReviewCount: number
}

export interface Review {
  id: number
  text: string
  rating: number
  upvotes: number
  downvotes: number
  verifiedPurchase: boolean
  createdAt: number
  isAnonymous: boolean
  isEmployee: boolean
  product: Product
  isHype: boolean
  user: ReviewUser
}

export interface ReviewUser {
  id: number
  username: string
  isPublicProfule: boolean
  knighthood: Array<number>
  rankLevel: number
  avatar: Avatar
}
