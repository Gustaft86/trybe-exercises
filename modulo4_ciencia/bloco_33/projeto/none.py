# None.isalnum()  # Returns True if all characters in the string are alphanumer
# None.isalpha()  # Returns True if all characters in the string are in the alp
# None.isdecimal()  # Returns True if all characters in the string are decimals
# None.isdigit()  # Returns True if all characters in the string are digits
# None.isidentifier()  # Returns True if the string is an identifier
# None.islower()  # Returns True if all characters in the string are lower case
# None.isnumeric()  # Returns True if all characters in the string are numeric
# None.isprintable()  # Returns True if all characters in the string are printa
# None.isspace()  # Returns True if all characters in the string are whitespace
# None.istitle()  # Returns True if the string follows the rules of a title
# None.isupper()  # Returns True if all characters in the string are upper case

invalid_types = [None, "", [], {}, lambda: 1]

for invalid in invalid_types:
    if not type(invalid) == str or type({}) == str or type("c") == str:
        print('teste', type(invalid))
