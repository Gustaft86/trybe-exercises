from exercicio_conteudo_1_classe_deque import Deque


class LongestPrefix:

    def __init__(self):
        self.__data = list()

    def add_word(self, word):
        deque = Deque()
        [deque.push_back(letter) for letter in word]
        self.__data.append(deque)

    def analyse(self):
        longest_prefix = ""
        first_word = self.__data[0]
        is_equals = True
        while is_equals or self.__data:
            for last_words in self.__data[1:]:
                if first_word.peek_front() != last_words.pop_front():
                    is_equals = False
            if is_equals and first_word.peek_front() is not None:
                longest_prefix += first_word.pop_front()
            else:
                return longest_prefix
        return longest_prefix


if __name__ == '__main__':
    lp = LongestPrefix()
    lp.add_word("flower")
    lp.add_word("flow")
    lp.add_word("flight")
    print(lp.analyse())
