import store from '../store'

export function checkInput(todoText) {
    var todo = {};

    if (todoText == null || todoText == '') return null;

    todo.text = todoText;

    const labelRegex = /#[^\s]*/;
    var labelFound = todoText.match(labelRegex);
    if (labelFound) {
        var labelName = labelFound[0].slice(1);
        store.commit('addLabel', labelName);
        todo.label = labelName;
        todo.text = todo.text.replace('#' + labelName, '');
    } else {
        todo.label = null;
    }
        
    const dateRegex = /@[^\s]*/;
    var dateFound = todoText.match(dateRegex);
    if (dateFound) {
        var date = dateFound[0].slice(1);
        if (date == 'Today') {
            todo.date = 'Today';
        } else if (date == 'Tomorrow') {
            todo.date = 'Tomorrow';
        } else {
            todo.date = null;
        }
        todo.text = todo.text.replace('@' + date, '');
    } else { todo.date = null }

    return todo;
}