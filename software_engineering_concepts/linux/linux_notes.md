# Lunix notes


To list all user on the system.

```
$ cat /etc/passwd
```

To list only the username
```
$ cat /etc/passwd | awk -F: '{print $1}'
```

List the id of a user
```
$ id <username>
```



# Glossary of commands

chgrp: The `chgrp` command allows you tu change the user and/or group ownership of a given file.
```
$ chgrp [OPTIONS] GROUP FILE...
```

chown: The `chown` command allows you tu change the user and/or group ownership of a given file, directory, or symbolic link.

```
$ chown [OPTIONS] USER[:GROUP] FILE(s)
```

# Linux permissions

Three file permissions types apply to each class of users:

- The read permission.
- The write permission.
- The execute permission.

-rw-r--r-- 12 linuxize users 12.0K Apr  28 10:10 file_name
|[-][-][-]-   [------] [---]
| |  |  | |      |       |
| |  |  | |      |       +-----------> 7. Group
| |  |  | |      +-------------------> 6. Owner
| |  |  | +--------------------------> 5. Alternate Access Method
| |  |  +----------------------------> 4. Others Permissions
| |  +-------------------------------> 3. Group Permissions
| +----------------------------------> 2. Owner Permissions
+------------------------------------> 1. File Type
