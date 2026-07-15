#!/usr/bin/env python3
"""
Server class to paginate a database of popular baby names.
"""
import csv
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """Returns a tuple of size two containing a start and end index."""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns the appropriate page of the dataset."""
        # 1. Assertions to verify that arguments are integers greater than 0
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # 2. Get correct indices using the helper function
        start, end = index_range(page, page_size)

        # 3. Get the dataset and handle out of range
        data = self.dataset()
        
        # If start index is out of the range of the dataset, return empty list
        if start >= len(data):
            return []

        # 4. Return the specific page slice
        return data[start:end]
