// 塑料物流包装外贸口语训练 - 完整课程库
// 05号龙虾博士编写 - 2026年3月25日
// 更新：2026年4月1日 补充第8-30天课程
// 更新：2026年4月4日 新增第31-35天课程
// 更新：2026年4月4日 新增第36天课程（处理索赔与争议解决）
// 更新：2026年4月12日 新增第53-55天课程
// 更新：2026年4月12日 补充第51天课程（产品退货处理与理赔谈判）
// 更新：2026-04-13 新增第59天课程（危险品包装出口认证与UN标准）
// 更新：2026年4月12日 新增第57天课程（跨境电商平台客户开发与新兴市场开拓）
// 更新：2026年4月5日 新增第37天课程（处理索赔与争议解决）
// 更新：2026年4月8日 新增第46-47天课程
// 更新：2026年4月9日 新增第49-50天课程
// 更新：2026年4月6日 新增第41天课程（付款条款与结算方式谈判）
// 更新：2026-4月6日 新增第40天课程（跨文化商务沟通与新兴市场开发）
// 更新：2026年4月5日 新增第38-39天课程
// 更新：2026年4月9日 补充第37天课程（新能源电池包装出口认证说明）
// 更新：2026-04-16 新增第67天课程（长期客户关系维护与复购谈判）
// 更新：2026年4月15日 新增第62-63天课程（目的港查验、碳关税应对）


