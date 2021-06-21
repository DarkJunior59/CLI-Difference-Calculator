# Project "Difference calculator"

### Hexlet tests and linter status:
[![Actions Status](https://github.com/DarkJunior59/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/DarkJunior59/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/9b9191578180a25ef4bb/maintainability)](https://codeclimate.com/github/DarkJunior59/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9b9191578180a25ef4bb/test_coverage)](https://codeclimate.com/github/DarkJunior59/frontend-project-lvl2/test_coverage)
[![Test workflow](https://github.com/DarkJunior59/frontend-project-lvl2/workflows/test/badge.svg)](https://github.com/DarkJunior59/frontend-project-lvl2/actions)



To install programm you need:

1. Clone [repo](https://github.com/DarkJunior59/frontend-project-lvl2)
2. Run the following commands in the root directory:

 ```sh 
 $ make install
 ```

```sh
$ make publish
 ```

```sh
$ npm link
 ```

To calculate the difference between two files, you should enter the command **gendiff** and the names of the files separated by a space in the directory with the files. For example: 

```sh
$ gendiff file1.json file2.json
 ```
The program works with the following file extensions: .json, .yaml, .yml. You can choose different outputs for the calculated difference between files. The program has three output formats: stylish, plain and json. To select the desired format, you must enter **-f** or **--format** after the command gendiff and the name of the formatter. For example: 

```sh
$ gendiff -f plain file1.json file2.json
 ```

### Difference between two flat json files:

[![asciicast](https://asciinema.org/a/Xfew5fSPxvtI1PjhbAmRu5M55.svg)](https://asciinema.org/a/Xfew5fSPxvtI1PjhbAmRu5M55)

### Difference between two flat yaml files:

[![asciicast](https://asciinema.org/a/ZjjzTHUNyuXnPtSw06zo9FhT5.svg)](https://asciinema.org/a/ZjjzTHUNyuXnPtSw06zo9FhT5)

### Difference between two files with nested structure and stylish format:

[![asciicast](https://asciinema.org/a/CN24fALSvq9YVFyVOWSK5uX0v.svg)](https://asciinema.org/a/CN24fALSvq9YVFyVOWSK5uX0v)

### Difference between two files with plain format 

[![asciicast](https://asciinema.org/a/qV9RHotEfDfJnnN2QfoM1W3ZV.svg)](https://asciinema.org/a/qV9RHotEfDfJnnN2QfoM1W3ZV)

### Difference between two files with json format

[![asciicast](https://asciinema.org/a/G9Hrh1NoJpILmMk69gP8wFhRZ.svg)](https://asciinema.org/a/G9Hrh1NoJpILmMk69gP8wFhRZ)