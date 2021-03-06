interface Channel {
  id: string
  name: string
  position: number
}

interface Game {
  name: string
}

interface Member {
  id: string
  username: string
  discriminator: string
  avatar?: any
  status: string
  avatar_url: string
  game: Game
}

export interface IdiscordGuildWidgetApi {
  id: string
  name: string
  instant_invite: string
  channels: Channel[]
  members: Member[]
  presence_count: number
}
