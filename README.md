# tap-status

Parse a TAP stream and emit it verbatim, and exit with the correct status
code if tests fail. This is useful if you're using something like
[hughsk/smokestack](https://github.com/hughsk/smokestack) that gives a stream
of output with exit codes, and using [substack/faucet](https://github.com/substack/faucet)
to get the right exit code can cut down on feedback.

## usage

```sh
$ npm test | tap-status
```
