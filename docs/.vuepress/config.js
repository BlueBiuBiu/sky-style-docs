module.exports = {
  title: 'sky首页',
  description: 'sky的样式大全',
  head: [
      [['link', { rel: 'icon', href: '/images/logo.jpg' }]],  
  ],
  themeConfig: {
    logo: '/images/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '语言',
        ariaLabel: '语言切换',
        items: [
          { text: '中文', link: '/language/chinese/' },
          { text: 'English', link: '/language/english/' }
        ]
      }
    ],
    sidebar: [
      {
        title: '静态样式',   // 必要的
        path: '/pages/static/basic_text.md',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/pages/static/basic_text.md'
        ]
      },
      {
        title: '动态样式',
        path: '/pages/dynamic/basic_text.md',
        collapsable: false,
        children: [
          '/pages/dynamic/basic_text.md',
          '/pages/dynamic/hover_text.md',
        ]
      }
    ]
  }
}