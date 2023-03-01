import {useRef,useEffect} from 'react';

const useClickOutside =(handler)=>
{
let domnode = useRef();
    useEffect(()=>
    {
        let mabyhandler=(e)=>
        {
            if(!domnode.current.contains(e.target))
            {
                handler();
            }
        }
        document.addEventListener('mousedown', mabyhandler)
        return()=>
        {
            document.removeEventListener("mousedown",mabyhandler)
        }
    })
    return domnode
}
export default useClickOutside