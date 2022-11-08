import os
from os.path import join
import pandas as pd
from bs4 import BeautifulSoup
import requests
from lxml import etree


class Downloader:
    def __init__(self, manga_name, manga_url, download_loc):
        self.main_url = 'https://mangapill.com'
        self.manga_name = manga_name
        self.manga_url = manga_url
        self.download_loc = download_loc
    
    def requesting_soup(url):
        response = requests.get(url)
        return BeautifulSoup(response.content, 'html.parser') 
    
    @staticmethod
    def making_url(lists):
        url = 'https://mangapill.com/search?q=' + '+'.join(lists) 
        return url
        

    @staticmethod
    def manga_options(manga):

        dicts = {
            
        }

        manga_name_list = manga.lower().split(' ')
        url = Downloader.making_url(manga_name_list)

        soup = Downloader.requesting_soup(url)
        dom = etree.HTML(str(soup))

        value = dom.xpath('/html/body/div[1]/div[3]')

        for i in value:
            for index, div in enumerate(i.findall('div')):
                key_text = div.xpath(f'/html/body/div[1]/div[3]/div[{index + 1}]/div/a/div')[0].text
                value_url = div.findall('a')
                
                dicts[key_text] = value_url[0].get("href")

        return dicts
    
    @staticmethod
    def folder_name(string):
        return ''.join(i for i in string if i.isalpha())

    @staticmethod
    def making_folder(path, folder_name):
        try:
            os.mkdir(join(path, folder_name))
        
        except FileExistsError:
            return None
    
    def download(self):
        url = self.main_url + self.manga_url
        soup = Downloader.requesting_soup(url)
        
        folder_name = Downloader.folder_name(self.manga_name)
        Downloader.making_folder(self.download_loc, folder_name)
        new_path = join(self.download_loc, folder_name)
        
        main_container = soup.find('div', {'id': 'chapters'}).find('div')
        for index, a in enumerate(main_container.find_all('a')[::-1]):
            chapter_folder_name = f"{folder_name}_chapter_{index + 1}"
            Downloader.making_folder(new_path, chapter_folder_name)
            chapter_path = join(new_path, chapter_folder_name)
            
            chapter_url = self.main_url + a['href']
            
            chapter_soup = Downloader.requesting_soup(chapter_url)
            
            images = chapter_soup.find_all('img')
            
            for image_index, image in enumerate(images):
                page_name = f"{chapter_folder_name}_{image_index + 1}.jpg"
                # chapter_folder_loc = 
                image_src = image["data-src"]
                img_data = requests.get(image_src).content
                
                
                with open(join(chapter_path, page_name), 'wb') as handler:
                    handler.write(img_data)
                    
            print(f"{chapter_folder_name} completed")


if __name__ == '__main__':
    # print(__name__)
    
    download_loc = "C:\\Downloaded_manga"
    which_manga = input('Enter Manga:')
    # which_manga = 'tokidoki'
    
    options = Downloader.manga_options(which_manga)
    
    print('-----------------------------------------------------')
    df = pd.DataFrame(options.keys(), columns=['Manga'])
    df.index += 1
    print(df)
    print('-----------------------------------------------------')
    
    which_one = int(input('Which one(Please enter index number):'))-1
    # which_one = 0
    dicts_keys = list(options.keys())
    
    
    obj = Downloader(dicts_keys[which_one], options[dicts_keys[which_one]], download_loc)
    obj.download()