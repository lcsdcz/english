/**
 * 英语对话AI助手配置文件
 * 注意：此文件中的API密钥将在构建时通过GitHub Actions自动替换
 * 请勿在此文件中直接填写真实的API密钥
 */

const CONFIG = {
    // OpenAI API配置
    openai: {
        apiKey: '{{OPENAI_API_KEY}}',           // 将在构建时替换
        apiUrl: '{{OPENAI_API_URL}}',           // 将在构建时替换
        model: '{{OPENAI_MODEL}}',              // 将在构建时替换
        maxTokens: 1000,
        temperature: 0.7,
        timeout: 30000
    },
    
    // 应用配置
    app: {
        name: '英语对话AI助手',
        version: '1.0.0',
        language: 'zh-CN',
        autoSave: true,
        maxHistoryLength: 50
    },
    
    // UI配置
    ui: {
        showEnglish: true,
        showChinese: true,
        showTimestamps: false,
        theme: 'auto', // auto, light, dark
        animations: true
    },
    
    // 内容过滤配置
    filter: {
        enabled: true,
        inappropriateKeywords: [
            '黄', '赌', '毒', '色情', '暴力', '赌博', '吸毒', '违法',
            'porn', 'gambling', 'drugs', 'violence', 'illegal'
        ],
        redirectMessage: "I'm sorry, but I cannot discuss inappropriate or illegal topics. Let's focus on something positive and constructive instead. What would you like to learn about today?"
    },
    
    // 系统提示词
    systemPrompt: `You are a helpful and positive English conversation AI assistant. 

IMPORTANT RULES:
1. ALWAYS respond in ENGLISH ONLY - never use any other language
2. Keep all content POSITIVE, UPLIFTING, and EDUCATIONAL
3. STRICTLY FORBIDDEN: pornography, gambling, drugs, violence, hate speech, or any illegal content
4. Focus on helpful topics like: learning English, personal development, positive thinking, education, hobbies, travel, culture, science, technology, health, and motivation
5. Be encouraging, supportive, and inspiring in your responses
6. If someone asks about inappropriate topics, politely redirect to positive alternatives
7. Maintain a warm, friendly, and professional tone
8. Help users improve their English skills through natural conversation

Start every response with a warm greeting and maintain engaging conversation.`,
    
    // 翻译提示词
    translationPrompt: `You are a professional English to Chinese translator. Please translate the following English text to Chinese (Simplified). Only provide the Chinese translation, no explanations:`,
    
    // 默认欢迎消息
    welcomeMessage: {
        english: "Hello! I'm your English conversation AI assistant. I'm here to help you improve your English skills through natural conversation. What would you like to talk about today?",
        chinese: "你好！我是你的英语对话AI助手。我在这里帮助你通过自然对话提高英语水平。你今天想聊什么？"
    },
    
    // 错误消息
    errorMessages: {
        networkError: "网络连接错误，请检查网络后重试",
        apiError: "API调用失败，请稍后重试",
        invalidInput: "输入内容无效，请重新输入",
        rateLimit: "请求过于频繁，请稍后重试",
        translationFailed: "翻译失败，请重试"
    },
    
    // 建议话题
    suggestedTopics: [
        { category: "英语学习", topics: ["语法学习", "词汇积累", "发音练习", "听力训练", "口语表达"] },
        { category: "个人发展", topics: ["目标设定", "时间管理", "技能提升", "职业规划", "自我激励"] },
        { category: "积极思考", topics: ["正面心态", "压力管理", "情绪调节", "心理建设", "乐观生活"] },
        { category: "教育文化", topics: ["学习方法", "文化差异", "知识分享", "教育理念", "文化交流"] },
        { category: "兴趣爱好", topics: ["音乐欣赏", "电影评论", "阅读分享", "运动健身", "艺术创作"] },
        { category: "旅行探索", topics: ["目的地介绍", "文化体验", "旅行建议", "美食探索", "风景欣赏"] },
        { category: "科学技术", topics: ["最新科技", "科学发现", "技术趋势", "创新应用", "未来展望"] },
        { category: "健康生活", topics: ["健身运动", "营养健康", "心理健康", "生活习惯", "养生保健"] },
        { category: "励志激励", topics: ["成功故事", "人生哲理", "积极能量", "奋斗精神", "梦想追求"] }
    ],
    
    // 本地存储键名
    storageKeys: {
        chatHistory: 'english_ai_chat_history',
        userSettings: 'english_ai_user_settings',
        conversationStats: 'english_ai_conversation_stats'
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
