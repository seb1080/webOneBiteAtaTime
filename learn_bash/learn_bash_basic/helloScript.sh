#! /bin/bash
: '
for ((i = 0; i <= 10; i++)); do
    if [ $i -gt 5 ]; then
        break
    fi
    echo $i
done
'

for ((i = 0; i <= 10; i++)); do
    if [ $i -eq 3 -o $i -eq 7 ]; then
        continue
    fi
    echo $i
done
