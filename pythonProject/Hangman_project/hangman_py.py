from hangman_grap import visual
import random
import string
from words import words, using_word


class Hangman:

    def __init__(self, word, level):
        self.word = word
        self.level = level
        self.chances = 6

    def indexing(self):
        # print("{} word is this \n\n".format(self.word))
        global numbers, word_len, random_index

        numbers = [i for i in range(len(self.word))]

        word_len = len(self.word)

        if word_len == 3:
            random_index = random.choices(numbers, k=1)

        elif word_len >= 4 and word_len <= 6:
            random_index = random.choices(numbers, k=2)

        elif word_len >= 7 and word_len <= 10:
            random_index = random.choices(numbers, k=3)

        elif word_len >= 11 and word_len <= 14:
            random_index = random.choices(numbers, k=4)

    def main_program(self):
        using_list = []
        self.chances = 6
        wrong_guess = 0
        inp_guess = []

        # print(visual[self.chances])
        inp = self.word[random_index[0]]

        while self.chances != 0:

            print(visual[self.chances])

            for i in range(word_len):
                if inp not in self.word:
                    self.chances -= 1
                    wrong_guess = 1
                    break

                if inp == self.word[i]:
                    random_index.append(i)

            for i in range(word_len):
                if i in random_index:
                    using_list.append(self.word[i])
                    # print(i, end="")
                else:
                    using_list.append("_")

            # print("\n\n-------------------------------------")
            # print("{} using list".format(using_list))
            # print("{} WORD[1]".format(self.word[1]))
            # print("{} word".format(self.word))
            # print("{} WORD LEN".format(word_len))
            # print("-------------------------------------")

            for i in using_list:
                print("{} ".format(i), end="")

            if wrong_guess == 1:
                print("\n{} is the Wrong guess.{} chance remaing.".format(
                    inp, self.chances))

            wrong_guess = 0

            inp_guess.append(inp)

            def inp_try():
                inp = input("\nEnter your Guess:")
                if inp in inp_guess:
                    print("-------------------------------------")
                    print(
                        "{} has been already entered.\nPlease enter another character.\n")
                    print("-------------------------------------")
                    inp_try()

            inp_try()

            if using_word == list(self.word):
                print("\n\n-------------------------------------")
                print("You have won the game.")
                print("-------------------------------------")
                break

            using_list.clear()


def choosing_word(level):
    if level == 1:
        for i in range(len(words)):
            if len(words[i]) >= 3 and len(words[i]) <= 5:
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

    level = int(input("    Enter:"))
    passing_value = Hangman(choosing_word(level), level)
    passing_value.indexing()
    passing_value.main_program()


which_level()
