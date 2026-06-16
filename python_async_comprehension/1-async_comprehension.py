#!/usr/bin/env python3
"""
This module contains the async_comprehension coroutine.
"""
from typing import List

# Import async_generator from the previous task
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collect 10 random numbers using an async comprehension
    over async_generator, then return the 10 random numbers.
    """
    return [number async for number in async_generator()]
