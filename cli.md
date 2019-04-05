Terms
The terms Unix, Linux, Bash, shell, command line, terminal, and shell scripting are distinct things, but they share the commands we’ll discuss. Here’s a quick breakdown of the differences and similarities.

Unix is a popular computer operating system developed by Bell Labs in the 1970s. It wasn’t open source.

Linux is the most popular Unix derivative. It runs a huge number of the computer-like devices in the world.

Your terminal is the emulator program that gives you access to the operating system. You can have multiple terminal windows open simultaneously.

The shell language is used to send commands to the underlying operating system.

Bash stands for Bourne Again SHell. It’s the most common shell language for communicating with the operating system. It’s also the default shell for macOS. To learn more about the open source foundations that support Linux and Bash, check out this article.

The command line interface (CLI) refers to keyboard-input-based interface where you enter commands. Generally, it’s used for real-time information and file manipulation. Contrast the CLI with the graphical user interface (GUI) where the mouse is commonly used. The CLI is often referred to as the command line.

A script refers to a small program that contains a sequence of shell commands. Scripts are written to files and can be reused. You can create variables, conditional statements, loops, functions, and more in your scripts.

Phew. Got that? The commands we discuss below apply to all the italicized terms above. I’ll use Bash, shell, and command line interchangeably.

Another note: I use directory and folder interchangeably. Both terms mean the same thing.

The standard input/output streams are standard input (stdin), standard output (stdout), and standard error (stderror). They’ll be popping up a bunch. When I use the term print, I mean print to stdout, not to a printer.

Finally, replace the commands below prefixed with my_whatever with your whatever. 😄

Without further ado, here’s the list of commands we’ll be covering in this article.

Top 21 Bash Commands
Get Info
man: print manual (help) for a command
pwd: print working directory
ls: list directory contents
ps: view running processes

Manipulate
cd: change working directory
touch: create a file
mkdir: create a directory
cp: copy
mv: move or rename
ln: link

Redirect and Pipe
<: redirect stdin
>: redirect stdout
|: pipe content of one command to the next command

Read
head: read the start of the file
tail: read the end of the file
cat: read a file or concatenate files

End
rm: remove
kill: end a process

Search
grep: search
ag: search

Archive
tar: join multiple files into one file

Let’s dig in!

Top 21 Commands Explained
First let’s look at the commands that return information in the form of stdout — which means standard output. Generally, stdout is written to your terminal.

Get Info
man command_name: print the manual for a command. It’s like help.

pwd: print file path of the current working directory. You often need to know where you stand in your file system.

ls: list directory contents. Another super common command.

ls -a: also list hidden files with -a.

ls -l: see more info about your files with -l.

Note that flags can be combined like this: ls -al.

ps: view running processes.

ps -e: print all running processes, not just those associated with the current user’s shell with -e. This is generally what you want.

Manipulate
cd my_directory: change working directory to my_directory. Use the relative path ../ for my_directory to move up one level in the directory tree.


CD
touch my_file: create my_file at the specified path location.

mkdir my_directory: create my_directory at the specified path location.

mv my_file target_directory: move my_file to target_directory. The target_directory needs to be specified as an absolute path (no ../).

mv an also be used to rename a file or folder like this:

mv my_old_file_name.jpg my_new_file_name.jpg

cp my_source_file target_directory: make a copy of source_file and put it in target_directory.

ln -s my_source_file my_target_file: link my_target_file to my_source_file with a symbolic link. When my_source_file is updated, my_target_file is automatically updated, too!

If my_source_file is deleted, my_target_file is deleted, too. The -s flag allows you to link directories, too.

Now let’s see how output redirects and pipes work.

Redirect and Pipe
my_command < my_file: redirect stdin to my_file. Useful when my_command needs input from the user to do something.

my_text > my_file: redirect stdout to my_file. Creates my_file if it doesn’t exist. Overwrites my_file if it does exist.

For example ls > my_folder_contents.txt creates a text file that lists the contents of your working directory.

Make it a double >> to append stdout to my_file instead of overwriting it.

Now let’s look at piping commands.


Pipe the result of one command to the other
first_command | second_command: The pipe character | is used to send the result of one command to another command. The stdout from the command to the left of the pipe gets passed to the stdin of the command to the right of the pipe.

“Everything is a pipe” is a mantra in Unix — so most any valid command can be piped.

Chaining commands with pipes creates a pipeline. Multiple pipes can be chained together like this:

first_command | second_command | third_command


Pipeline
Note that pipes execute all commands in parallel. This behavior occasionally leads to unexpected results. Read more here.

Speaking of reading, let’s see how to do it from the command line.

Read
head my_file: read the first lines of my_file. Other stdin can be read, also.

tail my_file: read the last lines of my_file. Other stdin can be read, also.


Head at the front, tail at the back.
If you’re a data scientist who uses pandas, then those last two commands should sound familiar. If not, head and tail are metaphors that map well, so they shouldn’t be too tricky to remember.

Let’s see another way to read files.

cat either prints a file or concatenates multiple files, depending upon the number of files passed.


cat
cat my_one_file.txt: with one file, cat prints the contents to stdout.

