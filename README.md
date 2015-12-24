# Algorithms (Node)

[![build status][build-badge]][build-url]
[![coverage][coverage-badge]][coverage-url]

[build-badge]: https://api.travis-ci.org/arrowrowe/algorithms-node.svg
[build-url]: https://travis-ci.org/arrowrowe/algorithms-node
[coverage-badge]: http://codecov.io/github/arrowrowe/algorithms-node/coverage.svg?branch=master
[coverage-url]: http://codecov.io/github/arrowrowe/algorithms-node?branch=master

Algorithms playground for common questions in Node. Inspired by [sagivo/algorithms](https://github.com/sagivo/algorithms).

## Problems
| problem | solution | [test][build-url] |
|---------|----------|-------------------|
| [Dijkstra's shortest path between two nodes](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) | [solution](alg/dijkstra.js) | [test](test/alg/dijkstra-spec.js) |
| [Kruskal's minimum spanning tree algorithm](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm) | [solution](alg/kruskal.js) | [test](test/alg/kruskal-spec.js) |
| [Find the square root of a number using Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method) | [solution](alg/sqrt.js) | [test](test/alg/sqrt-spec.js) |
| [Binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm) | [solution](alg/binary-search.js) | [test](test/alg/binary-search-spec.js) |
| [Longest increasing subsequence](http://en.wikipedia.org/wiki/Longest_increasing_subsequence) | [solution](alg/longest-increasing-subsequence.js) | [test](test/alg/longest-increasing-subsequence-spec.js) |
| [Find all permutations of array](https://en.wikipedia.org/wiki/Permutation) | [simple](alg/permutation/simple.js), [unique](alg/permutation/unique.js) | [simple](test/alg/permutation/simple-spec.js), [unique](test/alg/permutation/unique-spec.js) |
| [Finding all combinations of well-formed brackets](http://stackoverflow.com/questions/727707/finding-all-combinations-of-well-formed-brackets) | [solution](alg/bracket.js) | [test](test/alg/bracket-spec.js) |
| [Finding the powerset of a set](http://en.wikipedia.org/wiki/Power_set) | [solution](alg/powerset.js) | [test](test/alg/powerset-spec.js) |
| [Game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) | [solution](alg/life/evolve.js) | [test](test/alg/life/evolve-spec.js) |
| Print all combinations of set joining | [solution](alg/join-set.js) | [test](test/alg/join-set-spec.js) |
| [Telephone number to words](http://www.mobilefish.com/services/phonenumber_words/phonenumber_words.php) | [solution](alg/telword.js) | [test](test/alg/telword-spec.js) |
| [Find the smallest biggest number that has the same digits](http://stackoverflow.com/questions/9368205/given-a-number-find-the-next-higher-number-which-has-the-exact-same-set-of-digi) | [solution](alg/smallest-bigger-with-same-digits.js) | [test](test/alg/smallest-bigger-with-same-digits-spec.js) |
| Find the minimum insertions needed to make a word palindrome | [solution](alg/palindrome/insert.js) | [test](test/alg/palindrome/insert-spec.js) |
| [String matching - Knuth Morris Pratt algorithm KMP](http://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) | [solution](alg/kmp.js) | [test](test/alg/kmp-spec.js) |
| [Balanced Parentheses](http://stackoverflow.com/questions/14930073/how-to-check-if-a-string-is-balanced) | [solution](alg/is-balanced.js) | [test](test/alg/is-balanced-spec.js) |
| [Quicksort algorithm](http://en.wikipedia.org/wiki/Quicksort) | [solution](alg/sort/quick.js) | [test](test/alg/sort-spec.js) |
| [Mergesort algorithm](https://en.wikipedia.org/wiki/Merge_sort) | [solution](alg/sort/merge.js) | [test](test/alg/sort-spec.js) |
| [Countingsort algorithm](http://en.wikipedia.org/wiki/Counting_sort) | [solution](alg/sort/count.js) | [test](test/alg/sort-spec.js) |
| [Shellsort algorithm](http://en.wikipedia.org/wiki/Shellsort) | [solution](alg/sort/shell.js) | [test](test/alg/sort-spec.js) |
| [Knapsack problem](http://en.wikipedia.org/wiki/Knapsack_problem) | [solution](alg/knapsack.js) | [test](test/alg/knapsack-spec.js) |
| [Longest common subsequence problem](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem) | [solution](alg/longest-common-subsequence.js) | [test](test/alg/longest-common-subsequence-spec.js) |
| [Monty Hall Problem](https://en.wikipedia.org/wiki/Monty_hall_problem) | [solution](alg/monty-hall.js) | [test](test/alg/monty-hall-spec.js) |
| [Eucliden](https://en.wikipedia.org/wiki/Euclidean_algorithm) and [Extended Eucliden algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm) | [solution](alg/gcd.js) | [test](test/alg/gcd-spec.js) |
| [Range minimum query sparse table algorithm](http://en.wikipedia.org/wiki/Range_minimum_query) | [solution](alg/range-minimum.js) | [test](test/alg/range-minimum-spec.js) |
| [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort) | [solution](alg/sort/insert.js) | [test](test/alg/sort-spec.js) |

## Contribute

Find a bug? Come across improvement or new problems? [Open issues](https://github.com/arrowrowe/algorithms-node/issues/new) or send a PR!
