
````markdown
# 🏫 Mini Project: Student Result Processor  

It’s result day at **Paramount School Rajshahi**.  
The teacher has all the student marks stored in a system but needs your help to process the results digitally.  

---

## 📦 Input Data

```js
const students = [
  { name: "Rafi", marks: 85 },
  { name: "Sumi", marks: 55 },
  { name: "Imran", marks: 40 },
  { name: "Rafi", marks: 85 } // duplicate entry
];
````

---

## 👩‍🏫 The Teacher Gives You a Set of Tasks

1. **Clean the list**

   * Some students appear more than once (like Rafi).
   * Remove the duplicate entries using **Set** or other ES6+ features.

2. **Make a result book**

   * Store the students’ results in a **Map** where each student’s name is the key and their marks are the value.

3. **Find the successful students**

   * From the result book, prepare a list of students who scored **50 or more** (they passed!).

4. **Calculate the class average**

   * Use `reduce` to find the **average marks** of the class.

5. **Crown the topper**

   * Identify the student with the **highest marks**.

6. **Announce results online**

   * Simulate fetching these results from the school server using an **async function**.
   * (Hint: use `setTimeout` with a `Promise`).

---

## 📌 Expected Output (for the given data)

```
Pass List: [ 'Rafi', 'Sumi' ]
Average Marks: 60
Topper: Rafi
```

---

## 🚀 Your Mission

Write a JavaScript program that helps the teacher announce:

* ✅ Pass List
* ✅ Average Marks
* ✅ Topper’s Name

Use **ES6+ features, array methods, Set, Map, and async/await** wherever possible.