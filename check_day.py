import re
with open('training_app.html', encoding='utf-8') as f:
    content = f.read()
days = re.findall(r'"day":\s*(\d+)', content)
days_int = sorted(set(int(d) for d in days))
print('Max day:', days_int[-1] if days_int else 'None')
print('Total days:', len(days_int))
print('Last 5:', days_int[-5:])
