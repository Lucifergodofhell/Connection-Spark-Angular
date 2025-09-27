export type Member = {
  id: string
  dateOfBirth: string
  imageUrl?: string
  displayName: string
  created: string
  lastActive: string
  gender: string
  description?: string
  city: string
  country: string
  photos?: any[]
}

export type Photo =  {
  id: string
  url: string
  publicId?: string
  members?: any
  membersId: string
}

