// src/data/searchConfig.js
export const searchGroups = [
  {
    id: 'group-a',
    label: '常用',
    engines: [
      { id: 'type-bing', label: '必应', url: 'https://www.bing.com/search?q=', placeholder: '微软 Bing 搜索' },
      { id: 'type-baidu', label: '百度', url: 'https://www.baidu.com/s?wd=', placeholder: '百度一下，你就知道' },
      { id: 'type-google', label: '谷歌', url: 'https://www.google.com/search?q=', placeholder: '谷歌搜索' },
      { id: 'type-anaconda', label: '软件', url: 'https://anaconda.org/search?q=', placeholder: 'Anaconda 软件搜索' },
      { id: 'type-pubmed', label: '文献', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=', placeholder: 'PubMed 搜索/文章标题/关键字' }
    ]
  },
  {
    id: 'group-b',
    label: '搜索',
    engines: [
      { id: 'type-bing1', label: '必应', url: 'https://www.bing.com/search?q=', placeholder: '微软 Bing 搜索' },
      { id: 'type-baidu1', label: '百度', url: 'https://www.baidu.com/s?wd=', placeholder: '百度一下，你就知道' },
      { id: 'type-google1', label: '谷歌', url: 'https://www.google.com/search?q=', placeholder: '谷歌搜索' },
      { id: 'type-360', label: '360', url: 'https://www.so.com/s?q=', placeholder: '360 好搜' },
      { id: 'type-sogo', label: '搜狗', url: 'https://www.sogou.com/web?query=', placeholder: '搜狗搜索' },
      { id: 'type-sm', label: '神马', url: 'https://yz.m.sm.cn/s?q=', placeholder: 'UC 移动端搜索' }
    ]
  },
  {
    id: 'group-c',
    label: '工具',
    engines: [
      { id: 'type-br', label: '权重查询', url: 'https://rank.chinaz.com/all/', placeholder: '请输入网址(不带 https://)' },
      { id: 'type-links', label: '友链检测', url: 'https://link.chinaz.com/', placeholder: '请输入网址(不带 https://)' },
      { id: 'type-whois', label: '域名信息查询', url: 'https://who.is/whois/', placeholder: '请输入网址(不带 https://)' },
      { id: 'type-ping', label: 'PING 检测', url: 'https://ping.chinaz.com/', placeholder: '请输入网址(不带 https://)' },
      { id: 'type-404', label: '死链检测', url: 'https://tool.chinaz.com/Links/?DAddress=', placeholder: '请输入网址(不带https://)' },
      { id: 'type-ciku', label: '关键词挖掘', url: 'https://www.ciku5.com/s?wd=', placeholder: '请输入关键词' }
    ]
  },
  {
    id: 'group-d',
    label: '社区',
    engines: [
      { id: 'type-zhihu', label: '知乎', url: 'https://www.zhihu.com/search?type=content&q=', placeholder: '知乎' },
      { id: 'type-wechat', label: '微信', url: 'https://weixin.sogou.com/weixin?type=2&query=', placeholder: '微信' },
      { id: 'type-weibo', label: '微博', url: 'https://s.weibo.com/weibo/', placeholder: '微博' },
      { id: 'type-douban', label: '豆瓣', url: 'https://www.douban.com/search?q=', placeholder: '豆瓣' }
    ]
  },
  {
    id: 'group-e',
    label: '生活',
    engines: [
      { id: 'type-taobao1', label: '淘宝', url: 'https://s.taobao.com/search?q=', placeholder: '淘宝' },
      { id: 'type-jd', label: '京东', url: 'https://search.jd.com/Search?keyword=', placeholder: '京东' },
      { id: 'type-xiachufang', label: '下厨房', url: 'https://www.xiachufang.com/search/?keyword=', placeholder: '下厨房' },
      { id: 'type-xiangha', label: '香哈菜谱', url: 'https://www.xiangha.com/so/?q=caipu&s=', placeholder: '香哈菜谱' },
      { id: 'type-12306', label: '12306', url: 'https://www.12306.cn/?', placeholder: '12306' },
      { id: 'type-qunar', label: '去哪儿', url: 'https://www.qunar.com/?', placeholder: '去哪儿' }
    ]
  },
  {
    id: 'group-f',
    label: '求职',
    engines: [
      { id: 'type-zhaopin', label: '智联招聘', url: 'https://sou.zhaopin.com/jobs/searchresult.ashx?kw=', placeholder: '智联招聘' },
      { id: 'type-51job', label: '前程无忧', url: 'https://search.51job.com/?', placeholder: '前程无忧' },
      { id: 'type-lagou', label: '拉钩网', url: 'https://www.lagou.com/jobs/list_', placeholder: '拉钩网' },
      { id: 'type-liepin', label: '猎聘网', url: 'https://www.liepin.com/zhaopin/?key=', placeholder: '猎聘网' }
    ]
  }
];

// 设置默认搜索引擎(必应)
export const defaultSearch = {
  id: 'type-bing',
  label: '必应',
  url: 'https://www.bing.com/search?q=',
  placeholder: '微软 Bing 搜索'
};
