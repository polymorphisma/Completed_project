from selenium.webdriver.chrome.options import Options
from selenium import webdriver
import time
import pandas as pd

from selenium.common.exceptions import NoSuchElementException

PATH = 'C:\Program Files (x86)\chromedriver.exe'


def all_function(which_laptop):

    url = 'https://itti.com.np/laptops-by-brands/' + which_laptop

    # ----------------------------------blocking pop up----------------------------------

    option = Options()

    option.add_argument("--disable-infobars")
    option.add_argument("--disable-extensions")

    option.add_experimental_option(
        "prefs", {"profile.default_content_setting_values.notifications": 2}
    )

    driver = webdriver.Chrome(
        chrome_options=option, executable_path=PATH
    )
    driver.get(url)
    # ----------------------------------blocking pop up----------------------------------

    full_name = []
    ram = []
    ssd = []
    graphics_card = []
    display_size = []
    price = []

    def collecting_data(times):
        time.sleep(times)

        laptop_main = driver.find_element_by_class_name(
            'category-product').find_elements_by_tag_name('li')

        for i in laptop_main:
            laptop_name = i.find_element_by_class_name(
                'product-item-link').text
            laptop_price = i.find_element_by_class_name('price').text

            name = laptop_name.split('/')
            full_name.append(name[0])
            ram.append(name[1])
            ssd.append(name[2])
            try:
                display_size.append(name[4])
                test = True
            except IndexError:
                display_size.append(name[3])
                test = False

            if test:
                graphics_card.append(name[3])
            else:
                graphics_card.append('No Graphics Card')
            price.append(laptop_price)
        # print('done')

    collecting_data(0)

    while_sleep = 0
    while True:
        time.sleep(while_sleep)
        try:
            lists = driver.find_element_by_class_name(
                'pages-items').find_elements_by_tag_name('li')
        except NoSuchElementException:
            break

        tests = (lists[-1].get_attribute('class')).split()

        if not('pages-item-next' in tests):
            break

        driver.find_element_by_xpath("//a[@title='Next']").click()
        collecting_data(3)
        while_sleep = 3

    df = pd.DataFrame({
        'full_name': full_name,
        'ram': ram,
        'ssd/hdd': ssd,
        'graphics_card': graphics_card,
        'display_size': display_size,
        'price': price,
    })

    file_name = f'D:\laptop\{which_laptop}.csv'
    df.to_csv(file_name, index=False)

    driver.quit()


all_laptop = ['dell', 'asus', 'acer', 'msi',
              'hp', 'lenovo', 'microsoft', 'razerblade']

for i in all_laptop:
    all_function(i)
