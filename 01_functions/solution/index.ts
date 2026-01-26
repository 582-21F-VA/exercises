import { expect } from "bun:test";

/** Convert the given earth weight for the moon. */
function moonWeight(earthWeight: number): number {
    return earthWeight / 6;
}

expect(moonWeight(60)).toBe(10);
expect(moonWeight(6)).toBe(1);

/** Greet the person with the given name. */
function greet(name: string): string {
    return `Hi ${name}!`;
}

expect(greet("Bob")).toBe("Hi Bob!");
expect(greet("Jocelyn")).toBe("Hi Jocelyn!");

/** Compute the cost for the order. */
function orderCost(qty: number, msg: string): number {
    const pencilCost = 25;
    const charCost = 2;

    const msgCost = msg.length * charCost;
    const unitCost = pencilCost + msgCost;

    return unitCost * qty;
}

expect(orderCost(1, "hi")).toBe(29);
expect(orderCost(2, "hello")).toBe(70);

/** Apply GST and QST to the given subtotal. */
function applyTaxes(subtotal: number): number {
    const gst = 0.05;
    const qst = 0.09975;

    return subtotal + (gst * subtotal) + (qst * subtotal);
}

expect(applyTaxes(10)).toBe(11.4975);
expect(applyTaxes(100)).toBe(114.975);

/** Transform the given sentence into a question. */
function toQuestion(sentence: string): string {
    return sentence.slice(0, -1) + "?";
}

expect(toQuestion("hi.")).toBe("hi?");
expect(toQuestion("J.D. Salinger is an author.")).toBe(
    "J.D. Salinger is an author?",
);

// hi + bob
// 01   012
// hi bob
// 012345
