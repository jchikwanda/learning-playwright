# Playwright Learning Project

This repository contains all the scripts that I am working with while learning how to use Playwright for automation.

## Installation

To get started with this project, you'll need to have Node.js and NPM installed on your system. You can then install the project dependencies by running the following command:

```npm install```

## My Learning

Here I show some of the things that I have learnt while looking at Playwright.

### Module 1

Learning Objectives

1. How to launch web browser with Playwright.
2. How to test a simple login form.
3. How to execute a test script for the form.
4. Understand context and page.

**Snippet of Code to Launch Browser**

```javascript
test("login test demo", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
})
```

*What is a context?*

```
When you use a computer to do things like surfing the internet or using an app, you are using a "context". A context is like a special space that the computer creates for you to do things in.

In Playwright, a context is a bit like a sandbox where you can play around with a website or web app without affecting anything outside of that context. It's like you have your own private little world where you can interact with the website or app, but you can't touch anything else on your computer.

So, if you're using Playwright to do something like automated testing on a website, you would create a context to work in. This context is where you would interact with the website and perform actions like clicking buttons or filling out forms.

Think of it like building a sandcastle on the beach. The beach is like your computer, and the sandcastle is like the website or web app you're working with. You build your sandcastle in a specific spot on the beach, just like you create a context in Playwright. And just like you can't knock over other people's sandcastles on the beach, you can't interact with anything outside of your context in Playwright.
```

*Functions from Page I have Learnt*

1. Hover

    ```page.hover("selector")```

2. Click - clicks a button or element

    ```page.click("selector")```

3. Goto - navigates to a specified link

    ```page.goto("url")```

4. Wait for timeout - equivalent to sleep

    ```page.waitForTimeout('time in ms')```

5. Fill - Pouplates a field in a page

### Module 2

Learning Objectives

1. How to record tests.
2. How to work with reports.
3. How to take screenshots and videos on failures.
4. Retrying tests on failure.
5. How to use auto wait mechanisim

**What is the purpose of codegen?**

```
Well, think of Playwright as a remote control for your web browser. With Playwright, you can write instructions (code) that tell your web browser what to do - like "click this button", "scroll down the page", or "fill in this form".

Now, the problem is, it can be really hard to figure out what those instructions should be, especially if you're not very good at coding yet. That's where npx playwright codegen comes in.

What this command does is it watches you as you use your web browser, and it tries to figure out what instructions you would need to give your browser to do the same thing again in the future. It then generates code (a set of instructions) that you can use in your own programs to automate the same tasks.

So, instead of having to figure out all the instructions yourself, you can let Playwright watch you do it and generate the code for you!
```