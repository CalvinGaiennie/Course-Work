#1. Create a greeting for your program.
print('Hello User')
#2. Ask the user for the city that they grew up in.
place = input('Where did you grow up?')
#3. Ask the user for the name of a pet.
animal = input('name an animal')
#4. Combine the name of their city and pet and show them their band name.
name = place + animal
print(
    "You now have to create a band called " + name + " " +
    "Sorry if the name sucks and or you dont want to be in a band. You opened this shitty app not me."
)
#5. Make sure the input cursor shows on a new line








#Tip Calculator
print('Welcome to the tip calculator!')
bill_t = input('What was the total bill?')
tip_p = input('How much tip would you like to give? 10, 12, or 15?')
num_people = int(input('How many people to split the bill?'))
owed = (float(bill_t) + (float(bill_t) * (float(tip_p) / 100))) / int(num_people)
print(f'Each person should pay: ${owed}')