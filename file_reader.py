import csv
import datetime

class DoStuff:
    def __init__(self, data, date, month):
        self.stats = data
        self.date = date
        self.month = month

    def filter_events(self, offense, month_range, date_range):
        newshit = []
        count = {}
        if offense is not None:
            for record in self.stats:
                if record["TYPE"] == offense.upper():
                    newshit.append(record)

        if month_range or date_range is not None:
            for record in self.stats:
                if int(record["YEAR"]) == 2023:
                    if int(record["MONTH"]) <= month_range[1] and int(record["MONTH"]) >= month_range[0]:
                        if int(record["DAY"]) <= date_range[1] and int(record["DAY"]) >= date_range[0]:
                            newshit.append(record)
        for x in newshit:
            if x["TYPE"] not in count:
                count[x["TYPE"]] = 1
            else:
                count[x["TYPE"]] +=1
        return newshit, count

# Get the current date
current_date = datetime.date.today().day

# Get the current month
current_month = datetime.date.today().month

# Read CSV file
data = []
with open("crimedata_csv_AllNeighbourhoods_2023.csv", "r", newline="") as file:
    reader = csv.DictReader(file)
    for row in reader:
        data.append(row)

inst = DoStuff(data, current_date, current_month)
results = inst.filter_events('Mischief', [1, 3], [4, 6]) 
# Arguments as follows: Type of offense(case fucking sensitive in str), Month range in list(from what month to what month and items must be int), date range(from what day in the month to what date and items must be int)
print(results)
