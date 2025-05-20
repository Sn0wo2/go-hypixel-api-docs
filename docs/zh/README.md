---
home: true

heroAlt: go-hypixel-api-docs
actions:
  - text: 快速开始
    link: ./get-started.html
    type: primary
  - text: GitHub
    link: https://github.com/Sn0wo2/go-hypixel-api
    type: secondary
features:
  - title: 简单快捷
    details: go-hypixel-api 的 API 做到了尽可能简洁, 快速的高效进行开发, 内置了所有 Hypixel API 调用路径并封装成函数
  - title: 最小化
    details: go-hypixel-api 在设计之初就希望在功能齐全情况下尽可能减小包尺寸和依赖
  - title: 支持API速率限制
    details: 通过一系列 Hypixel API 返回响应头自动计算剩余请求次数并自动进行堵塞, 无需手动设置
  - title: 自由度
    details: 我们希望给开发者提供更高的自由度, 使得 go-hypixel-api 的所有设置几乎都可以自主调节, 并暴露底层函数
  - title: 缓存策略支持
    details: 尽管 go-hypixel-api 并不考虑内置缓存模块, 但是我们提供了较为完善的 Hook 和 Callback 机制, 允许开发者通过自己的缓存策略进行存储
  - title: 快速适配
    details: 我们会尽快跟进 Hypixel API 的变化, 并在底层实现充足的自由度, 使得开发者在项目未跟进时也能快速进行适配
---

<div style="text-align: center; margin-top: 3rem; font-size: 0.9rem;">
  <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">GPL-3.0 Licensed</a> |
  Copyright © 2025–present
  <a href="https://github.com/Sn0wo2" target="_blank">Me0wo</a>
</div>