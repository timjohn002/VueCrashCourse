
export const data = ["apple", "cherry", "grape", "pear"];

export default defineEventHandler((event) => {

    console.log("ello called?");

    return {
        data
    }
});