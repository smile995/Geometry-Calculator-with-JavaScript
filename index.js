
// make a function to get the value from the text area
function findvalue(feildId){
 const valuefeild=document.getElementById(feildId);
 const valueText=valuefeild.value;
 const value=parseFloat(valueText)
 return value;
}
function calculateTriangleArea() {
    
    const Base=findvalue('triangleBase');
    const Height=findvalue('triangleHeight');
    const area=0.5*Base*Height;
    console.log(area);
    const area_feild=document.getElementById('triangleArea');
    area_feild.innerText=area;
   
}
function calculateRectangleArea(){
    const base=findvalue('RectangleBase');
    const height=findvalue('RectangleHeight');
    const area=base*height;
    const areaText=document.getElementById('RectangleArea');
    areaText.innerText=area;
}

function calculateParallelogramArea(){
    const base=findvalue('ParallelogramBase');
    const height=findvalue('ParallelogramHeight');
    const area=base*height;
    const areaText=document.getElementById('ParallelogramArea')
    areaText.innerText=area;
}