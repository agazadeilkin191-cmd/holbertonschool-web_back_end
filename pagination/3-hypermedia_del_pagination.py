#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""
import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Returns a dictionary with pagination metadata."""
        indexed_data = self.indexed_dataset()
        
        # 1. Assert: index valid diapazondadırsa
        assert index is None or (isinstance(index, int) and 0 <= index < len(indexed_data))

        # Əgər index None-dursa, 0-dan başlayırıq
        current_index = index if index is not None else 0
        data = []
        count = 0
        
        # 2. Məlumatları yığırıq
        # Silinən sətirləri keçərək, mövcud olanları tapırıq
        curr = current_index
        while count < page_size and curr < len(indexed_data):
            if curr in indexed_data:
                data.append(indexed_data[curr])
                count += 1
            curr += 1
            
        # 3. Nəticəni formalaşdırırıq
        return {
            "index": current_index,
            "data": data,
            "page_size": len(data),
            "next_index": curr if curr < len(indexed_data) else None
        }
