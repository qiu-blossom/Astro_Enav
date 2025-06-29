
## Astro_Enav

基于Astro和WebStack-hugo开发的导航网站,原本是纯html,对Astro进行了一定适配(可能)

本人前端基础很差，如果你发现有问题，欢迎提交issue或者pr。

## 演示站点

- [https://astro-enav.vercel.app/](https://astro-enav.vercel.app/)

- [https://nav.blueke.top/](https://nav.blueke.top/)

### 功能

#### 网站收录

如果你想添加一级菜单以及二级菜单，仅需修改`src/data/`目录下的`category.js`文件，其中的分类`id`是映射到`sites`下的文件的，注意不要填错

添加网址，你需要更改`src/data/sites`下的对应文件,然后会自动显示到对应的分类下

#### 更改网站配置

修改`src/settings`文件，可修改网站描述，图标等基本信息。

### ToDO

- [ ] 优化掉无用文件

- [ ] SEO

- [x] 增加网站壁纸更换功能(实际并不算完成，估计得等到后面了)

- [ ] 增加本地搜索功能

- [x] 夜间模式修复：现在刷新不会重置为日间模式了

- [x] 网站提交

- [ ] 友情链接

#### 进度
- 尝试删除popper.min.js
- 尝试删除tooltip-extend.js
- 尝试删除app-mini.js
- 尝试删除jquery-ui.min.1.12.1.js
- 尝试删除lozad.js

### 部署

你可以一键fork本项目到vercel上部署，或者使用以下命令在本地运行：

```bash
git clone https://github.com/Keduoli03/Astro_Enav.git
```


