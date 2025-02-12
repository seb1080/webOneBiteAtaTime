## WSL Commands

Open PowerShell as a Administrator.

```cmd
wsl --set-default-version 2
wsl --update
wsl.exe --list --online
```

```cmd
wsl.exe --install Ubuntu-22.04

Launching Ubuntu 22.04 LTS...
Installing, this may take a few minutes...
Please create a default UNIX user account. The username does not need to match your Windows username.
For more information visit: https://aka.ms/wslusers
Enter new UNIX username: blaisseb
New password:
Retype new password:
passwd: password updated successfully
Installation successful!
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

Welcome to Ubuntu 22.04.5 LTS (GNU/Linux 5.15.153.1-microsoft-standard-WSL2 x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Thu Nov  7 16:11:48 EST 2024

  System load:  0.08                Processes:             71
  Usage of /:   0.1% of 1006.85GB   Users logged in:       0
  Memory usage: 3%                  IPv4 address for eth0: 172.24.241.226
  Swap usage:   0%


This message is shown once a day. To disable it please create the
/home/blaisseb/.hushlogin file.
blaisseb@G05CAXN03091:~$
```

```cmd

PS C:\> wsl --terminate Ubuntu-22.04
The operation completed successfully.
PS C:\> wsl -l -v
  NAME                           STATE           VERSION
* Ubuntu-22.04                   Running         2
  20241106-1134-evouala-setup    Stopped         2


wsl --export <Distribution Name> <FileName>
 wsl --export Ubuntu-22.04 20241119-0940-Ubuntu-22.04.tar
```

Restore WSL

```cmd
wsl --import 20241119-0940-Ubuntu-22.04.tar C:\WSL\installs\20241119-0940-Ubuntu-22.04  C:\WSL\backups\20241119-0940-Ubuntu-22.04.tar

wsl -d 20241119-0940-Ubuntu-22.04
```
