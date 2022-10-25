                          // Selecting Elemen
                          let  textInput =document.querySelector("#text-input");
                          textInput.value = '';
                          let display = document.querySelector("#display");
                          let firstButton =document.querySelector(".btn");
                          let shuffleButton =document.querySelector("#Shuffle");
                          let tempUList =document.querySelector(".name");
                          let winerUList = document.querySelector(".winers");
                          let winerList = document.querySelector(".terms");
                          
                          let newArray = [] ;
                          
                          let bindingToTheTemp=()=>{
                              let inputValue = textInput.value;
                              array = inputValue.split(",");
                              if( textInput.value==='' ||  textInput.value===' '  ||  textInput.value==='  '  ||  textInput.value==='   ' ||  textInput.value==='    '){
                                  alert("Enter some Name first");
                              }else{
                                  array.forEach((name)=>{
                                      newArray.push(name);
                                      let list =document.createElement("li");
                                      list.innerHTML= name ;
                                      list.classList.add("terms-output");
                                      tempUList.appendChild(list);     
                                      textInput.value = '';
                                      
                                  })
                                  
                              }
                          
                          }
                           let shuffle=(arr)=>{
                                 
                              let shuffledArray = [...arr];
                              // let shuffledArray = [];
                              let rand;
                              let temp ;
                          
                              for(let i=0; i<=arr.length-1; i++){
                          
                                  rand = Math.floor((Math.random()*i));
                                 temp = shuffledArray[rand];
                                 shuffledArray[rand]=shuffledArray[i];
                                 shuffledArray[i]=temp;
                          
                              }
                             return  shuffledArray;
                           }
                          
                           const bindingWiner=()=>{
                              
                                  setTimeout(()=>{
                                      
                                      display.value= `WINNER
                          ${shuffle(newArray)[0]}
                                      `;
                                      let list =document.createElement("li");
                                      list.innerHTML= ` ${display.value} `;
                                      list.classList.add("terms");
                                      winerUList.appendChild(list);
                                   },1000);
                           
                             
                              
                          
                          
                           }
                          
                          
                          
                          
                          
                          
                           shuffleButton.addEventListener('click',bindingWiner);
                          firstButton.addEventListener("click",bindingToTheTemp);
                          
                          
                          