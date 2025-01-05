export interface specificCard {
  abilities: SpecificCardAbilities[]
  base_experience: number
  cries: SpecificCardCries
  forms: SpecificCardForms[]
  game_indices: SpecificCardGame_indices[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: SpecificCardMoves[]
  name: string
  order: number
  past_abilities: any[]
  past_types: any[]
  species: SpecificCardSpecies
  sprites: SpecificCardSprites
  stats: SpecificCardStats[]
  types: SpecificCardTypes[]
  weight: number
}
export interface SpecificCardAbilitiesAbility {
  name: string
  url: string
}
export interface SpecificCardAbilities {
  ability: SpecificCardAbilitiesAbility
  is_hidden: boolean
  slot: number
}
export interface SpecificCardCries {
  latest: string
  legacy: string
}
export interface SpecificCardForms {
  name: string
  url: string
}
export interface SpecificCardGame_indicesVersion {
  name: string
  url: string
}
export interface SpecificCardGame_indices {
  game_index: number
  version: SpecificCardGame_indicesVersion
}
export interface SpecificCardMovesMove {
  name: string
  url: string
}
export interface SpecificCardMovesVersion_group_detailsMove_learn_method {
  name: string
  url: string
}
export interface SpecificCardMovesVersion_group_detailsVersion_group {
  name: string
  url: string
}
export interface SpecificCardMovesVersion_group_details {
  level_learned_at: number
  move_learn_method: SpecificCardMovesVersion_group_detailsMove_learn_method
  version_group: SpecificCardMovesVersion_group_detailsVersion_group
}
export interface SpecificCardMoves {
  move: SpecificCardMovesMove
  version_group_details: SpecificCardMovesVersion_group_details[]
}
export interface SpecificCardSpecies {
  name: string
  url: string
}
export interface SpecificCardSpritesOtherDream_world {
  front_default: string
}
export interface SpecificCardSpritesOtherHome {
  front_default: string
  front_shiny: string
}
export interface SpecificCardSpritesOtherOfficial_artwork {
  front_default: string
  front_shiny: string
}
export interface SpecificCardSpritesOtherShowdown {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}
export interface SpecificCardSpritesOther {
  dream_world: SpecificCardSpritesOtherDream_world
  home: SpecificCardSpritesOtherHome
  officialArtwork: SpecificCardSpritesOtherOfficial_artwork
  showdown: SpecificCardSpritesOtherShowdown
}
export interface SpecificCardSpritesVersionsGenerationIiCrystalRedBlue {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}
export interface SpecificCardSpritesVersionsGenerationIiCrystalYellow {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}
export interface SpecificCardSpritesVersionsGenerationI {
  redBlue: SpecificCardSpritesVersionsGenerationIiCrystalRedBlue
  yellow: SpecificCardSpritesVersionsGenerationIiCrystalYellow
}
export interface SpecificCardSpritesVersionsGenerationIiCrystaliCrystal {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}
export interface SpecificCardSpritesVersionsGenerationIiGold {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}
export interface SpecificCardSpritesVersionsGenerationIiSilver {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}
export interface SpecificCardSpritesVersionsGenerationIi {
  crystal: SpecificCardSpritesVersionsGenerationIiCrystaliCrystal
  gold: SpecificCardSpritesVersionsGenerationIiGold
  silver: SpecificCardSpritesVersionsGenerationIiSilver
}
export interface SpecificCardSpritesVersionsGenerationIiiEmerald {
  front_default: string
  front_shiny: string
}

export interface SpecificCardSpritesVersionsGenerationIvPlatinum {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export interface SpecificCardSpritesVersionsGenerationViiIcons {
  front_default: string
  front_female?: any
}
export interface SpecificCardSpritesVersionsGenerationViiultraSunUltraMoon {
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}
export interface SpecificCardSpritesVersionsGenerationVii {
  icons: SpecificCardSpritesVersionsGenerationViiIcons
  ultraSunUltraMoon: SpecificCardSpritesVersionsGenerationViiultraSunUltraMoon
}
export interface SpecificCardSpritesVersionsGenerationViiiIcons {
  front_default: string
  front_female?: any
}
export interface SpecificCardSpritesVersionsGenerationViii {
  icons: SpecificCardSpritesVersionsGenerationViiiIcons
}

export interface SpecificCardSprites {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  other: SpecificCardSpritesOther
}
export interface SpecificCardStatsStat {
  name: string
  url: string
}
export interface SpecificCardStats {
  base_stat: number
  effort: number
  stat: SpecificCardStatsStat
}
export interface SpecificCardTypesType {
  name: string
  url: string
}
export interface SpecificCardTypes {
  slot: number
  type: SpecificCardTypesType
}
