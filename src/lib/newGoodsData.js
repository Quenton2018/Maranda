const goodsData = {
  cardList: [
    {
      title: '世界五大黑客，你是否被他们所做的“贡献”所受益',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/1.jpg',
      id: '1001',
      text: '客一词来源于英文hacker，原指醉心于计算机技术，水平高超的电脑专家，尤其是程序设计人员，早期在美国的电脑界是带有褒义的。但在媒体报导 ...',
      eye: '12',
      edit: '0',
      createTime: 1564716654717,
      typeId: [1, 2, 3, 5]
    },
    {
      title: '查看 Linux 发行版名称和版本号的 8 种方法',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180422104324581.jpg',
      id: '1002',
      text: '如果你加入了一家新公司，要为开发团队安装所需的软件并重启服务，这个时候首先要弄清楚它们运行在什么发行版以及哪个版本的系统上，你才能 ...',
      eye: '5',
      edit: '3',
      createTime: 1564716684317,
      typeId: [2, 3, 5, 6]
    },
    {
      title: '您对缓存服务器了解多少？缓存服务器是如何运作的？',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180427072547100.jpeg',
      id: '1003',
      text: '用户在访问服务器的时候服务器需要将用户的请求以及应用整理好之后返回到用户端。而这个过程很多时候会将时间浪费在请求反馈的过程中。如果 ...',
      eye: '32',
      edit: '1',
      createTime: 1564716124717,
      typeId: [1, 3, 4, 6, 7]
    },
    {
      title: '如何选择CDN？你需要关注这三个方面',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180422104300428.jpg',
      id: '1004',
      text: '作为技术决策者在选择使用 CDN 服务时最关心的三个问题是：一，哪家的 CDN 更快（速度快，用户体验好）。二， 哪家 CDN 功能最全， ...',
      eye: '15',
      edit: '3',
      createTime: 1564716684569,
      typeId: [2, 3, 5, 6, 9]
    },
    {
      title: '宣布Java 8停止维护后，Oracle又毙掉了JavaOne',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180428023112736.jpeg',
      id: '1005',
      text: '上周，Oracle 宣布将在不久后将停止维护 Java 8。近日，又在开发者博客宣布取消 JavaOne 会议 Java 8 即将停止维护前不久，Oracle ...',
      eye: '39',
      edit: '5',
      createTime: 1564716612317,
      typeId: [1, 4, 6, 9]
    },
    {
      title: '为什么程序员们愿意在GitHub上开源自己的成果?',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180424081401580.jpeg',
      id: '1006',
      text: '从2008年4月10日正式上线到今天，GitHub已经完成了它的第一个十年，正式进入下一个十年。Chris DiBona(Google的开源代码经理)认为Git的精 ...',
      eye: '40',
      edit: '0',
      createTime: 1564716645617,
      typeId: [1, 3, 5]
    },
    {
      title: '未来哪些安全风险值得关注？这份网络安全态势综述给你答案',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180428022554884.jpeg',
      id: '1007',
      text: '国家互联网应急中心25日在北京发布《2017年我国互联网网络安全态势综述》(以下简称《综述》)，分析和总结了2017年我国互联网网络安全状况， ...',
      eye: '15',
      edit: '0',
      createTime: 1564716665717,
      typeId: [2, 4, 8, 9, 10]
    },
    {
      title: '先学C语言还是Python？资深程序员往往是这样建议的！',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180430043928206.jpg',
      id: '1008',
      text: '编程是一门手艺， 学习编程首先要有目的，w3cschool先带大家了解一下自己需要学习什么吧!0、学一门语言其实学什么语言都可以，因为语言都 ...',
      eye: '42',
      edit: '5',
      createTime: 1564716636717,
      typeId: [1, 3, 4, 6]
    },
    {
      title: 'Linux 目录结构：/lib 分析',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180427073049828.jpeg',
      id: '1009',
      text: '我们在之前的文章中已经分析了其他重要系统目录，比如 bin、 boot、 dev、 etc 等。可以根据自己的兴趣进入下列链接了解更多信息。本 ...',
      eye: '69',
      edit: '1',
      createTime: 1564716687417,
      typeId: [1, 2, 3, 6]
    },
    {
      title: '重构 - 改善代码的各方面问题',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180424080654472.jpg',
      id: '1010',
      text: '重构不是对以前代码的全盘否定，而是利用更好的方式，写出更好，更有维护性代码。不断的追求与学习，才有更多的进步。1 前言做前端开发有一 ...',
      eye: '79',
      edit: '2',
      createTime: 1564716614717,
      typeId: [2, 3, 5, 6, 7]
    },
    {
      title: 'Python 人气王，JS 比 Java 更受公司青睐',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180427072746862.jpg',
      id: '1011',
      text: '四月PYPL 编程语言排行榜和Hacker News 招聘趋势都已经出炉。Hacker News 招聘趋势的数据由 Hacker News 新闻站负责收集，它不仅仅 ...',
      eye: '33',
      edit: '4',
      createTime: 1564716324717,
      typeId: [2, 5, 6, 7, 8]
    },
    {
      title: '用10行Python代码进行图像识别',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180425050458581.png',
      id: '1012',
      text: '随着深度学习算法的兴起和普及，人工智能领域取得了令人瞩目的进步，特别是在计算机视觉领域。21世纪的第二个十年迅速采用卷积神经网络，发 ...',
      eye: '23',
      edit: '7',
      createTime: 1564716234717,
      typeId: [1, 3, 4, 6]
    },
    {
      title: '为什么网络安全如此重要？',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180421112903383.jpg',
      id: '1013',
      text: '周末有一条消息，由于假期因素很多人没有注意到。全国网络安全和信息化工作会议21日闭幕，政治局常委悉数出席，政治局委员、国务委员、两高 ...',
      eye: '18',
      edit: '9',
      createTime: 1564713684717,
      typeId: [2, 3, 5, 6]
    },
    {
      title: '30多年的编码经验浓缩成的10条最佳实践',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180424081749824.png',
      id: '1014',
      text: '所以，如何写出一手好代码?良好的代码更易于阅读、理解、调试和修改，最重要的是它的缺陷也更少。显然，编写良好的代码需要更多的时间，但 ...',
      eye: '45',
      edit: '3',
      createTime: 1564713684717,
      typeId: [1, 4, 8, 10]
    },
    {
      title: 'Linux系统中sudo命令的10个技巧',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180424081749824.png',
      id: '1015',
      text: 'sudo 表示 superuser do。 它允许已验证的用户以其他用户的身份来运行命令。其他用户可以是普通用户或者超级用户。然而，大部分时候我 ...',
      eye: '13',
      edit: '10',
      createTime: 1564716632717,
      typeId: [1, 2, 3, 4]
    },
    {
      title: 'JavaScript 如何打败众语言，成为 Node 的实现语言？',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180422104238565.jpg',
      id: '1016',
      text: 'Node js 是一种将 JS 放在服务器端实现的平台，而为什么要把js放到服务器端实现，JS最初设计是在浏览器端解释执行，后来为什么搞Node js ...',
      eye: '95',
      edit: '0',
      createTime: 1564716334717,
      typeId: [4, 3, 9, 6]
    },
    {
      title: 'PHP FFI 允许在 PHP 脚本中嵌入 C 代码',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180427010126859.jpg',
      id: '1017',
      text: 'Zend 的 Dmitry Stogov 通过允许 PHP 执行嵌入式 C 代码扩展了 PHP 的领域。 这将允许完全访问本地 C 函数，变量以及数据结构 ...',
      eye: '150',
      edit: '6',
      createTime: 1564716686617,
      typeId: [6, 3, 7, 9]
    },
    {
      title: '阿里云检测PHPCMSv9出现6(7)大安全漏洞处理[综合整理]',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180425041802876.jpg',
      id: '1018',
      text: '阿里云漏洞检测PHPCMS出现高危漏洞处理记录: 解决方案: 方案一：使用云盾自研补丁进行一键修复； 方案二：更新该软件到官 ...',
      eye: '87',
      edit: '8',
      createTime: 1564716688817,
      typeId: [1, 3, 5, 6]
    },
    {
      title: '八个扼杀IT管理生产力的因素',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180423061717142.jpg',
      id: '1019',
      text: '从忽视关键战略举措的轻重缓急，到未能调整项目估算，薄弱的IT管理实践正在威胁着IT部门完成工作的能力。现代工作场所有两类扼杀生产力的因 ...',
      eye: '52',
      edit: '2',
      createTime: 1564716699917,
      typeId: [4, 5, 6, 7]
    },
    {
      title: '物联网？雾联网？区块链？',
      src: 'https://qiniuyun.quenton.cn/Maranda/img/20180428022934686.jpeg',
      id: '1020',
      text: '不知从什么时候开始，物联网与区块链深深地扯上了关系，并且在今年有愈演愈烈之势。每逢提及物联网，后头必然跟着区块链;提到区块链，也必 ...',
      eye: '85',
      edit: '5',
      createTime: 1564716600017,
      typeId: [4, 6, 9, 10]
    }
  ],
  logList: [
    { title: '第二届 优秀个人博客模板比赛参选活动', id: '1001' },
    { title: 'HSTS开启教程，hsts如何开启网站安全？', id: '1002' },
    { title: '5个最佳免费Linux杀毒软件', id: '1003' },
    { title: '如何在Linux中使用find命令', id: '1004' },
    { title: '如何在Linux终端下检查笔记本电池状态', id: '1005' },
    { title: '40个新手程序员不知道的小技巧', id: '1006' },
    { title: '这是一个众人裸奔的时代，你害怕吗！！！', id: '1007' },
  ],
  typeIdName: [
    { id: 1, name: '开发' },
    { id: 2, name: '服务安全' },
    { id: 3, name: '物联网' },
    { id: 4, name: '服务器' },
    { id: 5, name: '数据库' },
    { id: 6, name: '业界新闻' },
    { id: 7, name: '技术前沿' },
    { id: 8, name: '技术分享' },
    { id: 9, name: '系统服务' },
    { id: 10, name: '励志名言' },
    { id: 11, name: '软件插件' },
    { id: 12, name: '随笔感悟' },
    { id: 13, name: '生活记录' },
    { id: 14, name: '程序员那些事' },
    { id: 15, name: '热点推荐' },
    { id: 16, name: '网络安全' },
    { id: 17, name: '区块链' },
    { id: 18, name: '活动' }
  ]
}

export default goodsData
