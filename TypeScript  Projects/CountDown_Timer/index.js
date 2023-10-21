import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let greetings = chalkAnimation.rainbow("Welcome To Count Down Timer");
    await sleep();
    greetings.stop();
}
await welcome();
