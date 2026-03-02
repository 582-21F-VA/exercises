/** Return the current size of the given element. */
function getCurrentSize(el: HTMLElement): number {
    const fontSize = getComputedStyle(el).fontSize;
    return Number(fontSize.slice(0, -2));
}

/** Multiply the size of the element by the given ratio and return new size. */
function changeSize(el: HTMLElement, ratio: number): number {
    const currentSize = getCurrentSize(el);
    const newSize = currentSize * ratio;
    el.style.fontSize = `${newSize}px`; // mutates el
    return newSize;
}

/** Replace the text content of the given element with 💥.*/
function explode(el: HTMLElement): void {
    el.textContent = "💥";
    return;
}

/** Handle keydown events. */
function handleKeydown(event: KeyboardEvent, balloon: HTMLElement): void {
    const maxSize = 20;
    const isExplosion = balloon.textContent === "💥";
    if (isExplosion) return;
    if (event.key === "ArrowUp") {
        const newSize = changeSize(balloon, 1.1);
        if (newSize > maxSize) explode(balloon);
    } else if (event.key === "ArrowDown") changeSize(balloon, 0.9);
}

function main(): void {
    const balloon = document.querySelector("p");
    if (!balloon) return;
    window.addEventListener(
        "keydown",
        (event) => handleKeydown(event, balloon),
    );
}

main();
