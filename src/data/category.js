export const CATEGORY_CONFIG = {
  common: {
    name: '常用工具',
    icon: 'far fa-star',
    subItems: [
      {
        id: 'common',
        name: '常用工具',
        icon: 'iconfont icon-heart'
      }
    ]
  },
   photo: {
    name: '壁纸网站',
    icon: 'fas  fa-camera',
    subItems: [
      {
        id: 'animephoto',
        name: '动漫壁纸',
        icon: 'iconfont icon-tag'
       }
    ]
  },
  research: {
    name: '动漫壁纸',
    icon: 'fas fa-flask',
    subItems: [
      {
        id: 'bioinfo',
        name: '生物信息',
        icon: 'fas fa-dna'
      },
      {
        id: 'cloud',
        name: '云服务器',
        icon: 'fas fa-server'
      }
    ]
  },
  music: {
    name: '音乐',
    icon: 'fas fa-music',
    subItems: [
      {
        id: 'listen',
        name: '听音乐',
        icon: 'fas fa-dna'
      },
      {
        id: 'ty',
        name: '网易云',
        icon: 'fas fa-server'
      }
    ]
  },
  // 其他分类...
};

// 辅助方法
export const getCategoryList = () => Object.entries(CATEGORY_CONFIG);
export const getSubItems = (categoryId) => CATEGORY_CONFIG[categoryId]?.subItems || [];

// 新增获取名称和图标的专用方法
export const getCategoryName = (key) => CATEGORY_CONFIG[key]?.name || key;
export const getCategoryIcon = (key) => CATEGORY_CONFIG[key]?.icon || 'fas fa-circle';


