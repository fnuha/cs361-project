import requests
from time import sleep

api_url = "https://dummyjson.com/products/search?q="
filename = "storefront.txt"

while (1):
    with open(filename, "r+") as f:
        data = f.read()
        if data and data[0] == "$":
            query = data[1:]
            response = requests.get(api_url + query)
            f.seek(0)
            f.write(str(response.json()))
            f.truncate()
    sleep(1)