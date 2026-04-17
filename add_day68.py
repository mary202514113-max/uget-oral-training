import re

with open('c:/Users/Lenovo/WorkBuddy/20260403194237/training_app_app.html', 'w', encoding='utf-8') as f:
    pass

content = open('c:/Users/Lenovo/WorkBuddy/20260403194237/training_app.html', 'r', encoding='utf-8').read()

# Find exact insertion point: the last lesson's closing }, followed by ],
# Find the pattern: the old Day 67 lesson ends, then ] closes lessonsData
# We need to insert Day 68 before the ];
# Pattern: ...last lesson closing...]\n        ]\n    ];

old_closing = '        ];\n\n        // ========== DOM元素 =========='

idx = content.rfind(old_closing)
if idx == -1:
    print('ERROR: old_closing not found')
    exit(1)

print(f'Found closing pattern at position {idx}')

# The content before ];\n\n        // ====... is the last lesson
# We need to add Day 68 after the last } of the last lesson, before the ]
# Find the last lesson's closing }
last_lesson_start = content.rfind('// ============ 第67天：')
print(f'Day 67 starts at: {last_lesson_start}')

# Find the lessonsData closing ]
lessons_end = idx + len(old_closing) - len('// ========== DOM元素 ==========')
print(f'lessonsData ] at approximately: {lessons_end - 1}')

