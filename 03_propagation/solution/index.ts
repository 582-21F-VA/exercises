/** Hide all digits but the last one. */
function hideDigits(pin: string): string {
    const lastDigit = pin.slice(-1);
    const starCount = pin.length - 1;
    return "*".repeat(starCount) + lastDigit;
}

/** Update the given PIN with the new digit. */
function updatePin(pin: string, newDigit: string): string {
    const isClear = Number.isNaN(Number(newDigit));
    if (isClear) return "";
    const maxLength = 4;
    if (pin.length >= maxLength) return pin;
    return hideDigits(pin + newDigit);
}

function main(): void {
    const div = document.querySelector("div");
    const p = document.querySelector("p");
    if (!div || !p) return;
    div.addEventListener("click", (event) => {
        const isButton = event.target instanceof HTMLButtonElement;
        if (!isButton) return;
        const newDigit = event.target.textContent;
        const pin = updatePin(p.textContent, newDigit);
        p.textContent = pin;
    });
}

main();
