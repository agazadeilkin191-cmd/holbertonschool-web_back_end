#!/usr/bin/env python3
"""
Server class to paginate a database of popular baby names.
"""
import csv
from typing import List

# Əvvəlki tapşırıqdan gələn funksiyanı bura əlavə edirik
def index_range(page: int, page_size: int) -> tuple:
    """Returns a tuple of size two containing a start index and an end index."""
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
        """Returns a page of the dataset."""
        # 1. Assert-ləri yoxlayırıq (hər ikisi tam ədəd və > 0 olmalıdır)
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # 2. İndeksləri alırıq
        start, end = index_range(page, page_size)
        
        # 3. Məlumatı yükləyirik
        data = self.dataset()

        # 4. İndekslər diapazondan kənardadırsa, boş siyahı qaytarırıq
        if start >= len(data):
            return []

        # 5. Lazımi aralığı qaytarırıq
        return data[start:end]
