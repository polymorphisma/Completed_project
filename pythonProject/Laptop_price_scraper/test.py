import pandas as pd

name = [1, 2, 3, 6, 8]
rool = [1, 2, 3, 6, 8]

df = pd.DataFrame({
    'name': name,
    'rool': rool,
})

which_laptop = 'dell'

file_name = f'D:\laptop\{which_laptop}.csv'
df.to_csv(file_name, index=False)
