import * as rl from "readline-sync";
import watches from "../data/watches.json" with { type: "json" };

let choice: string = "";

do {
    console.log("\nWelcome to the JSON data viewer!");
    console.log("1. View all data");
    console.log("2. Filter by ID");
    console.log("3. Exit");

    choice = rl.question("Please enter your choice: ");

    switch (choice) {
        case "1":
            for (const watch of watches) {
                console.log(`- ${watch.name} (${watch.id})`);
            }
            break;

        case "2": {
            const id = rl.question("Please enter the ID: ");

            const watch = watches.find(w => String(w.id) === id.trim());

            if (watch === undefined) {
                console.log("No watch found with this ID.");
            } else {
                console.log(JSON.stringify(watch, null, 2));
            }
            break;
        }

        case "3":
            console.log("Goodbye!");
            break;

        default:
            console.log("Invalid choice!");
    }

} while (choice !== "3");