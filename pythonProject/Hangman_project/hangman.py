from hangman_grap import visual
from words import words, using_word
import string
import random

class Hangman:

    def __init__(self, word, level):
        self.level = level
        self.word = word


def chosing_word(level):
    if level == 1:
        for i in range(len(words)):
            if len(words[i]) >= 3 and len(words[i])<= 5:
                if '-' in words[i] or ' ' in words[i]:
                    continue

                using_word.append(words[i])


        chosen_word = random.choice(using_word)
        # print(chosen_word +"---------------------------------------------------------")
        return chosen_word

    elif level == 2:
        for i in range(len(words)):
            if len(words[i]) >= 6 and len(words[i]) <= 8:
                if '-' in words[i] or ' ' in words[i]:
                    continue

                using_word.append(words[i])


        chosen_word = random.choice(using_word)
        return chosen_word

    elif level == 3:
        for i in range(len(words)):
            if len(words[i]) >= 9 and len(words[i]) <= 11:
                if '-' in words[i] or ' ' in words[i]:
                    continue

                using_word.append(words[i])


        chosen_word = random.choice(using_word)
        return chosen_word        

    elif level == 4:
        for i in range(len(words)):
            if len(words[i]) >= 12 and len(words[i]) <= 14:
                if '-' in words[i] or ' ' in words[i]:
                    continue

                using_word.append(words[i])


        chosen_word = random.choice(using_word)
        return chosen_word


def which_level():
    print("""------------------------------------
    Welcome to the hangman game.
    Please Enter the level
------------------------------------
    Level One(3-5 Words)
    Level Two(6-8 Words)
    Level Three(9-11 Words)
    Level Four(12-14 Words)
------------------------------------
""")

    level = int(input("Enter: "))

    passing_value = Hangman(chosing_word(level), level)

    



which_level()