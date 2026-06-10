#!/usr/bin/env python3
"""Module that returns a list of tuples with element lengths."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples (element, length of element)."""
    return [(i, len(i)) for i in lst]
