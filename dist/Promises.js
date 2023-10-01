function fetchData(url) {
    return new Promise((resolve, reject) => {
        if ((url == "Success")) {
            resolve("Resolve");
        }
        else {
            reject("Reject");
        }
    });
}
fetchData("Abc")
    .then((value) => {
    console.log(value);
})
    .catch((error) => {
    console.log("error", error);
})
    .finally(() => {
    console.log("Finally");
});
// async await
async function f1() {
    return "2+3";
}
await f1();
const data = await fetchData("Abcd");
console.log(data);
export {};
