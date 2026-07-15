# Pagination

This project implements a helper function for pagination, which is used to divide large datasets into smaller, manageable chunks.

## Task 0: Simple helper function

Write a function named `index_range` that takes two integer arguments: `page` and `page_size`.

The function returns a tuple of size two containing a start index and an end index corresponding to the range of indexes to return in a list for those particular pagination parameters.

### Usage Example

```python
index_range = __import__('0-simple_helper_function').index_range

res = index_range(1, 7)
print(type(res))
print(res)
# Output:
# <class 'tuple'>
# (0, 7)

res = index_range(page=3, page_size=15)
print(type(res))
print(res)
# Output:
# <class 'tuple'>
# (30, 45)
