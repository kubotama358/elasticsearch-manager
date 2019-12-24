export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['menu']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'インテント一覧',
        route: '/intent',
        icon: 'cil-puzzle',
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'チューニング',
        route: '/tuning',
        icon: 'cil-cursor',
        items: [
          {
            name: 'CSVファイルから学習',
            to: '/tuning/lern-from-csv-file',
            icon: 'cil-cursor'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '精度評価',
        route: '/test',
        icon: 'cil-cursor',
        items: [
          {
            name: 'シミュレータ',
            to: '/test/simulator',
            icon: 'cil-cursor'
          },
          {
            name: '想定Qテスト',
            to: '/test/qa-file',
            icon: 'cil-cursor'
          }
        ]
      }
    ]
  }
]