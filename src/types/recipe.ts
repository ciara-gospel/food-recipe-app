export interface Recipe {
  id: string
  name: string
  image: string
  category?: string
  area?: string
  instructions?: string
  ingredients: string[]
  isFavorite: boolean
  youtube?: string
}
