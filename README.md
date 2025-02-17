# Firebase onSnapshot Unnecessary Triggers

This repository demonstrates a common issue with Firebase's `onSnapshot` function: it can trigger callbacks even when the data hasn't changed. This can lead to performance problems, especially with frequent updates or large datasets.

The `onSnapshotIssue.js` file shows the problem. The solution is presented in `onSnapshotSolution.js`, which uses a comparison to avoid unnecessary calls.