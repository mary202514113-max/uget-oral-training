import re

content = open('c:/Users/Lenovo/WorkBuddy/20260403194237/training_app.html', 'r', encoding='utf-8').read()

# Find Day 68 answer text
idx68 = content.find('// ============ 第68天：经销商')
# Find answer field
idx_ans = content.find('answer:', idx68)
idx_trans = content.find('translation:', idx68)

raw_answer = content[idx_ans+9:idx_trans].strip()
# Strip leading/trailing quotes
raw_answer = raw_answer.strip().strip('"')

# Handle JS string escapes
answer_text = raw_answer.replace("\\'", "'").replace('\\"', '"').replace('\\n', '\n')

print(f'Answer length: {len(answer_text)}')
print('First 200 chars:')
print(answer_text[:200])

# Save to file for audio generation
with open('c:/Users/Lenovo/WorkBuddy/20260403194237/day68_audio_text.txt', 'w', encoding='utf-8') as f:
    f.write(answer_text)

print('\nSaved to day68_audio_text.txt')
