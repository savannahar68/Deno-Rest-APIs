const encoder = new TextEncoder();

const greetText = encoder.encode("Hello world\nMy name is Savan");

await Deno.writeFile("greet.txt", greetText);
