//设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/计算机组成导图.20.jpg'){
        myImage.setAttribute('src','images/计算机组成导图.50.jpg');
    }else{
        myImage.setAttribute('src','images/计算机组成导图.20.jpg');
    }
}

//设置个性化欢迎信息
//获取新按钮和标题引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//个性化欢迎信息设置函数
function setUserName(){
    let myName = prompt('请输入你的名字');
    if(myName === null){ //点取消键
       // setUserName();
    }
    else if(!myName){ //点确认键，值为空
        setUserName();
    }
    else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = '欢迎学习计算机组成原理，' + myName;
    }
}

//初始化代码：在页面初次读取时进行构造工作
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎学习计算机组成原理，' + storedName;
}


//为按钮设置onclick事件处理器
myButton.onclick = function(){
    setUserName();
}
