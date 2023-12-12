function firstNonRepeatedChar(str) {
 // Write your code here
	 const alpha=new Map();
	for(const chars of str){
		if(alpha.has(chars)){
			alpha.set(chars,alpha.get(chars)+1);
		}else{
			alpha.set(chars,1);
		}
	}
	for(const chars of str){
		if(alpha.has(chars)){
			if(alpha.get(chars)==1){
				return chars;
			}else{
				alpha.delete(chars);
			}
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 