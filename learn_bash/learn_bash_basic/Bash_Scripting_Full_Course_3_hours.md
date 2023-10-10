# Bash Scripting Full Course 3 hours

```bash
touch helloScript.sh # To create a file.
```

```bash
chmod +x helloScript.sh # Change mode allowing everyone to execute the script
```

## Output value to target file
```sh
#! /bin/bash
echo "hello bash script" > outputfile.txt
```

## Input new text to target file
```sh
#! /bin/bash
cat > file.txt # Replace text into a file
```

## Append new text to target file
```sh
#! /bin/bash
cat >> file.txt # Replace text into a file
```

## Multiline commenting
```sh
#! /bin/bash
: '
cat >> file.txt
cat >> file.txt
'
cat >> file2.txt
```

## Multiline commenting
```sh
#! /bin/bash

cat << hereDocDelimeter
Text to display on file execution
on multiline
hereDocDelimeter
```

## Conditions
```bash
#! /bin/bash
: '
-lt # less than
-le # less than or equal
-eq # equal
-ge # greater than or equal
-gt # greater than
-ne # not equal
'
count=10
if [ $count < 7 ]
then
    echo "count is lower then 7"
elif [ $count > 9 ]
then
    echo "count is greater then 9"
else
   echo "count is 8"
fi
```

## Flow controls operators

And operator: &&, -a
Or operator: ||, -o

```bash
#! /bin/bash
age=16
if [ "$age" -gt 18 ] && [ "$age" -lt 40 ]; then
    echo "Age is greater then 18 and lower then 40"
fi

if [[ "$age" -gt 18 && "$age" -lt 40 ]]; then
    echo "Age is greater then 18 and lower then 40"
fi

if [ "$age" -gt 32 -a "$age" -lt 55 ]; then
    echo "Age is greater then 38 and lower then 40"
fi
```

## Case statement
```bash
#! /bin/bash
echo -n "Enter the name of a country: "
read COUNTRY
echo -n "The official language of $COUNTRY is "

case $COUNTRY in
Romania | Moldova)
    echo -n "Romanian"
    ;;
Italy | "San Marino" | Switzerland | "Vatican City")
    echo -n "Italian"
    ;;
*)
    echo -n "unknown"
    ;;
esac
```

## Loops

```bash
#! /bin/bash
number=1
while [ $number -le 10 ]; do
    echo "$number"
    number=$((number + 1))
done
```

```bash
#! /bin/bash
number=1
until [ $number -ge 10 ]; do
    echo $number
    number=$((number + 1))
done
```

```bash
#! /bin/bash
for i in 1 2 3 4 5; do
    echo $i
done

for i in {0..20}; do
    echo $i
done

for ((i = 0; i <= 5; i++)); do
    echo $i
done

for ((i = 0; i <= 10; i++)); do
    if [ $i -eq 3 -o $i -eq 7 ]; then
        continue
    fi
    echo $i
done
```

at the 44:00 min: https://www.youtube.com/watch?v=e7BufAVwDiM&t=458s