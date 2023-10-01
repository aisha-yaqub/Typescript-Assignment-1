function make_sandwich(...items) {
    console.log("This sandwich is made of below items: ");
    for (const item of items) {
        console.log(item);
    }
}
// Calling the function with different numbers of arguments
make_sandwich('bread', 'lettice');
make_sandwich('bread', 'mustard', 'meat');
make_sandwich('bread', 'tomato', 'cheese', 'meat');
export {};
