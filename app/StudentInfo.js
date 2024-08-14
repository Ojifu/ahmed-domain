export default function StudentInfo(){
    return(
        <div>
            <Name />
            <Github />
            <LinkedIn />
        </div>
    );
}


function Name(){
    return <p>Ahmed Hijazi</p>;
}


function Github(){
    return (<a href="https://github.com/Ojifu/cprg306-assignments">
        <p>Visit my Github Repo</p>
    </a>)
    ;
}

function LinkedIn(){
    return (<a href="https://www.linkedin.com/in/ahmed-hijazi49/">
        Visit my LinkedIn Profile
    </a>)
    ;
}