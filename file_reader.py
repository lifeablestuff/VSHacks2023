#read files and send api request
import json
import datetime
class dostuff():
    def __innit__(self, data, date, month):
        self.stats = data
        self.date = date
        self.month = month
    
    def filter_events(self,offense,month_range,date_range):
        newshit = []
        
        #filtering a singular offense. !!! make it able to filter multiple later
        if offense != None:
            for record in self.data:
                if self.data["TYPE"] == offense.upper():
                    newshit.append(record)

        if month_range or date_range != None:
            for record in self.data:
                if self.data["YEAR"] == 2023:
                    if self.data["MONTH"] <= month_range[1] and self.data["MONTH"] >= month_range[0]:
                        newshit.append(record)
        
        return newshit   


    def fib(self):
        print('something happened')
        print(self.data, self.current_date, self.current_month)

# Get the current date
current_date = datetime.date.today()

# Get the current month
current_month = datetime.date.today().month

# Read JSON file (current path specifically on my pc)
with open("C:/Users/iansh/Downloads/crimedata_csv_AllNeighbourhoods_2023_1 (1).json") as f:
  data = json.load(f)


inst = dostuff(data,current_date,current_month)
inst.__init__(data,current_date,current_month)