
# local Storage

## 1. localStorage.clear()
- to clean local storage

## 2. localStorage.setItem("key","value")
- to add new item or overwrite existing ones

## 3. localStorage.getItem("key")
- to get any item

## 4. localStorage.removeItem("key")
- to remove any item

### Note
- data is stored in form of string and fetched as string it self.
- to store data in form of array or object, use JSON.stringify(obj) or JSON.stringify(arr)
- to fetch the stored data (array or object), use JSON.parse(obj) or JSON.parse(arr)
- JSON.stringify : Array/Object -> String
- JSON.parse : String -> Array/Object

# sesstion Storage
- to store data until tab close of a browser