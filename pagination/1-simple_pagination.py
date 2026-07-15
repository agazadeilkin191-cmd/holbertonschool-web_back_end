#!/usr/bin/env python3
"""
Server class to paginate a database of popular baby names.
"""
import csv
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """Returns a tuple of size two containing a start and end index."""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)


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
            # Siyahını başlıq (header) olmadan saxlayırıq
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns the appropriate page of the dataset."""
        # 1. Assertions: hər ikisi int olmalı və 0-dan böyük olmalıdır
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # 2. İndeksləri alırıq
        start, end = index_range(page, page_size)
        
        # 3. Məlumatı yükləyirik
        dataset = self.dataset()
        
        # 4. Sərhədləri yoxlayırıq:
        # Əgər start indeksi siyahının uzunluğundan böyükdürsə, boş list qaytarırıq
        if start >= len(dataset):
            return []
        
        # 5. Səhifəni qaytarırıq (end indeksi siyahının sonunu keçsə, Python özü avtomatik kəsir)
        return dataset[start:end]
