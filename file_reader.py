import json
import datetime

class DoStuff:
    def __init__(self, data, date, month):
        self.stats = data
        self.date = date
        self.month = month

    def filter_events(self, offense, month_range, date_range):
        newshit = []
        
        if offense is not None:
            for record in self.stats:
                if record["TYPE"] == offense.upper():
                    newshit.append(record)

        if month_range or date_range is not None:
            for record in self.stats:
                if record["YEAR"] == 2023:
                    if record["MONTH"] <= month_range[1] and record["MONTH"] >= month_range[0]:
                        if record["DAY"] <= date_range[1] and record["DAY"] >= date_range[0]:
                            newshit.append(record)
        
        return newshit

# Get the current date
current_date = datetime.date.today()
current_date = str(current_date)
current_date = current_date[8:10]
current_date = int(current_date)
# Get the current month
current_month = datetime.date.today().month
current_month = int(current_month)

# Read JSON file (current path specifically on my pc)
with open("C:/Users/iansh/Downloads/crimedata_csv_AllNeighbourhoods_2023_1 (1).json") as f:
  data = json.load(f)  # Your JSON data here

inst = DoStuff(data, current_date, current_month)
results = inst.filter_events('Mischief', [1, 3], [4, 6])
print(results)
