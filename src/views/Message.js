import './../css/Message.css';
import ReactTooltip from 'react-tooltip';
import {forwardRef} from 'react';

const Message = forwardRef(({ user, timestamp, by, message }, ref) => {
    let actual_date = "";
    if(!!timestamp){
        let date = new Date(timestamp.seconds * 1000);
        actual_date = "Date: "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    }
  return (
    <div ref={ref} className={`Message${(by === user)?" me":""}`}>
    <ReactTooltip/>
     <div className="by_Box">
     	{by}
     </div>
     <div className="message_Box" data-tip={actual_date}>
     	{message}
     </div>
    </div>
  );
})

export default Message;
