#!/usr/bin/env python3
"""Module that returns a tuple with a string and the square of a number."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple (k, v squared as float)."""
    return (k, float(v * v))
