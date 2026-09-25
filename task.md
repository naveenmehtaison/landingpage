Create a responsive, modern landing page for a Telegram channel, using the attached/reference image as the primary visual design reference.

### Core Requirement

The landing page should promote a specific Telegram channel and maximize the clarity of the "Join Now" CTA.

### 1. Telegram Join Button

Add a prominent **"JOIN NOW"** button.

When the user clicks the button:

* Immediately redirect the user to the specified Telegram channel.
* The Telegram channel URL should be configurable through a single constant/config variable, for example:

```js
const TELEGRAM_CHANNEL_URL = "https://t.me/lowrisktraders";
```

* Do not hardcode the Telegram URL in multiple places.
* Use a normal browser redirect such as:

```js
window.location.href = TELEGRAM_CHANNEL_URL;
```

### 2. Automatic Redirect

The page must also automatically redirect the visitor to the Telegram channel **after 4 seconds**, even if the visitor does not click anywhere.

Behavior:

* Page loads.
* Start a 4-second countdown/timer.
* If the user does nothing, automatically redirect them to the Telegram channel after exactly 4 seconds.
* If the user clicks **JOIN NOW** before the 4 seconds are over, redirect immediately instead of waiting for the timer.
* Prevent duplicate redirects or multiple timers.

Example logic:

```js
useEffect(() => {
    const timer = setTimeout(() => {
        window.location.href = TELEGRAM_CHANNEL_URL;
    }, 4000);

    return () => clearTimeout(timer);
}, []);
```

### 3. Landing Page Design

Use the attached image as the design reference.

Recreate the overall:

* Visual hierarchy
* Spacing
* Typography style
* Color scheme
* CTA placement
* Card/container styling
* Background treatment
* Overall modern Telegram-focused aesthetic

Do not blindly copy the image. Recreate a similar professional design while keeping the implementation clean and responsive.

### 4. Responsive Design

The page must work properly on:

* Desktop
* Laptop
* Tablet
* Mobile

The mobile experience is especially important because most Telegram traffic will likely come from mobile devices.

### 5. Suggested Page Structure

Create a single landing page containing:

1. Hero section
2. Telegram/channel branding
3. Short headline
4. Short description/value proposition
5. Prominent "JOIN NOW" CTA
6. Optional Telegram icon/logo
7. Optional social proof/statistics section if it matches the reference design
8. Clean footer

Keep the page lightweight and fast-loading.

### 6. Technical Requirements

* Use the existing project structure and framework.
* Do not introduce unnecessary dependencies.
* Keep components reusable and clean.
* Store the Telegram channel URL in one configuration constant.
* Make the 4-second redirect easy to change later.
* Clean up the timer when the component unmounts.
* Avoid memory leaks.
* Ensure there are no console errors.
* Ensure the page works correctly with both the manual JOIN NOW click and automatic redirect.

### 7. Important Redirect Rule

The automatic redirect must happen **4 seconds after the landing page loads**, regardless of whether the user clicks somewhere else on the page.

Only clicking **JOIN NOW** should trigger an immediate redirect before the 4-second timer completes.

### Final Goal

The final result should be a polished Telegram promotional landing page that looks similar to the provided reference image and has this exact user flow:

**Visitor opens page → sees landing page → after 4 seconds automatically goes to Telegram**

OR

**Visitor opens page → clicks JOIN NOW → immediately goes to Telegram**

Make the implementation production-ready and easy to customize.

