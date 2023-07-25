export const Friends: Friend[] = [
  {
    title: 'LLLXY',
    description: 'Excellent .NET developer',
    website: 'https://www.lllxy.net/',
    avatar: 'https://corehome.oss-accelerate.aliyuncs.com/images/avatar.jpg',
  },
  {
    title: 'Conchbrain',
    description: '这个海螺什么都知道',
    website: 'https://www.conchbrain.club/#home',
    avatar: 'https://www.conchbrain.club/favicon.ico',
  },
  {
    title: 'Mixstore',
    description: '安全、可靠且丰富多样的软件资源平台',
    website: 'https://mixstore.conchbrain.club/',
    avatar: 'https://chanrich.netlify.app/img/project/mixStore.png',
  }
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
