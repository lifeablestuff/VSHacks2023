#test
class MyClass:
    def __init__(self, variable):
        self.variable = variable

    def my_method(self):
        print(self.variable)

# Create an instance of the class and pass the variable
my_variable = 10
obj = MyClass(my_variable)

# Access the variable within the class
obj.my_method()  # Output: 10