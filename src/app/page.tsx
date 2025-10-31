"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center glow">
              <span className="text-xl font-bold">G</span>
            </div>
            <span className="text-xl font-bold">GEO 优化平台</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-indigo-400 transition-colors">
              功能
            </a>
            <a href="#advantages" className="hover:text-indigo-400 transition-colors">
              优势
            </a>
            <a href="#pricing" className="hover:text-indigo-400 transition-colors">
              定价
            </a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">
              联系宇哥
            </a>
          </div>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
            开始试用
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-sm">
            🚀 AI 时代的营销革命
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            让 AI 为你的品牌
            <br />
            <span className="gradient-text">赋能增长</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            专业的 GEO（生成式引擎优化）平台，助力企业在 ChatGPT 等 AI
            平台获得更高曝光和转化率
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105">
              免费开始
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/5 transition-all duration-300">
              观看演示
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold gradient-text">1亿+</div>
              <div className="text-gray-400 mt-2">AI平台用户</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold gradient-text">300%</div>
              <div className="text-gray-400 mt-2">平均流量提升</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold gradient-text">1000+</div>
              <div className="text-gray-400 mt-2">企业客户</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold gradient-text">99.9%</div>
              <div className="text-gray-400 mt-2">系统稳定性</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              强大的 <span className="gradient-text">AI 驱动</span> 功能
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              集成先进的 AI 技术，为您的品牌优化提供全方位支持
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">智能 Brief 生成器</h3>
              <p className="text-gray-400 leading-relaxed">
                基于 AI 自动分析企业信息，生成完整的 GEO
                优化策略方案，为您的优化项目奠定坚实基础
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI 关键词挖掘</h3>
              <p className="text-gray-400 leading-relaxed">
                利用 DeepResearch 技术，精准挖掘 AI
                平台相关关键词，识别用户查询意图，优化内容策略
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Query 意图分析</h3>
              <p className="text-gray-400 leading-relaxed">
                深度理解用户查询背后的真实需求，评估转化潜力，制定精准的优化方案
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">内容优化引擎</h3>
              <p className="text-gray-400 leading-relaxed">
                AI 驱动的内容优化建议，提升您在 AI
                平台的推荐概率，最大化用户转化率
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">效果追踪系统</h3>
              <p className="text-gray-400 leading-relaxed">
                实时监控优化效果，量化 ROI，提供详细的数据分析和改进建议
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">竞争分析工具</h3>
              <p className="text-gray-400 leading-relaxed">
                全面分析竞争对手策略，识别差距和机会，助力您在市场中脱颖而出
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="advantages" className="py-32 relative bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              为什么选择 <span className="gradient-text">我们</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              在 AI 时代，我们帮助企业重新定义数字营销策略
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">精准定位</h3>
                  <p className="text-gray-400">
                    基于 AI 大数据分析，精准识别目标用户查询意图，提升转化效率
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">快速部署</h3>
                  <p className="text-gray-400">
                    自动化流程，从分析到优化仅需数天，快速看到效果
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">数据驱动</h3>
                  <p className="text-gray-400">
                    实时数据监控和分析，让每一个决策都有据可依
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">持续优化</h3>
                  <p className="text-gray-400">
                    AI 持续学习和优化，确保您始终领先竞争对手
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">品牌曝光提升</span>
                    <span className="text-2xl font-bold gradient-text">+350%</span>
                  </div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" style={{ width: "87%" }}></div>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <span className="text-gray-400">用户转化率提升</span>
                    <span className="text-2xl font-bold gradient-text">+280%</span>
                  </div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" style={{ width: "70%" }}></div>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <span className="text-gray-400">ROI 提升</span>
                    <span className="text-2xl font-bold gradient-text">+420%</span>
                  </div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              灵活的 <span className="gradient-text">定价方案</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              选择最适合您的方案，开启 AI 营销优化之旅
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">基础版</h3>
              <div className="text-gray-400 mb-6">适合初创企业和个人</div>
              <div className="mb-8">
                <span className="text-5xl font-bold">免费</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">每月 10 次关键词分析</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">基础效果追踪</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">基础报告生成</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">竞争分析功能</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-all duration-300">
                开始使用
              </button>
            </div>

            {/* Professional Plan */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border-2 border-indigo-500 relative overflow-hidden transform scale-105">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                推荐
              </div>
              <h3 className="text-2xl font-bold mb-2">专业版</h3>
              <div className="text-gray-400 mb-6">适合成长型企业</div>
              <div className="mb-8">
                <span className="text-5xl font-bold gradient-text">¥299</span>
                <span className="text-gray-400">/月</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">无限关键词分析</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">完整效果追踪</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">详细报告和洞察</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">竞争分析功能</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">优先技术支持</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 font-semibold">
                立即订阅
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">企业版</h3>
              <div className="text-gray-400 mb-6">适合大型企业</div>
              <div className="mb-8">
                <span className="text-5xl font-bold">¥999</span>
                <span className="text-gray-400">/月</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">专业版所有功能</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">团队协作功能</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">定制化分析</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">API 访问权限</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">专属客户经理</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-all duration-300">
                联系销售
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            准备好在 AI 时代
            <br />
            <span className="gradient-text">引领增长</span> 了吗？
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            立即开始免费试用，体验 AI 驱动的营销优化平台如何为您的业务带来突破性增长
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105">
              免费开始 14 天试用
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/5 transition-all duration-300">
              预约演示
            </button>
          </div>
          <p className="text-gray-500 mt-8 text-sm">
            无需信用卡 · 随时取消 · 专业支持
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold">G</span>
                </div>
                <span className="text-xl font-bold">GEO 优化平台</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI 时代的品牌增长引擎，助力企业在 AI 平台实现营销突破
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    功能特性
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    定价方案
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    案例研究
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API 文档
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">公司</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    关于我们
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    博客
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    加入我们
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    联系我们
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">联系方式</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>邮箱: 52052051@qq.com</li>
                <li>微信: 52052051</li>
                <li>地址: 中国·北京</li>
                <li>主站: <a href="https://52aeo.shop" className="hover:text-white transition-colors">https://52aeo.shop</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GEO 优化平台. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                隐私政策
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                服务条款
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie 设置
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
