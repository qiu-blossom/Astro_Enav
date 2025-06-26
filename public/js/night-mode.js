/**
 * 夜间模式管理与加载动画控制模块
 * 包含夜间模式切换、页面加载动画和页脚功能增强
 */

(function() {
  'use strict';

  // ==================== 1. 加载动画控制 ====================
  // night-mode.js (加载动画部分优化)
class PageLoader {
  static init() {
    document.body.classList.add('page-loading');
    
    // 最小显示时间(1000ms = 1秒)
    const MIN_DISPLAY_TIME = 500;
    let startTime = Date.now();
    
    // 等待页面加载完成
    const waitForPageLoad = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve);
      }
    });
    
    // 等待最小显示时间
    const waitForMinimumTime = () => {
      const elapsed = Date.now() - startTime;
      return new Promise(resolve => {
        setTimeout(resolve, Math.max(0, MIN_DISPLAY_TIME - elapsed));
      });
    };
    
    // 同时满足两个条件后移除加载状态
    Promise.all([waitForPageLoad, waitForMinimumTime()])
      .then(() => {
        document.body.classList.remove('page-loading');
        document.body.classList.add('page-loaded');
      });
  }
}
  // ==================== 2. 夜间模式管理器 ====================
  
  class NightModeManager {
    constructor() {
      this.cookieName = 'night_mode';
      this.defaultDayImage = `url(images/search-bg.jpg)`;
      this.defaultNightImage = 'url(images/search-bg.jpg)';
      this.bodyClassDay = 'io-black-mode';
      this.bodyClassNight = 'io-grey-mode';
      this.iconClassDay = 'icon-light';
      this.iconClassNight = 'icon-night';
      this.tooltipDay = '切换夜间模式';
      this.tooltipNight = '切换日间模式';
      
      // 确保DOM就绪后初始化
      if (document.readyState === 'complete') {
        this.init();
      } else {
        document.addEventListener('DOMContentLoaded', () => this.init());
      }
    }
    
    init() {
      this.initMode();
      this.bindSwitchEvent();
      console.log('[夜间模式] 初始化完成');
    }
    
    initMode() {
      const cookieValue = this.getCookie(this.cookieName);
      const isNight = cookieValue ? cookieValue === 'night' : this.isNightTime();
      this.applyMode(isNight, true);
    }
    
    bindSwitchEvent() {
      // 移除旧事件绑定
      document.querySelectorAll('.switch-dark-mode').forEach(btn => {
        btn.onclick = null;
      });
      
      // 使用事件委托绑定新事件（捕获阶段优先执行）
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.switch-dark-mode');
        if (btn) {
          e.preventDefault();
          e.stopImmediatePropagation(); // 阻止事件冒泡
          this.toggleMode();
        }
      }, true);
    }
    
    toggleMode() {
      const currentMode = this.getCookie(this.cookieName) === 'night';
      this.applyMode(!currentMode);
    }
    
    applyMode(isNight, silent = false) {
      // 模式配置
      const config = isNight ? {
        bgImage: this.defaultNightImage,
        bodyClass: this.bodyClassNight,
        cookieValue: 'night',
        tooltip: this.tooltipNight,
        iconClass: this.iconClassNight
      } : {
        bgImage: this.defaultDayImage,
        bodyClass: this.bodyClassDay,
        cookieValue: 'day',
        tooltip: this.tooltipDay,
        iconClass: this.iconClassDay
      };
      
      // 使用requestAnimationFrame优化渲染
      requestAnimationFrame(() => {
        // 1. 更新body类
        document.body.classList.remove(this.bodyClassDay, this.bodyClassNight);
        document.body.classList.add(config.bodyClass);
        
        // 2. 更新背景图
        const searchBg = document.getElementById('search-bg');
        if (searchBg) {
          searchBg.style.backgroundImage = config.bgImage;
        }
        
        // 3. 更新所有切换按钮
        document.querySelectorAll('.switch-dark-mode').forEach(btn => {
          const icon = btn.querySelector('.mode-ico');
          if (icon) {
            icon.className = `mode-ico iconfont ${config.iconClass}`;
          }
          btn.title = config.tooltip;
          btn.setAttribute('data-original-title', config.tooltip);
          
          // 刷新Bootstrap Tooltip
          if (btn._tooltip) {
            btn._tooltip.dispose();
            if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
              new bootstrap.Tooltip(btn);
            }
          }
        });
        
        // 4. 持久化Cookie
        this.setCookie(this.cookieName, config.cookieValue, 365);
        
        if (!silent) {
          console.log(`[夜间模式] 已切换到${isNight ? '夜间' : '日间'}模式`);
        }
      });
    }
    
    // 实用方法
    isNightTime() {
      const hour = new Date().getHours();
      return hour > 22 || hour < 6;
    }
    
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      return parts.length === 2 ? parts.pop().split(';').shift() : '';
    }
    
    setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
    }
  }

  // ==================== 3. 页脚功能增强 ====================
  class FooterEnhancer {
    static init() {
      // 返回顶部按钮
      document.getElementById('go-to-up')?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      
      // 搜索模态框控制
      const searchModal = document.getElementById('search-modal');
      if (searchModal) {
        const modal = new bootstrap.Modal(searchModal);
        document.querySelector('[data-target="#search-modal"]')?.addEventListener('click', () => {
          modal.show();
        });
      }
    }
  }

  // ==================== 初始化所有功能 ====================
  try {
    // 初始化加载动画
    PageLoader.init();
    
    // 初始化夜间模式管理器
    window.nightModeManager = new NightModeManager();
    
    // DOM加载完成后初始化页脚功能
    document.addEventListener('DOMContentLoaded', () => {
      FooterEnhancer.init();
    });
  } catch (error) {
    console.error('[夜间模式模块] 初始化失败:', error);
  }
})();