day68 = '''            // ============ 第68天：紧急生产变更与交期调整处理 ============
            {
                day: 68,
                title: "紧急生产变更与交期调整处理",
                description: "学习如何在工厂发生突发设备故障或生产事故后，第一时间用专业英文通知客户、评估影响、提出解决方案并重新确认交期",
                difficulty: "中级",
                duration: "15分钟",
                tags: ["交期调整", "紧急通知", "生产事故", "客户沟通", "补救方案"],
                prompt: "贵司工厂突发设备故障，导致本周出货的2000套吹塑围板箱将延误7-10个工作日。一位每周跟进订单状态的巴西汽车零部件采购经理Ana将在两小时后与你电话沟通。请用专业英文电话应对：主动通报问题、诚实说明影响、提供替代方案、争取客户理解并重新确认交期",
                hint: {
                    answer: "Good morning, Ana. Thank you for calling. I have difficult news to share with you, and I wanted to reach out personally before our call to make sure you hear this directly from me rather than through a formal email. We experienced an unexpected equipment failure at our primary production facility yesterday afternoon — specifically, a critical issue with our main hydraulic press used in the blow molding process. Our technical team has been working through the night, and our maintenance engineers have confirmed that the repair will take approximately 7 to 10 working days to complete and re-qualify. This means your order of 2,000 collapsible pallet collars that was scheduled for dispatch this Thursday will be delayed. I want to be completely transparent with you about the impact: the revised estimated delivery date would be in approximately 10 working days from today, which would put arrival at your warehouse around the 28th. However, I want to present you with two options that we have already prepared. Option one — we can prioritize your order in our secondary production line, which would reduce the delay to approximately 5 working days. The trade-off is a 3% surcharge on the affected portion of the order due to higher per-unit cost in that line. Option two — we can air-freight 800 units immediately from our existing finished goods inventory to meet your most urgent requirements for next week, while the remainder ships by sea on the revised schedule. The air freight cost would be approximately $2,200, which we would split 50-50 with you. I want to sincerely apologize for this disruption. I know you have a production schedule to maintain and commitments to your own customers. We take full responsibility for this situation. Beyond addressing this immediate issue, I would like to propose a goodwill gesture: a 5% discount on this order as compensation for the inconvenience. And going forward, I would like to suggest we implement a monthly production status update — even a brief email — so you are never surprised by a delay. Would either of these options work for your production schedule? And is there anything else I can do to help right now?",
                    translation: "早上好Ana。感谢您来电。我有一个困难的消息要告诉您，我想在电话前先亲自联系您，确保您从我这里直接听到这个消息，而不是通过正式邮件。我们昨天下午在主生产工厂遇到了意外的设备故障——具体来说是我们用于吹塑工艺的主液压机出现了关键问题。我们的技术团队整夜工作，维护工程师已确认修复大约需要7到10个工作日才能完成并重新认证。这意味着您原定本周四发出的2000套折叠托盘围板将延迟。我想对您完全坦诚这次影响：修订后的预计交付日期约为距今天起10个工作日，即大约28日到达您的仓库。不过，我想向您提供我们已经准备好的两个选项。选项一：我们可以在第二条生产线优先处理您的订单，这可以将延迟减少到大约5个工作日。代价是受影响的订单部分需加收3%的附加费，因为那条线的单位成本更高。选项二：我们可以立即从现有成品库存中空运800套以满足您下周的最紧急需求，剩余部分按修订时间表海运发出。空运费用约为2200美元，我们将与您各承担50%。对于这次延误，我表示诚挚歉意。我知道您有自己的生产计划要维护，有对客户的承诺要履行。我们对这种情况承担全部责任。除了解决这个即时问题，我还想提议一个诚意补偿：在本订单上给予5%的折扣作为对不便的补偿。此外，我建议我们今后实施月度生产状态更新机制——即使是一封简短邮件——这样您就再也不会因延误而感到意外了。这两个选项中有哪个适合您的生产计划吗？还有什么我现在能帮您的吗？",
                    keyPoints: [
                        "主动电话通报而非等待客户追问——展示主动性与责任感",
                        "先说坏消息再给方案——结构清晰，避免客户等待时焦虑",
                        "提供2-3个具体选项而非单方面通知——给客户选择权",
                        "量化延迟影响并诚实说明——数字具体才能建立信任",
                        "主动提出补偿（折扣、空运分担）——以诚意换理解",
                        "引入长期预防机制（月度更新）——化危为机改善合作",
                        "以询问结尾确认客户需求——展示真正以客户为中心"
                    ],
                    vocabulary: [
                        "equipment failure / equipment breakdown",
                        "hydraulic press",
                        "blow molding process",
                        "maintenance engineer",
                        "re-qualification",
                        "revised delivery date",
                        "secondary production line",
                        "finished goods inventory",
                        "air freight / sea freight",
                        "goodwill gesture / compensation",
                        "production schedule",
                        "urgent requirement"
                    ]
                },
                initialAI: "Hi, this is Ana from AutoParts Brasil. I just received an automated email from your system saying my order OB-2024-8834 is delayed. I am calling because our production line is scheduled to start assembly in 12 days and we absolutely cannot have packaging arrive late. This is completely unacceptable — we have our own customer commitments to meet. What happened? And what are you going to do about it?",
                aiResponses: [
                    "Hello Ana, thank you for calling. I can hear the concern in your voice, and I want you to know that I am taking full ownership of this situation. We experienced an unexpected equipment failure at our factory yesterday — a critical issue with our main hydraulic press. Our team has been working through the night and we have already arranged for an external specialist to support the repair. Before we discuss solutions, I want to sincerely apologize for the disruption to your production plan.",
                    "I have reviewed your order status and I have good news — we have 800 units currently in our finished goods warehouse that we can air-freight to you within 5 business days. The remaining 1,200 units will follow by sea on the revised schedule. We are proposing to split the air freight cost 50-50 as a goodwill gesture. Additionally, we are offering a 5% discount on the delayed portion of the order. Would this work for your production timeline?",
                    "Thank you for your understanding, Ana. I have just updated your order in our system with the revised timeline: 800 units by air freight within 5 days, and 1,200 units by sea arriving approximately 10 days from today. I am sending you a formal confirmation email with these details and our compensation offer within the hour. And I would like to schedule a brief monthly check-in call going forward so this never catches you by surprise again. Would next Thursday work for a 15-minute call?"
                ]
            }'''

# Find where Day 67 lesson ends (after aiResponses ]})
# The closing of Day 67's lesson object
day67_end_pattern = '];\n\n        // ========== DOM'
idx_lessons_close = content.find(day67_end_pattern)
if idx_lessons_close == -1:
    print('ERROR: day67_end_pattern not found')
    exit(1)

# Insert Day 68 before ];
insert_at = idx_lessons_close
new_content = content[:insert_at] + ',\n' + day68 + '\n' + content[insert_at:]

with open('c:/Users/Lenovo/WorkBuddy/20260403194237/training_app.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Day 68 inserted successfully!')
print(f'Total lessons now: {new_content.count("day:") - 2}')  # -2 for function references
