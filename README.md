# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrect usage of the `useEffect` hook.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description

The `useEffect` hook in the buggy component attempts to update the `count` state within the function itself, causing an infinite render loop. This happens because every change in state triggers a re-render, which in turn calls `useEffect` again leading to another update and another render - resulting in an infinite loop.

## Solution

The solution involves correctly managing the dependencies array in the `useEffect` hook.  By adding `count` as a dependency, the effect only runs when `count` changes. In this case, we want the effect to run only once on mount hence we keep the dependency array empty [].

## How to reproduce
1. Clone this repo.
2. Run `npm install`
3. Run `npm start`