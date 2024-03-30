import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let task = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your Todos?"
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'Do you want to add More in your Todos',
            default: 'false'
        }
    ]);
    todos.push(task.todo);
    condition = task.addMore;
    console.log(todos);
}
