async function main(){
    let a=await fetch("songs")
    let response=await a.text();
    console.log(response)
}
main() 
