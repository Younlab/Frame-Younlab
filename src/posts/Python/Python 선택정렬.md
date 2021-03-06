---
title: "Python 선택정렬"
date: 2019-03-04
description: 정렬 알고리즘의 가장 기본이되는 정렬
tags: ["til", "python", "algorithm"]
---

> 본 문서는 Hello Coding 그림으로 개념을 이해하는 알고리즘 책을 공부하고 정리한 내용입니다.

## Big O 성능

|            | Big O       |
| ---------- | ----------- |
| 시간복잡도 | O(n \*\* 2) |
| 공간복잡도 | O(n)        |

## Case 01: Find Min Number Selection Sort

배열에서 가장 작은 수를 찾아 새로운 배열에 추가 한후 원본에서 제거한다.

```python
def selectionSort(arr):
    def findMin(in_arr):
        """
        최소값 출력
        """
        minData = in_arr[0]
        minIndex = 0

        for i in range(1, len(in_arr)):
            if minData > in_arr[i]:
                minData = in_arr[i]
                minIndex = i
        return minIndex
    """
    내부함수를 실행하여 최소값 인덱스를 찾고 새로운 배열에 추가하고 원본에 제거
    """
    newArr = []
    for i in range(len(arr)):
        minIndex = findMin(arr)
        newArry.append(arr.pop(minIndex))
    return newArry

selectionSort([2,0,6,7,1,3,1])
```

```bash
>> [0, 1, 1, 2, 3, 6, 7]
```

## Case 02: Swap Index Selection Sort

현재의 루프값보다 작은 값과 비교하여 위치를 스왑(swap) 한다.

```python
def selectionSort(arr):
    """
    스왑(swap) 으로 위치를 바꿔주는 선택정렬
    """
    for i in range(0 ,len(arr) - 1):
        for j in range(i + 1, len(arr)):
            if arr[i] > arr[j]:
                arr[i], arr[j] = arr[j], arr[i]
    return arr
selectionSort([2,0,6,7,1,3,1])
```

```bash
>> [0, 1, 1, 2, 3, 6, 7]
```

print 를 찍어보면 어떻게 값이 swap 되는지 알 수 있다.

```python
def selectionSort(arr):
    """
    스왑(swap) 으로 위치를 바꿔주는 선택정렬
    """
    for i in range(0 ,len(arr) - 1):
        print(f'Array : {arr}',f'Index : {i}')
        for j in range(i + 1, len(arr)):
            if arr[i] > arr[j]:
                print(f'Swap A : {arr[i]}', f'Swap B : {arr[j]}')
                arr[i], arr[j] = arr[j], arr[i]
    return arr
selectionSort([2,22,6,7,1,3,1])
```

```bash
Array : [2, 22, 6, 7, 1, 3, 1] Index : 0
Swap A : 2 Swap B : 1
Array : [1, 22, 6, 7, 2, 3, 1] Index : 1
Swap A : 22 Swap B : 6
Swap A : 6 Swap B : 2
Swap A : 2 Swap B : 1
Array : [1, 1, 22, 7, 6, 3, 2] Index : 2
Swap A : 22 Swap B : 7
Swap A : 7 Swap B : 6
Swap A : 6 Swap B : 3
Swap A : 3 Swap B : 2
Array : [1, 1, 2, 22, 7, 6, 3] Index : 3
Swap A : 22 Swap B : 7
Swap A : 7 Swap B : 6
Swap A : 6 Swap B : 3
Array : [1, 1, 2, 3, 22, 7, 6] Index : 4
Swap A : 22 Swap B : 7
Swap A : 7 Swap B : 6
Array : [1, 1, 2, 3, 6, 22, 7] Index : 5
Swap A : 22 Swap B : 7

>> [1, 1, 2, 3, 6, 7, 22]
```