const ORAL_TRAINING_COURSES = {
    appName: "塑料物流包装外贸口语训练营",
    version: "4.1",
    description: "67天、每天15分钟的口语对话训练，专门针对塑料物流包装外贸行业",
    targetAudience: "外贸业务员、销售经理、客户服务人员",
    
    courses: [
        // ============ 第一周：产品基础知识 ============
        {
            day: 1,
            title: "产品基础知识：自我介绍与基本产品线",
            description: "学习如何用英语自我介绍并向客户简要介绍公司的核心产品线",
            difficulty: 1,
            duration: "15分钟",
            tags: ["基础", "自我介绍", "产品线"],
            prompt: "请尝试用英语介绍公司基本情况：我们是优盖特塑胶科技(Uget Packaging)，专业生产塑料托盘、周转箱和围板箱。然后询问客户需求。",
            hint: {
                answer: "Hello, I'm from Uget Packaging. We specialize in plastic packaging products including plastic pallets, turnover boxes, and folding plastic containers. Our products are widely used in automotive, electronics, and logistics industries. What kind of plastic packaging solutions are you looking for?",
                translation: "您好，我是优盖特包装公司的。我们专注于塑料包装产品，包括塑料托盘、周转箱和折叠式塑料围板箱。我们的产品广泛应用于汽车、电子和物流行业。您需要什么样的塑料包装解决方案呢？",
                keyPoints: ["公司名称要清晰：Uget Packaging", "核心产品列1-3个即可：pallets, turnover boxes, containers", "简要说明应用行业：automotive, electronics, logistics", "最后一定要询问客户需求"],
                vocabulary: ["specialize in", "plastic packaging", "pallets", "turnover boxes", "folding containers", "widely used", "logistics industry"]
            },
            initialAI: "Hello! I'm Emily from an automotive parts company in Germany. We're looking for plastic packaging solutions for our warehouse. Can you tell me about your company and products?",
            aiResponses: [
                { triggers: ["product", "tell me about", "company"], response: "Thanks for the introduction. We specifically need plastic containers for small automotive parts. Do you have containers with dividers or compartments?" },
                { triggers: ["pallet", "box", "container"], response: "Interesting. We use a mix of wooden and plastic pallets currently. Why should we switch to plastic?" },
                { triggers: ["quality", "certification"], response: "Do your products have any international certifications like ISO standards?" }
            ]
        },
        {
            day: 2,
            title: "材料特性介绍：HDPE与PP的区别",
            description: "掌握如何介绍产品材质特性及不同材料的适用场景",
            difficulty: 2,
            duration: "15分钟",
            tags: ["材质", "技术", "对比"],
            prompt: "请解释HDPE和PP材料的区别，并推荐适合客户需求的产品材质",
            hint: {
                answer: "We mainly use two materials: HDPE (High-Density Polyethylene) and PP (Polypropylene). HDPE has better chemical resistance and impact strength, ideal for harsh environments like chemical factories. PP is lighter and more flexible, better for indoor applications or food-grade use. Based on your needs, I'd recommend HDPE for durability or PP for cost-effectiveness.",
                translation: "我们主要使用两种材料：HDPE（高密度聚乙烯）和PP（聚丙烯）。HDPE具有更好的耐化学性和抗冲击强度，非常适合化工厂等恶劣环境。PP更轻、更柔韧，更适合室内应用或食品级用途。根据您的需求，我建议选择HDPE以获得更好的耐用性，或选择PP以获得更高的成本效益。",
                keyPoints: ["准确使用专业术语：HDPE, PP", "对比性能：chemical resistance vs flexibility", "推荐要基于客户需求", "解释缩写含义"],
                vocabulary: ["HDPE", "PP (Polypropylene)", "chemical resistance", "impact strength", "harsh environments", "flexible", "food-grade", "durability", "cost-effectiveness"]
            },
            initialAI: "I see. My products will be used in a chemical factory warehouse where there's occasional chemical exposure. What material would you recommend?"
        },
        {
            day: 3,
            title: "托盘产品详细介绍",
            description: "学习介绍三种主要托盘：货架托盘、防静电托盘、九脚托盘",
            difficulty: 2,
            duration: "15分钟",
            tags: ["托盘", "详细规格", "应用场景"],
            prompt: "请详细介绍公司的托盘产品线，包括rackable pallet, ESD pallet和nestable pallet",
            hint: {
                answer: "We have three main types of plastic pallets: 1) Rackable plastic pallets - designed specifically for rack storage systems, with reinforced structures to withstand heavy loads on shelves. 2) ESD pallets - anti-static for electronic and semiconductor industries, meeting ANSI/ESD standards. 3) Nestable pallets - designed to save space when empty, stacking to 1/3 height, perfect for warehouse logistics.",
                translation: "我们有三种主要类型的塑料托盘：1）货架式塑料托盘——专为货架存储系统设计，具有加强结构，可承受货架上的重载。2）防静电托盘——适用于电子和半导体行业的防静电产品，符合ANSI/ESD标准。3）套叠式托盘——空载时可节省空间，可堆叠至原高度的1/3，非常适合仓库物流使用。",
                keyPoints: ["分类介绍：1) 2) 3) 结构清晰", "每类说明用途和特点", "强调技术标准：ANSI/ESD", "突出空间节省优势"],
                vocabulary: ["rackable pallets", "ESD (Electrostatic Discharge)", "nestable pallets", "reinforced structure", "withstand heavy loads", "anti-static", "space-saving", "stacking", "logistics"]
            },
            initialAI: "We need pallets for our automated warehouse with rack system. The pallets need to work with our forklifts and be stable on 2-meter high shelves. What do you recommend?"
        },
        {
            day: 4,
            title: "围板箱应用场景介绍",
            description: "掌握围板箱在不同行业的具体应用方案",
            difficulty: 3,
            duration: "15分钟",
            tags: ["围板箱", "解决方案", "行业应用"],
            prompt: "请询问客户的应用场景，并推荐合适的围板箱解决方案",
            hint: {
                answer: "Could you tell me more about your application scenario? For automotive parts storage and transport, we recommend our heavy-duty sleeve boxes with reinforced corners. For electronics manufacturing, our ESD-safe collapsible boxes protect sensitive components. For food logistics, we have FDA-approved stackable plastic containers. Which industry are you operating in, and what specific challenges are you facing?",
                translation: "您能告诉我更多关于您的应用场景吗？对于汽车零部件的存储和运输，我们推荐带有加强角的重型围板箱。对于电子制造业，我们的防静电可折叠箱可以保护敏感元件。对于食品物流，我们有FDA认证的堆叠式塑料容器。您从事哪个行业，面临什么具体挑战？",
                keyPoints: ["主动询问应用场景", "按行业推荐：automotive, electronics, food", "强调产品针对性优势", "询问具体挑战"],
                vocabulary: ["application scenario", "automotive parts", "ESD-safe", "collapsible boxes", "FDA-approved", "food logistics", "heavy-duty", "reinforced corners", "sensitive components"]
            },
            initialAI: "We manufacture electronic components that need anti-static protection during storage, assembly line transport, and shipping to customers. The boxes also need to work with our conveyors."
        },
        {
            day: 5,
            title: "周转箱规格与标准",
            description: "学习介绍VDA标准周转箱和国际标准规格",
            difficulty: 3,
            duration: "15分钟",
            tags: ["标准规格", "VDA", "兼容性"],
            prompt: "请解释600x400mm周转箱系列和VDA KLT标准产品的优势",
            hint: {
                answer: "Our standard 600x400mm series follows the international EUR-pallet compatibility standards. These containers are designed to maximize truck and container space efficiency. Our VDA KLT containers meet exact German automotive industry standards - they're dimensionally precise for assembly line conveyors, stack securely, and fold flat when empty to save 80% storage space.",
                translation: "我们的标准600x400mm系列遵循国际欧标托盘兼容性标准。这些容器设计用于最大化卡车和集装箱的空间效率。我们的VDA KLT容器完全符合德国汽车工业标准——尺寸精确，适合装配线输送带，堆叠稳固，空箱时可折叠平整，节省80%的存储空间。",
                keyPoints: ["国际标准：EUR-pallet compatibility", "空间效率：truck space efficiency", "德国汽车标准：VDA KLT", "精确尺寸：dimensionally precise"],
                vocabulary: ["EUR-pallet compatibility", "space efficiency", "VDA KLT (Kleinladungstrager)", "assembly line conveyors", "stack securely", "fold flat", "storage space", "dimensionally precise"]
            },
            initialAI: "We need containers for automotive parts assembly line. The containers must fit our standard conveyor widths and be compatible with our automated sorting system. What specifications should I consider?"
        },
        {
            day: 6,
            title: "客户需求挖掘技巧",
            description: "学习通过提问了解客户具体需求",
            difficulty: 3,
            duration: "15分钟",
            tags: ["提问技巧", "需求挖掘", "沟通"],
            prompt: "请通过提问了解客户的预算、使用环境、数量等关键信息",
            hint: {
                answer: "To better recommend the right products for you, could you share: 1) What's your approximate budget range for this project? 2) How many units do you need initially, and what's your monthly usage? 3) Will these be used indoors, outdoors, or both? 4) Do you have any special requirements like temperature resistance, UV protection, or specific certifications needed?",
                translation: "为了更好地为您推荐合适的产品，您能分享一下：1）这个项目的预算范围大概是多少？2）您最初需要多少数量，每月使用量是多少？3）这些产品将在室内、室外还是两者都使用？4）您有什么特殊要求吗，比如耐温性、防紫外线或特定认证？",
                keyPoints: ["结构清晰：1) 2) 3) 4)", "关键信息：预算、数量、环境、特殊需求", "使用礼貌询问方式", "为后续报价做准备"],
                vocabulary: ["budget range", "initial units", "monthly usage", "indoor/outdoor use", "temperature resistance", "UV protection", "certifications needed", "special requirements"]
            },
            initialAI: "We're planning a major warehouse upgrade next quarter. I know we need plastic containers but I'm not sure about exact specifications. We just want something durable and cost-effective."
        },
        {
            day: 7,
            title: "价格谈判开场技巧",
            description: "学习如何优雅地询问客户预算范围",
            difficulty: 2,
            duration: "15分钟",
            tags: ["价格谈判", "商务技巧", "预算"],
            prompt: "请询问客户的预算范围，为后续报价做准备",
            hint: {
                answer: "To provide you with suitable options and accurate pricing, could you give me an approximate budget range you're working with? We have solutions ranging from economical standard models to premium customized options. Understanding your budget helps me recommend the most cost-effective solution for your needs.",
                translation: "为了给您提供合适的选择和准确的报价，您能告诉我您的预算范围吗？我们有从经济型标准款到高端定制款的各种解决方案。了解您的预算有助于我为您推荐最具成本效益的方案。",
                keyPoints: ["解释询问预算的目的", "强调选择范围：economical to premium", "使用'cost-effective'正面表述", "保持商务礼貌"],
                vocabulary: ["budget range", "suitable options", "accurate pricing", "economical", "premium options", "customized", "cost-effective", "recommend"]
            },
            initialAI: "We like your products. How much are your plastic pallets and boxes? I need to create a budget proposal for my manager."
        },

        // ============ 第二周：报价与商务谈判 ============
        {
            day: 8,
            title: "报价单讲解：FOB/CIF/DDP术语",
            description: "学习国际贸易术语并为客户清晰解释报价细节",
            difficulty: 3,
            duration: "15分钟",
            tags: ["报价", "贸易术语", "FOB", "CIF"],
            prompt: "请为客户解释FOB和CIF报价的区别，并推荐合适的贸易条款",
            hint: {
                answer: "We can offer you pricing under different trade terms. Under FOB Shanghai, the price covers goods and local charges up to the port. You'd arrange your own shipping. Under CIF, we include sea freight and insurance to your destination port. For a hassle-free experience, I'd recommend CIF if this is your first import from China - we handle the logistics, and you only need to arrange local delivery and customs clearance.",
                translation: "我们可以提供不同贸易条款下的报价。FOB上海价包含货物和港口前的所有本地费用，您需要自己安排运输。CIF价格包含海运费和保险到目的港。如果您是第一次从中国进口，我建议选择CIF——我们负责物流，您只需要安排本地配送和清关。",
                keyPoints: ["区分FOB和CIF：运输责任划分", "CIF更适合首次进口客户", "强调'hassle-free'客户利益", "提及清关义务归属"],
                vocabulary: ["trade terms", "FOB (Free On Board)", "CIF (Cost, Insurance, Freight)", "destination port", "sea freight", "customs clearance", "local charges", "hassle-free"]
            },
            initialAI: "This is our first time importing from China. We're not familiar with the shipping process. Can you explain the price terms and what's included?"
        },
        {
            day: 9,
            title: "MOQ与批量折扣谈判",
            description: "学习讨论最小起订量和数量阶梯折扣",
            difficulty: 3,
            duration: "15分钟",
            tags: ["MOQ", "折扣", "批量采购"],
            prompt: "请向客户解释最小起订量和批量折扣政策",
            hint: {
                answer: "Our standard MOQ is 500 pieces per item. However, we offer tiered volume discounts: 500-999 pieces at standard price, 1,000-4,999 pieces at 5% off, and 5,000+ pieces at 10% off. If you're not ready for the full MOQ, I can arrange a sample order of 5-10 pieces at a small premium. Many of our clients start with a trial order to test the quality before committing to larger quantities.",
                translation: "我们的标准最小起订量是每款500件。不过，我们提供阶梯式批量折扣：500-999件为标准价格，1,000-4,999件打95折，5,000件以上打9折。如果您暂时达不到最小起订量，我可以安排5-10件的样品订单，略加一点费用。我们很多客户都是先下试用订单测试质量，然后再大批量采购。",
                keyPoints: ["清楚说明MOQ：500件", "阶梯折扣：500/1000/5000三档", "提供样品订单选项作为替代方案", "强调'trial order'降低客户心理门槛"],
                vocabulary: ["MOQ (Minimum Order Quantity)", "tiered volume discounts", "sample order", "trial order", "standard price", "premium", "committing to", "larger quantities"]
            },
            initialAI: "We're interested in your nestable pallets, but 500 pieces is a lot for our first order. We'd like to start smaller to test the quality first."
        },
        {
            day: 10,
            title: "付款方式协商：T/T与L/C",
            description: "学习讨论常见的国际付款方式及安全收款策略",
            difficulty: 3,
            duration: "15分钟",
            tags: ["付款方式", "T/T", "L/C", "安全收款"],
            prompt: "请与客户协商付款方式，推荐安全可靠的付款条款",
            hint: {
                answer: "For new customers, our standard payment terms are 30% deposit by T/T, and 70% balance before shipment or against copy of B/L. This protects both sides. For larger orders above 50,000 USD, we also accept Letter of Credit from a first-class international bank. If you have concerns about payment security, I can provide references from our existing customers in your region.",
                translation: "对于新客户，我们的标准付款条件是30%的T/T定金，70%尾款在发货前或凭提单副本支付。这样对双方都有保障。对于5万美元以上的大额订单，我们也接受一流国际银行的信用证。如果您对付款安全有顾虑，我可以为您提供我们现有同区域客户的推荐人。",
                keyPoints: ["标准条款：30%定金+70%尾款", "大单可接受L/C", "强调'protects both sides'双赢", "主动提供客户推荐增加信任"],
                vocabulary: ["T/T (Telegraphic Transfer)", "deposit", "balance", "B/L (Bill of Lading)", "L/C (Letter of Credit)", "first-class bank", "references", "shipment"]
            },
            initialAI: "We've never paid a Chinese supplier before. What payment methods do you accept? We want to make sure the transaction is safe for both parties."
        },
        {
            day: 11,
            title: "交期承诺与生产排期",
            description: "学习讨论交货时间和生产周期安排",
            difficulty: 3,
            duration: "15分钟",
            tags: ["交期", "生产排期", "Lead Time"],
            prompt: "请告知客户生产周期和预计交货时间",
            hint: {
                answer: "For standard products in stock, we can ship within 3-5 business days. For customized orders, our typical lead time is 25-30 days from deposit confirmation to delivery. This includes 7 days for mold preparation, 15 days for mass production, and 5-7 days for sea freight. I can provide a detailed production schedule and weekly progress updates so you can track your order every step of the way.",
                translation: "对于有现货的标准产品，我们可以在3-5个工作日内发货。对于定制订单，从定金确认到交货通常需要25-30天。这包括7天的模具准备、15天的批量生产和5-7天的海运时间。我可以提供详细的生产进度表和每周进度更新，让您可以随时跟踪订单的每个环节。",
                keyPoints: ["区分现货和定制交期", "具体时间分解：模具+生产+运输", "承诺进度更新增加透明度", "使用'business days'准确表述"],
                vocabulary: ["in stock", "lead time", "deposit confirmation", "mass production", "sea freight", "production schedule", "progress updates", "business days"]
            },
            initialAI: "Our new warehouse opens in 2 months. We need the pallets and containers to arrive before that. What's your earliest delivery time?"
        },
        {
            day: 12,
            title: "样品发送流程说明",
            description: "学习如何解释样品流程、费用和快递方式",
            difficulty: 2,
            duration: "15分钟",
            tags: ["样品", "快递", "DHL", "FEDEX"],
            prompt: "请向客户说明样品申请流程和快递方式",
            hint: {
                answer: "We'd be happy to send you samples. Here's the process: first, you select the products you're interested in and we prepare the samples within 2 business days. Sample cost is refundable against your bulk order. We ship via DHL or FedEx, which takes about 3-5 days to arrive. Express freight is around 50-80 USD per package depending on weight and destination. I'll send you the tracking number as soon as the package is dispatched.",
                translation: "我们很乐意给您寄样品。流程是这样的：首先您选择感兴趣的产品，我们在2个工作日内准备样品。样品费可以在您后续批量下单时退还。我们通过DHL或FedEx快递发送，大约3-5天到达。快递费根据重量和目的地约50-80美元一包。包裹一发出我就给您发追踪号码。",
                keyPoints: ["流程清晰：选品->准备->发货", "样品费可退还增加吸引力", "具体快递时间和费用", "承诺提供追踪号"],
                vocabulary: ["samples", "refundable", "bulk order", "DHL", "FedEx", "express freight", "tracking number", "dispatched"]
            },
            initialAI: "Before placing a big order, we'd like to see and test some samples first. How does your sample process work and how long does delivery take?"
        },
        {
            day: 13,
            title: "应对客户比价：突出差异化优势",
            description: "学习当客户说别人的更便宜时如何回应",
            difficulty: 4,
            duration: "15分钟",
            tags: ["比价", "差异化", "价值主张"],
            prompt: "客户反馈其他供应商报价更低，请说明我们产品的独特价值",
            hint: {
                answer: "I understand price is important. Could you share what's included in their quote? Sometimes lower prices mean fewer features. Our products use 100% virgin HDPE material - many competitors use recycled material to cut costs. We also provide 5-year warranty, ISO 9001 certification, and free design consultation. When you factor in longer lifespan, lower replacement costs, and better after-sales support, our total cost of ownership is actually lower in the long run.",
                translation: "我理解价格很重要。您能分享一下对方报价包含什么吗？有时候较低的价格意味着较少的功能。我们的产品使用100%全新料HDPE——很多竞争对手用回收料降低成本。我们还提供5年质保、ISO 9001认证和免费设计咨询。综合考虑更长的使用寿命、更低的更换成本和更好的售后服务，我们的总拥有成本实际上更低。",
                keyPoints: ["不直接降价，先了解对方报价内容", "强调材质差异：virgin vs recycled", "提出TCO(总拥有成本)概念", "用数据和认证支撑价值主张"],
                vocabulary: ["total cost of ownership", "virgin material", "recycled material", "warranty", "lifespan", "replacement costs", "after-sales support", "ISO 9001"]
            },
            initialAI: "To be honest, another Chinese supplier quoted us 20% less than your price for similar pallets. Why should we pay more for your products?"
        },
        {
            day: 14,
            title: "促成首次下单技巧",
            description: "学习如何引导犹豫的客户完成首次下单",
            difficulty: 4,
            duration: "15分钟",
            tags: ["成交", "促单", "紧迫感"],
            prompt: "客户表示需要考虑一下，请用恰当方式促进成交",
            hint: {
                answer: "Of course, I completely understand you need time to evaluate. Just to let you know, our current production schedule has limited capacity due to peak season demand. If you can confirm within this week, I can reserve the production slot for you and guarantee delivery before your deadline. Also, I can include a 2% early-bird discount if you place the order by Friday. There's no pressure at all - I just want to make sure we can meet your timeline.",
                translation: "当然，我完全理解您需要时间评估。只是想提醒您，由于旺季需求，我们目前的生产排期比较紧张。如果您这周内能确认，我可以为您预留生产档位并保证在截止日期前交货。另外，如果周五前下单，我还可以给您加2%的早鸟折扣。完全没有压力——我只是想确保我们能赶上您的时间线。",
                keyPoints: ["尊重客户决策，不强推", "制造合理的紧迫感：旺季产能紧张", "提供激励：early-bird discount", "强调保障：预留档位+保证交期"],
                vocabulary: ["production schedule", "limited capacity", "peak season", "reserve", "guarantee delivery", "early-bird discount", "production slot", "timeline"]
            },
            initialAI: "Thanks for the detailed quotation. I need to discuss with my team and get approval from management. Give me a week or so to get back to you."
        },

        // ============ 第三周：技术沟通与质检 ============
        {
            day: 15,
            title: "产品尺寸与承重参数讲解",
            description: "学习用英语准确介绍产品的物理参数和承重能力",
            difficulty: 3,
            duration: "15分钟",
            tags: ["规格参数", "承重", "动载/静载"],
            prompt: "请详细介绍托盘的尺寸规格和承载能力参数",
            hint: {
                answer: "Our standard rackable pallet is 1200x1000x150mm and weighs 14.5 kg. It has a dynamic load capacity of 1,500 kg, static load capacity of 6,000 kg, and rack load capacity of 1,200 kg. Dynamic load means the weight when moving with a forklift, static load is the weight when stacked and stationary, and rack load is the maximum weight supported on a rack system. These are tested according to ISO 8611 standards.",
                translation: "我们的标准货架托盘尺寸为1200x1000x150mm，重量14.5公斤。动载1500公斤，静载6000公斤，货架载1200公斤。动载是指用叉车搬运时的承重，静载是堆叠静止时的承重，货架载是在货架系统上支撑的最大重量。这些都是按照ISO 8611标准测试的。",
                keyPoints: ["三组承载参数必须区分：dynamic/static/rack", "给出具体数字：1,500/6,000/1,200 kg", "解释每个参数含义", "引用测试标准ISO 8611增加可信度"],
                vocabulary: ["dynamic load", "static load", "rack load", "load capacity", "forklift", "stacked and stationary", "ISO 8611", "rack system"]
            },
            initialAI: "I need pallets that can hold at least 1,200 kg on our rack system. Can you tell me the exact dimensions and load capacities of your rackable pallets?"
        },
        {
            day: 16,
            title: "定制产品需求沟通",
            description: "学习如何确认客户的定制要求并报价",
            difficulty: 4,
            duration: "15分钟",
            tags: ["定制", "模具", "图纸"],
            prompt: "客户需要定制规格的产品，请确认具体定制需求",
            hint: {
                answer: "For customized products, I'll need a few details from you. First, could you send us your technical drawings or specifications? This includes exact dimensions, load requirements, and any special features like drainage holes, anti-slip surfaces, or company logo printing. Once we have your drawings, our engineering team will review them and provide a feasibility report within 3 days. If everything works, mold development takes about 15-20 days. We typically charge 2,000-5,000 USD for mold costs depending on complexity.",
                translation: "对于定制产品，我需要您提供几个细节。首先，您能发送技术图纸或规格说明吗？包括精确尺寸、承重要求以及任何特殊功能，如排水孔、防滑表面或公司标志印刷。收到图纸后，我们的工程团队会在3天内进行可行性评估。如果一切可行，模具开发约15-20天。根据复杂程度，模具费通常在2,000-5,000美元之间。",
                keyPoints: ["索要技术图纸：technical drawings", "列出常见定制需求举例", "给出明确时间线：3天评估+15-20天开模", "透明说明模具费用"],
                vocabulary: ["technical drawings", "specifications", "drainage holes", "anti-slip surfaces", "logo printing", "feasibility report", "mold development", "mold costs"]
            },
            initialAI: "We need custom-sized containers. Standard sizes don't fit our automated system. We have detailed drawings ready. Can you manufacture according to our specifications?"
        },
        {
            day: 17,
            title: "质量检验与认证说明",
            description: "学习介绍工厂的质量管理体系和产品认证",
            difficulty: 3,
            duration: "15分钟",
            tags: ["质检", "ISO认证", "出厂检验"],
            prompt: "客户询问产品质量保证，请介绍质检流程和认证资质",
            hint: {
                answer: "Quality is our top priority. We are ISO 9001:2015 certified, and every production batch goes through our 4-step QC process: 1) Raw material inspection - we test material density and impact resistance. 2) In-process inspection during production. 3) Final inspection including dimension measurement and load testing. 4) Pre-shipment inspection with photo and video documentation. We can also arrange third-party inspection by SGS or TUV at your cost if required.",
                translation: "质量是我们的首要考虑。我们已通过ISO 9001:2015认证，每个生产批次都经过4步质检流程：1）原材料检验——测试材料密度和抗冲击性。2）生产过程中的在线检验。3）最终检验包括尺寸测量和承重测试。4）发货前检验，附有照片和视频记录。如果需要，我们还可以安排SGS或TUV的第三方检验，费用由您承担。",
                keyPoints: ["列出具体认证：ISO 9001:2015", "4步质检流程有逻辑", "每步都有具体检验内容", "主动提供第三方检验选项"],
                vocabulary: ["ISO 9001:2015", "QC process", "raw material inspection", "in-process inspection", "dimension measurement", "load testing", "pre-shipment inspection", "third-party inspection"]
            },
            initialAI: "Quality is critical for us. Our last supplier had issues with inconsistent product quality. How do you ensure consistent quality? Do you have any certifications?"
        },
        {
            day: 18,
            title: "包装方式与物流协调",
            description: "学习介绍产品包装方式和运输安排",
            difficulty: 3,
            duration: "15分钟",
            tags: ["包装", "物流", "集装箱"],
            prompt: "请介绍产品的包装方式和集装箱装载方案",
            hint: {
                answer: "For pallets, we use metal straps and stretch film wrapping for secure transport. They're stacked on wooden pallets for easy forklift handling. For containers, a 20-foot container holds approximately 200 nestable pallets or 120 rackable pallets. A 40-foot HQ container can hold up to 480 nestable pallets. I'll optimize the loading plan to maximize container space and minimize your shipping cost per unit. We can also arrange LCL shipping for smaller orders.",
                translation: "托盘我们用金属带和拉伸膜缠绕进行安全运输。它们堆叠在木质托盘上，方便叉车操作。一个20尺柜大约可装200个套叠托盘或120个货架托盘。一个40尺高柜最多可装480个套叠托盘。我会优化装载方案以最大化集装箱空间利用率并降低单件运输成本。小订单我们也可以安排拼箱运输。",
                keyPoints: ["包装方式要具体：金属带+拉伸膜", "给出具体装箱量数据", "强调优化装载降低单件成本", "小单提及拼箱LCL选项"],
                vocabulary: ["metal straps", "stretch film", "20-foot container", "40-foot HQ container", "loading plan", "maximize", "shipping cost per unit", "LCL (Less than Container Load)"]
            },
            initialAI: "We plan to order 300 nestable pallets. How do you pack them? How many can fit in one container? We want to minimize shipping costs."
        },
        {
            day: 19,
            title: "客户询盘邮件回复模板",
            description: "学习如何撰写专业的外贸询盘回复邮件",
            difficulty: 3,
            duration: "15分钟",
            tags: ["邮件", "询盘回复", "专业模板"],
            prompt: "请用英语写一封专业的询盘回复，包含产品推荐和报价",
            hint: {
                answer: "Dear Mr. Smith, thank you for your inquiry about our plastic packaging products. Based on your requirements for warehouse storage, I recommend our model NP-1200 nestable pallet - 1200x1000x150mm, HDPE material, 1,500 kg dynamic load capacity. Attached is our product catalog and quotation sheet for your reference. The unit price is 12.50 USD FOB Shanghai, MOQ 500 pieces. We also have ESD and heavy-duty versions available. Please feel free to ask if you have any questions. Best regards.",
                translation: "尊敬的Smith先生，感谢您对我们塑料包装产品的询价。根据您对仓库存储的需求，我推荐我们的NP-1200套叠托盘——尺寸1200x1000x150mm，HDPE材质，动载1500公斤。随附产品目录和报价单供您参考。单价12.50美元FOB上海，最小起订量500件。我们还有防静电和重型版本可供选择。如有任何问题请随时联系。顺祝商祺。",
                keyPoints: ["邮件结构：感谢->推荐->报价->附件->结束", "产品推荐要具体到型号", "价格条款和MOQ要清晰", "专业用语：inquiry, attached, reference"],
                vocabulary: ["inquiry", "attached", "quotation sheet", "unit price", "FOB Shanghai", "catalog", "ESD version", "heavy-duty version", "Best regards"]
            },
            initialAI: "I sent an inquiry email about your pallets last week but haven't received a response yet. Can you help me draft a professional reply that I can learn from?"
        },
        {
            day: 20,
            title: "工厂验厂参观介绍",
            description: "学习如何邀请客户来工厂参观并介绍产线",
            difficulty: 3,
            duration: "15分钟",
            tags: ["验厂", "工厂参观", "生产线"],
            prompt: "请用英语向客户发出工厂参观邀请并介绍参观内容",
            hint: {
                answer: "We warmly welcome you to visit our factory in Suzhou, China. During the visit, I can arrange: 1) A tour of our injection molding workshop to see our 15 production lines. 2) A visit to our QC lab where we conduct material testing and load testing. 3) A meeting with our engineering team to discuss any customization needs. 4) A look at our warehousing and logistics center. We can pick you up from Shanghai Pudong Airport and arrange hotel accommodation. When would be a convenient time for you?",
                translation: "我们热烈欢迎您来参观我们位于中国苏州的工厂。参观期间我可以安排：1）参观注塑车间，看看我们的15条生产线。2）参观质检实验室，了解我们进行的材料测试和承重测试。3）与工程团队会面讨论定制需求。4）参观仓储物流中心。我们可以到上海浦东机场接您并安排酒店住宿。您什么时候方便来？",
                keyPoints: ["热情邀请：warmly welcome", "安排具体：4个参观环节", "体现实力：15条生产线", "解决后顾之忧：接机+住宿"],
                vocabulary: ["factory visit", "injection molding", "production lines", "QC lab", "material testing", "customization needs", "accommodation", "convenient time"]
            },
            initialAI: "Our procurement director wants to visit the factory before placing the first order. Can you tell me about your factory and what we can expect during a visit?"
        },
        {
            day: 21,
            title: "售后问题快速响应",
            description: "学习如何专业地处理客户的质量投诉",
            difficulty: 4,
            duration: "15分钟",
            tags: ["售后", "投诉", "问题解决"],
            prompt: "客户反馈收到货物后有质量问题，请妥善处理",
            hint: {
                answer: "I'm very sorry to hear about this issue. Could you please send me photos and a detailed description of the problem? Specifically, how many pieces are affected and what exactly is wrong? We take quality issues very seriously. Once I receive your documentation, I'll escalate this to our QC manager immediately and get back to you with a solution within 24 hours. We can offer replacement, repair, or credit note depending on the situation. Your satisfaction is our priority.",
                translation: "非常抱歉听到这个问题。您能给我发一下照片和详细的问题描述吗？具体有多少件受到影响，问题到底是什么？我们对质量问题非常重视。收到您的资料后，我会立即上报质检经理，24小时内给您回复解决方案。根据情况我们可以提供换货、维修或退款。客户满意是我们的首要目标。",
                keyPoints: ["先道歉，不推卸责任", "要求证据：照片+详细描述", "承诺24小时内回复", "给出解决方案选项"],
                vocabulary: ["quality issue", "detailed description", "affected", "escalate", "QC manager", "replacement", "credit note", "satisfaction"]
            },
            initialAI: "We just received the pallets, but about 30 pieces have visible cracks on the surface. This is unacceptable. What are you going to do about it?"
        },

        // ============ 第四周：高级谈判与综合实战 ============
        {
            day: 22,
            title: "长期合同谈判策略",
            description: "学习如何谈判年度采购框架协议",
            difficulty: 4,
            duration: "15分钟",
            tags: ["长期合同", "框架协议", "年度采购"],
            prompt: "客户希望签订年度采购协议，请讨论合作条款",
            hint: {
                answer: "We're very excited about establishing a long-term partnership. For annual framework agreements, we can offer: 1) A fixed price for 12 months with a maximum 3% annual adjustment. 2) Priority production scheduling to ensure on-time delivery. 3) Quarterly review meetings to optimize the product mix. 4) A dedicated account manager for your company. In return, we'd suggest a minimum annual volume commitment of 10,000 pieces. This arrangement gives you price stability and supply security throughout the year.",
                translation: "我们非常期待建立长期合作关系。对于年度框架协议，我们可以提供：1）12个月固定价格，年度调整不超过3%。2）优先生产排期以确保按时交货。3）每季度回顾会议优化产品组合。4）为您公司配备专属客户经理。作为交换，我们建议年度最低采购量承诺10,000件。这种安排让您的价格稳定，全年供应有保障。",
                keyPoints: ["表达合作意愿：excited about partnership", "列出4项长期合作优惠", "提出对等条件：年度最低量", "强调客户利益：price stability + supply security"],
                vocabulary: ["framework agreement", "fixed price", "priority scheduling", "quarterly review", "dedicated account manager", "volume commitment", "price stability", "supply security"]
            },
            initialAI: "We're satisfied with the first batch quality. Our management wants to discuss a long-term supply agreement. Can we set up an annual purchasing contract?"
        },
        {
            day: 23,
            title: "新能源行业专用话术",
            description: "学习针对新能源/电池行业的专业对话技巧",
            difficulty: 4,
            duration: "15分钟",
            tags: ["新能源", "电池包装", "防静电"],
            prompt: "一位新能源电池企业的采购经理来访，请进行专业产品推荐",
            hint: {
                answer: "For the new energy battery industry, we have specialized solutions. Our anti-static turnover boxes are ANSI/ESD S20.20 compliant, with surface resistivity below 10 to the power of 9 ohms. These are critical for protecting lithium battery cells from electrostatic discharge during production and transport. We also offer UN38.3 compliant battery packaging containers for safe international shipping. Would you like me to arrange a technical consultation with our battery packaging specialist?",
                translation: "针对新能源电池行业，我们有专业解决方案。我们的防静电周转箱符合ANSI/ESD S20.20标准，表面电阻率低于10的9次方欧姆。这对于在生产运输过程中保护锂电池免受静电放电至关重要。我们还提供符合UN38.3标准的电池包装容器，确保国际运输安全。您需要我安排与我们的电池包装专家的技术咨询吗？",
                keyPoints: ["行业术语精确：ESD S20.20, UN38.3", "技术参数要专业：表面电阻率", "强调专业解决方案", "主动提出专家对接"],
                vocabulary: ["new energy battery", "electrostatic discharge", "surface resistivity", "lithium battery cells", "UN38.3", "battery packaging", "technical consultation", "specialist"]
            },
            initialAI: "We're a lithium battery manufacturer. We need containers for battery cell storage and transport that meet strict anti-static and safety requirements. What can you offer?"
        },
        {
            day: 24,
            title: "应对客户压价与还价技巧",
            description: "学习如何在不降价过多的情况下达成协议",
            difficulty: 4,
            duration: "15分钟",
            tags: ["还价", "让步策略", "双赢"],
            prompt: "客户要求降价15%，请用技巧回应并争取合理价格",
            hint: {
                answer: "I appreciate your position, and I'd love to work with you on pricing. However, a 15% reduction is beyond what I can offer while maintaining our quality standards. What I can do is this: if you increase the order quantity to 2,000 pieces, I can offer an 8% discount. Additionally, I can waive the sample fees and include free logo printing on all products. This brings your effective savings close to 10%. I believe this is a very competitive offer that still ensures the quality you expect.",
                translation: "我理解您的立场，也很想在价格上与您合作。但是15%的降幅超出了我能提供的范围，同时还要保证我们的质量标准。我能做的是：如果您将订单量增加到2,000件，我可以提供8%的折扣。此外，我可以免收样品费并在所有产品上免费印刷您的标志。这实际上为您带来的综合节省接近10%。我相信这是一个非常有竞争力的报价，同时确保您期望的质量。",
                keyPoints: ["理解但不轻易让步", "用增加数量换折扣", "附加增值服务代替降价", "把节省量化让客户感到划算"],
                vocabulary: ["appreciate your position", "maintain quality standards", "effective savings", "competitive offer", "waive", "logo printing", "ensure quality"]
            },
            initialAI: "To be honest, your prices are higher than we expected. Can you offer at least a 15% discount? Otherwise we may need to look elsewhere."
        },
        {
            day: 25,
            title: "WhatsApp/社媒客户跟进",
            description: "学习通过社媒和即时通讯工具维护客户关系",
            difficulty: 3,
            duration: "15分钟",
            tags: ["社媒", "WhatsApp", "客户维护"],
            prompt: "展会后通过WhatsApp跟进一位潜在客户",
            hint: {
                answer: "Hi Mr. Johnson, it was great meeting you at the Canton Fair last week. I really enjoyed our conversation about your warehouse renovation project. As discussed, I've attached our latest product catalog with updated pricing. I noticed you were particularly interested in our nestable pallets - we just launched a new model that's 15% lighter but with the same load capacity. Would you like me to send you some samples? Looking forward to hearing from you.",
                translation: "Johnson先生您好，上周在广交会上见到您非常高兴。我很享受我们关于您仓库翻新项目的讨论。按照约定，我附上了我们最新的产品目录和更新报价。我注意到您对我们的套叠托盘特别感兴趣——我们刚推出了一款新型号，轻了15%但承重能力相同。您需要我给您寄一些样品吗？期待您的回复。",
                keyPoints: ["开头提展会建立连接", "附上承诺的资料", "推荐新品引起兴趣", "结尾用提问引导回复"],
                vocabulary: ["Canton Fair", "warehouse renovation", "product catalog", "updated pricing", "particularly interested in", "launched", "load capacity", "samples"]
            },
            initialAI: "Hi, thanks for your message. Yes, I remember our conversation. The new lighter pallet model sounds interesting. Can you send me the specifications?"
        },
        {
            day: 26,
            title: "展会现场接待外国客户",
            description: "学习在展会现场接待和介绍产品",
            difficulty: 3,
            duration: "15分钟",
            tags: ["展会", "现场接待", "产品展示"],
            prompt: "一位外国客户走到展位前，请进行专业的接待和产品介绍",
            hint: {
                answer: "Welcome to Uget Packaging! Please come in and take a look. We specialize in plastic packaging solutions for industrial use. Here on display we have our three main product lines: plastic pallets on your left, turnover boxes in the center, and our best-selling collapsible sleeve boxes on the right. These sleeve boxes are very popular in the European market. Feel free to touch and test them - they're quite sturdy. Would you like me to walk you through each product?",
                translation: "欢迎来到优盖特包装展位！请进来看看。我们专注于工业用塑料包装解决方案。这里展示的是我们的三大产品线：左边是塑料托盘，中间是周转箱，右边是我们最畅销的可折叠围板箱。这些围板箱在欧洲市场非常受欢迎。您可以随意触摸和测试——它们非常结实。需要我为您逐一介绍每个产品吗？",
                keyPoints: ["热情欢迎：Welcome + take a look", "用方位引导客户：left/center/right", "强调市场认可：popular in European market", "邀请互动：feel free to touch and test"],
                vocabulary: ["on display", "product lines", "best-selling", "collapsible sleeve boxes", "European market", "sturdy", "walk you through"]
            },
            initialAI: "Hello, I'm from a logistics company in Poland. We need heavy-duty plastic containers. Can you show me what you have?"
        },
        {
            day: 27,
            title: "处理交期延误的沟通技巧",
            description: "学习如何在交期延误时与客户沟通并挽回信任",
            difficulty: 4,
            duration: "15分钟",
            tags: ["交期延误", "危机沟通", "补救"],
            prompt: "由于原材料短缺导致交期延误一周，请通知客户并提供解决方案",
            hint: {
                answer: "I need to inform you of an important update regarding your order. Due to an unexpected shortage of HDPE raw material supply, your production timeline has been affected. Originally scheduled for April 15th, we now estimate delivery by April 22nd - a one-week delay. I sincerely apologize for this inconvenience. To make up for it, we will upgrade your shipping to air freight at no extra cost, and apply a 3% discount on this order. I'll send you daily production updates so you can monitor the progress closely.",
                translation: "我需要通知您一个关于您订单的重要更新。由于HDPE原材料供应出现意外短缺，您的生产时间线受到了影响。原定4月15日交付，现在预计4月22日——延迟一周。我真诚地为这个不便道歉。作为补偿，我们将免费将运输升级为空运，并在本订单上给予3%的折扣。我会每天发送生产进度更新，让您可以密切跟踪。",
                keyPoints: ["第一时间通知，不隐瞒", "给出明确的新交期", "提供实质性补偿：空运+折扣", "增加透明度：每日更新"],
                vocabulary: ["unexpected shortage", "raw material supply", "production timeline", "sincerely apologize", "air freight at no extra cost", "daily production updates", "monitor the progress"]
            },
            initialAI: "Our warehouse opening is next week and we're counting on those pallets arriving on time. Is there any update on our order status?"
        },
        {
            day: 28,
            title: "竞品对比演示话术",
            description: "学习如何客观地与竞品对比并突出自身优势",
            difficulty: 4,
            duration: "15分钟",
            tags: ["竞品对比", "客观分析", "优势展示"],
            prompt: "客户问到你们和某知名品牌相比有什么优势，请进行专业对比",
            hint: {
                answer: "That's a great question. I respect that brand - they make excellent products. Let me give you an objective comparison. In terms of material, both of us use virgin HDPE, so quality is comparable. However, our advantage lies in three areas: 1) Price - we're typically 25-35% more cost-effective because we manufacture directly in our own factory. 2) Customization - we can modify designs with lower MOQ and shorter lead time. 3) Service - we provide dedicated English-speaking support and faster response times. I'd be happy to arrange a side-by-side sample comparison for you.",
                translation: "这是个好问题。我很尊重那个品牌——他们的产品质量很好。让我给您做一个客观的对比。在材料方面，我们都使用全新料HDPE，所以质量相当。但我们的优势在于三个方面：1）价格——我们通常比他们便宜25-35%，因为我们在自己的工厂直接生产。2）定制——我们可以用更低的起订量和更短的交期来修改设计。3）服务——我们提供专属的英语支持和更快的响应时间。我很乐意为您安排一次样品对比。",
                keyPoints: ["先尊重竞品显得客观", "承认共同点再找差异", "三个优势：价格/定制/服务", "主动提出样品对比增加说服力"],
                vocabulary: ["objective comparison", "comparable", "cost-effective", "manufacture directly", "customization", "lower MOQ", "dedicated support", "side-by-side comparison"]
            },
            initialAI: "We've been using a well-known German brand for years. Their quality is great but the prices keep going up. Why should we switch to your products?"
        },
        {
            day: 29,
            title: "跨境电商与新客户开发",
            description: "学习通过阿里巴巴等平台开发海外客户",
            difficulty: 3,
            duration: "15分钟",
            tags: ["跨境电商", "阿里巴巴", "客户开发"],
            prompt: "通过在线平台收到一个新询盘，请进行专业回复",
            hint: {
                answer: "Thank you for your inquiry on our Alibaba store. I noticed you're looking for heavy-duty plastic pallets for your distribution center in Mexico. Based on your requirement of 1,500 kg load capacity, I recommend our model RP-1500 rackable pallet. It's our best seller in Latin America. I've sent a quotation with product details, photos, and a short video showing load testing. Would you like to schedule a video call this week so I can answer your questions directly?",
                translation: "感谢您在我们阿里巴巴店铺的询价。我注意到您正在为墨西哥的配送中心寻找重型塑料托盘。根据您1,500公斤承重的需求，我推荐我们的RP-1500货架托盘。这是我们拉美市场最畅销的产品。我已发送了包含产品详情、照片和承重测试视频的报价。您想安排本周的视频通话吗？这样我可以直接回答您的问题。",
                keyPoints: ["回应具体需求：1500kg + 墨西哥", "推荐特定型号增加专业感", "多种资料：报价+照片+视频", "主动提议视频通话推进关系"],
                vocabulary: ["Alibaba store", "distribution center", "load capacity", "best seller", "Latin America", "quotation", "load testing", "video call"]
            },
            initialAI: "Hi, I found your products on Alibaba. We're a distribution company in Mexico and need heavy-duty pallets. Can you give me your best price for 1,000 pieces?"
        },
        {
            day: 30,
            title: "综合实战：完整外贸对话流程",
            description: "模拟一次从初次接触到最终成交的完整外贸对话",
            difficulty: 5,
            duration: "15分钟",
            tags: ["综合", "实战", "成交"],
            prompt: "一位来自西班牙的新客户发来询价，请完成从接待、需求了解、产品推荐、报价到促成的完整对话",
            hint: {
                answer: "Good morning! Thank you for reaching out to Uget Packaging. I'd love to help you find the right packaging solution. Let me first understand your needs: what products are you looking to package, what's your estimated quantity, and do you have any specific requirements for certifications or materials? Based on what you've told me, I recommend our heavy-duty sleeve boxes - they're perfect for automotive parts as you described. The price is 18.50 USD per piece FOB Shanghai for orders of 500+. I can send samples within 2 days via DHL. If you confirm this week, I can guarantee delivery within 30 days.",
                translation: "早上好！感谢您联系优盖特包装。我很乐意帮您找到合适的包装方案。让我先了解一下您的需求：您要包装什么产品，预估数量是多少，对认证或材料有特殊要求吗？根据您描述的情况，我推荐我们的重型围板箱——非常适合汽车零部件如您所述。500件以上每件18.50美元FOB上海。我可以在2天内通过DHL寄出样品。如果您这周确认，我可以保证30天内交货。",
                keyPoints: ["开场热情且专业", "先问需求再推荐", "给出具体价格和条件", "用样品+交期+紧迫感促成"],
                vocabulary: ["reaching out", "packaging solution", "specific requirements", "certifications", "heavy-duty sleeve boxes", "automotive parts", "FOB Shanghai", "guarantee delivery"]
            },
            initialAI: "Hello, I'm Carlos from Barcelona, Spain. We run an auto parts distribution business and we're looking for reliable plastic containers. We've never imported from China before. Can you help us get started?"
        },

        // ============ 第五周：高级专题与综合提升 ============
        {
            day: 31,
            title: "吹塑围板箱 vs 注塑围板箱：如何为客户选型",
            description: "学习对比吹塑与注塑工艺的围板箱特点，准确识别客户需求并给出专业选型建议",
            difficulty: 4,
            duration: "15分钟",
            tags: ["吹塑", "注塑", "工艺对比", "选型推荐"],
            prompt: "客户询问吹塑和注塑围板箱的区别，请根据客户使用场景给出专业选型建议",
            hint: {
                answer: "Great question - this is an important decision. Blow molding and injection molding are two different processes. Blow-molded sleeve boxes are made from a single seamless piece with hollow walls - this makes them extremely impact-resistant and durable, ideal for heavy-duty applications like automotive parts and industrial logistics. They have no seams or joints, so they won't crack under impact. Injection-molded boxes are made from solid plastic, lighter in weight, and offer better surface finish and dimensional precision - they're better suited for lighter loads and automated conveyor systems. Based on your description of heavy automotive parts, I'd recommend our blow-molded series for its superior durability.",
                translation: "问得好——这是很重要的决策。吹塑和注塑是两种不同的工艺。吹塑围板箱由单件无缝中空结构制成——这使它们具有极强的抗冲击性和耐用性，非常适合汽车零部件和工业物流等重型应用。它们没有接缝，在冲击下不会开裂。注塑箱由实心塑料制成，重量更轻，表面光洁度和尺寸精度更好——更适合轻载应用和自动化输送系统。根据您描述的重型汽车零部件情况，我推荐我们的吹塑系列，因其卓越的耐用性。",
                keyPoints: ["吹塑 vs 注塑工艺对比：无缝中空 vs 实心塑料", "吹塑优势：抗冲击、无接缝、适合重型", "注塑优势：重量轻、精度高、适合自动化", "基于客户场景推荐，而非单纯推销"],
                vocabulary: ["blow molding", "injection molding", "seamless", "hollow walls", "impact-resistant", "heavy-duty", "dimensional precision", "conveyor systems", "durability"]
            },
            initialAI: "I noticed you have two types of sleeve boxes - blow-molded and injection-molded. What's the difference? Which one would you recommend for storing heavy automotive engine components in our warehouse?"
        },
        {
            day: 32,
            title: "危包证与出口危化品包装合规",
            description: "学习危险品包装法规和UN认证在塑料包装中的应用",
            difficulty: 5,
            duration: "15分钟",
            tags: ["危包证", "UN认证", "危险品", "合规出口"],
            prompt: "客户需要为锂电池出口采购包装，请介绍UN认证和危包证的申请流程",
            hint: {
                answer: "For hazardous goods like lithium batteries, packaging compliance is critical. All our dangerous goods packaging solutions carry UN certification - each package is marked with a UN rating like UN 4H2 for plastic drums or UN 31H1 for intermediate bulk containers. This certification means the packaging has passed rigorous drop tests, stacking tests, and leak tests according to UN standards. For international shipping of lithium batteries, you need UN38.3 test documentation - this proves the batteries have been tested for safe transport. We also assist clients with applying for the Dangerous Goods Packaging Certificate (危包证) from Chinese customs. Would you like our team to prepare a compliance documentation package for your battery export?",
                translation: "对于锂电池等危险品，包装合规至关重要。我们所有危险品包装解决方案都带有UN认证——每个包装都标有UN等级，如塑料桶的UN 4H2或中型散装容器的UN 31H1。这一认证意味着包装已根据UN标准通过了严格的跌落测试、堆码测试和渗漏测试。对于锂电池的国际运输，您需要UN38.3测试文件——这证明电池已通过安全运输测试。我们也协助客户申请中国海关的《出境危险货物包装容器性能检验结果单》（危包证）。您需要我们的团队为您的电池出口准备一套合规文件包吗？",
                keyPoints: ["UN认证是危险品包装的核心：UN 4H2、UN 31H1", "三种测试：跌落、堆码、渗漏", "UN38.3针对锂电池运输", "危包证是中国海关的合规要求"],
                vocabulary: ["UN certification", "UN 4H2", "UN 31H1", "drop test", "stacking test", "leak test", "UN38.3", "Dangerous Goods Packaging Certificate", "危包证", "hazardous goods", "compliance documentation"]
            },
            initialAI: "We're exporting lithium battery cells to Europe and need packaging that meets international dangerous goods regulations. Can you explain your UN certifications and what documents we'd need for customs clearance?"
        },
        {
            day: 33,
            title: "集装箱装载优化与成本核算",
            description: "学习计算最优集装箱装载方案并向客户清晰展示节省效果",
            difficulty: 3,
            duration: "15分钟",
            tags: ["集装箱", "装载优化", "成本核算", "物流效率"],
            prompt: "请为客户计算最优集装箱装载方案，展示如何最大化空间利用率并节省运费",
            hint: {
                answer: "Let me calculate the optimal loading plan for you. For your 2,000 pieces of nestable pallets, I recommend a 40-foot high cube container. Here's the breakdown: each pallet measures 1200x1000x150mm. With our nestable design, I can stack 12 units per layer. A 40-foot HQ has an internal height of 2,700mm, allowing 16 layers - that's 192 pieces per container. You'd need 11 containers in total. However, if you increase the order to 2,112 pieces, you can fill exactly 11 containers at the optimal rate, reducing the per-unit shipping cost by 8%. I can also suggest loading smaller turnover boxes inside the empty space on top of the pallets to maximize every centimeter.",
                translation: "让我为您计算最优装载方案。对于您的2,000个套叠托盘，我推荐使用40尺高柜。以下是详细方案：每个托盘尺寸为1200x1000x150mm。使用我们的套叠设计，每层可以堆叠12个。40尺高柜内部高度为2,700mm，可以堆16层——每柜192件。您总共需要11个集装箱。不过，如果您将订单增加到2,112件，您可以正好装满11柜达到最优装载率，单件运输成本降低8%。我还建议在托盘上方的空余空间中装载较小的周转箱，以最大化利用每一厘米的空间。",
                keyPoints: ["精确计算装载量：12个/层 × 16层 = 192个/柜", "推荐40尺高柜最大化空间", "凑整柜量可降低单件运费", "主动提出利用剩余空间增加额外价值"],
                vocabulary: ["40-foot high cube container", "nestable design", "loading plan", "per-unit shipping cost", "internal height", "maximize space", "turnover boxes", "stacking efficiency"]
            },
            initialAI: "We need to ship 2,000 nestable pallets to our distribution center in Rotterdam. Can you help us figure out how many containers we'd need and how to minimize shipping costs?"
        },
        {
            day: 34,
            title: "样品测试反馈与量产推进",
            description: "学习在客户完成样品测试后确认修改点、推进试单并促成量产订单",
            difficulty: 4,
            duration: "15分钟",
            tags: ["样品反馈", "试单推进", "量产确认", "规格调整"],
            prompt: "客户完成了样品测试，对细节提出了修改意见，请确认调整方案并推进量产订单",
            hint: {
                answer: "Thank you for the detailed sample feedback. I'm glad the overall structure meets your expectation. Regarding the two points you mentioned - reinforcing the bottom corners and changing the inner divider height - we can absolutely make those adjustments before mass production. I'll ask our engineering team to update the drawing today and send you the revised version for confirmation within 24 hours. After you approve the final drawing, we can arrange a pre-production sample in 5 working days or move directly to the trial order if you're comfortable. For the first bulk order of 800 pieces, our lead time would be around 18 to 20 days. If you'd like, I can also prepare the PI and testing checklist today so we can keep everything moving efficiently.",
                translation: "感谢您提供这么详细的样品反馈。很高兴整体结构符合您的预期。关于您提到的两个点——加强底角和调整内部分隔板高度——我们完全可以在量产前完成这些修改。我今天就会让工程团队更新图纸，并在24小时内把修订版发给您确认。您确认最终图纸后，我们可以在5个工作日内安排产前样，或者如果您觉得没问题，也可以直接进入试单阶段。对于首批800件量产订单，我们的交期大约是18到20天。如果您愿意，我今天也可以把形式发票和测试清单一并准备好，确保项目高效推进。",
                keyPoints: ["先肯定客户反馈，建立合作氛围", "逐条回应修改点，体现专业和可执行性", "给出明确时间承诺：24小时图纸、5天产前样、18-20天量产", "顺势推进 PI 和试单，减少往返沟通"],
                vocabulary: ["sample feedback", "overall structure", "reinforce the bottom corners", "inner divider height", "revised drawing", "pre-production sample", "trial order", "lead time", "PI (Proforma Invoice)", "testing checklist"]
            },
            initialAI: "We've finished testing your sample pallet box. Overall it's promising, but our warehouse team wants two changes before we place the first bulk order: the bottom corners need to be stronger, and the inner divider should be 20 mm higher to better protect the parts. Can you revise the design quickly? If everything looks good, we're ready to move to an 800-piece trial order."
        },
        {
            day: 35,
            title: "国际货运预订与运输协调",
            description: "学习如何与货代沟通预订舱位、确认箱型、追踪货物运输状态",
            difficulty: 4,
            duration: "15分钟",
            tags: ["货运", "货代", "舱位预订", "运输追踪"],
            prompt: "订单确认后，需要协调货代预订舱位并跟进货物运输状态，请与客户同步物流进展",
            hint: {
                answer: "Great news - your order has been completed and passed final inspection. Now let's coordinate the shipping. I've contacted our freight forwarder and confirmed a 20-foot container booking under booking number MSCU12345678. The container will be loaded at our warehouse on May 3rd and shipped from Shanghai Port on May 5th. Estimated arrival at Valencia port is around June 10th. I've arranged marine insurance covering 110% of the goods value. I'll send you the complete shipping document package - including Bill of Lading, commercial invoice, packing list, certificate of origin, and insurance policy - by DHL within 2 days. Would you like me to add you to our container tracking system so you can monitor the shipment in real time?",
                translation: "好消息——您的订单已完成并通过了最终检验。现在我们来协调运输。我已联系了我们的货运代理，确认了MSCUB12345678订舱号的20尺柜订舱。集装箱将在5月3日从我们仓库装货，5月5日从上海港发船。预计6月10日左右到达瓦伦西亚港。我已安排了覆盖货物价值110%的海运保险。我会在2天内通过DHL把完整的装运单据包寄给您——包括提单、商业发票、装箱单、原产地证书和保险单。您需要我邀请您加入我们的集装箱追踪系统吗？这样您可以实时监控货物运输状态。",
                keyPoints: ["订单完成后主动协调运输，体现专业服务", "提供具体信息：订舱号、装货日期、船期、到港时间", "说明已安排海运保险，化解客户对货物安全的担忧", "主动提出追踪系统接入，增强客户掌控感"],
                vocabulary: ["final inspection", "freight forwarder", "container booking", "booking number", "Bill of Lading (B/L)", "commercial invoice", "packing list", "certificate of origin", "marine insurance", "container tracking system", "real time"]
            },
            initialAI: "When can we expect the shipment to be dispatched? We've been waiting for our warehouse restocking and need to plan our inventory. Can you give me the exact shipping schedule and tracking information?"
        },

        // ============ 第六周：客户服务与关系维护 ============
        {
            day: 36,
            title: "处理客户索赔与争议解决",
            description: "学习如何专业处理货物损坏或数量差异的索赔，维护长期合作关系",
            difficulty: 4,
            duration: "15分钟",
            tags: ["索赔", "争议解决", "客户服务", "损失赔偿"],
            prompt: "客户反馈收到的托盘有10%出现裂纹，且数量少了50个，请专业处理索赔并维护客户关系",
            hint: {
                answer: "Thank you for bringing this to my attention - I take full responsibility for resolving this issue. Regarding the cracked pallets: I'll arrange immediate replacement of all affected pieces at no cost, and we'll investigate our production process to prevent recurrence. For the 50 missing pieces, I'll check our shipping documents and coordinate with the freight forwarder. I can arrange express shipment of the 50 missing pallets within 5 days at our expense. As compensation for the inconvenience, I'd like to offer you a 5% credit on this order and priority treatment on your next purchase. Your business relationship is very important to us, and we want to make this right.",
                translation: "感谢您提出这个问题——我完全负责解决这个问题。关于开裂的托盘：我会立即安排免费更换所有受损产品，并调查我们的生产流程以防止再次发生。关于少了50件的问题，我会核查我们的装运单据并与货运代理协调。我可以在5天内以我方费用安排快递补发缺失的50个托盘。作为对不便的补偿，我想在本订单上给您5%的信用额度，并在您下次采购时提供优先处理。您的业务关系对我们非常重要，我们希望把事情处理好。",
                keyPoints: ["先道歉并表示承担责任，不推卸责任", "对于质量问题：立即换货+调查原因+预防措施", "对于数量差异：核查单据+补发+快递费用我方承担", "提供额外补偿：折扣+优先服务，维护长期关系"],
                vocabulary: ["claim", "cracked pallets", "missing pieces", "shipping documents", "freight forwarder", "express shipment", "compensation", "credit note", "priority treatment", "business relationship"]
            },
            initialAI: "This is unacceptable! We received our order today, but 10% of the pallets have visible cracks on the surface. And when we counted, there are 50 pieces short. We need you to explain this and make it right immediately!",
            aiResponses: [
                { triggers: ["cracks", "safety", "injuries"], response: "The cracks are a serious safety concern. Our warehouse workers can't use cracked pallets - they could collapse and cause injuries. We need replacements shipped immediately by air freight if necessary." },
                { triggers: ["delay", "loss", "compensation"], response: "50 pieces short means our production line will be delayed. This is a significant loss for us. We expect full compensation for the delay costs, not just the missing pieces." },
                { triggers: ["loyal", "2 years", "ensure"], response: "We've been loyal customers for 2 years. This is the first time we've had such a major issue. How can you ensure this won't happen again with future orders?" }
            ]
        },

        // ============ 新能源电池包装出口认证 ============
        {
            day: 37,
            title: "新能源电池包装出口认证说明",
            description: "向客户介绍新能源电池包装的UN383、防静电等出口认证要求，建立专业可信度",
            difficulty: 4,
            duration: "15分钟",
            tags: ["新能源电池", "出口认证", "UN383", "防静电", "安全合规"],
            prompt: "客户询问出口锂电池包装需要哪些认证，担心运输安全，请详细介绍相关认证并给些建议",
            hint: {
                answer: "For lithium battery packaging export, we hold the most critical certifications to ensure safe international transport. First is UN383 certification - this is mandatory for all lithium battery shipments worldwide and proves our packaging meets UN transport regulations. Second, we have ANSI/ESD S20.20 anti-static certification for preventing electrostatic discharge risks. Additionally, our packaging complies with IATA air transport regulations and IMDG sea transport requirements. I can provide you with all certification documents and test reports for your customs clearance. We also recommend you check your local import regulations - some countries have additional requirements like battery MSDS and dangerous goods declaration. Our team can help you prepare all necessary documentation.",
                translation: "关于锂电池包装出口，我们持有最关键的认证以确保国际运输安全。首先是UN383认证——这是全球所有锂电池运输的强制要求，证明我们的包装符合联合国运输法规。其次，我们有ANSI/ESD S20.20防静电认证，用于预防静电放电风险。此外，我们的包装符合IATA空运法规和IMDG海运要求。我可以为您提供所有认证文件和检测报告用于清关。我们还建议您核查当地进口法规——有些国家有额外要求，比如电池MSDS和危险品申报。我们的团队可以帮您准备所有必要文件。",
                keyPoints: [
                    "UN383认证是锂电池全球运输强制要求",
                    "ANSI/ESD S20.20防静电认证保障安全",
                    "同时符合IATA空运和IMDG海运法规",
                    "可提供全套认证文件和检测报告",
                    "提醒客户注意当地进口法规要求"
                ],
                vocabulary: [
                    "UN383 certification",
                    "lithium battery",
                    "anti-static",
                    "ANSI/ESD S20.20",
                    "IATA regulations",
                    "IMDG code",
                    "customs clearance",
                    "MSDS",
                    "dangerous goods declaration",
                    "mandatory certification"
                ]
            },
            initialAI: "We're planning to export batteries to Europe and need battery packaging solutions. What certifications do your products have? Our customers are very concerned about transport safety compliance.",
            aiResponses: [
                { triggers: ["REACH", "EU", "European"], response: "The EU has strict regulations for battery transport. Do you have REACH certification as well? Many European customers ask for it." },
                { triggers: ["air freight", "air transport", "temperature"], response: "We need to ship by air freight. Is your packaging certified for air transport? What about temperature during transport?" },
                { triggers: ["test reports", "certificates", "customs broker"], response: "Can you send us the test reports and certificates for our customs broker to review? They need to verify everything before we place an order." }
            ]
        },

        // ============ 客户维护与复购策略 ============
        {
            day: 38,
            title: "旺季备货规划与库存管理建议",
            description: "学习如何帮助客户制定科学的备货策略，避免旺季断货或库存积压",
            difficulty: 4,
            duration: "15分钟",
            tags: ["备货规划", "库存管理", "旺季", "JIT"],
            prompt: "客户询问如何规划旺季备货，请提供科学的库存管理建议",
            hint: {
                answer: "For peak season planning, I recommend a data-driven approach. Based on your historical sales data and growth projection, I suggest ordering 60% of your estimated peak demand now to secure production slots, then placing a second order for the remaining 40% about 6 weeks before peak season. This way you have buffer stock without overstocking. For inventory management, we can set up a Vendor-Managed Inventory system where we monitor your stock levels through weekly reports and automatically trigger replenishment when inventory drops below your set threshold. This reduces your storage costs and ensures you never run out during critical periods.",
                translation: "对于旺季规划，我建议采用数据驱动的方法。根据您的历史销售数据和增长预测，我建议现在订购预计旺季需求的60%来确保生产档位，然后在旺季前6周左右下第二个订单补充剩余40%。这样您既有缓冲库存又不会过度积压。在库存管理方面，我们可以建立一个供应商管理库存系统，通过每周报告监控您的库存水平，当库存降至您设定的阈值以下时自动触发补货。这可以降低您的存储成本并确保在关键时期不会断货。",
                keyPoints: ["旺季备货分两阶段：前期60%+后期40%", "供应商管理库存系统VMI减少库存压力", "定期销售数据分析预测需求", "旺季前6周为关键补货时间点"],
                vocabulary: ["data-driven", "peak season planning", "buffer stock", "Vendor-Managed Inventory (VMI)", "replenishment", "storage costs", "critical periods", "threshold"]
            },
            initialAI: "We're approaching our peak season in Q4 and we've had stockouts last year. How should we plan our inventory this time to avoid the same problem while not overstocking?",
            aiResponses: [
                { triggers: ["how much", "quantity", "estimate"], response: "What's your projected peak season demand compared to last year? And how much warehouse space do you have available? This will help me calculate the optimal order quantity." },
                { triggers: ["VMI", "how it works", "cost"], response: "The Vendor-Managed Inventory sounds interesting. What are the setup costs and how does the monitoring system work? Do we need any special software?" },
                { triggers: ["lead time", "order now", "rush"], response: "We've already waited too long. Is there any way to get an expedited order shipped within 2 weeks? We're willing to pay extra for air freight if necessary." }
            ]
        },
        {
            day: 39,
            title: "包装损坏索赔与退货处理",
            description: "学习如何专业处理货物到港后包装破损的客户投诉，进行责任认定并推动快速赔偿或补货方案",
            difficulty: 4,
            duration: "15分钟",
            tags: ["索赔处理", "包装损坏", "退货", "客诉"],
            prompt: "客户反映收到货物后发现部分围板箱在运输途中破损，要求赔偿或补货，请专业处理此投诉",
            hint: {
                answer: "Thank you for bringing this to our attention immediately. I'm sorry to hear that some of the collapsible crates arrived damaged — that's absolutely not acceptable and I want to resolve this for you as quickly as possible. To initiate a formal claim, I'll need a few things from you: photos of the damaged packaging clearly showing the extent of the damage, the packing list and bill of lading for the shipment, and if possible, notes from your receiving team on how the damage appeared upon unloading. Once I have these documents, I can assess whether the damage occurred during manufacturing, loading, or transit. Based on the assessment, we can arrange either a full replacement shipment for the damaged units, a credit note applied to your next order, or a partial refund — whichever works best for you. We aim to complete the claims review within 5 business days. I'll also flag this shipment to our QC team to prevent recurrence.",
                translation: "感谢您立即告知我们这个问题。很抱歉部分折叠围板箱在运输中损坏——这绝对是不可接受的，我希望尽快为您解决。为了启动正式索赔，我需要您提供几样东西：清楚显示损坏程度的包装照片、该批货物的装箱单和提单，以及如果可能的话，您收货团队在卸货时对损坏情况的记录。一旦我收到这些文件，我可以评估损坏发生在生产、装货还是运输途中。根据评估结果，我们可以安排对损坏单元进行全额补货、在您下次订单中开具信用票据，或者部分退款——以最适合您的方式处理。我们的目标是在5个工作日内完成索赔审核。我还会将此批货物反馈给我们的质检团队以防止再次发生。",
                keyPoints: ["第一步：立即表达歉意并承诺快速跟进，避免客户升级投诉", "索赔所需文件：损坏照片、装箱单、提单、收货记录", "三种赔偿方案：补货、信用票据、部分退款，让客户选择", "承诺明确时间节点（5个工作日）体现专业度", "同步通知QC团队，表明积极改善态度"],
                vocabulary: ["collapsible crates", "formal claim", "bill of lading", "packing list", "extent of damage", "credit note", "replacement shipment", "QC team", "recurrence", "claims review"]
            },
            initialAI: "We just received our shipment yesterday but found that 8 out of 50 collapsible crates have cracked panels and bent metal frames. This is very frustrating. What can you do about this?",
            aiResponses: [
                { triggers: ["photos", "documents", "sent"], response: "I've sent you the photos and documents you requested. The damage looks like it happened during sea freight because the outer cartons were crushed. How long will the replacement take to arrive?" },
                { triggers: ["air freight", "urgent", "expedite"], response: "We need this resolved urgently because our production line is waiting for these crates. Can you expedite the replacement shipment via air freight? Who bears the extra cost?" },
                { triggers: ["again", "prevent", "recurrence"], response: "We've had similar issues twice now. Before we process the replacement, we need to know what steps you're taking to prevent this from happening again with future orders." }
            ]
        },
        {
            day: 40,
            title: "跨文化商务沟通与新兴市场开发",
            description: "学习与中东、东南亚、南美等新兴市场客户沟通的文化差异要点与实战技巧",
            difficulty: 4,
            duration: "15分钟",
            tags: ["跨文化沟通", "中东市场", "东南亚市场", "商务礼仪"],
            prompt: "一位来自迪拜的采购商对塑料托盘感兴趣，请进行跨文化商务沟通并推进合作",
            hint: {
                answer: "Ahlan wa sahlan! Welcome! I'm very pleased to receive your inquiry from Dubai. For the Middle East market, we have extensive experience serving clients in the UAE, Saudi Arabia, and Qatar. I understand that business relationships here are built on trust and personal connections. Let me share that we've supplied packaging solutions to several major logistics companies in Dubai, and we understand the specific requirements for the region - whether it's heat-resistant materials for desert storage or compliance with SALEEM certification. I'd love to learn more about your specific project. Would you prefer we communicate in English, or shall I arrange an Arabic-speaking colleague to assist you?",
                translation: "欢迎欢迎！（阿拉伯语）非常高兴收到您来自迪拜的询价。对于中东市场，我们有丰富的经验服务于阿联酋、沙特阿拉伯和卡塔尔的客户。我理解这里的商业关系建立在信任和个人联系之上。让我分享一点——我们已经向迪拜几家大型物流公司供应包装解决方案，我们了解该地区的特殊要求——无论是沙漠储存的耐热材料还是符合SALEEM认证。如果您能告诉我更多关于您的具体项目，我将非常高兴。您希望我们用英语交流，还是我安排一位会说阿拉伯语的同事协助您？",
                keyPoints: ["开场使用当地问候语显示尊重：阿拉伯语Ahlan wa sahlan", "强调当地市场经验建立信任", "提及该地区的特殊要求：耐热、SALEEM认证", "提供语言选择让客户感到舒适"],
                vocabulary: ["Ahlan wa sahlan", "business relationships", "personal connections", "logistics companies", "heat-resistant materials", "SALEEM certification", "Arabic-speaking", "Middle East market"]
            },
            initialAI: "Salaam alaikum! We are a trading company in Dubai looking for heavy-duty plastic pallets for our storage facilities. We've heard Chinese manufacturers offer good quality at competitive prices. Can you tell me about your experience in the Middle East market?",
            aiResponses: [
                { triggers: ["price", "compete", "cheaper"], response: "We appreciate your interest in working with us. Could you share what quality standards your customers require? Some buyers prioritize lowest price, while others focus on durability and total cost of ownership. Understanding your market helps me recommend the right products." },
                { triggers: ["heat", "desert", "climate"], response: "Good question about climate adaptability. Our HDPE materials are UV-stabilized and can withstand temperatures up to 60 degrees Celsius. We also offer reinforced corner designs that perform better in extreme heat. Would you like technical specifications for our desert-grade products?" },
                { triggers: ["trust", "relationship", "visit factory"], response: "We absolutely understand the importance of building trust. Many of our Middle East clients start with a small trial order to test quality. We also offer factory visit arrangements in Suzhou, and I can connect you with our existing UAE clients as references. Would a video conference introduction with our technical team be helpful?" }
            ]
        },
        {
            day: 41,
            title: "付款条款与结算方式谈判",
            description: "学习如何专业应对客户对付款方式的谈判，平衡风险管控与客户关系维护，达成双方接受的结算方案",
            difficulty: "高级",
            duration: "15分钟",
            tags: ["付款条款", "结算谈判", "风险管控", "外贸实务"],
            prompt: "客户在收到报价后要求将付款方式从T/T 30%预付改为O/A 60天账期，请专业评估并给出可行的替代方案",
            hint: {
                answer: "I completely understand you need favorable payment terms to manage your cash flow — that's absolutely reasonable for a long-term partner. However, I need to be transparent with you: our standard terms are T/T 30% deposit and 70% against copy of Bill of Lading. Extending to O/A 60 days is a significant adjustment for us, as it directly affects our working capital and financing costs. Here's what I can offer as a middle ground: Option one — T/T 30% deposit, 70% against copy of B/L, with a 2% discount if you pay the balance within 10 days of receiving the documents. Option two — if you prefer open account terms, we can offer 30% deposit and 70% at O/A 30 days — that's more manageable for us while still giving you meaningful flexibility. We can also explore Letters of Credit at sight, which protects both parties equally and is commonly used in our industry for orders above $20,000. If your order volume reaches a certain level, we're certainly open to discussing more tailored payment arrangements — perhaps we can look at this again once we finalize the specifications and quantities. Which option works best for your purchasing process?",
                translation: "我完全理解您需要更优惠的付款条件来管理现金流——这对长期合作伙伴来说完全合理。但我需要坦白：我们的标准条款是T/T 30%定金、70%尾款凭提单副本支付。延长到O/A 60天对我们影响很大，因为它直接影响我们的流动资金和融资成本。以下是我能提供的折中方案：方案一——T/T 30%定金、70%尾款，凭提单副本支付，若在收到单据后10天内付清可享受2%折扣。方案二——如果您偏好赊销条款，我们可以提供30%定金和O/A 30天尾款——这对我们来说更可控，同时仍给您有意义的灵活性。我们也可以探讨即期信用证，这对双方都有同等保障，在我们行业用于2万美元以上的订单很常见。如果您的订单量达到一定规模，我们非常愿意讨论更定制化的付款安排——也许等我们敲定规格和数量后再重新讨论。您觉得哪个方案最符合您的采购流程？",
                keyPoints: [
                    "先表达理解和共情，肯定客户诉求的合理性",
                    "坦诚说明己方立场和底线，避免模糊表态",
                    "提供2-3个具体替代方案，让客户有选择空间",
                    "利用数量激励：将付款条款改善与订单量挂钩",
                    "引入第三方保障工具（如信用证）作为折中选择",
                    "设置阶梯条件：将优惠条款与长期合作承诺绑定"
                ],
                vocabulary: [
                    "payment terms", "O/A (Open Account)", "T/T deposit",
                    "balance payment", "Bill of Lading (B/L)", "Letter of Credit at sight",
                    "working capital", "cash flow", "2% discount for early payment",
                    "tailored payment arrangement", "middle ground"
                ]
            },
            initialAI: "Your quotation looks competitive, but we have one concern — our finance department requires O/A 60 days payment terms for all new suppliers. Can you accommodate that? We've been working with our current supplier on the same basis for three years.",
            aiResponses: [
                { triggers: ["60 days", "firm", "shorter"], response: "I appreciate your flexibility on the discount, but 60 days is firm for us. Our internal payment cycle doesn't allow anything shorter. Is there any room to move on this?" },
                { triggers: ["letter of credit", "L/C", "bank fee"], response: "We've worked with Letters of Credit before, but the bank fees are quite high on our end. Is there a way to reduce those costs while still keeping the L/C protection?" },
                { triggers: ["quantity", "volume", "500 units"], response: "If we increase our order quantity to 500 units per month, would that change your position on the payment terms?" }
            ]
        },
        {
            day: 42,
            title: "样品寄送安排与开发周期跟进",
            description: "学习如何专业处理客户样品请求，清晰沟通打样周期、快递安排及样品费用，并在样品寄出后有效跟进开发进度",
            difficulty: "中级",
            duration: "15分钟",
            tags: ["样品管理", "打样周期", "快递安排", "跟进沟通"],
            prompt: "客户收到报价后要求先寄样品确认质量，请安排样品寄送并跟进后续开发进度",
            hint: {
                answer: "Thank you for your interest in our packaging solutions — we're very happy to arrange samples for you. For our standard plastic pallets and collapsible bulk containers, we can prepare pre-made samples from our existing stock within 2 business days. However, if you need customized dimensions or a specific color and logo, the sample lead time would be 7 to 10 business days for a prototype mold. Regarding shipping: we typically send samples via DHL or FedEx on a freight collect basis, meaning the courier charges will be billed to your account. Alternatively, if you can provide your courier account number, we'll ship directly under your account. Sample cost for standard items is usually waived if you place a bulk order afterwards — but for custom molds, a tooling deposit is required, which is fully refundable against your first production order. Once the samples are shipped, I'll send you the tracking number and a detailed spec sheet so your team can evaluate them systematically. Could you please confirm your delivery address and preferred courier? Also, which specific products would you like us to include in the sample package?",
                translation: "感谢您对我们包装解决方案的兴趣——我们很乐意为您安排样品。对于我们的标准塑料托盘和折叠式大型容器，我们可以在2个工作日内从现有库存中准备现成样品。但是，如果您需要定制尺寸或特定颜色和Logo，打样周期为7到10个工作日用于制作原型模具。关于运输：我们通常通过DHL或FedEx以到付方式寄送样品，即快递费用将计入您的账户。或者，如果您能提供您的快递账号，我们将直接以您的账号寄出。标准产品的样品费用通常在您后续下批量订单后予以豁免——但对于定制模具，需要支付模具押金，该押金可在首次生产订单中全额抵扣。样品寄出后，我会将快递追踪号和详细规格表一并发给您，以便您的团队系统地评估。请问您能确认收件地址和首选快递公司吗？另外，您希望我们在样品包中包含哪些具体产品？",
                keyPoints: [
                    "区分现货样品与定制打样的不同交期，给出明确时间节点",
                    "说明样品运费安排：到付或使用客户快递账号，避免争议",
                    "主动说明样品费用政策：下单后可抵扣，增加客户试样意愿",
                    "定制模具需收取可退还押金，保护己方利益同时显示诚意",
                    "样品寄出后主动提供追踪号和规格表，提升专业形象",
                    "用开放式问题确认收货地址、快递偏好和具体需求，推进流程"
                ],
                vocabulary: [
                    "pre-made samples", "sample lead time", "prototype mold",
                    "freight collect", "courier account number", "sample cost waived",
                    "tooling deposit", "fully refundable", "production order",
                    "tracking number", "spec sheet", "sample package"
                ]
            },
            initialAI: "We've reviewed your quotation and the products look promising. Before we commit to any order, our sourcing team requires physical samples for quality assessment — especially for load-bearing performance and material durability. Can you arrange to send us a few samples? We're based in Los Angeles.",
            aiResponses: [
                { triggers: ["custom", "48x40", "US standard", "inch"], response: "Thanks for the quick response. We'd actually like to test a customized version — our standard pallet size is 48x40 inches, which is the US standard, rather than the 1200x1000mm you quoted. Would that require a new mold? What would the tooling cost be?" },
                { triggers: ["tooling", "deposit", "credit", "1000 units"], response: "The 7 to 10 days for the custom prototype sounds reasonable. Regarding the tooling deposit — can you give me a ballpark figure? And just to confirm, if we proceed with a production order of 1,000 units, the deposit would be fully credited?" },
                { triggers: ["FedEx", "account", "material safety", "test report"], response: "Perfect. Our courier account is with FedEx — I'll send you our account number shortly. One more question: can you also include a material safety data sheet and your latest third-party test report with the sample shipment? Our QC team will need those for their evaluation." }
            ]
        },
        {
            day: 43,
            title: "批量订单产能规划与交期协调",
            description: "学习如何向客户解释大批量订单的产能安排、分批交付节奏和应急补货方案，在保障交期的同时建立供应链信任",
            difficulty: "高级",
            duration: "15分钟",
            tags: ["产能规划", "交期协调", "分批交付", "供应链管理"],
            prompt: "一位墨西哥客户计划下达5000套围板箱年度订单，担心我们月产能、分批发货节奏和旺季保障能力，请给出专业回复并提出可执行的交付方案",
            hint: {
                answer: "Thank you for sharing your projected annual demand of 5,000 sets. For a program of this size, we would normally manage it through a rolling production and delivery plan rather than producing everything in one batch. Our current capacity can support this volume comfortably. Based on your forecast, we can reserve dedicated production slots for your account and arrange a monthly output of around 400 to 500 sets, with flexibility to scale up during peak months if needed. To reduce inventory pressure on your side, I would recommend phased deliveries. For example, we can start with an initial shipment of 800 sets, followed by monthly releases based on your actual consumption. We also suggest keeping a safety stock of 5% to 10%, either at our factory or at a forward warehouse, so we can respond quickly to urgent demand. To keep the schedule reliable, we would set monthly milestone checkpoints covering forecast updates, raw material preparation, production status, and vessel booking. If demand increases suddenly, we can discuss emergency replenishment, but early notice will help us secure raw materials and transport slots. Once you confirm the annual volume, I can prepare a detailed capacity plan, delivery calendar, and lead-time commitment for your review. Would you like us to draft a 12-month shipping schedule based on your quarterly forecast?",
                translation: "感谢您分享预计每年5000套的需求。对于这种规模的项目，我们通常不会一次性全部生产，而是通过滚动式生产和交付计划来管理。以我们目前的产能来看，完全可以支持这个体量。根据您的预测，我们可以为贵司预留专属产能窗口，按月安排约400到500套的产出，在旺季如有需要也可以灵活上调。为了减少您端的库存压力，我建议采用分批交付方式。例如，先安排首批800套，后续再根据您的实际消耗按月出货。我们也建议保留5%到10%的安全库存，可以放在我司工厂或前置仓，以便快速响应紧急需求。为了让排期更可靠，我们会设置月度里程碑检查点，覆盖预测更新、原料准备、生产进度和订舱安排。如果需求突然增加，我们也可以讨论紧急补货方案，但越早通知，我们越容易锁定原料和运输资源。一旦您确认年度总量，我可以为您准备详细的产能规划表、交付日历和交期承诺文件。您是否希望我们基于季度预测先起草一份12个月的发货计划？",
                keyPoints: [
                    "先确认客户年度需求规模，再引出滚动式生产思路",
                    "明确说明可支持的月产能区间，给客户稳定预期",
                    "提供首批出货加后续月度释放的分批交付方案",
                    "加入5%到10%安全库存，体现供应链缓冲能力",
                    "用月度里程碑管理生产、原料和订舱进度",
                    "主动推进到年度排产表和交付日历，促成下一步合作"
                ],
                vocabulary: [
                    "production capacity",
                    "rolling production plan",
                    "phased delivery",
                    "monthly output",
                    "dedicated production slots",
                    "safety stock",
                    "forward warehouse",
                    "milestone checkpoint",
                    "emergency replenishment",
                    "lead-time commitment",
                    "quarterly forecast"
                ]
            },
            initialAI: "We are considering an annual order of 5,000 collapsible pallet boxes for our Mexico operation. Before we move forward, we need to understand your monthly production capacity, how you would handle phased deliveries, and whether you can protect supply during peak season. Can you walk us through your plan?",
            aiResponses: [
                "Your phased delivery proposal sounds workable, but our warehouse space is limited. Can you reduce the first shipment to 600 sets and still guarantee that we won't face a stock-out before the second batch arrives?",
                "What would happen if our demand suddenly increased by 20% during peak season? Do you have backup capacity or safety stock to support that kind of change?",
                "We need better visibility on each batch for our planning team. Can you provide production updates, packing status, and vessel booking details before every shipment?"
            ]
        },
        {
            day: 44,
            title: "生产进度实时同步与异常预警沟通",
            description: "学习如何主动向客户汇报订单生产进度、识别潜在延误风险并及时预警，在问题发生前建立透明沟通机制",
            difficulty: "高级",
            duration: "15分钟",
            tags: ["进度同步", "风险预警", "透明沟通", "客户关系"],
            prompt: "一位德国客户的大订单正在生产中，你需要在每周固定时间向他汇报进度，同时要提前告知一个可能的原材料延误风险，请给出专业的进度报告和风险预警",
            hint: {
                answer: "I hope this update finds you well. I am writing to share the latest progress on your order and to flag one potential issue that we are managing proactively. Production for your batch is currently on schedule. As of this week, we have completed the injection molding and are moving into the assembly phase. Based on our current pace, we expect to finish assembly by next Friday and begin quality inspection the following Monday. However, I need to bring to your attention a possible delay on the raw material side. One of our key HDPE suppliers has informed us of a temporary shortage due to a logistics disruption at their port. While we have sufficient inventory to cover the current production run, if the disruption extends beyond next week, it could affect the final batch scheduled for the week after. To mitigate this, we have already activated our secondary supplier and are expediting an emergency shipment. I will monitor this closely and update you again by Wednesday with a clearer picture. In the meantime, would you like me to adjust the shipping schedule slightly earlier to create a buffer, or are you comfortable with the current timeline assuming the risk is resolved?",
                translation: "希望这封邮件能让您一切安好。我写邮件是想向您同步最新进度，并主动提请您注意一个我们正在积极管控的潜在问题。您这批订单的生产目前按计划推进。截至本周，我们已完成注塑环节，正在进入组装阶段。按照当前进度，我们预计下周五完成组装，下周一启动质检。不过，我需要向您预警一个原材料方面可能的延误。我们的一个关键HDPE供应商通知我们，由于他们港口出现物流中断，暂时出现原料短缺。虽然我们现有库存足以支撑当前生产批次，但如果中断延续到下周以后，可能会影响再下一周的最终批次。为降低风险，我们已启动备用供应商，并正在加急安排紧急补货。我会密切跟进，并在周三前给您更明确的更新。在此期间，您是否希望我稍微提前调整出货计划以留出缓冲，还是您愿意维持当前排期、假设风险能够顺利化解？",
                keyPoints: [
                    "先给出整体进度状态，再分阶段说明当前所处环节",
                    "明确下一里程碑的时间节点，建立客户预期",
                    "主动暴露潜在风险，不要等客户发现",
                    "说明已采取的缓解措施，展示问题解决能力",
                    "给出风险的时间窗口，让客户有决策依据",
                    "提供调整选项，邀请客户参与决策"
                ],
                vocabulary: [
                    "progress update",
                    "on schedule",
                    "injection molding",
                    "assembly phase",
                    "quality inspection",
                    "potential delay",
                    "raw material shortage",
                    "logistics disruption",
                    "secondary supplier",
                    "emergency shipment",
                    "buffer",
                    "timeline"
                ]
            },
            initialAI: "We have a large order in production and we expect regular updates. This week we haven't heard from you yet. Can you confirm where we are in the production cycle and whether everything is still on track for the agreed delivery date?",
            aiResponses: [
                "You mentioned a potential raw material issue. How confident are you that your backup supplier can deliver on time? We cannot afford a delay on this order.",
                "If the delay does happen, what is your proposed solution? Will you air freight the remaining units at your cost to meet our deadline?",
                "We appreciate the early warning, but we need a firm commitment by Wednesday. If you cannot guarantee the timeline, we may need to discuss splitting the order with another supplier."
            ]
        },
        {
            day: 45,
            title: "出口质检标准与第三方验货配合",
            description: "学习如何向客户说明产品质检流程、接受第三方验货机构介入、处理验货不合格情况及提出纠正措施",
            difficulty: "高级",
            duration: "15分钟",
            tags: ["质检标准", "第三方验货", "QC流程", "不合格品处理"],
            prompt: "一位美国客户要求在发货前安排SGS第三方验货，并提出他们有自己的AQL抽检标准（AQL 2.5）。请向客户确认验货安排，说明你们的内部质检流程，并表达配合第三方验货的积极态度",
            hint: {
                answer: "Thank you for bringing up the pre-shipment inspection requirement. We fully support third-party inspection and are happy to coordinate with SGS or any inspection agency of your choice. Regarding your AQL 2.5 standard, we are familiar with this sampling plan and have aligned our internal quality control process accordingly. Here is an overview of our QC procedure before shipment: First, our QC team conducts a 100% visual inspection of all units immediately after production, checking for surface defects, dimensional accuracy, and labeling compliance. Second, we perform a random functional test on a sample batch, including drop tests, stacking load tests, and fit verification for any interlocking components. Third, once our internal inspection is passed, we will arrange a production completion notice to SGS and coordinate a mutually convenient date for their on-site inspection at our factory. We will provide the inspector with full access to the goods, relevant test reports, and our internal QC checklist. In the event that the inspection reveals any non-conformities, we will immediately conduct a root cause analysis and implement corrective actions before re-inspection. We will not ship any goods until we receive the SGS inspection certificate confirming the batch meets your AQL 2.5 requirements. Please let us know the SGS contact information you would like us to coordinate with, and we will take it from there.",
                translation: "感谢您提出发货前验货的要求。我们完全支持第三方验货，很乐意配合SGS或您指定的任何检验机构。关于您的AQL 2.5抽检标准，我们对这套抽样方案很熟悉，并已将我们的内部质检流程与之对齐。以下是我们发货前质检流程的概述：首先，生产完成后，我们的QC团队对所有单品进行100%目检，检查外观缺陷、尺寸精度以及标签合规性。其次，我们对样品批次进行随机功能测试，包括跌落测试、堆码载荷测试，以及互锁组件的配合验证。第三，一旦我们的内部检验通过，我们将向SGS发出生产完成通知，并协调双方都方便的时间安排他们到工厂进行现场验货。我们将为验货员提供完整的货物查阅权限、相关检测报告以及我们的内部QC清单。如果验货中发现任何不合格项，我们将立即进行根本原因分析，实施纠正措施，并安排复验。在收到SGS出具的符合您AQL 2.5要求的验货证书之前，我们不会发运任何货物。请告知您希望我们对接的SGS联系人信息，我们将从那里跟进。",
                keyPoints: [
                    "主动欢迎第三方验货，展示质量自信",
                    "明确表示熟悉客户指定的AQL抽检标准",
                    "分步骤说明内部质检流程，体现专业性",
                    "说明第三方验货的配合方式（开放查阅、提供报告）",
                    "明确不合格品的处理原则：根因分析→纠正→复验→再发货",
                    "承诺凭证发货，降低客户风险感知"
                ],
                vocabulary: [
                    "pre-shipment inspection",
                    "third-party inspection",
                    "AQL (Acceptance Quality Limit)",
                    "sampling plan",
                    "visual inspection",
                    "dimensional accuracy",
                    "drop test",
                    "stacking load test",
                    "non-conformity",
                    "root cause analysis",
                    "corrective action",
                    "inspection certificate"
                ]
            },
            initialAI: "We would like to arrange a third-party inspection before shipment. We use AQL 2.5 as our standard and typically work with SGS. Can you confirm whether your factory accepts third-party inspectors on-site, and walk me through your internal QC process?",
            aiResponses: [
                "What happens if SGS finds defects during inspection? Will you hold the shipment, and how quickly can you fix the issues and arrange a re-inspection?",
                "We have had issues with suppliers in the past where the packaging dimensions were slightly off and caused problems on our production line. How do you ensure dimensional accuracy on your products?",
                "Can you share a sample of your internal QC checklist or test reports so we can review your quality standards before we place the order?"
            ]
        },
        {
            day: 46,
            title: "新客户开发：LinkedIn与社媒营销话术",
            description: "学习如何通过LinkedIn等社交媒体平台主动开发潜在客户，撰写专业且具吸引力的开发信，建立初步商务联系",
            difficulty: "中级",
            duration: "15分钟",
            tags: ["客户开发", "社媒营销", "LinkedIn", "开发信"],
            prompt: "你在LinkedIn上发现一家德国汽车零部件公司的采购经理，对方近期发布了关于优化供应链和降低包装成本的动态。请撰写一条专业的LinkedIn连接请求消息，介绍你们公司的围板箱解决方案，并争取获得进一步沟通的机会",
            hint: {
                answer: "Hi [Name], I came across your recent post about optimizing your supply chain and reducing packaging costs. As a specialist in collapsible pallet boxes and returnable packaging solutions, I have helped several automotive Tier-1 suppliers achieve 30-40% logistics cost savings while improving parts protection during transit. I noticed your company focuses on [specific product line from their profile], and I believe our foldable sleeve boxes could be a good fit for your inbound logistics. Would you be open to a brief call to explore whether this might align with your current packaging strategy? No pressure - just happy to share some industry insights that might be useful. Best regards, [Your Name] from UGET Packaging.",
                translation: "您好[姓名]，我注意到您最近关于优化供应链和降低包装成本的动态。作为可折叠围板箱和循环包装解决方案的专业供应商，我们已帮助多家汽车一级供应商实现了30-40%的物流成本节约，同时提升了运输过程中的零部件保护。我注意到贵司专注于[根据其资料填写的具体产品线]，相信我们的折叠围板箱很适合您的入厂物流。您是否愿意进行一次简短通话，探讨这是否符合您当前的包装策略？没有压力——只是很高兴分享一些可能有用的行业见解。此致，[您的姓名]来自优盖特包装。",
                keyPoints: [
                    "提及客户的具体动态或帖子内容，展示你做了功课",
                    "用具体数字（30-40%成本节约）建立可信度",
                    "关联客户公司业务，说明为什么你的产品适合他们",
                    "提出低压力的下一步（简短通话），降低客户抵触",
                    "强调价值分享而非推销，建立信任感",
                    "保持简洁专业，LinkedIn消息不宜过长"
                ],
                vocabulary: [
                    "came across",
                    "optimizing supply chain",
                    "collapsible pallet boxes",
                    "returnable packaging",
                    "logistics cost savings",
                    "parts protection",
                    "inbound logistics",
                    "foldable sleeve boxes",
                    "packaging strategy",
                    "industry insights",
                    "Tier-1 supplier",
                    "brief call"
                ]
            },
            initialAI: "I see you viewed my LinkedIn profile. Are you a packaging supplier? We are actually quite happy with our current supplier, so I am not sure if this is relevant to us right now.",
            aiResponses: [
                "We are currently reviewing our packaging strategy for Q3. What specific advantages do your collapsible boxes offer compared to traditional corrugated packaging?",
                "30-40% cost savings sounds impressive. Can you share a case study from another automotive client that shows the actual ROI calculation?",
                "I am open to a brief call, but I need to understand first - do you have experience with export packaging to Europe, particularly with the new EU packaging regulations?"
            ]
        },
        {
            day: 47,
            title: "关税政策应对与成本优化方案",
            description: "学习如何应对各国关税政策变化，帮助客户计算关税成本并提供合理避税建议，在贸易摩擦背景下保持竞争力",
            difficulty: "高级",
            duration: "15分钟",
            tags: ["关税政策", "成本优化", "国际贸易", "原产地规则"],
            prompt: "一位美国进口商的采购经理询问：由于中美贸易摩擦，他们公司需要为进口的中国塑料包装支付额外关税。他们想知道是否有办法降低成本，例如通过调整原产地或寻找替代方案。请专业回应客户的关税关切，并提供切实可行的成本优化建议",
            hint: {
                answer: "I understand your concern about the additional tariffs on Chinese imports. This is a challenge many of our US clients are facing. Let me share some options we've helped others with. First, regarding rules of origin - if any components are manufactured in third countries, we can explore whether partial assembly or processing there could change the country of origin declaration under the applicable trade agreement. Second, we can conduct a thorough tariff classification review - sometimes products are classified under different HTS codes with different duty rates. Third, for larger volume commitments, we can discuss whether consolidating shipments or adjusting product specifications might provide tariff savings. Fourth, we can explore duty drawback programs if your company exports products manufactured with imported materials. I'd like to schedule a detailed review call with our trade compliance specialist to analyze your specific situation and identify the most effective solutions. Have you already had a tariff classification done for our products?",
                translation: "我理解您对中美进口额外关税的担忧。这是我们许多美国客户都面临的挑战。让我分享一些我们帮助其他客户解决的方案。首先，关于原产地规则——如果任何组件在第三国制造，我们可以探讨是否可以在那里进行部分组装或加工，以改变适用贸易协定下的原产地申报。其次，我们可以进行全面的关税分类审查——有时产品可以在不同HTS代码下分类，享受不同的税率。第三，对于更大批量的承诺，我们可以讨论是否可以通过整合运输或调整产品规格来节省关税。第四，我们可以探索关税退税计划，如果贵公司使用进口材料生产出口产品。我希望与我们的贸易合规专员安排一次详细的审查电话，分析您的具体情况并确定最有效的解决方案。您是否已经对我们的产品进行了关税分类？",
                keyPoints: [
                    "理解客户关切，建立共情，不回避敏感话题",
                    "提供多个可行方案，展现专业性和灵活性",
                    "原产地调整需合规，强调合法途径",
                    "关税分类审查是常用途径",
                    "提出关税退税计划适合有出口业务的客户",
                    "建议专业合规专员介入处理复杂问题"
                ],
                vocabulary: [
                    "additional tariffs",
                    "rules of origin",
                    "country of origin",
                    "HTS codes (Harmonized Tariff Schedule)",
                    "tariff classification",
                    "duty rates",
                    "duty drawback",
                    "trade compliance",
                    "third countries",
                    "consolidating shipments",
                    "product specifications"
                ]
            },
            initialAI: "We just received notification that our company will need to pay an additional 25% tariff on all plastic packaging imports from China. This significantly impacts our margins. Are there any ways you can help us reduce this cost? Do you have manufacturing in other countries?",
            aiResponses: [
                "What do you mean by tariff classification review? How could reclassifying the products reduce our duty rate? Is this legal?",
                "We do export products manufactured with some imported materials. Can you explain more about the duty drawback program? How much can we potentially save?",
                "Your suggestions are helpful, but honestly, we are also considering switching to a supplier in Vietnam or Mexico. How competitive would you be if you had to compete with Southeast Asian manufacturers?"
            ]
        },
        {
            day: 48,
            title: "供应链数字化与ESG可持续包装解决方案",
            description: "学习如何向客户介绍供应链数字化技术和ESG可持续发展理念，将环保优势转化为市场竞争力",
            difficulty: "高级",
            duration: "15分钟",
            tags: ["供应链数字化", "ESG", "可持续包装", "循环经济", "碳中和"],
            prompt: "一位欧洲跨国公司的供应链总监询问你们的包装解决方案如何帮助他们实现碳中和目标和供应链数字化，请阐述你们在ESG和数字化方面的独特价值",
            hint: {
                answer: "Excellent question - ESG and digitalization are crucial for modern supply chains. Let me explain our two-pronged approach. On the sustainability side: 1) Our PCR (Post-Consumer Recycled) pallets contain 30% recycled HDPE material, reducing carbon footprint by 15%. 2) Our RFID-tagged containers enable closed-loop returnable packaging systems, eliminating single-use waste. 3) We provide a Life Cycle Assessment report showing CO2 savings compared to wooden or corrugated alternatives. On the digitalization side: 1) Our IoT-enabled smart pallets with embedded sensors track location, temperature, and handling conditions in real time. 2) Our mobile app provides full inventory visibility and predictive maintenance alerts. 3) We offer integration with ERP systems like SAP and Oracle for automated replenishment. This combination helps clients achieve both sustainability KPIs and supply chain efficiency simultaneously.",
                translation: "非常好的问题——ESG和数字化转型对现代供应链至关重要。让我解释我们的双重优势。在可持续发展方面：1）我们的PCR（消费后回收）托盘含有30%回收HDPE材料，碳排放减少15%。2）我们带有RFID标签的容器可实现闭环可回收包装系统，消除一次性废弃物。3）我们提供生命周期评估报告，展示相比木制或瓦楞替代品的CO2节省。在数字化方面：1）我们搭载物联网技术的智能托盘内置传感器，实时追踪位置、温度和处理状况。2）我们的移动应用提供完整的库存可视性和预测性维护警报。3）我们提供与SAP、Oracle等ERP系统集成，实现自动补货。这种结合帮助客户同时实现可持续发展KPI和供应链效率提升。",
                keyPoints: [
                    "先分两大方面回答：ESG可持续 + 供应链数字化",
                    "具体数据支撑：30%回收材料、15%碳减排",
                    "技术创新亮点：RFID闭环系统、物联网智能托盘",
                    "系统集成能力：ERP系统对接",
                    "强调双重价值：既满足环保合规又提升运营效率"
                ],
                vocabulary: [
                    "ESG (Environmental, Social, Governance)",
                    "PCR (Post-Consumer Recycled) material",
                    "carbon footprint",
                    "closed-loop system",
                    "Life Cycle Assessment (LCA)",
                    "IoT-enabled smart pallets",
                    "RFID tags",
                    "predictive maintenance",
                    "ERP integration",
                    "sustainability KPIs",
                    "CO2 savings",
                    "supply chain transparency"
                ]
            },
            initialAI: "Our company has made a public commitment to achieve net-zero emissions by 2035. We're also integrating Industry 4.0 technologies into our global supply chain. How can your plastic packaging solutions support both our ESG goals and digital transformation initiatives?",
            aiResponses: [
                "The 30% PCR content is interesting. What's the durability and load capacity compared to 100% virgin material? We can't compromise on performance for sustainability.",
                "Smart pallets sound promising for tracking, but we have a mixed fleet of assets. Can your RFID system work with existing barcode and QR code systems?",
                "What kind of CO2 savings data can you provide for a large-scale implementation? We need this for our annual sustainability report."
            ]
        },
        {
            day: 49,
            title: "供应商审核与工厂验厂应对",
            description: "学习如何应对海外客户提出的工厂验厂和供应商审核要求，展示企业资质、生产能力和质量管理体系，顺利通过客户审核",
            difficulty: "高级",
            duration: "15分钟",
            tags: ["供应商审核", "工厂验厂", "质量管理", "资质认证"],
            prompt: "一家北美大型零售商的采购合规经理发来邮件，表示他们正在对潜在供应商进行年度审核，要求安排一次线上视频验厂，并需要查看我们的工厂资质证书、质量管理体系文件、社会责任合规证明等。请专业回应客户的审核要求，展示优盖特作为专业包装制造商的实力和合规性",
            hint: {
                answer: "Thank you for considering UGET Packaging as your potential supplier. We fully understand the importance of supplier audits and factory inspections in your vendor qualification process. We are more than happy to accommodate your virtual factory tour and provide all necessary documentation. First, regarding our company qualifications - we are an ISO 9001:2015 certified manufacturer with over 15 years of experience in plastic logistics packaging. Our factory covers 35,000 square meters with 8 modern production lines and an annual output of 2 million units. We hold multiple industry certifications including GB/T 31150 compliance for plastic containers and ANSI/ESD S20.20 for anti-static packaging solutions. Second, for quality management, we implement a comprehensive QC system from raw material inspection to finished product testing. Our laboratory is equipped with advanced testing equipment for load capacity, impact resistance, and dimensional accuracy. We maintain detailed batch records and traceability for every production run. Third, in terms of social responsibility, we are committed to ethical manufacturing practices. Our factory complies with local labor laws, provides safe working conditions, and has passed third-party social compliance audits. We also prioritize environmental sustainability - our products are 100% recyclable and we use recycled materials where possible. I would be delighted to schedule a comprehensive virtual tour at your convenience. During the tour, I can show you our production facilities, quality control processes, and answer any specific questions your team may have. Would you prefer a live video call or would you like me to send you a pre-recorded factory tour video first?",
                translation: "感谢您考虑将优盖特包装作为您的潜在供应商。我们完全理解供应商审核和工厂验厂在您的供应商资质认证流程中的重要性。我们非常乐意配合您的线上视频验厂并提供所有必要的文件资料。首先，关于我们的公司资质——我们是通过ISO 9001:2015认证的制造商，在塑料物流包装领域拥有超过15年的经验。我们的工厂占地35,000平方米，拥有8条现代化生产线，年产能达200万套。我们持有多个行业认证，包括塑料容器的GB/T 31150合规认证和防静电包装的ANSI/ESD S20.20认证。其次，在质量管理方面，我们实施从原材料检验到成品测试的全面质量控制体系。我们的实验室配备了先进的测试设备，用于测试承载能力、抗冲击性和尺寸精度。我们为每一批生产保持详细的批次记录和可追溯性。第三，在社会责任方面，我们致力于道德制造实践。我们的工厂遵守当地劳动法规，提供安全的工作条件，并通过了第三方社会责任合规审核。我们也优先考虑环境可持续性——我们的产品100%可回收，并在可能的情况下使用再生材料。我非常乐意在您方便的时候安排一次全面的线上参观。在参观过程中，我可以向您展示我们的生产设施、质量控制流程，并回答您团队可能提出的任何具体问题。您更倾向于实时视频通话，还是希望我先发送一段预录的工厂参观视频给您？",
                keyPoints: [
                    "首先表达欢迎和配合态度，建立信任",
                    "系统展示公司资质：ISO认证、产能、行业认证",
                    "详细说明质量管理体系和检测设备",
                    "强调社会责任和环保承诺，符合欧美客户价值观",
                    "提供灵活的验厂方式选择，体现服务意识",
                    "结尾用开放式问题推进下一步沟通"
                ],
                vocabulary: [
                    "supplier audit",
                    "factory inspection",
                    "vendor qualification",
                    "ISO 9001:2015 certified",
                    "annual output",
                    "quality control (QC) system",
                    "batch records",
                    "traceability",
                    "social compliance",
                    "ethical manufacturing",
                    "labor laws",
                    "working conditions",
                    "environmental sustainability",
                    "recyclable materials",
                    "virtual factory tour",
                    "pre-recorded video"
                ]
            },
            initialAI: "We are conducting our annual supplier qualification process for packaging vendors. As part of our compliance requirements, we need to verify your manufacturing capabilities and quality systems before adding you to our approved vendor list. Can you arrange a virtual factory inspection? We would also need to review your ISO certificates, quality manual, and any social compliance audit reports you may have.",
            aiResponses: [
                "Your ISO 9001 certification is good, but do you have any specific certifications for food-grade or medical-grade packaging? Some of our products require higher standards.",
                "The virtual tour sounds helpful. How long does it typically take? And can we have our quality manager and procurement team both attend?",
                "What is your current on-time delivery rate? And do you have any references from other North American customers we could contact?"
            ]
        },
        {
            day: 50,
            title: "售后技术支持与配件管理",
            description: "学习如何专业处理售后配件订单、技术咨询请求和维修指导，在产品交付后持续为客户提供支持，建立长期服务关系",
            difficulty: "高级",
            duration: "15分钟",
            tags: ["售后服务", "配件管理", "技术支持", "客户维护"],
            prompt: "一位日本汽车零部件制造商发来邮件：他们3年前从优盖特定制的一批折叠围板箱（型号FBC-1210，部分配件出现了老化磨损），现在需要订购替换配件（箱盖和金属铰链），同时询问是否有办法延长产品使用寿命。请专业回应配件需求，并提供延保建议和产品升级选项",
            hint: {
                answer: "Thank you for reaching out regarding your FBC-1210 collapsible bulk containers. I'm pleased to hear from you again after three years — it means a lot that you're considering us for your replacement needs. Regarding the replacement parts, I can absolutely help you. Based on our order records, your original order was placed in April 2023 for 200 sets of FBC-1210 containers with standard HDPE panels and reinforced metal hinges. For replacement, I can supply the following spare parts: HDPE replacement lids — model FBC-1210-LID-HDPE, priced at 12 USD per piece; reinforced metal hinges — model FBC-HINGE-R2, priced at 4 USD per set of four. For your order of 50 lids and 30 hinge sets, the total would be approximately 740 USD including standard sea freight to your port. We can ship within 7 business days. In terms of extending product life, I'd suggest implementing a quarterly inspection routine to check for signs of wear on the hinges and panel corners. Replacing worn hinges proactively can prevent panel damage. We also offer an annual maintenance service where our technician can visit your facility for a full inspection and preventive maintenance — this typically extends container life by 30 to 40 percent. Additionally, for your next order, I'd recommend our upgraded UV-stabilized HDPE material, which resists aging from sunlight exposure much better than standard HDPE. Would you like me to prepare a formal quotation for the spare parts and also send you our preventive maintenance checklist?",
                translation: "感谢您就FBC-1210折叠大型容器的配件问题联系我们。很高兴3年后再次收到您的消息——这说明您考虑再次选择我们，这对我们意义重大。关于替换配件，我完全可以帮到您。根据我们的订单记录，您原来的订单是2023年4月下的，共200套FBC-1210容器，配置为标准HDPE面板和加固型金属铰链。对于替换件，我可以提供以下配件：HDPE替换箱盖——型号FBC-1210-LID-HDPE，单价12美元/件；加固型金属铰链——型号FBC-HINGE-R2，单价4美元/套（含4个）。您订购50个箱盖和30套铰链，总价含标准海运费到港约740美元。我们可以在7个工作日内发货。关于延长产品使用寿命，我建议建立季度检查机制，检查铰链和面板角落的磨损情况。提前更换磨损的铰链可以防止面板损坏。我们也提供年度维护服务，由我们的技术人员拜访您的工厂进行全方位检查和预防性维护——这通常可以将容器寿命延长30%到40%。此外，对于您的下次订单，我建议您考虑升级版的UV稳定HDPE材料，相比标准HDPE能更好地抵抗阳光老化。您希望我为您准备一份配件的正式报价单，并发送预防性维护检查清单吗？",
                keyPoints: [
                    "先表达重逢的喜悦，建立情感连接",
                    "通过查询历史订单展示专业和可靠",
                    "配件编号具体化，增加可信度",
                    "提供具体价格和交期，消除不确定性",
                    "主动提供延保和维保服务，展示持续服务能力",
                    "用开放式问题推进下一步沟通"
                ],
                vocabulary: [
                    "spare parts",
                    "replacement lids",
                    "metal hinges",
                    "collapsible bulk containers",
                    "order records",
                    "HDPE replacement panels",
                    "UV-stabilized material",
                    "preventive maintenance",
                    "quarterly inspection routine",
                    "extended product life",
                    "wear and tear",
                    "reinforced hinges",
                    "lifespan extension",
                    "maintenance checklist",
                    "formal quotation"
                ]
            },
            initialAI: "Hello, we placed an order with your company about 3 years ago for collapsible bulk containers. Some of the lids and hinges are showing signs of wear and we'd like to order replacement parts. Can you help us identify the correct parts and provide a quotation? Also, is there anything we can do to extend the life of these containers?",
            aiResponses: [
                "Thank you for checking your records. Yes, we ordered 200 sets of FBC-1210. We'd like to order 50 replacement lids and about 30 sets of hinges. How long would shipping take to Yokohama port in Japan?",
                "The preventive maintenance service sounds interesting. What exactly does it involve, and how much does it cost? Is it available in Japan or only in China?",
                "We are also considering replacing our entire fleet of 200 containers with new ones. Do you offer any trade-in program or discount for returning the old containers?"
            ]
        },
        // ============ 第51天：产品退货处理与理赔谈判 ============
        {
            day: 51,
            title: "产品退货处理与理赔谈判",
            description: "学习如何专业处理客户退货请求、评估货损原因、在保护公司利益的同时维护客户关系的谈判技巧",
            difficulty: 4,
            duration: "15分钟",
            tags: ["退货处理", "理赔谈判", "售后争议", "客户关系"],
            prompt: "巴西客户投诉：上周到货的500个塑料周转箱中，有约8%（约40个）出现了箱体裂纹和铰链断裂，认为是产品质量问题，要求全额退款。货物已经过两个月的海运。你需要：1）专业了解具体情况；2）分析可能的原因（海运挤压/装卸不当/产品质量）；3）提出合理的解决方案；4）谈判达成双方接受的理赔协议。",
            hint: {
                answer: "Good morning, Mr. Santos. This is Mary from UGET Packaging. I received your email about the cracked turnover boxes and I want to assure you that we take this matter very seriously. Before we discuss a resolution, I'd like to gather some more details so we can identify the root cause and determine the best course of action. First, could you please send me photos of the damaged units — particularly the cracks and broken hinges? This will help our quality team assess whether the damage is related to a manufacturing defect or to external factors during transit and handling. Second, were the containers stored indoors or outdoors after delivery? We experienced some unusually hot weather in Guangzhou during the shipping period, and direct sunlight exposure during container transit across the tropics can accelerate material aging. Third, how were the containers stacked and loaded — were they placed directly on the floor of the container or on pallets? Improper stacking or contact with the container floor without protective padding can create localized stress points that lead to cracking over time. Once I receive the photos and answers to these questions, our quality team will conduct a thorough assessment. Based on what we know so far, I'd like to propose an initial goodwill gesture: we can offer a 15 percent discount on your next order of replacement units, and we would also send you replacement hinges free of charge as a precautionary measure. If our quality investigation confirms a manufacturing defect, we would of course take full responsibility. Would this be acceptable to you while we complete our investigation? I want to resolve this matter fairly and efficiently so we can continue our business relationship on a strong footing.",
                translation: "早上好，Santos先生。我是优盖特包装的Mary。我收到了您关于周转箱裂纹的邮件，我向您保证我们非常重视这个问题。在讨论解决方案之前，我想先收集更多细节，以便我们找出根本原因并确定最佳行动方案。第一，能否请您发送损坏部件的照片——特别是裂纹和断裂的铰链？这将帮助我们的质量团队评估损坏是否与制造缺陷有关，还是运输和搬运过程中的外部因素造成的。第二，货物到货后是存放在室内还是室外？在我们发货期间，广州经历了一些异常炎热的天气，横跨热带地区的集装箱运输过程中的阳光直射会加速材料老化。第三，集装箱如何堆叠和装载的——它们是直接放在集装箱地板上还是放在托盘上？不正确的堆叠或与集装箱地板直接接触而没有保护垫，会在长期使用中产生局部应力点，导致裂纹。一旦我收到照片和这些问题的答案，我们质量团队将进行彻底评估。根据目前了解的情况，我想提出一个初步的善意姿态：您下次订购替换产品时可享受15%的折扣，同时我们也将免费寄送替换铰链作为预防措施。如果我们质量调查确认是制造缺陷，我们当然会承担全部责任。在我们完成调查期间，这个方案您能接受吗？我希望公平高效地解决这个问题，以便我们能够继续在坚实的基础上发展业务关系。",
                keyPoints: [
                    "接到投诉时首先表达重视，建立信任基础",
                    "通过提问收集信息（照片、存储条件、装载方式），避免仓促下结论",
                    "海运货损的常见原因：高温老化、挤压变形、装卸不当——这些都是可以合理引用的外部因素",
                    "先提出有限的善意姿态（15%折扣+免费配件），为后续谈判留有余地",
                    "承诺质量调查并承担相应责任，展现诚信但不过度承诺",
                    "强调继续合作的意愿，将退货纠纷转化为关系维护机会"
                ],
                vocabulary: [
                    "root cause analysis",
                    "manufacturing defect",
                    "material aging",
                    "localized stress points",
                    "goodwill gesture",
                    "precautionary measure",
                    "stack and load",
                    "thermal exposure",
                    "incoterms",
                    "replacement units",
                    "trade negotiation",
                    "liability assessment"
                ]
            },
            initialAI: "Hello Mary, this is Carlos Santos from AutoParts Brazil. We received our order of 500 turnover boxes last week and found about 40 units — that's 8 percent — with cracked bodies and broken hinges. This is clearly a quality problem. We want a full refund for the damaged units. Please advise urgently.",
            aiResponses: [
                "I've sent you photos of the damaged boxes as you requested. You can see the cracks are on the side panels and the hinges are completely broken. The boxes were stored in our warehouse after arrival, so it's not a storage issue. We paid CIF Santos — so your responsibility included the full delivery. We're not happy about this.",
                "A 15 percent discount is not acceptable for 40 damaged units. That's a loss of thousands of dollars. Either give us a full refund for the damaged units or send us 40 replacement units at no cost. We cannot accept anything less. And if this happens again, we will need to find a different supplier.",
                "Actually, after thinking about it, we would prefer to keep the 40 damaged units for now if you can send us 40 replacements quickly. We are in the middle of a busy production period and cannot wait. And please ensure the replacements are packed with better protection this time."
            ]
        },
        // ============ 第60天：国际展会客户开发与展会跟进 ============
        {
            day: 60,
            title: "国际展会客户开发与展会跟进",
            description: "学习如何在广交会、德国K展等国际展会上高效接待客户，并在展会后进行专业跟进，将展会流量转化为真实订单",
            difficulty: 4,
            duration: "15分钟",
            tags: ["展会开发", "客户跟进", "国际展会", "K展", "广交会"],
            prompt: "你刚结束了在德国慕尼黑LogiMAT展会的参展，有十几位客户交换了名片。其中一位法国汽车零部件分销商的采购总监Pierre表示有强烈采购意向，并约定了展会后视频会议深入洽谈。请模拟展会结束后的首次跟进邮件和预约确认。",
            hint: {
                answer: "Dear Pierre, it was a genuine pleasure meeting you at LogiMAT 2026 last week in Munich. I still remember our conversation about your challenges with single-use packaging in your automotive parts distribution network. As we discussed, reusable plastic containers can help you reduce packaging costs by 30 to 40 percent while meeting your sustainability targets. I'm writing to confirm our video conference appointment and outline what we can cover together. Based on your interest, I've tentatively scheduled Thursday, April 18th at 3:00 PM Central European Time, which I believe works with your availability. If this time is inconvenient, please feel free to suggest an alternative that suits your calendar. For our meeting, I've prepared a customized presentation addressing your specific requirements: first, a technical overview of our FBC series collapsible containers with dimensional specifications compatible with European pallet standards; second, a total cost of ownership analysis comparing our reusable solution against your current single-use expenditure, based on the volume data you shared at the show; third, our export documentation package including UN certification for dangerous goods if needed; and finally, our logistics solution for deliveries to your Lyon warehouse. I've also invited our product engineer, David, to join the call to answer any technical questions in real time. To make our discussion as productive as possible, could you please confirm: the approximate number of containers you're looking to deploy initially, whether you need delivery to one or multiple sites, and if there are any specific industry certifications your procurement team requires. I look forward to our conversation and to exploring how we can become your long-term packaging partner.",
                translation: "亲爱的Pierre，上周在慕尼黑LogiMAT 2026展会上与您相见非常愉快。我仍然记得我们关于您的汽车零部件配送网络面临的一次性包装挑战的交谈。正如我们讨论的，可循环使用的塑料容器可以帮助您降低30%至40%的包装成本，同时满足您的可持续发展目标。我写信是为了确认我们的视频会议预约，并概述我们可以在会上讨论的内容。基于您的兴趣，我暂定欧洲中部时间4月18日（周四）下午3点进行会议，我相信这符合您的时间安排。如果这个时间不方便，请随时提出适合您日程的替代时间。对于我们的会议，我准备了一份针对您具体需求的定制化演示：首先是关于我们FBC系列折叠容器与欧洲托盘标准兼容的尺寸规格的技术概述；其次是基于您在展会上分享的用量数据，将我们的可循环解决方案与您目前一次性包装支出进行对比的总拥有成本分析；第三是我们的出口文件包，包括危险货物所需的UN认证；最后是运送到您里昂仓库的物流方案。我也邀请了我们的产品工程师David加入会议，实时回答任何技术问题。为了使我们的讨论更具成效，请您确认以下信息：您初步计划部署的大致容器数量、是否需要运送到一个或多个地点，以及您的采购团队是否需要特定的行业认证。期待与您的交谈，以及探讨我们如何成为您长期的包装合作伙伴。",
                keyPoints: [
                    "展会后24小时内发出第一封跟进邮件，趁记忆新鲜",
                    "邮件开头具体提及展会场景和交谈内容，展示认真态度",
                    "明确预约具体时间，方便客户确认",
                    "预告会议内容，让客户有心理准备并提前准备问题",
                    "邀请相关人员参与，体现专业性",
                    "用开放式问题收集客户更多信息，提高会议效率"
                ],
                vocabulary: [
                    "trade show follow-up",
                    "reusable packaging solutions",
                    "total cost of ownership",
                    "sustainability targets",
                    "UN certification",
                    "dangerous goods",
                    "customized presentation",
                    "European pallet standards",
                    "logistics solution",
                    "long-term partnership"
                ]
            },
            initialAI: "Hello Mary, thank you for your email. I'm pleased we connected at LogiMAT — I still think about our conversation about the environmental impact of single-use packaging. Thursday April 18th at 3:00 PM CET works perfectly for me. I am very interested in exploring reusable options for our automotive parts distribution business. Before our call, I wanted to confirm: we currently use approximately 15,000 single-use wooden crates per year across our three distribution centers in France, with a budget of around 120,000 euros annually for packaging. We need containers that are compatible with our existing racking system and forklift operations. Also, do you have references from other European automotive distributors we could speak with?",
            aiResponses: [
                "Thank you for that detailed information, Pierre. 15,000 units per year is a significant volume. Based on the data you've shared, I estimate we can offer a 35 to 40 percent cost reduction compared to your current expenditure, while completely eliminating your wood waste disposal costs. For your racking compatibility, our standard FBC-1210 dimensions work with most European racking systems. Let me prepare a detailed TCO model for your call.",
                "Regarding references, we work with several automotive distributors across Germany and Italy. I'll send you contact details for two companies similar to your operation size after this email. They can share their actual experience with our containers and ROI data from their own operations.",
                "One more question before our call: will your quality assurance team or procurement director also join the video conference? It would be helpful to have all decision-makers present to move the evaluation forward efficiently."
            ]
        },
        {
            day: 52,
            title: "老客户复购激活与交叉销售",
            description: "学习如何主动联系老客户，挖掘复购需求并推荐新产品线，提升客户终身价值",
            difficulty: 4,
            duration: "15分钟",
            tags: ["客户维护", "复购激活", "交叉销售", "客户关系"],
            prompt: "一位2年前合作过的德国汽车零部件客户（曾采购300套围板箱）已经很久没有联系，现在需要主动跟进，了解其当前包装需求变化，并推荐公司新推出的防静电周转箱产品线",
            hint: {
                answer: "Hi Michael, I hope this email finds you well. It's been a while since we last connected — I was reviewing our records and noticed we supplied your team with 300 sets of FBC-1210 collapsible bulk containers back in 2023 for your transmission parts project. I trust those have been serving you well. I'm reaching out today because we've expanded our product line significantly since then, and I thought of you specifically. We've launched a new series of ESD-safe turnover boxes that are gaining traction in the automotive electronics sector — ANSI/ESD S20.20 certified, surface resistivity under 10^9 ohms, perfect for protecting ECUs, sensors, and control modules during transport and storage. Given your expertise in automotive components, I wondered if your product range has expanded into electronics-heavy assemblies where anti-static packaging might be relevant. Even if not, I'd love to catch up and hear how your packaging needs have evolved. Are you still using the same volume of containers, or have your requirements changed? I'd be happy to schedule a brief call or send you our latest catalog if you're interested.",
                translation: "您好Michael，希望这封邮件能让您一切安好。我们上次联系已经有一段时间了——我回顾记录时发现，2023年我们曾为您的变速箱零部件项目供应过300套FBC-1210折叠围板箱。相信那些产品一直很好地为您服务着。我今天联系您是因为自那时起我们显著扩展了产品线，而且我专门想到了您。我们新推出了一系列防静电周转箱，在汽车电子领域越来越受欢迎——通过ANSI/ESD S20.20认证，表面电阻率低于10的9次方欧姆，非常适合在运输和存储过程中保护ECU、传感器和控制模块。鉴于您在汽车零部件领域的专业经验，我想知道您的产品线是否已扩展到电子元件较多的总成领域，那里可能需要防静电包装。即使没有，我也很想叙叙旧，听听您的包装需求有何变化。您现在的容器用量还和以前一样吗，还是需求已经改变了？如果您感兴趣，我很乐意安排一次简短通话或给您发送我们的最新产品目录。",
                keyPoints: [
                    "开场提及历史合作，唤起客户记忆",
                    "展示对客户的持续关注：回顾记录、记得具体项目",
                    "介绍新产品时关联客户行业背景",
                    "用具体技术参数建立专业可信度",
                    "询问客户业务变化，展现真诚关心而非纯推销",
                    "提供低压力互动选项：电话或目录"
                ],
                vocabulary: [
                    "reach out",
                    "expand product line",
                    "gain traction",
                    "ESD-safe turnover boxes",
                    "surface resistivity",
                    "ECU (Electronic Control Unit)",
                    "control modules",
                    "anti-static packaging",
                    "catch up",
                    "evolve",
                    "product range",
                    "latest catalog"
                ]
            },
            initialAI: "Hello, this is Michael from Autotech Components. I remember working with you a couple of years ago on some packaging for our transmission parts. To be honest, we haven't had much new packaging demand recently as our production has been stable. What brings you to reach out after all this time?",
            aiResponses: [
                { triggers: ["ECU", "electronic", "ESD"], response: "ESD-safe boxes? We actually started manufacturing some electronic control units last year, and our current supplier's anti-static packaging has been inconsistent. Tell me more about your ESD certification." },
                { triggers: ["replenish", "volume", "increased"], response: "Thanks for checking in. We've actually increased our production volume by about 30% since 2023. We might need to replenish some of those collapsible containers soon. Do you still stock the FBC-1210 model?" },
                { triggers: ["EV", "battery", "lithium"], response: "I appreciate you remembering our project. We're actually exploring new markets in EV battery components. Do you have any packaging solutions for lithium battery transport?" }
            ]
        },
        // ============ 第53天：处理客户投诉与售后跟进 ============
        {
            day: 53,
            title: "处理客户投诉与售后跟进",
            description: "学习如何专业应对客户质量投诉、调查问题根因、提出解决方案并维护长期合作关系",
            difficulty: 4,
            duration: "15分钟",
            tags: ["客户投诉", "质量处理", "售后服务", "客户维护"],
            prompt: "一位越南客户收到货物后发现部分塑料围板箱在运输过程中出现裂纹，要求退货和全额退款。请用英文电话沟通，了解具体情况，并提出解决方案。",
            hint: {
                answer: "Good morning, Mr. Nguyen. This is Mary from UGET Packaging. I received your email about the cracked pallet collars in your shipment, and I want to personally follow up with you today. First, I sincerely apologize for the inconvenience this has caused your team. Before we discuss solutions, could you help me understand a few details? How many units are affected, and are the cracks visible on the outer panels or the hinge areas? Was the shipment received directly at your warehouse, or was it transshipped through a third-party logistics provider? We take this matter very seriously, and I want to assure you that we will investigate this thoroughly. Based on our quality records, these units passed our pressure and impact resistance tests before dispatch. The cracks you described could potentially be caused by improper handling during transit, excessive stacking pressure, or exposure to extreme temperatures. I'd like to propose the following options for your consideration: Option one, if the damage is limited to a small percentage of the shipment, we can offer a partial refund proportional to the affected units plus a credit note for your next order. Option two, we can send replacement units for the damaged items at no additional cost, with priority production and shipping. Option three, if you'd prefer a full return, we can arrange a return shipment and process a full refund, though I'd recommend we first confirm the extent of the damage with photographic evidence from your side. Which option would work best for your current operational needs? I'd also like to suggest that we implement a strengthened packaging solution for your future orders — perhaps adding corner protectors and humidity-resistant wrapping, which would increase the freight cost by only a small margin but significantly reduce transit damage risk.",
                translation: "早上好，Nguyen先生。我是优盖特包装的Mary。我收到了您关于本次发货中部分围板箱出现裂纹的邮件，今天特意亲自跟进您。首先，我为此给您团队带来的不便深表歉意。在讨论解决方案之前，能否帮我了解几个细节？受损产品有多少套？裂纹是出现在外板还是铰链区域？货物是直接运到您仓库的，还是经过第三方物流中转的？我们非常重视这件事，向您保证会彻底调查此事。根据我们的质量记录，这些产品在发货前均通过了压力和抗冲击测试。您描述的裂纹可能是运输过程中处理不当、堆叠压力过大或暴露于极端温度所致。我提议以下方案供您考虑：方案一，如果损坏仅限于小部分货物，我们可以提供与受损数量成比例的部分退款，并给予下次订单的信用额度。方案二，我们可以免费为受损产品补发替换货物，优先生产和发货。方案三，如果您更希望全额退货，我们可以安排退货运费并全额退款，不过我建议先确认您这边的损坏程度并提供照片证据。您觉得哪个方案最符合您目前的运营需求？我还想建议我们为您的后续订单实施加强版包装方案——例如增加护角和防潮包装，运费成本仅增加少量，但能显著降低运输损坏风险。",
                keyPoints: [
                    "接到投诉第一时间道歉，先处理情绪再处理问题",
                    "通过提问收集关键信息（受损数量、位置、运输方式）",
                    "引用质量记录展示规范，用数据说话而非推卸责任",
                    "提供3个选项让客户选择，体现灵活性和专业性",
                    "主动提出预防措施升级，将危机转化为增购机会",
                    "以客户运营需求为决策依据，避免单方面强加方案"
                ],
                vocabulary: [
                    "cracked pallet collars",
                    "transshipment",
                    "pressure and impact resistance",
                    "partial refund",
                    "credit note",
                    "replacement units",
                    "photographic evidence",
                    "corner protectors",
                    "humidity-resistant wrapping",
                    "transit damage risk"
                ]
            },
            initialAI: "Hello Mary, this is Mr. Nguyen from Vinfast Logistics in Hanoi. I received my order of 200 collapsible bulk containers last week, and I have a serious complaint. About 35 units — that's nearly 18 percent — have visible cracks on the side panels and corners. These containers are completely unusable for our factory operations. This is a major quality issue and I want a full refund and the return shipment arranged immediately. This is completely unacceptable.",
            aiResponses: [
                "Mr. Nguyen, I sincerely apologize for the inconvenience. Before we proceed, could you tell me whether the shipment was handled by your own logistics team or a third-party freight forwarder? Also, were the containers stored outdoors or in a covered warehouse after delivery? This information will help us determine whether this is a manufacturing defect or a transit handling issue.",
                "Thank you for the additional details. Based on what you've shared, I'd like to propose a structured resolution. For the 35 damaged units, we can offer a 35 percent partial refund plus priority replacement of all 35 units at no cost, with upgraded corner protection packaging. Would this be acceptable to you while we investigate the root cause?",
                "I appreciate your patience, Mr. Nguyen. We've completed our internal review. Our quality team confirmed that the damage pattern is consistent with excessive external pressure during sea transit — likely from over-stacking in the container. We've updated our packaging specification for your region and would like to offer a loyalty discount on your next replenishment order to make up for this experience."
            ]
        },
        // ============ 第54天：展会现场客户开发与名片跟进 ============
        {
            day: 54,
            title: "展会现场客户开发与名片跟进",
            description: "学习在国际展会上高效开发潜在客户、快速建立信任、展后及时跟进的实战技巧",
            difficulty: 3,
            duration: "15分钟",
            tags: ["展会开发", "客户拜访", "展后跟进", "初次接触"],
            prompt: "你正在广州交易会（广交会）的展位上，一位来自德国的采购总监停在你们的塑料物流包装展品前，对折叠式围板箱似乎很感兴趣，请主动上前介绍并争取留下联系方式",
            hint: {
                answer: "Good morning! Welcome to UGET Packaging. I noticed you were looking at our collapsible pallet collar system — that's actually one of our most popular products with European clients. My name is Mary, and I'm the international sales manager here. May I take a moment to walk you through some of the key features? This particular model is made from high-density polyethylene with a patented folding mechanism that reduces storage volume by up to 75 percent when not in use. We've been supplying clients in Germany, the Netherlands, and Poland for over eight years, and we're fully compliant with EU packaging regulations. Are you currently using reusable packaging in your supply chain, or are you looking to make the transition? I'd love to understand your specific requirements — whether it's load capacity, stack height, custom dimensions, or surface treatment for compatibility with your conveyor systems. Could I get your business card? I'll prepare a tailored product catalogue and quotation based on what you share with me today, and follow up with you within 48 hours after the fair.",
                translation: "早上好！欢迎来到优盖特包装展位。我注意到您在看我们的折叠式围板箱系统——这实际上是我们在欧洲客户中最受欢迎的产品之一。我叫Mary，是这里的国际销售经理。我能花一点时间为您介绍一下主要特点吗？这款产品采用高密度聚乙烯制造，配有专利折叠机制，不使用时可将储存体积减少多达75%。我们已经向德国、荷兰和波兰的客户供货超过八年，完全符合欧盟包装法规。您目前在供应链中是否已经在使用可循环包装，还是正在考虑转型？我很想了解您的具体需求——无论是承重能力、堆叠高度、定制尺寸，还是与传送系统兼容的表面处理。能给我一张名片吗？我将根据您今天分享的信息准备定制产品目录和报价，并在展会结束后48小时内跟进您。",
                keyPoints: [
                    "主动开场时先引导对方关注产品亮点，而非直接推销",
                    "迅速介绍自己职位，增加信任感",
                    "用具体数据（75%、8年、合规认证）增强说服力",
                    "通过提问了解客户现状和需求，展现专业性",
                    "展后承诺48小时内跟进，留下行动承诺",
                    "索要名片时用行动承诺（定制目录+报价）作为交换价值"
                ],
                vocabulary: [
                    "collapsible pallet collar",
                    "patented folding mechanism",
                    "storage volume reduction",
                    "EU packaging regulations",
                    "load capacity",
                    "stack height",
                    "custom dimensions",
                    "surface treatment",
                    "conveyor system",
                    "tailored quotation"
                ]
            },
            initialAI: "Hello. I'm Klaus Weber, procurement director at Weber Automotive Group in Stuttgart. We supply parts to BMW and Volkswagen and are looking to upgrade our internal logistics packaging. Your folding boxes caught my eye — we currently use wooden pallets and single-use cardboard, but our sustainability department is pushing us to find more eco-friendly and reusable options.",
            aiResponses: [
                "Interesting. What's the maximum load capacity per unit, and can they be stacked when loaded? Our parts range from 50kg to 300kg per box, and we stack up to four high in our warehouse.",
                "We also need to consider our automated conveyor lines — the boxes need to fit our 1200x1000mm pallet standard and have smooth bottom surfaces. Can you customize the dimensions and surface finish?",
                "We're evaluating three suppliers this week. What makes UGET different from the other Chinese packaging manufacturers? And do you have any German or European clients in the automotive sector we could speak with as references?"
            ]
        },
        // ============ 第55天：客户技术方案咨询与定制化报价 ============
        {
            day: 55,
            title: "客户技术方案咨询与定制化报价",
            description: "学习如何接收客户技术需求、快速完成内部评估、回复专业定制化报价的全流程英文表达",
            difficulty: 4,
            duration: "15分钟",
            tags: ["技术评估", "定制报价", "产品规格确认", "客户需求分析"],
            prompt: "你收到一封来自土耳其某电池制造企业的邮件，他们需要在一条新生产线上配置可循环使用的塑料围板箱包装系统，每箱承重要求不低于200公斤，需要防静电处理，并要求兼容自动化传送线体，请回复邮件并电话沟通了解完整需求后给出定制化报价方案",
            hint: {
                answer: "Thank you for your inquiry about our reusable packaging solutions. I've reviewed your requirements and would like to schedule a brief call to gather a few more technical details before I prepare a detailed quotation for you. From what I understand so far, you're looking for: a collapsible pallet collar box with a minimum load capacity of 200kg per unit, anti-static surface treatment for battery manufacturing environments, compatibility with your automated conveyor system on a 1200x1000mm pallet standard, and ideally a modular design that can be easily integrated into your existing production line layout. Before I finalize the specification, may I ask a few follow-up questions? First, what is the exact conveyor belt width and clearance height in your facility — this will determine the maximum outer dimensions we can offer. Second, do you require the anti-static properties to meet any specific industry standard, such as ANSI/ESD S20.20 or IEC 61340? Third, what is your estimated monthly order volume, and do you need the boxes to be delivered fully assembled or flat-packed to reduce shipping costs? And finally, what is your target price range per unit, and do you have a preferred incoterm for delivery — CIF Istanbul or DDP to your factory? Once I have these answers, I can have a tailored technical proposal and quotation ready for you within 48 hours, including material specifications, dimensional drawings, and a cost comparison against your current single-use packaging expense. Looking forward to your response.",
                translation: "感谢您对我司可循环包装解决方案的咨询。在准备详细报价之前，我已经梳理了您的需求，并希望能安排一个简短的电话进一步了解技术细节，从而为您提供更精准的方案。截至目前，我了解到您需要的是：承重不低于每箱200公斤的折叠式围板箱，电池制造环境用防静电表面处理，适配1200x1000毫米托盘标准的自动化传送线体兼容性，以及可轻松整合到现有生产线布局的模块化设计。在确认规格之前，我可以问几个跟进问题吗？第一，您工厂传送带的精确宽度和净空高度是多少？这将决定我们可提供的最大外尺寸。第二，您对防静电性能是否有特定的行业标准要求，比如ANSI/ESD S20.20或IEC 61340？第三，您预计的月订单量是多少？需要整箱发货还是平板包装以降低运输成本？最后，您期望的单价区间是多少，以及您偏好哪种交货条款—— CIF 伊斯坦布尔还是 DDP 到您工厂？一旦获得这些信息，我可以在48小时内为您提供一份定制化技术方案和报价，包括材料规格、尺寸图纸，以及与您目前一次性包装费用的成本对比。期待您的回复。",
                keyPoints: [
                    "收到客户需求后不要急于报价，先系统梳理已知信息并标注缺失项",
                    "通过结构化提问逐一确认关键技术参数（尺寸、载重、标准、合规）",
                    "引用行业标准（ANSI/ESD S20.20、IEC 61340）展示专业性",
                    "主动提供多选项（组装/平板包装、CIF/DDP）让客户做选择",
                    "报价前先做成本对比分析，用数据证明可循环包装的长期价值",
                    "明确承诺回复时间（48小时），建立专业可信的时间预期"
                ],
                vocabulary: [
                    "load capacity",
                    "anti-static surface treatment",
                    "automated conveyor system",
                    "modular design",
                    "clearance height",
                    "ANSI/ESD S20.20",
                    "IEC 61340",
                    "flat-packed",
                    "incoterm",
                    "tailored quotation"
                ]
            },
            initialAI: "Hello Mary, I'm Hasan from Ekinci Battery Solutions in Istanbul. We are a lithium-ion battery manufacturer and we saw your products at the Canton Fair. We are setting up a new production line and need reusable plastic packaging for our battery modules. Our requirements: each box must carry at least 200kg, it must be anti-static, and it needs to work with our automated conveyor lines. Can you provide a quotation for us? We need at least 500 units to start.",
            aiResponses: [
                "Thank you for the details. I have a few technical questions to refine the specification. What are the exact dimensions of your battery modules, and how many units do you plan to stack per box? Also, do you require the anti-static property to meet any specific international standard?",
                "We also need to know your conveyor belt width and the clearance height in your factory. And what is your preferred delivery term — CIF Istanbul or DDP to our facility? We need to finalize the logistics cost before confirming the quotation.",
                "Based on the volume of 500 units per month, we can offer a competitive unit price. However, I need one more confirmation: do you prefer the boxes delivered fully assembled or flat-packed for shipping? Flat-packed will reduce your freight cost by approximately 40 percent."
            ]
        },
        // ============ 第56天：售后服务跟进与客户关系维护 ============
        {
            day: 56,
            title: "售后服务跟进与客户关系维护",
            description: "学习如何通过专业高效的售后跟进，将一次性成交客户转化为长期战略合作伙伴",
            difficulty: 4,
            duration: "15分钟",
            tags: ["售后服务", "客户维护", "复购跟进", "长期合作"],
            prompt: "你已完成一批塑料围板箱的交付，买家是墨西哥汽车零部件分销商。现在需要电话回访确认收货情况、收集使用反馈，并探询后续采购需求。请模拟完整的售后跟进通话。",
            hint: {
                answer: "Hello Carlos, this is Mary from UGET Packaging. I'm calling to follow up on the recent delivery of your pallet collar boxes. I hope everything arrived in good condition. Could you please confirm that the shipment has been received and inspected? We're particularly interested in knowing if the boxes have been put into immediate use and how they are performing on your warehouse operations. We always value feedback from our clients because it helps us improve our products and service. Also, I remember you mentioned during our last conversation that you were expecting to expand your inventory capacity in the second half of this year. I'm wondering if your team has finalized the expansion plan, and whether there might be additional packaging needs that we could prepare a quotation for. In the meantime, I wanted to inform you that we have recently upgraded our anti-static formulation for our turnover boxes, which is now compliant with the latest ANSI/ESD S20.20 standards. This could be particularly relevant if you decide to expand into the electronics components sector as you mentioned. And for your continued orders, I can discuss with my team about extending your credit terms to Net 60, which I believe will help improve your cash flow management. Please feel free to share any feedback or concerns — we are always here to support your business growth.",
                translation: "您好卡洛斯，我是优盖特包装的玛丽。我打电话是想跟进您最近订购的围板箱的交付情况。希望货物完好到达，能否请您确认一下货物已签收并完成检验？我们特别想了解箱子是否已投入使用，在仓库运营中的表现如何。我们一直重视客户的反馈，因为这有助于我们改进产品和提升服务。另外我记得在上次交谈中您提到计划在今年下半年扩大库存容量。能否问一下您的团队是否已经确定了扩展计划，是否有可能产生额外的包装采购需求，我们可以提前准备报价。与此同时，我想告知您我们最近升级了周转箱的防静电配方，现已符合最新的ANSI/ESD S20.20标准。如果您决定如之前所言拓展电子元器件领域，这可能会特别适用。对于您持续的订单，我可以与团队讨论将您的信用账期延长至60天，这我相信将有助于改善您的现金流管理。请随时分享任何反馈或疑虑——我们始终在这里支持您的业务增长。",
                keyPoints: [
                    "售后回访时间点：发货后7天内主动联系确认收货",
                    "收集使用反馈时用开放式问题引导客户分享真实体验",
                    "不要只在有问题时才联系，主动关怀建立信任感",
                    "探询复购意向时关联客户之前提到的业务扩展计划",
                    "用新产品/升级信息创造二次销售机会",
                    "提供账期优化等增值服务，提升客户粘性"
                ],
                vocabulary: [
                    "follow up on delivery",
                    "shipment received and inspected",
                    "put into immediate use",
                    "warehouse operations",
                    "expand inventory capacity",
                    "anti-static formulation",
                    "ANSI/ESD S20.20 compliant",
                    "extend credit terms",
                    "cash flow management",
                    "business growth partner"
                ]
            },
            initialAI: "Hello Mary, thank you for calling. Yes, we received the shipment last Tuesday and everything looks good so far. The boxes are sturdy and fit well with our existing pallet system. We started using them about a week ago. Actually, I was just about to email you — we are quite satisfied with the quality, and our warehouse team is happy with how they perform.",
            aiResponses: [
                "That's great to hear, Carlos. We always worry about the transition period when clients start using new packaging. Could you share what specific operations the boxes are being used for? Is it primarily for storage, picking, or outbound logistics?",
                "Thank you for the positive feedback. I remember you mentioned earlier that you were planning to increase your storage capacity by about 30 percent. Has that expansion plan been finalized? And do you foresee any additional packaging needs in the coming quarter?",
                "I'm pleased to inform you that we've recently upgraded our turnover box line with an improved anti-static formulation. Since you mentioned potentially expanding into electronics components distribution, this could be relevant. And regarding your next order, I can offer you Net 60 payment terms as a token of appreciation for your continued partnership."
            ]
        },
        // ============ 第57天：跨境电商平台客户开发与新兴市场开拓 ============
        {
            day: 57,
            title: "跨境电商平台客户开发与新兴市场开拓",
            description: "学习在亚马逊、速卖通等跨境电商平台上开发包装采购商，以及拓展中东、东南亚新兴市场的英文沟通技巧",
            difficulty: 3,
            duration: "15分钟",
            tags: ["跨境电商", "新兴市场", "客户开发", "亚马逊卖家"],
            prompt: "你通过阿里巴巴国际站收到一条询盘，来自一位在亚马逊平台销售电子产品的美国卖家（Jennifer），她需要为其亚马逊FBA仓库采购可折叠塑料箱，用于仓储和配送，每次订单量约200-500个。请以专业外贸业务员身份回复，介绍公司产品优势，了解她的具体需求，并提供初步报价。",
            hint: {
                answer: "Hi Jennifer, thank you for your inquiry about our folding plastic containers for Amazon FBA! I'm Mary from UGET Packaging, and I'd be happy to assist you in finding the right packaging solution for your warehouse and fulfillment needs. Based on your description, I believe our best-selling 600x400x340mm collapsible turnover box would be an excellent fit for your FBA operation. Here's why: First, the boxes fold flat to just 70mm when empty, which means you can save up to 75 percent on return shipping costs — this is a huge advantage for FBA sellers managing reverse logistics. Second, they are made from durable HDPE material with a static load capacity of 35kg per unit and stackable design that maximizes your warehouse space utilization. Third, they are compatible with standard European pallet dimensions (1200x800mm) and work seamlessly with most warehouse racking and picking systems. Fourth, we offer both neutral branding and custom logo printing options — custom branding on Amazon packaging can help strengthen your brand identity and increase customer loyalty. Before I prepare a formal quotation, could you please confirm a few details? What are the exact dimensions and weight of the products you plan to store in these boxes? Do you require any special features such as anti-static treatment for electronic components, or food-grade certification for cosmetics? How many units do you typically keep in stock for each SKU, and what is your preferred monthly order volume? Do you ship internationally or primarily within the US market? This information will help me calculate the most cost-effective solution, including whether flat-packed shipping or fully assembled delivery would better suit your supply chain model. We also offer EXW, FOB, CIF, and DDP incoterms to accommodate different shipping preferences. Our standard lead time is 15 to 20 days for orders under 500 units, and we can offer volume discounts starting from 200 units per order. Please let me know your preferred communication channel — email, WhatsApp, or WeChat — and I'll send you our full product catalogue, dimension drawings, and a tailored quotation within 24 hours. Looking forward to hearing from you!",
                translation: "Jennifer您好，感谢您对我司亚马逊FBA用折叠塑料箱的询价！我是优盖特包装的Mary，很高兴能帮助您找到适合仓储和配送需求的包装解决方案。根据您的描述，我相信我们最畅销的600x400x340毫米可折叠周转箱非常适合您的FBA运营。原因如下：第一，空箱折叠后仅70毫米高，可节省高达75%的回程运费——这对于管理逆向物流的FBA卖家来说是一个巨大优势。第二，箱体采用耐用HDPE材质，单箱静载35公斤，堆叠设计可最大化仓库空间利用率。第三，兼容欧洲标准托盘尺寸（1200x800毫米），可无缝对接大多数仓储货架和拣货系统。第四，我们提供中性包装和定制LOGO印刷两种选择——在亚马逊包装上定制品牌有助于加强品牌识别并提高客户忠诚度。在准备正式报价之前，能否请您确认几个细节？您计划用这些箱子存放的产品的确切尺寸和重量是多少？您是否需要特殊功能，如电子产品用的防静电处理，或化妆品用的食品级认证？每个SKU通常备货多少？您偏好每月订购多少？您主要在美国市场发货还是国际发货？这些信息将帮助我计算最具成本效益的方案，包括平板包装发货还是整箱组装发货更适合您的供应链模式。我们还提供EXW、FOB、CIF和DDP等多种贸易术语以满足不同的运输偏好。500台以内订单的标准交货期为15至20天，200台起可享受批量折扣。请告诉我您偏好的沟通渠道——邮件、WhatsApp或微信——我将在24小时内发送完整产品目录、尺寸图纸和定制报价。期待您的回复！",
                keyPoints: [
                    "跨境电商客户关注点：运费成本（回程运费）、仓储空间利用率、退货处理",
                    "强调可折叠设计节省空间的具体数据（75%空间节省）增加说服力",
                    "提供多种贸易术语（EXW/FOB/CIF/DDP）让客户选择最便利的方案",
                    "定制LOGO印刷是亚马逊卖家差异化竞争的重要卖点",
                    "通过结构化提问（产品尺寸/重量、特殊功能、备货量）收集完整需求",
                    "明确批量起订量和交期承诺，建立专业可信的时间预期"
                ],
                vocabulary: [
                    "Amazon FBA (Fulfillment by Amazon)",
                    "collapsible/folding design",
                    "flat-packed shipping",
                    "return shipping costs",
                    "stackable design",
                    "warehouse space utilization",
                    "static load capacity",
                    "pallet dimensions",
                    "custom logo printing",
                    "brand identity",
                    "reverse logistics",
                    "supply chain model",
                    "incoterms",
                    "volume discounts",
                    "lead time"
                ]
            },
            initialAI: "Hello! I found your products on Alibaba. I'm Jennifer, I run an Amazon business selling smart home devices from my warehouse in California. I'm looking for collapsible plastic boxes for my FBA inventory — something durable that can be folded flat when I ship them back empty. I need about 300 units to start. Can you send me your catalog and pricing?",
            aiResponses: [
                "Thanks for the quick response! The boxes I need should be about 400x300mm or similar size, and they need to hold products weighing around 5-10kg each. Do your boxes come with lids, and can I print my own logo on them? Also, how long does shipping to California take?",
                "I also looked at similar products from three other suppliers. What makes UGET different? Do you have any other American or Amazon seller customers I could contact as references? And what about your return policy if the boxes arrive damaged?",
                "Your price seems a bit higher than some competitors. Can you offer a discount if I commit to ordering 500 units per month regularly? I'm looking for a long-term supplier relationship, not just a one-time order."
            ]
        }
    ],

        // ============ 第58天：海关认证与出口合规申报 ============
        {
            day: 58,
            title: "海关认证与出口合规申报",
            description: "学习塑料包装产品出口所需的海关编码申报、出口许可证办理及合规文件准备",
            difficulty: 4,
            duration: "15分钟",
            tags: ["海关编码", "出口合规", "文件申报", "认证流程"],
            prompt: "你的英国进口商客户询问一批折叠式围板箱出口到中国的海关手续，特别是需要提供哪些认证文件和海关编码",
            hint: {
                answer: "That's a great question, and I'm glad you raised it. Exporting plastic logistics packaging from China involves several key compliance steps. First, the most important document is the commercial invoice and packing list — these declare the value, quantity, and specifications of your shipment. For the HS code, collapsible pallet collar boxes made from high-density polyethylene typically fall under HS Code 3923.10.00. This code determines your export duty rate and any applicable regulatory requirements. You'll also need a certificate of origin, especially if you want to benefit from preferential tariff rates under any free trade agreements between China and the UK. If your buyer requires proof of quality and safety standards, we can provide a quality inspection report and material safety data sheet — we can also arrange SGS or Bureau Veritas inspection if needed. For sea freight documentation, we'll prepare a bill of lading, which is the contract of carriage between the shipper and the carrier. Please note that as of 2026, all export shipments of plastic packaging to the UK must include a UKCA compliance declaration if they are subject to UK packaging regulations. We handle all of this documentation on our end and will prepare a complete set of compliance documents for your customs clearance. The whole process typically takes 3 to 5 business days for documentation preparation. Do you have a specific compliance requirement from your side — such as ISPM 15 heat treatment certification for wooden components or any other import permits?",
                translation: "这是个很好的问题，很高兴您提出了这一点。从中国出口塑料物流包装涉及几个关键合规步骤。首先，最重要的文件是商业发票和装箱单——这些文件用于申报货物的价值、数量和规格。关于HS编码，高密度聚乙烯制造的折叠式围板箱通常归入HS编码3923.10.00。该编码决定了您的出口税率和任何适用的监管要求。您还需要原产地证书，特别是如果您想享受中英之间的任何自由贸易协定下的优惠关税税率。如果您的买家需要质量和安全标准的证明，我们可以提供质量检验报告和材料安全数据表——如需要，我们也可以安排SGS或必维国际检验集团的检验。对于海运文件，我们将准备海运提单，这是托运人与承运人之间的运输合同。请注意，自2026年起，所有出口到英国的塑料包装货物，如果属于英国包装法规的适用范围，必须包含UKCA合规声明。我们这边处理所有这些文件的准备，并将为您的海关清关准备一套完整的合规文件。整个文件准备流程通常需要3至5个工作日。您那边是否有具体的合规要求——例如木质组件的ISPM 15热处理认证或其他任何进口许可证？",
                keyPoints: [
                    "HS编码（3923.10.00）是海关申报的核心，必须准确",
                    "原产地证书CO是享受FTA优惠关税的必要文件",
                    "UKCA声明自2026年起对英国市场为强制要求",
                    "质量检验报告（SGS/BV）可增强客户信任",
                    "ISPM 15热处理认证针对含木质包装的出口",
                    "完整合规文件套件通常需要3-5个工作日准备"
                ],
                vocabulary: [
                    "HS Code",
                    "commercial invoice",
                    "packing list",
                    "certificate of origin",
                    "bill of lading",
                    "UKCA compliance declaration",
                    "ISPM 15 heat treatment",
                    "SGS inspection",
                    "preferential tariff rate",
                    "customs clearance"
                ]
            },
            initialAI: "Hi there. I'm Sarah from a UK logistics company. We're very interested in importing your collapsible pallet collar boxes — looks like a quality product. But to be honest, our procurement team is quite strict about compliance. Could you walk me through what documentation we need for UK customs? Specifically, what's the correct HS code, and what certificates do we need to clear UK customs? Also, we've had issues before with suppliers not providing complete documentation. How do you handle this?",
            aiResponses: [
                "One more thing — we also need to ship these to our distribution center in Rotterdam for a European contract. Does that change anything in terms of documentation, and can you handle both UK and EU compliance in one shipment?",
                "What about environmental compliance? We're required to provide documentation that the plastic materials meet EU REACH regulations. Can your products meet this standard, and can you provide supporting documentation?",
                "I've heard some Chinese suppliers charge extra for compliance documentation. What's included in your standard export service, and what would be an additional cost?"
            ]
        },

        // ============ 第59天：危险品包装出口认证与UN标准 ============
        {
            day: 59,
            title: "危险品包装出口认证与UN标准",
            description: "学习锂电池及化工产品出口所需的危险品包装UN认证、UN38.3测试报告及危包证办理流程",
            difficulty: 4,
            duration: "15分钟",
            tags: ["UN认证", "危险品包装", "UN38.3测试", "危包证"],
            prompt: "你的美国客户需要采购一批用于锂电池运输的塑料包装箱，要求包装必须通过UN认证。请用专业英文解释UN认证体系、UN38.3测试要求以及如何办理危包证",
            hint: {
                answer: "Thank you for your question about UN certification for lithium battery packaging. This is a critical compliance area, and I appreciate the opportunity to explain our capabilities. Let me break this down into three key aspects. First, the UN certification framework: For transporting lithium batteries internationally, packaging must comply with the United Nations Recommendations on the Transport of Dangerous Goods, specifically Chapter 38.3, also known as UN38.3. This applies to all lithium battery shipments by air, sea, or land. Our company is UN certified to produce packaging that meets UN 4G/Y50/S/--/** specifications, where 4G indicates composite packaging, Y50 means rated for up to 50 kilograms gross weight, and S indicates inner packaging requirements. Second, UN38.3 testing requirements: Before we can certify our packaging for lithium battery transport, the battery cells and packs must undergo and pass eight UN38.3 tests — these include altitude simulation, thermal cycling, vibration, shock, short circuit, impact, forced discharge, and vibration at high temperature. The test report must be from an accredited laboratory such as TÜV, SGS, or UL. We maintain partnerships with several accredited testing facilities in China that can complete the full test battery in approximately 4 to 6 weeks. Third, the Dangerous Goods Package Certificate, also called危包证 in China: This is issued by the commodity inspection bureau and is mandatory for exporting dangerous goods packaging from China. We handle the entire application process on your behalf, including product type testing, factory assessment, and certificate issuance. The standard processing time is 5 to 7 business days. For your order, I'll need to know the specific lithium battery type — are these lithium ion cells or lithium metal batteries? And what's the瓦时额定值 (watt-hour rating)? This will determine the exact UN specification required and help us confirm whether additional regulatory approvals, such as DOT or IATA compliance, are needed for your specific destination market.",
                translation: "感谢您提出关于锂电池包装UN认证的问题。这是一个关键的合规领域，我很感谢有机会解释我们的能力。让我将其分为三个关键方面来解释。首先，UN认证框架：对于国际运输锂电池，包装必须符合联合国《关于危险货物运输的建议书》，具体是第38.3章，也称为UN38.3。这适用于所有通过空运、海运或陆运的锂电池运输。我们公司已获得UN认证，可生产符合UN 4G/Y50/S/--/**规格的包装，其中4G表示复合包装，Y50表示额定总重最高50公斤，S表示内包装要求。其次，UN38.3测试要求：在我们能够为锂电池运输认证包装之前，电池芯和电池组必须通过并完成八项UN38.3测试——包括高度模拟、热循环、振动、冲击、短路、撞击、强制放电和高温振动。测试报告必须来自认可实验室，如TÜV、SGS或UL。我们与中国多家认可测试机构保持合作关系，可在大约4至6周内完成全部测试。第三，危险货物包装证书，在中国称为危包证：由商品检验局签发，是从中国出口危险货物包装的强制要求。我们代表您处理整个申请流程，包括产品型式测试、工厂评估和证书签发。标准处理时间为5至7个工作日。对于您的订单，我需要了解具体的锂电池类型——是锂离子电芯还是锂金属电池？以及瓦时额定值是多少？这将决定所需的确切UN规格，并帮助我们确认是否需要针对您的特定目的地市场进行额外的监管批准，如DOT或IATA合规。",
                keyPoints: [
                    "UN 4G/Y50/S规格解读：4G复合包装、Y50最大50kg、S内包装要求",
                    "UN38.3八项测试：高度模拟、热循环、振动、冲击、短路、撞击、强制放电、高温振动",
                    "危包证是出口中国危险品包装的强制证书",
                    "认可实验室TÜV、SGS、UL的权威性",
                    "瓦时额定值(Wh)决定具体UN规格",
                    "DOT(美国)和IATA(空运)是额外的目的地市场认证"
                ],
                vocabulary: [
                    "UN38.3 certification",
                    "UN 4G/Y50/S specification",
                    "lithium battery packaging",
                    "dangerous goods package certificate (危包证)",
                    "altitude simulation test",
                    "thermal cycling test",
                    "accredited testing laboratory",
                    "watt-hour rating (Wh)",
                    "DOT compliance",
                    "IATA compliance"
                ]
            },
            initialAI: "Hi, I'm Robert Chen from a battery manufacturer in California. We're looking for UN-certified packaging for shipping our lithium battery products to Europe and North America. Can your company provide UN-certified packaging? What certifications do you have, and what's involved in getting the UN certification? We've had issues with suppliers claiming certification but not having proper documentation.",
            aiResponses: [
                "That's helpful. What about the test requirements? Our batteries are 100Wh lithium ion packs. How long does the UN38.3 testing take, and can we use our existing test reports from a previous certification?",
                "We're also shipping to customers in South Korea and Japan. Does your UN certification cover those markets too? And what's the difference between UN certification and the危包证 you mentioned?",
                "Our procurement timeline is tight — we need to ship within 3 weeks. Can you provide pre-certified packaging with existing UN marks, or do we need to go through the full certification process for each order?"
            ]
        },

        // ============ 第61天：ESG报告与可持续包装方案沟通 ============
        {
            day: 61,
            title: "ESG报告与可持续包装方案沟通",
            description: "学习如何应对客户对ESG（环境、社会和公司治理）报告的要求，介绍可持续包装材料、回收方案及碳足迹计算",
            difficulty: 4,
            duration: "15分钟",
            tags: ["ESG报告", "可持续包装", "碳足迹", "回收循环", "环保认证"],
            prompt: "你的欧洲汽车客户要求提供ESG报告，特别是关于塑料包装的碳足迹、回收率及可持续材料使用情况。请用专业英文解释你们公司的可持续包装战略、相关认证和ESG数据",
            hint: {
                answer: "Thank you for your inquiry about our ESG performance and sustainable packaging strategy. This is a priority for our company, and I'm pleased to provide detailed information on our environmental, social, and governance initiatives. Starting with environmental impact, we have implemented a comprehensive carbon footprint management system for our plastic packaging products. Based on our 2025 lifecycle assessment, our HDPE collapsible pallet collar boxes have a carbon footprint of 3.2 kg CO₂e per unit, which is 28% lower than the industry average for similar products in China. This reduction is achieved through several key initiatives: first, we use 30% recycled content (post-consumer and post-industrial recycled HDPE) in all our standard products, and we can increase this to 50% for customers with specific sustainability requirements. Second, our manufacturing plant has achieved ISO 14001:2015 environmental management certification and operates on 40% renewable energy from onsite solar panels. Third, we have partnered with a closed-loop recycling scheme where customers can return used pallet collars to our regional collection centers for recycling — we provide a recycling certificate for each ton of material returned. In terms of social responsibility, all our production facilities are SA8000 certified, ensuring fair labor practices, safe working conditions, and continuous training for our workforce. We also have a community engagement program that supports plastic waste collection initiatives in local communities. For governance, we publish an annual sustainability report aligned with the Global Reporting Initiative (GRI) standards and have established an independent sustainability committee that reviews our ESG performance quarterly. For your specific needs, I can provide a customized ESG data sheet for your procurement department, including product-specific carbon footprint data, material composition breakdown, and third-party verification reports from SGS or TÜV. Would you also be interested in exploring our new bio-based plastic packaging line, which uses 20% plant-based materials and is fully compostable in industrial composting facilities?",
                translation: "感谢您对我们ESG表现和可持续包装战略的询问。这是我们公司的优先事项，我很高兴提供关于我们环境、社会和治理举措的详细信息。从环境影响开始，我们为塑料包装产品实施了全面的碳足迹管理系统。根据我们2025年的生命周期评估，我们的HDPE折叠式围板箱每单位的碳足迹为3.2千克二氧化碳当量，比中国同类产品的行业平均水平低28%。这一减少是通过几个关键举措实现的：首先，我们在所有标准产品中使用30%的再生材料（消费后和工业后回收的HDPE），对于有特定可持续性要求的客户，我们可以将此比例提高到50%。其次，我们的制造工厂已获得ISO 14001:2015环境管理体系认证，并采用现场太阳能电池板提供的40%可再生能源运行。第三，我们与闭环回收计划合作，客户可以将使用过的围板箱返还到我们的区域收集中心进行回收——我们为每吨回收材料提供回收证书。在社会责任方面，我们所有生产设施都获得了SA8000认证，确保公平劳动实践、安全工作条件和员工持续培训。我们还有一个社区参与计划，支持当地社区的塑料废物收集行动。在治理方面，我们发布符合全球报告倡议（GRI）标准的年度可持续发展报告，并设立了独立的可持续发展委员会，每季度审查我们的ESG表现。针对您的具体需求，我可以为您的采购部门提供定制的ESG数据表，包括特定产品的碳足迹数据、材料成分分解以及来自SGS或TÜV的第三方验证报告。您是否有兴趣了解我们的新型生物基塑料包装系列，该系列使用20%的植物基材料，在工业堆肥设施中可完全堆肥？",
                keyPoints: [
                    "碳足迹数据具体化：3.2 kg CO₂e（比行业平均低28%）更有说服力",
                    "再生材料比例分级：标准产品30%，可定制提升至50%",
                    "认证体系全面：ISO 14001环境管理+SA8000社会责任",
                    "闭环回收计划提供回收证书，增强客户参与度",
                    "GRI标准年度报告体现治理透明度",
                    "生物基塑料包装作为创新解决方案提供附加值"
                ],
                vocabulary: [
                    "ESG (Environmental, Social, and Governance)",
                    "carbon footprint (CO₂e)",
                    "recycled content (post-consumer / post-industrial)",
                    "closed-loop recycling",
                    "ISO 14001 certification",
                    "SA8000 certification",
                    "Global Reporting Initiative (GRI)",
                    "lifecycle assessment",
                    "renewable energy",
                    "bio-based plastics",
                    "compostable packaging"
                ]
            },
            initialAI: "Hello, I'm Anna Müller from a German automotive manufacturer. Our company has set ambitious ESG targets for 2030, and we're reviewing all our suppliers' sustainability performance. We need detailed ESG data for the plastic packaging we purchase, including carbon footprint per unit, recycled content percentage, and information about your social compliance. Can you provide this information in a format that aligns with our sustainability reporting requirements?",
            aiResponses: [
                { triggers: ["third-party verification", "external audit", "audit report"], response: "That's helpful. What about third-party verification? Do you have external audits of your ESG data? We need documentation that can be included in our own sustainability reports for external stakeholders." },
                { triggers: ["end-of-life", "recycling", "take-back", "disposal"], response: "We're particularly concerned about end-of-life options. If we switch to your packaging, what happens to it after our customers use it? Do you have a take-back program, and what percentage of material is actually recycled versus landfilled?" },
                { triggers: ["total cost of ownership", "TCO", "cost comparison", "disposal cost"], response: "Our procurement team is also evaluating the total cost of ownership, including disposal costs. Can you provide a cost comparison between your standard packaging and the higher recycled content options, including any potential recycling subsidies or credits?" }
            ]
        },

        // ============ 第62天：目的港查验与海关清关流程应对 ============
        {
            day: 62,
            title: "目的港查验与海关清关流程应对",
            description: "学习当货物在目的港遭遇海关查验、文件不符或清关延误时，如何专业地与海外客户沟通并提供解决方案",
            difficulty: 4,
            duration: "15分钟",
            tags: ["海关查验", "清关延误", "文件不符", "目的港", "应急处理"],
            prompt: "你的英国客户通知你，他们的一批围板箱在利物浦港被海关查验，原因是HS编码申报与实际货物不符。请用专业英文向客户解释情况、提供解决方案并安抚客户情绪",
            hint: {
                answer: "Thank you for informing us about the customs inspection at Liverpool Port. I completely understand your concern, and I want to assure you that we are treating this matter with the highest priority. Let me explain the situation and our immediate action plan. The discrepancy appears to be related to the HS code classification — our export documentation listed 3923.10.00 for plastic pallets and pallet collars, but Liverpool customs may be interpreting your specific order configuration differently, possibly as 3923.90.00 for other plastic articles. This is a classification interpretation issue rather than a compliance violation, and it is resolvable. Here is what we are doing right now: First, our customs broker in the UK is already in contact with Liverpool Port customs to clarify the product specifications and provide additional technical documentation, including material composition certificates and product technical datasheets. Second, we are preparing a supplementary declaration that provides more detailed product descriptions to support the original HS code classification. Third, if required, we can arrange for a customs classification ruling from HMRC to definitively resolve any ambiguity. In terms of timeline, we expect to have this resolved within 48 to 72 hours. The goods are not being held for any security or safety concerns — this is purely a documentation clarification. To prevent any impact on your operations, we can also arrange expedited air freight for a small emergency batch if you have immediate production needs. I will update you every 12 hours on progress until the shipment is released. Can you confirm whether your customs broker has received any specific requests from Liverpool customs that we should prioritize in our response?",
                translation: "感谢您通知我们关于利物浦港海关查验的情况。我完全理解您的担忧，并向您保证我们正在以最高优先级处理此事。请允许我说明情况以及我们的即时行动计划。差异似乎与HS编码分类有关——我们的出口文件将3923.10.00列为塑料托盘和围板箱，但利物浦海关可能对您的特定订单配置有不同的解读，可能将其归类为3923.90.00的其他塑料制品。这是一个分类解释问题，而非合规违规，是可以解决的。以下是我们目前正在采取的措施：首先，我们在英国的报关行已经与利物浦港海关取得联系，澄清产品规格并提供额外的技术文件，包括材料成分证书和产品技术数据表。其次，我们正在准备补充申报，提供更详细的产品描述以支持原始HS编码分类。第三，如有需要，我们可以向英国税务海关总署（HMRC）申请海关分类裁定，以最终解决任何歧义。关于时间安排，我们预计将在48至72小时内解决此问题。货物并非因任何安全或安保问题被扣留——这纯粹是文件澄清问题。为避免对您的运营造成任何影响，如果您有紧急生产需求，我们还可以安排少量紧急货物的空运。我将每12小时向您更新一次进展，直到货物放行。您能否确认您的报关行是否收到了利物浦海关提出的任何需要我们优先处理的具体要求？",
                keyPoints: ["第一时间安抚客户情绪，表达理解和重视", "解释问题本质：HS编码解释差异，非合规违规", "三层解决方案：联系海关澄清→补充文件→申请官方裁定", "给出明确时间预期：48-72小时解决", "提供应急备选方案：空运紧急批次", "承诺定期更新：每12小时汇报进展", "主动询问客户方信息：是否有海关具体要求"],
                vocabulary: ["customs inspection", "HS code classification", "customs broker", "supplementary declaration", "customs classification ruling", "HMRC", "documentation clarification", "material composition certificate", "expedited air freight", "emergency batch", "security or safety concerns"]
            },
            initialAI: "Hi Mary, this is David from Greenfield Logistics, your customer's customs broker in Liverpool. I'm afraid I have some bad news — the shipment of 500 collapsible pallet collars that arrived yesterday has been flagged for customs inspection. The issue is that customs believe the HS code 3923.10.00 on the documentation doesn't match the goods. They're suggesting it should be 3923.90.00 instead. The goods are currently being held at the port, and my client is quite anxious because they need these boxes for a production run next week. What can you do to help resolve this quickly?",
            aiResponses: [
                { triggers: ["documentation", "specification", "material"], response: "Thanks for the quick response. Customs have asked for additional documentation — specifically a detailed product specification sheet showing the material composition and a letter from the manufacturer confirming the intended use of the product. Can you provide these within 24 hours?" },
                { triggers: ["cost", "duty", "who will bear", "guarantee"], response: "My client is asking about the cost implications. If customs reclassify the goods to 3923.90.00, the duty rate could be higher. Who will bear the additional duty cost if this happens? And can you guarantee the shipment will be released by Friday?" },
                { triggers: ["certificate of origin", "bonded warehouse", "demurrage"], response: "We've received the additional documents, but customs are now asking for a certificate of origin with a specific format. Can you provide a revised certificate? Also, my client wants to know if you can arrange for the goods to be transferred to a customs bonded warehouse while we sort this out, to avoid demurrage charges at the port." }
            ]
        },

        // ============ 第63天：碳关税应对与绿色供应链准入谈判 ============
        {
            day: 63,
            title: "碳关税应对与绿色供应链准入谈判",
            description: "学习如何应对欧盟碳边境调节机制(CBAM)等碳关税政策，向客户展示产品的低碳优势并谈判绿色供应链准入",
            difficulty: 4,
            duration: "15分钟",
            tags: ["碳关税", "CBAM", "绿色供应链", "低碳优势", "准入谈判"],
            prompt: "你的欧洲客户通知你，从2026年起欧盟将对进口塑料包装征收碳关税(CBAM)。请用专业英文向客户解释你们产品的低碳优势、碳足迹数据，以及如何帮助客户满足绿色供应链准入要求",
            hint: {
                answer: "Thank you for bringing this to our attention. The EU Carbon Border Adjustment Mechanism (CBAM) is indeed a significant development for our industry, and I'm pleased to share that we have been proactively preparing for this transition. Let me outline how our products can help you meet the new requirements and potentially reduce your carbon tariff exposure. First, our HDPE collapsible pallet collars have a verified carbon footprint of 3.2 kg CO₂e per unit, which is 28% below the industry benchmark of 4.4 kg CO₂e. This directly translates to lower CBAM charges for your imports. We have completed a comprehensive lifecycle assessment (LCA) according to ISO 14040/14044 standards, and the report is third-party verified by SGS. The assessment covers raw material extraction, manufacturing, transportation, use phase, and end-of-life recycling. Second, we can provide CBAM-compliant documentation including: detailed product carbon footprint declarations, supplier emission data for upstream materials, renewable energy certificates for our manufacturing process, and recycling certificates showing the circularity of our products. Third, regarding green supply chain qualification, we have already obtained the following certifications that are recognized by major European automotive and electronics manufacturers: ISO 14001 environmental management, ISO 50001 energy management, and we are in the final stages of obtaining the Cradle to Cradle Certified™ Bronze level for our standard product line. For your specific situation, I recommend we schedule a technical consultation where our sustainability team can walk you through the CBAM reporting templates and help you calculate the exact carbon cost savings of choosing our products versus standard alternatives. Based on your annual volume of 10,000 units, the carbon tariff difference could be approximately €4,800 per year in your favor. Would you like me to prepare a customized CBAM compliance package and carbon cost comparison analysis for your procurement team?",
                translation: "感谢您提出这个问题。欧盟碳边境调节机制(CBAM)确实是我们行业的一项重大发展，我很高兴分享我们一直在积极为这一过渡做准备。请允许我概述我们的产品如何帮助您满足新要求并可能降低您的碳关税负担。首先，我们的HDPE折叠式围板箱经过验证的碳足迹为每单位3.2千克二氧化碳当量，比行业基准4.4千克低28%。这直接转化为更低的进口CBAM费用。我们已按照ISO 14040/14044标准完成了全面的生命周期评估(LCA)，报告由SGS第三方验证。评估涵盖原材料提取、制造、运输、使用阶段和报废回收。其次，我们可以提供符合CBAM要求的文件，包括：详细的产品碳足迹声明、上游材料的供应商排放数据、我们制造过程的可再生能源证书，以及显示产品循环性的回收证书。第三，关于绿色供应链资质，我们已经获得了以下被主要欧洲汽车和电子制造商认可的认证：ISO 14001环境管理、ISO 50001能源管理，并且我们的标准产品线正处于获得Cradle to Cradle Certified™铜级认证的最后阶段。针对您的具体情况，我建议我们安排一次技术咨询，我们的可持续发展团队可以带您了解CBAM报告模板，并帮助您计算选择我们产品而非标准替代品的准确碳成本节约。基于您每年10,000单位的采购量，碳关税差异可能每年为您节省约4,800欧元。您希望我为您的采购团队准备定制的CBAM合规包和碳成本对比分析吗？",
                keyPoints: ["主动回应CBAM政策，展示 preparedness", "提供具体碳足迹数据：3.2 kg CO₂e（比行业低28%）", "生命周期评估(LCA)按ISO 14040/14044标准，第三方验证", "提供完整CBAM合规文件清单", "展示绿色供应链认证：ISO 14001、ISO 50001、Cradle to Cradle", "量化客户收益：基于年采购量计算碳关税节省", "主动提供定制化CBAM合规包"],
                vocabulary: ["CBAM (Carbon Border Adjustment Mechanism)", "carbon footprint (kg CO₂e)", "lifecycle assessment (LCA)", "ISO 14040/14044 standards", "third-party verification", "renewable energy certificates", "Cradle to Cradle Certified", "green supply chain qualification", "carbon tariff exposure", "industry benchmark", "circularity", "upstream emissions"]
            },
            initialAI: "Hello, I'm Klaus Weber, Sustainability Manager at a German automotive manufacturer. With the EU Carbon Border Adjustment Mechanism (CBAM) coming into full effect in 2026, we need to assess the carbon footprint of all our imported packaging materials. We're particularly concerned about the additional costs and documentation requirements. Can you explain how your products comply with CBAM and what data you can provide for our reporting?",
            aiResponses: [
                { triggers: ["emission factors", "Scope 3", "broken down", "production stage"], response: "That's good to know. Our compliance team needs specific emission factors for Scope 3 reporting. Can you provide the carbon intensity per kilogram of product, broken down by production stage: raw materials, manufacturing, and transportation to EU border?" },
                { triggers: ["renewable energy", "percentage", "certificates", "100% renewable"], response: "We're also evaluating suppliers based on their renewable energy usage. What percentage of your manufacturing energy comes from renewable sources, and do you have certificates to prove this? Additionally, can you commit to reaching 100% renewable energy by 2030?" },
                { triggers: ["SBTi", "science-based target", "validation", "approved supplier"], response: "Our procurement policy now requires all packaging suppliers to have a validated science-based target (SBTi) for emissions reduction. Do you have SBTi validation, and if not, what's your timeline for obtaining it? This is becoming a mandatory requirement for our approved supplier list." }
            ]
        },
        {
            day: 64,
            title: "国际贸易术语争议与FOB/CIF/DAP费用澄清",
            description: "学习当客户对贸易术语理解有偏差、费用划分存在争议时，如何专业解释FOB、CIF、DAP等术语的实际责任与费用边界，避免合同纠纷",
            difficulty: 3,
            duration: "15分钟",
            tags: ["国际贸易术语", "FOB", "CIF", "DAP", "费用划分", "Incoterms 2020"],
            prompt: "你的中东客户坚持要求按FOB Shanghai报价，但同时在合同中要求你承担出口清关费、码头操作费(THC)和提单费。请用专业英文向客户解释FOB术语下买卖双方的真实责任划分，澄清费用边界，并提出合理的替代方案",
            hint: {
                answer: "Thank you for sharing your contract draft. I've reviewed the payment and responsibility clauses carefully, and I'd like to clarify a few important points regarding the Incoterms 2020 interpretation of FOB Shanghai to ensure there's no misunderstanding between us. Under FOB (Free On Board) Shanghai as defined by Incoterms 2020, the responsibilities and cost allocation are clearly specified. The seller's obligations include: delivering the goods on board the vessel nominated by the buyer at the named port of shipment, clearing the goods for export (including export customs formalities and export duties), and bearing all costs and risks up to the point where the goods are loaded on board the vessel. The buyer's obligations include: arranging and paying for the main sea freight, bearing all costs and risks from the moment the goods are loaded on board, paying for import clearance and import duties, and covering all destination port charges including terminal handling charges (THC) at the destination, unloading costs, and delivery to the final destination. Now, regarding the specific fees mentioned in your contract draft — the export customs clearance fee is indeed the seller's responsibility under FOB, and we have already included this in our quoted price. However, the terminal handling charge (THC) at the port of loading and the bill of lading fee are typically considered part of the local charges that fall into a gray area. In practice, THC at the port of loading is generally borne by the seller in China's trading convention, and we accept this as part of our FOB pricing. The bill of lading fee is a documentation cost that we also cover as part of our service. But I want to be transparent — these local charges have already been factored into our FOB unit price. If you prefer to have a completely transparent cost breakdown, I can provide a detailed quotation showing: product cost, export customs clearance, port of loading THC, and documentation fees separately, with a clear total. Alternatively, if you'd like us to take on more responsibility for the logistics, I would suggest we consider DAP (Delivered at Place) terms instead, where we would arrange and pay for the entire transport to your designated warehouse in Dubai, including marine insurance. This would give you a landed cost with no hidden charges, and our DAP price would be approximately $4.85 per unit, compared to the FOB price of $4.20 per unit plus your estimated freight cost of $0.75 per unit. Could you let me know which approach you prefer — a transparent FOB cost breakdown or a switch to DAP terms for simplicity?",
                translation: "感谢您分享合同草案。我仔细审阅了付款和责任条款，想就Incoterms 2020对FOB Shanghai的解释澄清几个要点，以确保我们之间没有误解。根据Incoterms 2020定义的FOB Shanghai，买卖双方的责任和费用分配有明确规定。卖方义务包括：在指定装运港将货物交付到买方指定的船上，办理出口清关（包括出口海关手续和出口关税），以及承担货物装上船之前的一切费用和风险。买方义务包括：安排并支付主运费，承担货物装上船后的一切费用和风险，支付进口清关和进口关税，以及覆盖目的港的所有费用，包括目的港码头操作费(THC)、卸货费和运至最终目的地的费用。关于贵方合同草案中提到的具体费用——出口清关费确实是FOB条件下卖方的责任，我们已将其包含在报价中。然而，装运港码头操作费(THC)和提单费通常被视为属于灰色区域的本地费用。实际上，在中国贸易惯例中，装运港THC一般由卖方承担，我们接受将其作为FOB定价的一部分。提单费是文件费用，我们也作为服务的一部分涵盖。但我想坦诚说明——这些本地费用已经计入我们的FOB单价中。如果您希望获得完全透明的成本分解，我可以提供详细报价，分别列示：产品成本、出口清关费、装运港THC和文件费，并给出明确的合计。或者，如果您希望我们承担更多物流责任，我建议考虑DAP（目的地交货）条款，由我们安排并支付至您迪拜指定仓库的全部运输，包括海运保险。这样您将获得无隐藏费用的到岸成本，我们的DAP价格约为每单位4.85美元，而FOB价格为4.20美元加上您预估的运费0.75美元。您能否告知更倾向哪种方式——透明的FOB成本分解还是切换为DAP条款以简化流程？",
                keyPoints: ["准确引用Incoterms 2020规则，避免模糊解释", "清晰划分FOB下买卖双方责任边界：装船前后为分界线", "承认灰色区域（装运港THC、提单费），说明中国贸易惯例", "强调费用已计入报价，避免客户认为被额外收费", "提供透明成本分解选项，增加信任", "主动提出替代方案（DAP），给客户选择权", "量化对比：FOB+运费 vs DAP价格，让客户自行判断"],
                vocabulary: ["Incoterms 2020", "FOB (Free On Board)", "CIF (Cost, Insurance and Freight)", "DAP (Delivered at Place)", "terminal handling charge (THC)", "bill of lading fee", "export customs clearance", "local charges", "landed cost", "cost breakdown", "trading convention", "marine insurance"]
            },
            initialAI: "Hello Mary, this is Ahmed from Al Rashid Trading in Dubai. We've received your quotation for 2,000 units of the 1200x1000mm collapsible pallet collars, and we'd like to proceed with FOB Shanghai terms as we usually do. However, I noticed your quotation doesn't explicitly mention who pays for the THC at Shanghai port, the export customs clearance fee, and the bill of lading fee. In our previous experience with other Chinese suppliers, these fees were included in the FOB price. Can you clarify your position on these charges? We want to make sure there are no surprise costs later.",
            aiResponses: [
                { triggers: ["cost breakdown", "CIF Dubai", "freight arrangement", "CIF instead"], response: "I appreciate the detailed explanation. We'd like to see the transparent cost breakdown you mentioned. Also, if we switch to CIF Dubai instead of FOB Shanghai, what would the price be? Our logistics team prefers CIF because it simplifies our internal process — we'd rather have you handle the freight arrangement." },
                { triggers: ["finance department", "FOB terms", "marine insurance", "insurance claim", "DAP"], response: "That makes sense. But I need to check with our finance department — in our company policy, we typically use FOB terms for all Asian purchases. If we go with DAP, would the marine insurance be included, and what happens if the goods are damaged during transit? Who files the insurance claim?" },
                { triggers: ["partial shipments", "price adjustments", "smaller shipment", "FOB price remain"], response: "Thank you for the clarification on the FOB terms. One more question — we may need to arrange partial shipments for this order, with 1,000 units in June and 1,000 units in July. Would the FOB price remain the same for both shipments, or would there be price adjustments for the smaller shipment sizes?" }
            ]
        },
        {
            day: 65,
            title: "样品寄送流程与客户验货协调",
            description: "学习如何与客户协调样品寄送流程，包括样品选择、物流安排、验货时间表和验货标准确认，确保样品顺利到达并通过客户检验",
            difficulty: 3,
            duration: "15分钟",
            tags: ["样品管理", "物流协调", "验货标准", "快递安排", "检验流程"],
            prompt: "欧洲客户要求尽快收到你的塑料周转箱样品进行质量检验，同时希望安排线上视频验货。请用专业英文与客户协调样品规格、发货方式、预计到达时间，以及视频验货的具体安排",
            hint: {
                answer: "Good morning Mr. Schneider, thank you for your prompt response regarding the sample arrangement. I'm pleased to confirm that we're moving forward with the samples as discussed. Let me walk you through the details so we're fully aligned on the timeline and expectations. For the sample set, we'll prepare three units of our 600x400x230mm standard folding crate in blue HDPE material, which matches your requested specification for the automotive parts storage application. I'll also include a complimentary sample of our anti-static variant at no extra charge, so your quality team can evaluate both options side by side. Regarding the logistics, I recommend shipping via DHL Express for the fastest delivery. Based on our experience with European shipments, the estimated transit time from Shanghai to your Hamburg office is approximately four to six business days, which means you should receive the samples by next Wednesday or Thursday at the latest. I'll share the tracking number with you as soon as the shipment is dispatched tomorrow afternoon. For the video inspection, I suggest scheduling it for the morning of next Thursday, which would give your team one full day to receive and unpack the samples. Our quality engineer will join the call to walk through each inspection point, including dimensional accuracy, load capacity demonstration, hinge durability testing, and surface finish assessment. The video call can be conducted via Zoom or Microsoft Teams, whichever platform your team prefers. I'll send you a detailed inspection checklist by email tomorrow morning so your team can prepare their evaluation criteria in advance. Could you please confirm the shipping address is still the Hamburg warehouse location, and let me know your preferred time slot for the Thursday video inspection? We're flexible between 9:00 AM and 12:00 PM CET.",
                translation: "早上好施耐德先生，感谢您关于样品安排的及时回复。很高兴确认我们正按讨论推进样品事宜。让我详细说明各项安排，确保我们在时间表和期望上完全一致。关于样品组合，我们将准备三件600x400x230mm蓝色HDPE材质的标准折叠周转箱，符合您汽车零部件存储应用的规格要求。我还会免费附赠一件防静电变体样品，供您的质量团队对比评估两个选项。关于物流安排，我建议通过DHL Express发货以获得最快配送。根据我们往欧洲发货的经验，从上海到您汉堡办公室的预估运输时间约为四到六个工作日，这意味着您最晚应在下周三或周四收到样品。样品明天下午发出后我会立即与您分享追踪号码。关于视频验货，我建议安排在下周四上午，这样您的团队有一整天时间接收和拆包样品。我们的质量工程师将参与通话，逐一演示各检验要点，包括尺寸精度、载重能力测试、铰链耐用性测试和表面质量评估。视频通话可以通过Zoom或Microsoft Teams进行，看贵团队更倾向哪个平台。我明天上午会通过邮件发送详细的检验清单，方便贵团队提前准备评估标准。请您确认收货地址是否仍是汉堡仓库位置，并告知您对下周四视频验货的偏好时间段。我们上午9点到中午12点（中欧时间）都可以配合。",
                keyPoints: [
                    "明确列出样品规格（尺寸、材质、数量），避免客户期望偏差",
                    "主动提供额外变体样品，展示产品线和专业度",
                    "给出具体运输时间和快递方式，管理客户预期",
                    "预判验货需求，主动提出视频验货方案",
                    "列出具体检验项目，体现专业性和质量自信",
                    "提供灵活时间选项，尊重客户时区和工作习惯",
                    "提前发送检验清单，让客户感受到服务周到"
                ],
                vocabulary: [
                    "sample set / sample shipment",
                    "folding crate",
                    "anti-static variant",
                    "DHL Express",
                    "transit time",
                    "tracking number",
                    "video inspection",
                    "dimensional accuracy",
                    "load capacity",
                    "hinge durability",
                    "surface finish",
                    "inspection checklist",
                    "evaluation criteria",
                    "CET (Central European Time)"
                ]
            },
            initialAI: "Good morning Mary. We've reviewed the technical drawings you sent last week and we're satisfied with the specifications. Now we'd like to move to the next step and get physical samples for evaluation. Our quality team needs to conduct load testing and drop testing before we can approve the bulk order. Could you arrange the samples as soon as possible? We're working on a tight timeline — the new warehouse project starts in June, so we need to finalize the supplier selection by mid-May. Also, is it possible to do a video call inspection before we receive the samples? We'd like to see your production facility and quality control process.",
            aiResponses: [
                { triggers: ["certification documents", "material safety", "load test reports", "procurement policy"], response: "That sounds like a solid plan. The Hamburg warehouse address is correct. For the video call, let's do Thursday at 10:00 AM CET — I'll send you the Zoom link. One question: do the samples come with any certification documents? Our procurement policy requires material safety certificates and load test reports for all packaging materials." },
                { triggers: ["unit pricing", "first order", "5,000 pieces", "quality inspection"], response: "Perfect, thank you for the detailed arrangement. I appreciate you including the anti-static variant — that's actually something we're considering for our electronics division as well. Could you also share the unit pricing for a first order of 5,000 pieces if the samples pass our quality inspection?" },
                { triggers: ["quality assurance", "sample quality", "mass production", "consistency"], response: "Great, the Thursday 10 AM CET time slot works for our entire quality team. Just one concern — we've had issues with Chinese suppliers in the past where the sample quality didn't match the bulk production quality. What kind of quality assurance mechanism do you have in place to ensure consistency between sample and mass production?" }
            ]
        },
        {
            day: 66,
            title: "包装货物损坏索赔与售后理赔流程",
            description: "学习当客户提出货物损坏索赔时，如何专业处理理赔流程：证据收集、责任界定、理赔金额谈判，以及在保护公司利益的同时维护长期客户关系",
            difficulty: 3,
            duration: "15分钟",
            tags: ["售后理赔", "货物损坏", "保险索赔", "质量责任", "客户关系维护"],
            prompt: "你的欧洲客户在收到货物后发现10%的折叠箱在运输过程中出现裂纹或破损，提出全额索赔要求。请用专业英文处理该理赔请求：确认损坏情况、界定责任归属、核查保险覆盖、提出合理的解决方案，同时维护长期合作关系",
            hint: {
                answer: "Good morning Mr. Bernard, thank you for bringing this matter to our attention and I sincerely apologize for the inconvenience this damage has caused your operations. I understand the urgency of resolving this issue and I'd like to work with you systematically to reach a fair resolution. Let me explain our standard damage claim procedure and share my initial assessment. First, regarding the claim details — you've reported that approximately 10% of the shipment, meaning about 200 units out of the 2,000 collapsible pallet collars received, show signs of cracking or breakage. I want to express my genuine concern about this, and I assure you we take quality complaints very seriously. Our quality team needs to review the evidence before we can proceed with any formal claim resolution. Could you please provide the following documentation: photographs of the damaged units clearly showing the cracks and breakage, the bill of lading number and the shipping date, photographs of the packaging condition when received, and the destination port or warehouse where the goods were received and stored? This documentation is essential because it helps us determine whether the damage occurred during transit, during unloading, or due to improper storage at the destination. Second, regarding responsibility allocation — based on our standard sales contract with CIF Hamburg terms, our responsibility as the seller ends when the goods pass the ship's rail at the port of loading in Shanghai. The marine insurance for this shipment was arranged under our CIF coverage at 110% of the goods value, with the insurance certificate number INS-2026-0847 issued by Ping An Insurance. Third, regarding our proposed resolution — regardless of the insurance outcome, we're prepared to offer a goodwill package: replacement units for all confirmed damaged pieces at no additional cost, shipped via air freight within 5-7 working days; coverage of all return logistics costs; and a root cause analysis report shared within two weeks. As a longer-term preventive measure, I recommend upgrading the packaging specification for all future shipments with double-layer cardboard corner protectors and UV-resistant reinforced stretch film, at approximately $0.35 additional cost per unit. Would this upgraded packaging option be acceptable to you? In the meantime, please send us the documentation I requested and we'll begin the formal claim assessment immediately. Our goal is to have this fully resolved within 15 working days.",
                translation: "早上好伯纳德先生，感谢您将此问题告知我们，我对此次损坏给您运营带来的不便深表歉意。我理解解决此问题的紧迫性，希望与您系统性地合作，达成公平的解决方案。请允许我介绍我们的标准损坏索赔流程，并分享我的初步评估。首先，关于索赔详情——您报告约10%的货物，即收到的2,000件折叠式围板箱中约200件出现裂纹或破损。我们的质量团队需要审查相关证据后才能正式处理任何索赔解决方案。您能否提供以下文件：清晰显示裂纹和破损的损坏单元照片、提单号和发运日期、收货时包装状况的照片，以及货物接收和存储的目的地港口或仓库信息？这些文件至关重要，因为有助于我们确定损坏是发生在运输途中、卸货过程中，还是由于目的地存储不当所致。其次，关于责任归属——根据我们标准销售合同中CIF汉堡条款，作为卖方，我们的责任在货物在上海装运港越过船舷时终止。本批货物的海运保险已按货物价值110%投保，保险证书编号为INS-2026-0847，由平安保险承保。第三，关于我们提出的解决方案——无论保险结果如何，我们准备提供以下诚意方案：对于所有经确认的损坏件免费提供替换产品，通过空运发货，在5-7个工作日内收到；承担退货物流费用；以及在两周内分享根本原因分析报告。作为长期预防措施，我建议升级包装规格，增加双层纸板护角和抗紫外线加强型缠绕膜，每单位成本增加约0.35美元。您是否接受此升级方案？请将所需文件发送给我们，我们将立即开始正式索赔评估。我们的目标是在15个工作日内完全解决此问题。",
                keyPoints: [
                    "第一时间表达歉意和诚意，展示售后负责态度",
                    "要求提供完整证据链：照片、提单、包装状况、存储环境",
                    "引用合同条款（CIF）界定责任边界，明确海运险覆盖范围",
                    "主动提供保险证书编号，增强可信度",
                    "分层解决方案：替换货物 + 承担退货费用 + 根因分析报告",
                    "从长期关系出发，提出预防性包装升级方案（+$0.35/件）",
                    "设定明确的解决时限（15个工作日），展示执行力"
                ],
                vocabulary: [
                    "damage claim / compensation claim",
                    "cracking and breakage",
                    "bill of lading (B/L)",
                    "marine insurance",
                    "responsibility allocation",
                    "root cause analysis",
                    "preventive measure",
                    "goodwill package",
                    "packing specification upgrade",
                    "corrugated cardboard corner protector",
                    "stretch film",
                    "claim assessment",
                    "documentary evidence",
                    "return logistics cost"
                ]
            },
            initialAI: "Good morning, this is Jean-Pierre Bernard, logistics manager at LogiFlex GmbH in Lyon, France. We received our order of 2,000 collapsible pallet collars last week, and I'm very disappointed to report that approximately 200 units arrived with significant cracks and breakages. This is completely unacceptable — we were counting on these units for our warehouse reconfiguration project which starts next Monday. We're demanding a full refund or complete replacement of all damaged units. This is the third time we've had quality issues with Chinese packaging suppliers and frankly, I'm losing patience. I need to know how you're going to resolve this immediately.",
            aiResponses: [
                { triggers: ["thermal stress cracking", "outdoors", "unloading", "forklift", "handling"], response: "I understand your frustration and I appreciate you documenting the damage so thoroughly. We've had similar issues with sea transit to European ports — the humidity and temperature variations during ocean transport can cause stress cracking in lower-quality HDPE materials. Could you tell me: were the damaged units stored outdoors at any point before use, and were they unloaded using a forklift or manual handling? This will help us determine whether the cracking was pre-existing or caused during unloading." },
                { triggers: ["air freight", "replacement units", "500 units", "goodwill resolution"], response: "The documentation you've provided is very helpful. Based on the photos showing the crack patterns, our quality team suspects this is thermal stress cracking, which typically occurs when HDPE products are exposed to rapid temperature changes during sea transit. We're going to file a claim with our marine insurance company immediately. In the meantime, can we arrange for 500 replacement units to be air-shipped to you so you can continue with your project? The air freight cost would be approximately €1,800, which we'd cover as part of our goodwill resolution." },
                { triggers: ["insurance", "compensation", "15% discount", "next order", "humidity indicators", "desiccant"], response: "We appreciate your patience while we completed our investigation. The insurance assessment confirmed that the damage was caused by excessive moisture inside the container during transit — a covered peril under our marine insurance. The insurance company has approved a compensation claim of €8,500. However, we want to go beyond the insurance payment and restore your confidence in our partnership. We're offering a 15% discount on your next order of 5,000 units, and we'd like to propose a new packaging specification with humidity indicators and desiccant packs for all future shipments to European destinations." }
            ]
        },
        // ============ Day 67：长期客户关系维护 ============
        // 更新：2026-04-16 追加第67天课程（长期客户关系维护与复购谈判）
        {
            day: 67, 
            title: "长期客户关系维护与复购谈判",
            description: "学习如何维护老客户关系、处理合作中的摩擦、争取复购订单，以及在长期合作中持续创造价值、巩固伙伴关系",
            difficulty: 3, 
            duration: "15分钟",
            tags: ["客户关系", "复购谈判", "长期合作", "价值创造", "关系维护"],
            prompt: "一位合作两年、年度采购额约30万美元的德国老客户表示在考虑更换供应商，理由是竞争对手价格更低。请用专业英文维护客户关系，分析竞品差距、强调服务差异化价值、提出续约优惠方案，争取保住这个核心客户",
            hint: {
                answer: "Good afternoon, Mr. Hoffmann. Thank you for your candor in sharing your concerns about the competitive pricing situation. I genuinely appreciate your honesty — it's exactly the kind of open communication that has made our partnership successful over the past two years. Let me address your concerns directly and share some perspective that I believe will be valuable for your decision-making process. First, regarding the pricing comparison — I understand that competitive quotes can look attractive, especially when we're talking about percentage differences that seem significant on paper. However, I want to highlight what our partnership has delivered over the past 24 months that may not be visible in a unit price comparison. We've maintained an on-time delivery rate of 98.5%, which means your production line has never experienced a packaging-related shutdown due to our supply failures. Our quality consistency has been exceptional — your quality department has reported zero major complaints since the initial sampling period 18 months ago. We've absorbed three rounds of raw material price increases without passing them on to you, saving you approximately $18,000 over the past year alone. We've proactively developed two custom color formulations and one specialized ESD variant specifically for your product line, at no additional R&D cost to you. Looking at the total cost of ownership rather than unit price, our analysis shows that clients who switch suppliers typically experience a 12-15% increase in their total procurement cost when factoring in quality issues, logistics complications, and the internal team hours spent on supplier re-qualification. To demonstrate our commitment to the long term, I'd like to propose a loyalty program specifically for our valued partners. For orders placed under our new annual framework agreement, we're offering: a 4% price reduction across all product lines, retroactively applied to this quarter's order; priority production slots guaranteeing your delivery timeline even during peak season; a dedicated account manager with direct WhatsApp access for urgent inquiries; and quarterly business reviews to proactively identify cost-saving opportunities in your packaging operations. This framework agreement would lock in these terms for 12 months, providing you with pricing stability and supply security. I believe we've built something valuable together over the past two years — a partnership based on trust, reliability, and mutual growth. I would very much like to continue building on this foundation. Would you be available for a video call next week so we can walk through the framework agreement details and address any remaining concerns you might have?",
                translation: "下午好霍夫曼先生。感谢您坦诚分享关于竞争性定价问题的顾虑。我非常感谢您的坦诚——正是这种开放的沟通方式使我们的合作在过去两年里取得了成功。请允许我直接回应您的顾虑，并分享一些我认为对您决策过程有价值的观点。首先，关于价格比较——我理解有竞争力的报价看起来很有吸引力，尤其是当我们在谈论纸面上看起来很显著的百分比差异时。但我想强调，在过去24个月中，我们的合作所交付的价值，可能是您在单价比较中看不到的。我们的准时交货率保持在98.5%，这意味着您的生产线从未因我们的供应问题而出现与包装相关的停工。我们的质量一致性一直表现出色——自18个月前初始样品期以来，您的质量部门报告了零起重大投诉。我们已经三次主动吸收原材料价格上涨而没有将成本转嫁给您，仅在过去一年就为您节省了约18,000美元。我们主动为您的产品线开发了两种定制配色方案和一种专业防静电变体产品，且无需您承担任何研发成本。从总体拥有成本而非单价的角度来看，我们的分析表明，在将质量问题、物流复杂性和内部团队花在供应商再认证上的时间计算在内后，换供应商的客户通常会经历总体采购成本增加12-15%。为了展示我们对长期合作的承诺，我想为我们尊贵的合作伙伴推出一项忠诚客户计划。对于根据我们新版年度框架协议下达的订单，我们提供：所有产品线价格下调4%，可追溯应用于本季度订单；优先生产排期，保证您的交货时间表即使在旺季也能得到保障；专属客户经理，可通过WhatsApp直接联系处理紧急咨询；以及每季度业务回顾，主动识别包装运营中的成本节约机会。此框架协议将锁定12个月的这些条款，为您提供价格稳定和供应保障。我相信，在过去两年中，我们已经建立了一些有价值的东西——一种基于信任、可靠性和共同成长的伙伴关系。我非常希望继续在此基础上发展。下周您方便视频通话吗？我们可以详细讨论框架协议条款，并解决您可能存在的任何剩余顾虑？",
                keyPoints: [
                    "感谢客户坦诚——先肯定沟通态度，再处理问题",
                    "量化过去合作成果：98.5%准时率、零投诉、$18,000成本节省",
                    "引入TCO（总体拥有成本）概念，挑战单纯比价逻辑",
                    "强调非价格价值：定制开发、优先级供应、专属服务",
                    "主动提出具体续约方案，而非单纯要求客户留下",
                    "提供年度框架协议锁定长期利益，降低客户决策风险",
                    "以视频会议邀约结尾，推进实质性进展"
                ],
                vocabulary: [
                    "candor / frankness",
                    "competitive pricing",
                    "on-time delivery rate",
                    "quality consistency",
                    "raw material price increases",
                    "total cost of ownership (TCO)",
                    "supplier re-qualification",
                    "loyalty program",
                    "annual framework agreement",
                    "priority production slots",
                    "dedicated account manager",
                    "quarterly business review",
                    "pricing stability",
                    "supply security",
                    "mutual growth"
                ]
            },
            initialAI: "Hello Mary. I appreciate the good relationship we've built over the past two years. Your products have served us well and your service has been reliable. However, I have to be straightforward with you — we've received a quotation from a competitor in Taiwan with prices about 12% lower than yours for equivalent specifications. My procurement team is pressuring me to consider switching suppliers. I want to give you the opportunity to respond before we make any decisions. What can you offer to justify staying with your company?",
            aiResponses: [
                { triggers: ["logistics savings", "local warehouse", "stock program", "inventory reduction"], response: "That's a fair question. I understand the pressure from your procurement team. But let me share something that might change the calculation — we've been analyzing the total cost of ownership for our customers. Beyond the unit price, when we factor in our reliable delivery record preventing production line shutdowns, and the cost savings from not having to re-qualify a new supplier, the gap becomes much narrower. Have you calculated what a supplier switch would actually cost your organization in terms of internal resources and potential quality risks?" },
                { triggers: ["annual volume", "50,000 units", "price reduction", "volume discount"], response: "I appreciate you giving me the opportunity to respond. Given our two-year partnership and your annual volume of approximately 50,000 units, I'd like to propose a strategic partnership program. We could offer a 5% price reduction if you commit to an annual volume target, plus priority manufacturing slots during peak season. Would that help bridge the gap with the competitor's quotation?" },
                { triggers: ["competitor quality", "sample testing", "side-by-side comparison", "quality assurance"], response: "Thank you for being so direct, Mr. Hoffmann. I understand price is always a consideration. But before making a decision based solely on quotation numbers, I'd suggest we do a comprehensive comparison — including quality consistency data, delivery performance metrics, and response time for technical support. We've maintained a 98.5% on-time delivery rate and zero quality complaints for 18 months. Would it be helpful if I prepared a detailed partnership value report to present to your procurement team?" },
                { triggers: ["framework agreement", "12 months", "price lock", "annual contract"], response: "I completely understand the pressure you're facing. Let me propose something concrete — we'd like to offer you an annual framework agreement with locked-in pricing and priority supply guarantees. This would protect you from market price fluctuations while ensuring you maintain our quality standards and service levels. Can I send you a draft agreement for review?" },
                { triggers: ["payment terms", "net 60", "letter of credit", "flexibility"], response: "I appreciate the opportunity to make our case. Beyond pricing, I'd like to discuss how we can improve our partnership in other ways — for example, extending payment terms or offering flexible delivery schedules. What would be most valuable to your operations going forward?" },
                { triggers: ["new product development", "custom solutions", "R&D", "innovation"], response: "While the competitor's quotation may look attractive on price, I'd like to remind you of the custom solutions we've developed specifically for your product line — the specialized ESD variant and custom colors were developed at our cost. A new supplier would require you to go through the entire sampling and qualification process again, which typically takes 3-4 months and involves significant internal resources." },
                { triggers: ["meeting", "video call", "discuss further", "proposal"], response: "Thank you for giving me this opportunity, Mr. Hoffmann. I believe we can find a solution that works for both parties. Would you be available for a video call next week? I'd like to walk you through a comprehensive partnership proposal that addresses both pricing and the broader value we bring to your operations." },
                { triggers: ["decision", "deadline", "two weeks", "competitive quotation"], response: "I understand this is a business decision and you need to show value to your stakeholders. Let me be clear about what we can offer — we can match a significant portion of the price gap if you're willing to commit to a longer-term partnership. But I need to know your timeline. How long do I have to present a competitive offer before you need to make a decision?" },
                { triggers: ["supply chain", "lead time", "inventory buffer", "risk mitigation"], response: "Before we discuss pricing, I want to highlight something important — our supply chain stability. We've invested heavily in raw material inventory and production capacity to ensure we can meet your demands even during peak seasons. The competitor's lower price may come with longer lead times or less flexibility. How important is supply chain reliability to your operations?" },
                { triggers: ["customer references", "other German clients", "testimonials", "satisfaction"], response: "I understand the quotation looks compelling on paper. But I'd like to suggest we look at the bigger picture. We have several long-term customers in Germany who have evaluated alternative suppliers and chosen to stay with us. Would it be helpful if I connected you with one of them to hear about their experience? Sometimes hearing from peers can provide valuable perspective." },
                { triggers: ["final decision", "next steps", "action plan", "timeline"], response: "I appreciate your fairness in giving me this opportunity. Let me summarize what I can offer: a 4% price reduction across all product lines, priority production slots, a dedicated account manager, and quarterly business reviews — all locked in under a 12-month framework agreement. I believe this demonstrates our commitment to your success. What would you need to see to feel confident in recommending we continue our partnership?" },
                { triggers: ["contract terms", "termination clause", "exit conditions", "commitment concerns"], response: "I understand you might have concerns about being locked into a long-term agreement. Let me clarify — the framework agreement includes reasonable exit provisions and flexibility clauses. Our goal is not to trap customers, but to build sustainable partnerships. We're confident that once you see the ongoing value we provide, you won't want to leave. But we want you to stay by choice, not by contract." },
                { triggers: ["price match", "exactly match", "competitor price", "no difference"], response: "I want to be completely transparent with you — we cannot exactly match the competitor's price because our costs are different. However, when you factor in the total value we provide, including quality, reliability, and service, we believe we're actually the more cost-effective choice in the long run. Can I present a detailed value analysis to help you make the best decision for your company?" },
                { triggers: ["negotiate directly", "your manager", "decision maker", "authority"], response: "I appreciate you sharing this directly with me, Mr. Hoffmann. Before we go further, I want to make sure I'm speaking with someone who has the authority to make this decision. Do you need to involve your manager or procurement committee? If so, I'd like to prepare a formal proposal package that you can present to them, including our value proposition, pricing structure, and service commitments." },
                { triggers: ["referral", "recommendation", "recommend us", "partnership"], response: "Thank you for being so open about your situation. I believe the best thing I can do now is ask — if we can address your concerns about pricing and demonstrate our ongoing value, would you be willing to recommend continuing our partnership? Your satisfaction and success are what matter most to us. Let me put together a comprehensive proposal and set up a call next week to discuss it in detail." }
            ]
        }
    ],

    // 应用配置
    config: {
        dailyTime: 15,
        totalDays: 67,
        targetLanguages: ["英语"],
        supportedBrowser: ["Chrome", "Edge", "Safari", "Feishu Browser"],
        storageType: "localStorage",
        exportFormats: ["PDF", "Excel", "WeChat"]
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ORAL_TRAINING_COURSES;
} else if (typeof define === 'function' && define.amd) {
    define([], function() { return ORAL_TRAINING_COURSES; });
} else {
    window.ORAL_TRAINING_COURSES = ORAL_TRAINING_COURSES;
}