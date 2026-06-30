// function login(callback) {
//     setTimeout(() => {
//         console.log("User logged in");
//         callback();
//     }, 1000);
// }

// function getProfile(callback) {
//     setTimeout(() => {
//         console.log("Profile loaded");
//         callback();
//     }, 1000);
// }

// function getPosts(callback) {
//     setTimeout(() => {
//         console.log("Posts loaded");
//         callback()
//     }, 1000);
// }

// login(() => {
//     getProfile(() => {
//         getPosts(() => {
//             console.log("All tasks completed!");
//         });
//     });
// });

// function downloadFile(callback) {
//     setTimeout(()=>{
//         console.log("file downloaded")
//         callback();
//     },2000);
// }

// downloadFile(()=>{
//     console.log("opening...")
// });



function prepareFood(callback){
    setTimeout(()=>{
        console.log("Food is prepared")
        callback();
    },2000);
};
function serveFood(callback){
    setTimeout(()=>{
        console.log("Food is served")
        callback()
    },1000);
};
function eatFood(){
    console.log("Eating Food")
}

prepareFood(()=>{
    serveFood(()=>{
        eatFood();
    });
});