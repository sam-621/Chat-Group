export interface IGlobalChatDto {
  id: string
  message: string
  owner: IGlobalChatOwner
}

export interface IGlobalChatOwner {
  profilePic: string
  username: string
}
