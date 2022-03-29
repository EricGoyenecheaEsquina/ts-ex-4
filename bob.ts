export function hey(message: unknown): unknown {
  console.log(message);
  let msg:string=(message as string).trim();
  let lastChar:string = msg[msg.length - 1]
  if(lastChar=='?' && msg.toUpperCase() === msg&& msg.toLowerCase() !== msg){
    return('Calm down, I know what I\'m doing!');
  }else if(lastChar=='?'){
    return('Sure.');
  }else if(msg.toUpperCase() === msg && msg.toLowerCase() !== msg){
    return('Whoa, chill out!');
  }else if(msg==""){
    return('Fine. Be that way!');
  }else{
    return('Whatever.')
  }
}
