const sentence = "hello there from lighthouse labs\n\ntesting to see if \\n works or not\n"; //adding \n to the input sentence

let delay = 0;
for (const char of sentence) {
  //console.log(char);//out puts each character on a new line
  //process.stdout.write(char); //outputs the whole setence on one line
  

  setTimeout(() => {
    process.stdout.write(char);// print the char here
    //console.log(char);
    //process.stdout.write("\n"); 
  }, delay); // <= 1s delay to make it noticeable. Can dial it down later.
  delay += 100; 
  //process.stdout.write("\n"); create a huge empty jump in the prompt 
}
