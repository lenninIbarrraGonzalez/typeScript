(() => {

    const fullName = (firstName:string, ...restArg:string[]):string => {
        return `${firstName} ${restArg.join(' ')}`;
    }

    const superman = fullName('Clark', 'Josep', 'Kent');
    console.log({superman});

})()