The cat command acts differently when you give it two or more files.

cat my_file1.txt my_file2.txt: with two or more files, cat concatenate the contents of the file together and prints the output to stdout.

If you want to save the concatenated files as a new file use the > write operator like so:

cat my_file1.txt my_file2.txt > my_new_file.txt

Now let’s check out removing and ending things.

End
rm my_file: remove my_file from your file system.

rm -r my_folder: remove my_folder and all files and subfolders in my_folder. -r is for recursive.

Add -f if you don’t want a confirmation prompt for each deletion.

kill 012345: end the specified running process gracefully by giving it time to shut down.

kill -9 012345: forcibly end the specified running process right away. -s SIGKILL means that same thing as -9.

Search
The next few commands — grep, ag, and ack — are for searching. Grep is the old, trusty sibling — reliable but slower and slightly less user-friendly.


Get a grep!
grep my_regex my_file: search for my_term in my_file. Returns the whole line of the file for each match. my_term is a regular expression by default.

grep -i my_regex my_file: -i makes the search case insensitive.

grep -v my_regex my_file: return all lines that don’t contain my_term. -v returns the inverse, like not in many languages.

grep -c my_regex my_file: return a count of how many times a match is found with -c.

grep -R my_regex my_folder: recursively search all files in the folder and all subfolders with -R.

Now let’s turn to Ag — grep’s younger, faster, better-looking sibling.


Get it?
ag my_regex my_file: returns the line number and the line with any matches.

ag -i my_regex my_file: -i for case insensitive .

Ag automatically reads your .gitignore file and excludes results from any matching files or folders. Pretty cool!

ag my_regex my_file –skip-vcs-ignores: override the automatic version control system file reading with –skip-vcs-ignores.

You can also make a .agignore file to exclude file paths from Ag.

The third sibling is Ack. Ag and Ack are nearly identical twins — they are 99% interchangeable. Ag is faster, so I’d stick with it.

Archive
Now let’s look at making tarball archives.

tar my_source_directory: join multiple files in a source directory into one tarball file. This command is useful for distributing files that others will download.


tar
A tarball has .tar file extension, which stands for Tape ARchive. Tape tells you something about how old this command is!

tar -cf my_file.tar my_source_directory: create a tarball file named my_file.tar with the contents of my_source_directory. -c is for create and -f is for file.

Extract a tar file with -xf. -x is for extract and -f is for file.

tar -xf my_file.tar expands the files in my_file.tar into the current working directory.

Now let’s look at zipping and unzipping .tar files.

tar -cfz my_file.tar.gz my_source_directory uses gzip to compress the the files. -c for create, -f for file, and -z for zip. Gzip saves space and download time for consumers of your file.

Unzip a .tar.gz file by adding the-z flag to the extraction command we saw earlier.

tar -xfz my_file.tar.gz. -x for extract, -f for file, -z for zip.

tar has many other flags you can use.

Bash Aliases
Make Bash aliases to save you keystrokes in the terminal. Then you can do things like type bu instead of python setup.py sdist bdist_wheel.

Just add the following line to your ~/.bash_profile:

alias bu="python setup.py sdist bdist_wheel"

If you don’t have a ~/.bash_profile file you can create one from your command line with the touch command.

Then restart your terminal and use two keystrokes to build your Python package. Nothing like typing 2 letters instead of 44. 😃

Add whatever other aliases you like and watch your productivity grow. 🌴

Let’s review what we’ve covered.

Recap: Top 21 Bash Commands
Get Info
man: print manual (help) for a command
pwd: print working directory
ls: list directory contents
ps: view running processes

Manipulate
cd: change working directory
touch: create a file
mkdir: create a directory
cp: copy
mv: move or rename
ln: link

Redirect and Pipe
<: redirect stdin
>: redirect stdout
|: pipe content of one command to the next command

Read
head: read the start of the file
tail: read the end of the file
cat: read a file or concatenate files

End
rm: remove
kill: end a process

Search
grep: search
ag: search

Archive
tar: join multiple files into one file

Wrap
In this article you’ve seen 21 of the most common shell commands. If you have another one you think should make the list, let me know on Twitter @discdiver.

You’ve also seen how to create Bash aliases to save you time.

Here are a few resources if you want to go deeper:

Conquering the Command Line is a great free e-book by Mark Bates.
Conquering the Command Line

Learn to master and conquer the most valuable and useful command line tools for Unix and Linux based systems. In this…
conqueringthecommandline.com	
The official Bash docs from gnu.org are here.
Sed and Awk sound like two brothers, but they are actually text processing utilities that often seen in Bash. Learn more about them here.
cURL — pronounce “curl” — is used to transfer data with URLs and test servers. Learn more here.
If you want to learn how to put these commands and other Bash code into scripts, here’s a good guide.
Here’s a big cheat sheet for Bash scripting.
Like any language, learning Bash takes practice. Use it to increase your productivity and have fun teaching it to someone else. 😄

I write about how to use programming and data science tools like Docker, Git, and Python. If that’s of interest to you, read more here and follow me on Medium.

Happy shelling!