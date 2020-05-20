let file = await Deno.open("greet.txt");
await Deno.copy(file, Deno.stdout);
file.close();
