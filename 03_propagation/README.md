# Exercise: Propagation

You will find below the markup and styles for a numeric keypad to enter
a 4-digit PIN. Use JavaScript to make it work. When users enter their
PIN, only the last digit should be visible. The previous digits should
appear as asterisks. You are allowed to register only one event handler.

```html
<p></p>
<div>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>0</button>
    <button>CLEAR</button>
</div>
```

```css
div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    max-width: 300px;
    margin: 0 auto;
}

p {
    text-align: center;
    min-height: 2rem;
}

button {
    padding: 1rem;
}

button:last-child {
    grid-column: span 2;
}
```
